
import { Check } from "lucide-react";

interface JobRequirementsProps {
  requirements: string[];
}

export default function JobRequirements({ requirements }: JobRequirementsProps) {
  if (!requirements || requirements.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-olly-accent mb-4">Requirements</h2>
      <ul className="space-y-3">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={18} className="text-olly-accent mt-0.5 shrink-0" />
            <span className="text-olly-white/90">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
