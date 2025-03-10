
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Zap, DollarSign, Users, Clock, Laptop } from "lucide-react";
import CareerHero from "@/components/CareerHero";
import JobListing from "@/components/JobListing";
import BenefitCard from "@/components/BenefitCard";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  category: string;
  requirements: string[];
}

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [jobs, setJobs] = useState<Job[]>([]);
  
  // Sample job data
  useEffect(() => {
    const jobData: Job[] = [
      {
        id: 1,
        title: "Frontend Engineer",
        location: "Remote",
        type: "Full-time",
        category: "frontend",
        description: "Join our team to build intuitive and responsive user interfaces that transform complex telemetry data into actionable insights.",
        requirements: [
          "3+ years of experience with React and modern JavaScript",
          "Experience with TypeScript and state management libraries",
          "Understanding of data visualization techniques and libraries",
          "Strong UI/UX sensibilities and attention to detail",
          "Ability to write clean, maintainable, and well-tested code"
        ]
      },
      {
        id: 2,
        title: "Data Scientist",
        location: "Remote",
        type: "Full-time",
        category: "data",
        description: "Apply your expertise in data science to help us extract meaningful patterns and insights from vast quantities of telemetry data.",
        requirements: [
          "Advanced degree in Computer Science, Statistics, or related field",
          "Experience with machine learning and statistical analysis",
          "Proficient in Python and data analysis libraries",
          "Knowledge of distributed computing and large-scale data processing",
          "Strong mathematical foundation and analytical thinking"
        ]
      },
      {
        id: 3,
        title: "Backend Engineer",
        location: "Remote",
        type: "Full-time",
        category: "backend",
        description: "Develop robust, scalable backend systems that process and analyze telemetry data from diverse sources in real-time.",
        requirements: [
          "5+ years of experience in backend development",
          "Proficiency in Go, Java, or similar languages",
          "Experience with distributed systems and microservices architecture",
          "Strong understanding of database technologies and data streaming",
          "Knowledge of cloud platforms and infrastructure as code"
        ]
      }
    ];
    
    setJobs(jobData);
  }, []);
  
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
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <CareerHero />
      
      {/* Company Mission */}
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
              At OllyGarden, we're on a mission to make telemetry pipelines more efficient, one company at a time. We empower observability engineers with a new superpower: the ability to quickly uncover insights from their telemetry data—helping them cut costs, streamline operations, and guide their software engineering peers toward continuous improvement.
            </p>
            <p className="text-olly-white/90 leading-relaxed text-lg mt-4">
              We're building a diverse, multidisciplinary, and remote team that transforms raw telemetry into actionable intelligence. As a team member, you'll play a pivotal role in shaping our innovative products.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Job Listings */}
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
                Join our team and help build the future of telemetry and observability
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
            
            {/* Open Application */}
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
                We're always looking for talented individuals to join our team. If you're passionate about observability and telemetry, send us your resume and let's talk!
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
          </div>
        </div>
      </section>
      
      {/* Company Benefits */}
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
                We offer more than just a job - we offer a career with purpose and benefits to match
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard 
                icon={Globe}
                title="Remote-First Culture"
                description="Work from anywhere in the world with our fully distributed team and flexible schedule."
                delay={0.1}
              />
              
              <BenefitCard 
                icon={Zap}
                title="Cutting-Edge Technology"
                description="Work with the latest tools and technologies to solve complex challenges in observability."
                delay={0.2}
              />
              
              <BenefitCard 
                icon={DollarSign}
                title="Competitive Compensation"
                description="Enjoy competitive salary, equity options, and comprehensive benefits package."
                delay={0.3}
              />

              <BenefitCard 
                icon={Users}
                title="Collaborative Environment"
                description="Join a team of passionate professionals who value collaboration and innovation."
                delay={0.4}
              />

              <BenefitCard 
                icon={Clock}
                title="Work-Life Balance"
                description="We respect your time and encourage maintaining a healthy work-life balance."
                delay={0.5}
              />

              <BenefitCard 
                icon={Laptop}
                title="Professional Growth"
                description="Continuous learning and career development opportunities to help you grow."
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
