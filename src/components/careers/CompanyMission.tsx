
import { motion } from "framer-motion";

export default function CompanyMission() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-olly-dark-deep to-olly-dark z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-effect p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-olly-accent mb-6">Our Mission</h2>
          <p className="text-olly-white/90 leading-relaxed text-lg">
            At OllyGarden, we're on a mission to cultivate the most efficient telemetry pipelines, helping companies grow their observability practices organically. Like a skilled gardener, we empower observability engineers with tools to harvest insights from their telemetry data—helping them prune costs, nurture operations, and guide their software engineering peers toward sustainable growth.
          </p>
          <p className="text-olly-white/90 leading-relaxed text-lg mt-4">
            We're planting the seeds of a diverse, multidisciplinary, and remote team that transforms raw telemetry into flourishing intelligence. Join us and help our customers' monitoring systems blossom into actionable insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
