
import { motion } from "framer-motion";
import { Sprout, Code, Wrench, Trophy, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InterviewExpectations() {
  const expectations = [
    {
      icon: Sprout,
      title: "Show Us Your Growth",
      description: "Share how you start your projects, how you evolve them, and how you decide when a feature is complete. We want to see your development process from seed to harvest."
    },
    {
      icon: Code,
      title: "Share Your Code",
      description: "We love seeing your code, especially pet projects you're passionate about. B2B SaaS applications are particularly relevant to our work."
    },
    {
      icon: Wrench,
      title: "Demonstrate Your Tools",
      description: "Show us how you use AI to boost productivity, your preferred hosting solutions, and other tools that help your garden of code flourish."
    },
    {
      icon: Trophy,
      title: "Celebrate Achievements",
      description: "Tell us about things that made you proud. It's the perfect time to brag about your work and showcase your accomplishments."
    },
    {
      icon: Smile,
      title: "Express Your Passion",
      description: "Share what excites you about development, observability, or technology in general. Your enthusiasm is as important as your skills."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-olly-dark to-olly-dark-deep z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-olly-white mb-4">
            How to Cultivate a Successful Interview
          </h2>
          <p className="text-olly-white/70 max-w-3xl mx-auto">
            At OllyGarden, we're looking for passionate developers who can help our telemetry ecosystem thrive. Here's how to showcase your talents during our interview process.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-effect rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                "bg-olly-accent text-olly-dark"
              )}>
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-olly-white mb-2">{item.title}</h3>
              <p className="text-olly-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-effect rounded-xl p-8 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-olly-accent mb-4">
            In Short: It's Time to Bloom!
          </h3>
          <p className="text-olly-white/90 text-lg">
            Our interview process is your opportunity to shine. We want to see the real you – your code, your process, your passion. Show us how you've grown as a developer and how you could help our garden of innovation flourish. Don't be shy about showcasing your achievements and the unique perspective you bring to the table!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
