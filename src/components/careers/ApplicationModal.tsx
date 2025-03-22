
import { useEffect } from "react";
import { usePostHog } from "@/hooks/use-posthog";
import ApplicationForm from "./ApplicationForm";

// UI components
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobId: string;
  jobTitle: string;
}

export default function ApplicationModal({ open, onOpenChange, jobId, jobTitle }: ApplicationModalProps) {
  const { captureEvent } = usePostHog();
  
  // Track dialog open
  useEffect(() => {
    if (open) {
      captureEvent("job_application_form_opened", {
        jobId,
        jobTitle
      });
    }
  }, [open, jobId, jobTitle, captureEvent]);
  
  const handleSuccess = () => {
    onOpenChange(false);
  };
  
  const handleCancel = () => {
    captureEvent("job_application_form_cancelled", {
      jobId,
      jobTitle
    });
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] border-[#e2e735]/40">
        <DialogHeader>
          <DialogTitle className="text-xl">Join Our Garden: {jobTitle}</DialogTitle>
          <DialogDescription>
            Plant your career with us! Fill in your details below to apply for this position.
          </DialogDescription>
        </DialogHeader>
        
        <ApplicationForm 
          jobId={jobId}
          jobTitle={jobTitle}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </DialogContent>
    </Dialog>
  );
}
