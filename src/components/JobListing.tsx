
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobListingProps {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salary?: string;
}

export default function JobListing({ 
  id,
  title, 
  location, 
  type, 
  description, 
  requirements,
  salary
}: JobListingProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "glass-effect rounded-lg overflow-hidden",
        "transition-all duration-300 hover:border-olly-accent/30"
      )}
    >
      <div 
        className="cursor-pointer p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
          <h3 className="text-xl font-semibold text-olly-white">{title}</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm bg-white/10 px-2 py-1 rounded-full text-olly-white/70">
              {location}
            </span>
            <span className="text-sm bg-white/10 px-2 py-1 rounded-full text-olly-white/70">
              {type}
            </span>
            {salary && (
              <span className="text-sm bg-olly-accent/20 px-2 py-1 rounded-full text-olly-accent font-medium">
                {salary}
              </span>
            )}
            <ChevronDown 
              className={cn(
                "text-olly-accent transition-transform duration-300",
                isExpanded && "transform rotate-180"
              )}
              size={20}
            />
          </div>
        </div>
        
        <p className="text-olly-white/80 text-sm">
          {description}
        </p>
      </div>
      
      <motion.div 
        initial={false}
        animate={{ 
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0">
          <div className="mb-4">
            <h4 className="font-medium text-olly-accent mb-3">Key Requirements</h4>
            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check size={18} className="text-olly-accent mt-0.5 shrink-0" />
                  <span className="text-olly-white/90 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              className={cn(
                "px-6 py-3 rounded-md font-medium",
                "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
                "transition-all duration-300 focus:ring-2 focus:ring-olly-accent/50"
              )}
              onClick={(e) => {
                e.stopPropagation();
                // This would typically link to an application form
                alert("Application process would start here");
              }}
            >
              Apply Now
            </button>
            
            <Link
              to={`/careers/${id}`}
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium",
                "border border-olly-accent/30 text-olly-accent hover:bg-olly-accent/10",
                "transition-all duration-300 focus:ring-2 focus:ring-olly-accent/50"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              View Details
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
