
import { Check } from "lucide-react";

interface JobResponsibilitiesProps {
  responsibilities: string[];
}

export default function JobResponsibilities({ responsibilities }: JobResponsibilitiesProps) {
  if (!responsibilities || responsibilities.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-olly-accent mb-4">Key Responsibilities</h2>
      <ul className="space-y-3">
        {responsibilities.map((resp, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={18} className="text-olly-accent mt-0.5 shrink-0" />
            <span className="text-olly-white/90">{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
