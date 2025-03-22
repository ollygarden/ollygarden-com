
import { useState, useEffect } from "react";
import CareerHero from "@/components/CareerHero";
import CompanyMission from "@/components/careers/CompanyMission";
import JobListingSection from "@/components/careers/JobListingSection";
import BenefitsSection from "@/components/careers/BenefitsSection";
import InterviewExpectations from "@/components/careers/InterviewExpectations";
import { Job, getJobs } from "@/data/jobs";

export default function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  
  // Load job data
  useEffect(() => {
    setJobs(getJobs());
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <CareerHero />
      
      {/* Company Mission */}
      <CompanyMission />
      
      {/* Job Listings */}
      <JobListingSection jobs={jobs} />
      
      {/* Interview Expectations */}
      <InterviewExpectations />
      
      {/* Company Benefits */}
      <BenefitsSection />
    </div>
  );
}
