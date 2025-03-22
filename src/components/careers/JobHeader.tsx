
import { Badge } from "@/components/ui/badge";
import { Job } from "@/data/jobs";

interface JobHeaderProps {
  job: Job;
}

export default function JobHeader({ job }: JobHeaderProps) {
  return (
    <div className="flex flex-col mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-olly-white mb-4">{job.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="bg-white/10 text-olly-white/70">
          {job.location}
        </Badge>
        <Badge variant="outline" className="bg-white/10 text-olly-white/70">
          {job.type}
        </Badge>
        <Badge variant="outline" className="bg-white/10 text-olly-white/70">
          {job.category}
        </Badge>
      </div>
      <p className="text-olly-white/90 text-lg">{job.description}</p>
    </div>
  );
}
