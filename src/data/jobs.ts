// Define the Job type
export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  bonusPoints: string[];
}

const jobs: Job[] = [
  {
    id: "founding-data-engineer",
    title: "Founding Data Engineer",
    location: "Remote",
    type: "Full-time",
    category: "data",
    description: "Become our master botanist, studying the patterns in our customers' telemetry data. Like analyzing soil composition and growth patterns, you'll extract meaningful insights that help our platform grow stronger.",
    requirements: [
      "Experience designing, training, and deploying machine learning models in production",
      "Experience with generative AI and LLMs, including fine-tuning, embeddings, and RAG architectures",
      "Strong programming skills in Python (bonus: Rust or Go), and experience working with tools like scikit-learn, HuggingFace, LangChain, or similar",
      "A product-minded approach—your models aren't just clever, they're useful, usable, and scalable",
      "Rooted in either Latin America or Europe",
    ],
    responsibilities: [
      "Cultivate knowledge from massive volumes of telemetry data, mining traces, metrics, and logs for actionable insights",
      "Design and implement ML models and pipelines that help teams identify inefficiencies, anomalies, and opportunities for optimization",
      "Explore and apply cutting-edge AI techniques (LLMs, RAG, embedding search, few-shot learning, etc.) to make observability more interactive, insightful, and adaptive",
      "Help define the future of our platform by transforming raw data into intelligent automation—detecting patterns, suggesting instrumentation improvements, and guiding decisions",
      "Collaborate with product and engineering teams to ship features that scale, working with real-world telemetry from complex systems",
    ],
    bonusPoints: [
      "Familiarity with observability data formats, distributed systems, and the OpenTelemetry ecosystem",
      "Experience with B2B SaaS products, especially developer tools",
      "Passion for open-source communities, contributing to shared knowledge and collaborative growth",
      "Enthusiasm for public speaking, helping others cultivate their understanding of observability at international conferences",
    ]
  }
];

// Function to get all jobs
export function getJobs(): Job[] {
  return jobs;
}

// Function to get a job by ID
export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id);
}
