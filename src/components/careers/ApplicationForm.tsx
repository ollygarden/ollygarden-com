
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { usePostHog } from "@/hooks/use-posthog";
import { useToast } from "@/hooks/use-toast";
import CustomFormField from "./FormField";

// UI components
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

// Define form schema with zod
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  linkedinUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  githubUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export type FormValues = z.infer<typeof formSchema>;

interface ApplicationFormProps {
  jobId: string;
  jobTitle: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function ApplicationForm({ jobId, jobTitle, onSuccess, onCancel }: ApplicationFormProps) {
  const { toast } = useToast();
  const { captureEvent } = usePostHog();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      linkedinUrl: "",
      githubUrl: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // 1. Store application in Supabase
      const { error: insertError } = await supabase
        .from("job_applications")
        .insert({
          job_id: jobId,
          job_title: jobTitle,
          full_name: data.fullName,
          email: data.email,
          linkedin_url: data.linkedinUrl || null,
          github_url: data.githubUrl || null,
        });
        
      if (insertError) throw new Error(`Error saving application: ${insertError.message}`);
      
      // 2. Send email notification using Supabase Edge Function
      const { error } = await supabase.functions.invoke("send-application-email", {
        body: {
          jobId,
          jobTitle,
          applicant: {
            fullName: data.fullName,
            email: data.email,
            linkedinUrl: data.linkedinUrl,
            githubUrl: data.githubUrl,
          },
        },
      });
      
      if (error) {
        throw new Error(`Error sending email: ${error.message}`);
      }
      
      // Track successful application with PostHog
      captureEvent("job_application_submitted", {
        jobId,
        jobTitle
      });
      
      // Success toast
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll be in touch soon!",
        variant: "default",
      });
      
      // Reset form and close modal
      form.reset();
      onSuccess();
      
    } catch (error) {
      console.error("Application submission error:", error);
      
      // Track failed application
      captureEvent("job_application_failed", {
        jobId,
        jobTitle,
        error: error instanceof Error ? error.message : "Unknown error"
      });
      
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Failed to submit application",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormField 
          form={form} 
          name="fullName" 
          label="Full Name" 
          placeholder="John Doe" 
        />
        
        <CustomFormField 
          form={form} 
          name="email" 
          label="Email Address" 
          placeholder="john.doe@example.com" 
          type="email" 
        />
        
        <CustomFormField 
          form={form} 
          name="linkedinUrl" 
          label="LinkedIn Profile URL" 
          placeholder="https://linkedin.com/in/johndoe" 
        />
        
        <CustomFormField 
          form={form} 
          name="githubUrl" 
          label="GitHub/Portfolio URL" 
          placeholder="https://github.com/johndoe" 
        />
        
        <DialogFooter className="mt-6">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-[#e2e735] text-olly-dark hover:bg-[#e2e735]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
