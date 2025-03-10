
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CareerHero() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-olly-dark-deep/80 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-olly-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-olly-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Join Our <span className="text-olly-accent">Team</span>
          </h1>
          
          <p className="text-xl text-olly-white/80 leading-relaxed">
            Help us revolutionize telemetry pipelines and empower observability engineers worldwide.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#positions"
              className={cn(
                "inline-block px-8 py-4 rounded-md font-medium",
                "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
                "transition-all duration-300"
              )}
            >
              View Open Positions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
