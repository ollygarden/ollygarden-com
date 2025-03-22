import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { getJobById, Job } from "@/data/jobs";
import JobHeader from "@/components/careers/JobHeader";
import JobRequirements from "@/components/careers/JobRequirements";
import JobResponsibilities from "@/components/careers/JobResponsibilities";
import JobBonusPoints from "@/components/careers/JobBonusPoints";
import ApplyButton from "@/components/careers/ApplyButton";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (!id) {
        toast({
          title: "Job not found",
          description: "Missing job ID.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }
      
      const foundJob = getJobById(id);
      
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
              <JobHeader job={job} />
              
              <JobResponsibilities responsibilities={job.responsibilities} />
              
              <JobRequirements requirements={job.requirements} />
              
              {job.bonusPoints && <JobBonusPoints bonusPoints={job.bonusPoints} />}
              
              <div className="flex justify-center mt-8">
                <ApplyButton jobId={job.id} jobTitle={job.title} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
