
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface JobCardProps {
  title: string;
  description: string;
  requirements: string[];
}

export default function JobCard({ title, description, requirements }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className={cn(
        "bg-white/5 border border-white/10 rounded-lg p-6 transition-all-300",
        "hover:shadow-lg hover:shadow-olly-accent/5 hover:border-olly-accent/30",
        "animate-fadeIn cursor-pointer"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-olly-white">{title}</h3>
        <ChevronRight 
          className={cn(
            "text-olly-accent transition-transform duration-300",
            isExpanded && "transform rotate-90"
          )} 
        />
      </div>
      
      <p className="mt-2 text-olly-white/80 text-sm">
        {description}
      </p>
      
      <div className={cn(
        "mt-4 overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <h4 className="font-medium text-olly-accent mb-2">Requirements:</h4>
        <ul className="list-disc list-inside space-y-1 text-olly-white/80 text-sm">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        
        <button 
          className={cn(
            "mt-4 px-4 py-2 rounded-md font-medium transition-all-300",
            "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
            "focus:outline-none focus:ring-2 focus:ring-olly-accent/50"
          )}
          onClick={(e) => {
            e.stopPropagation();
            // This would typically link to an application form
            alert("Application process would start here");
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
