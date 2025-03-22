
import { motion } from "framer-motion";
import { Globe, Zap, DollarSign, Users, Clock, Laptop } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";

export default function BenefitsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-olly-dark-deep to-olly-dark z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-olly-white mb-4">
              Why Join OllyGarden?
            </h2>
            <p className="text-olly-white/70 max-w-2xl mx-auto">
              We offer more than just a job - we cultivate careers with purpose and benefits that help you thrive
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Globe}
              title="Remote-First Culture"
              description="Work from anywhere in the world with our fully distributed team, like plants thriving in their ideal climate."
              delay={0.1}
            />
            
            <BenefitCard 
              icon={Zap}
              title="Cutting-Edge Technology"
              description="Use the finest tools to cultivate solutions to complex challenges in observability, just as a gardener uses the best implements."
              delay={0.2}
            />
            
            <BenefitCard 
              icon={DollarSign}
              title="Competitive Compensation"
              description="Enjoy competitive salary, equity options, and comprehensive benefits package to help your career and life flourish."
              delay={0.3}
            />

            <BenefitCard 
              icon={Users}
              title="Collaborative Environment"
              description="Join a garden of passionate professionals who nurture collaboration and innovation like prized plants."
              delay={0.4}
            />

            <BenefitCard 
              icon={Clock}
              title="Work-Life Balance"
              description="We respect your time and encourage maintaining a healthy work-life balance, just as a garden needs both sun and shade."
              delay={0.5}
            />

            <BenefitCard 
              icon={Laptop}
              title="Professional Growth"
              description="Continuous learning and development opportunities to help your career blossom to its full potential."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
