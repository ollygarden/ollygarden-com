
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import ApplicationModal from "./ApplicationModal";

interface ApplyButtonProps {
  jobTitle: string;
  jobId: string;
}

export default function ApplyButton({ jobTitle, jobId }: ApplyButtonProps) {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleApply = () => {
    setIsModalOpen(true);
  };
  
  return (
    <>
      <button 
        className={cn(
          "px-8 py-4 rounded-md font-medium",
          "bg-[#e2e735] text-olly-dark hover:bg-[#e2e735]/90",
          "transition-all duration-300 focus:ring-2 focus:ring-[#e2e735]/50"
        )}
        onClick={handleApply}
      >
        Plant Your Career
      </button>
      
      <ApplicationModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        jobId={jobId}
        jobTitle={jobTitle}
      />
    </>
  );
}
