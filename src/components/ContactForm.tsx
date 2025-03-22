
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Save to Supabase database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (dbError) throw new Error(dbError.message);
      
      // 2. Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (emailError) throw new Error('Failed to send email notification');
      
      // Success
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 animate-fadeIn">
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium text-olly-white">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-olly-accent/50",
            "text-olly-white placeholder:text-olly-white/50 transition-all-300"
          )}
          placeholder="Your name"
        />
      </div>
      
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-olly-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-olly-accent/50",
            "text-olly-white placeholder:text-olly-white/50 transition-all-300"
          )}
          placeholder="Your email"
        />
      </div>
      
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-olly-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={cn(
            "w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-olly-accent/50",
            "text-olly-white placeholder:text-olly-white/50 transition-all-300 resize-none"
          )}
          placeholder="Your message"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-2.5 px-4 rounded-md font-medium transition-all-300",
          "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
          "focus:outline-none focus:ring-2 focus:ring-olly-accent/50",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
