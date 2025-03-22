
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ApplyButtonProps {
  jobTitle: string;
}

export default function ApplyButton({ jobTitle }: ApplyButtonProps) {
  const { toast } = useToast();
  
  const handleApply = () => {
    toast({
      title: "Application Started",
      description: `Your application for ${jobTitle} has begun!`,
    });
    // In a real app, this would redirect to an application form
  };
  
  return (
    <button 
      className={cn(
        "px-8 py-4 rounded-md font-medium",
        "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
        "transition-all duration-300 focus:ring-2 focus:ring-olly-accent/50"
      )}
      onClick={handleApply}
    >
      Apply for this Position
    </button>
  );
}
