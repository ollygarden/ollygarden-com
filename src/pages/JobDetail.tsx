
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  category: string;
  requirements: string[];
  responsibilities?: string[];
}

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would be an API call
    // For demo purposes, we're using mock data
    const fetchJob = () => {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
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
            ],
            responsibilities: [
              "Build and maintain reusable components for our design system",
              "Implement responsive and accessible user interfaces",
              "Optimize application performance and user experience",
              "Collaborate with designers and backend engineers",
              "Participate in code reviews and architectural discussions"
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
            ],
            responsibilities: [
              "Develop and implement machine learning models for telemetry data analysis",
              "Identify patterns and anomalies in large datasets",
              "Create visualizations to communicate complex findings",
              "Collaborate with engineers to integrate insights into the product",
              "Stay current with the latest research in the field"
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
            ],
            responsibilities: [
              "Design and implement scalable APIs and services",
              "Build robust data processing pipelines",
              "Optimize system performance and reliability",
              "Implement security best practices",
              "Mentor junior engineers and contribute to technical decisions"
            ]
          }
        ];
        
        const foundJob = jobData.find(j => j.id === Number(id));
        
        if (foundJob) {
          setJob(foundJob);
        } else {
          toast({
            title: "Job not found",
            description: "We couldn't find the job you're looking for.",
            variant: "destructive"
          });
        }
        
        setIsLoading(false);
      }, 500); // Simulate network delay
    };
    
    fetchJob();
  }, [id, toast]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="glass-effect p-12 rounded-lg flex items-center justify-center">
          <div className="animate-pulse text-olly-accent font-medium">Loading job details...</div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="glass-effect p-12 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-olly-white mb-4">Job Not Found</h2>
          <p className="text-olly-white/70 mb-6">We couldn't find the job you're looking for.</p>
          <Link 
            to="/careers" 
            className="inline-flex items-center text-olly-accent hover:underline"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-olly-dark-deep to-olly-dark z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/careers" 
              className="inline-flex items-center text-olly-accent hover:underline mb-8"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to all positions
            </Link>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="flex flex-col mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-olly-white mb-4">{job.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-olly-white/70">
                    {job.location}
                  </span>
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-olly-white/70">
                    {job.type}
                  </span>
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-olly-white/70">
                    {job.category}
                  </span>
                </div>
                <p className="text-olly-white/90 text-lg">{job.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-olly-accent mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities?.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={18} className="text-olly-accent mt-0.5 shrink-0" />
                      <span className="text-olly-white/90">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-olly-accent mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={18} className="text-olly-accent mt-0.5 shrink-0" />
                      <span className="text-olly-white/90">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center mt-8">
                <button 
                  className={cn(
                    "px-8 py-4 rounded-md font-medium",
                    "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
                    "transition-all duration-300 focus:ring-2 focus:ring-olly-accent/50"
                  )}
                  onClick={() => {
                    toast({
                      title: "Application Started",
                      description: "Your application process has begun!",
                    });
                    // In a real app, this would redirect to an application form
                  }}
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
