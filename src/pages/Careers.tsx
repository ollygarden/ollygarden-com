
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import JobCard from "@/components/JobCard";

interface Job {
  id: number;
  title: string;
  description: string;
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
    : jobs.filter(job => job.title.toLowerCase().includes(selectedCategory.toLowerCase()));
  
  const categories = [
    { id: "all", name: "All Positions" },
    { id: "frontend", name: "Frontend" },
    { id: "data", name: "Data Science" },
    { id: "backend", name: "Backend" }
  ];
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-olly-dark to-olly-dark/80 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-olly-accent/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-olly-white">
              Join Our <span className="text-olly-accent">Team</span>
            </h1>
            <p className="text-xl text-olly-white/80 leading-relaxed">
              At OllyGarden, we're on a mission to make telemetry pipelines more efficient, one company at a time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Mission */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-olly-white/90 leading-relaxed text-lg animate-fadeIn">
              At OllyGarden, we're on a mission to make telemetry pipelines more efficient, one company at a time. We empower observability engineers with a new superpower: the ability to quickly uncover insights from their telemetry data—helping them cut costs, streamline operations, and guide their software engineering peers toward continuous improvement.
            </p>
            <p className="text-olly-white/90 leading-relaxed text-lg mt-4 animate-fadeIn">
              We're building a diverse, multidisciplinary, and remote team that transforms raw telemetry into actionable intelligence. As a team member, you'll play a pivotal role in shaping our innovative products.
            </p>
          </div>
        </div>
      </section>
      
      {/* Job Listings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-olly-white mb-12 text-center">
              Open Positions
            </h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all-300",
                    selectedCategory === category.id
                      ? "bg-olly-accent text-olly-dark"
                      : "bg-white/5 text-olly-white hover:bg-white/10"
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
                  <JobCard
                    key={job.id}
                    title={job.title}
                    description={job.description}
                    requirements={job.requirements}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-olly-white/70">No positions found in this category.</p>
                </div>
              )}
            </div>
            
            {/* Open Application */}
            <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 md:p-8 text-center">
              <h3 className="text-xl font-semibold text-olly-white mb-3">
                Don't see a matching position?
              </h3>
              <p className="text-olly-white/80 mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and let's talk!
              </p>
              <button 
                className={cn(
                  "px-6 py-3 rounded-md font-medium transition-all-300",
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Benefits */}
      <section className="py-16 md:py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-olly-white mb-12">
              Why Join OllyGarden?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all-300 hover:transform hover:scale-105 hover:border-olly-accent/30">
                <div className="w-12 h-12 bg-olly-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-olly-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-olly-white mb-2">
                  Remote-First Culture
                </h3>
                <p className="text-olly-white/80">
                  Work from anywhere in the world with our fully distributed team and flexible schedule.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all-300 hover:transform hover:scale-105 hover:border-olly-accent/30">
                <div className="w-12 h-12 bg-olly-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-olly-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-olly-white mb-2">
                  Cutting-Edge Technology
                </h3>
                <p className="text-olly-white/80">
                  Work with the latest tools and technologies to solve complex challenges in observability.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all-300 hover:transform hover:scale-105 hover:border-olly-accent/30">
                <div className="w-12 h-12 bg-olly-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-olly-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-olly-white mb-2">
                  Competitive Compensation
                </h3>
                <p className="text-olly-white/80">
                  Enjoy competitive salary, equity options, and comprehensive benefits package.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
