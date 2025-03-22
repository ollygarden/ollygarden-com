
import { Plus } from "lucide-react";

interface JobBonusPointsProps {
  bonusPoints: string[];
}

export default function JobBonusPoints({ bonusPoints }: JobBonusPointsProps) {
  if (!bonusPoints || bonusPoints.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-olly-accent mb-4">Bonus Points</h2>
      <ul className="space-y-3">
        {bonusPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <Plus size={18} className="text-olly-accent mt-0.5 shrink-0" />
            <span className="text-olly-white/90">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
