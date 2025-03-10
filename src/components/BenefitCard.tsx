
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function BenefitCard({ icon: Icon, title, description, delay = 0 }: BenefitCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "glass-effect p-6 rounded-lg",
        "transition-all duration-300 hover:border-olly-accent/30 hover:transform hover:scale-[1.02]",
        "flex flex-col items-center text-center"
      )}
    >
      <div className="w-14 h-14 mb-4 rounded-full bg-olly-accent/10 flex items-center justify-center">
        <Icon className="h-7 w-7 text-olly-accent" />
      </div>
      <h3 className="text-xl font-semibold text-olly-white mb-2">{title}</h3>
      <p className="text-olly-white/80">{description}</p>
    </motion.div>
  );
}
