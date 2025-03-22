import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import JobListing from "@/components/JobListing";
import { Job } from "@/data/jobs";

interface JobListingSectionProps {
  jobs: Job[];
}

export default function JobListingSection({ jobs }: JobListingSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Filter jobs based on selected category
  const filteredJobs = selectedCategory === "all" 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);
  
  const categories = [
    { id: "all", name: "All Positions" },
    { id: "frontend", name: "Frontend" },
    { id: "data", name: "Data Science" },
    { id: "backend", name: "Backend" }
  ];
  
  return (
    <section id="positions" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-olly-dark to-olly-dark-deep z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-olly-white mb-4">
              Open Positions
            </h2>
            <p className="text-olly-white/70 max-w-2xl mx-auto">
              Join our garden of innovation and help cultivate the future of telemetry and observability
            </p>
          </motion.div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-olly-accent text-olly-dark"
                    : "glass-effect text-olly-white/80 hover:text-olly-white"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobListing
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  location={job.location}
                  type={job.type}
                  description={job.description}
                  requirements={job.requirements}
                />
              ))
            ) : (
              <div className="text-center py-12 glass-effect rounded-lg">
                <p className="text-olly-white/70">No positions found in this category.</p>
              </div>
            )}
          </div>
          
          <OpenApplication />
        </div>
      </div>
    </section>
  );
}

// Internal component for the open application section
function OpenApplication() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 glass-effect rounded-xl p-8 text-center"
    >
      <h3 className="text-2xl font-semibold text-olly-white mb-3">
        Don't see a matching position?
      </h3>
      <p className="text-olly-white/80 mb-6 max-w-2xl mx-auto">
        We're always looking for talented individuals to join our garden of innovation. If you're passionate about observability and telemetry, plant your resume with us and let's see what can grow!
      </p>
      <button 
        className={cn(
          "px-6 py-3 rounded-md font-medium transition-all duration-300",
          "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
          "focus:outline-none focus:ring-2 focus:ring-olly-accent/50"
        )}
        onClick={() => {
          // This would link to a general application form
          alert("General application form would open here");
        }}
      >
        Submit Open Application
      </button>
    </motion.div>
  );
}
