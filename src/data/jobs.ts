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
  },
  {
    id: "platform-engineer",
    title: "Founding Platform Engineer",
    location: "Remote",
    type: "Full-time",
    category: "platform",
    description: "Be our infrastructure gardener, tending to the digital soil that nourishes our entire ecosystem. Like maintaining the perfect greenhouse conditions, you'll ensure our platform infrastructure is robust, scalable, and always growing.",
    requirements: [
      "Strong experience with Kubernetes across cloud providers (AKS, EKS, GKE)",
      "Hands-on experience with NATS and PostgreSQL in production environments",
      "Expertise in monitoring and observability tools (Grafana, Dash0, Datadog)",
      "Advanced automation skills with Infrastructure as Code tools (OpenTofu, Terraform, or similar)",
      "Experience with GitOps workflows and progressive deployment strategies",
      "Familiarity with current tooling trends and leveraging AI to enhance productivity",
      "Rooted in either Latin America or Europe",
    ],
    responsibilities: [
      "Design, deploy, and maintain our platform infrastructure across multiple cloud environments",
      "Manage and optimize our NATS messaging infrastructure and PostgreSQL databases for performance and reliability",
      "Build comprehensive monitoring and alerting systems using Grafana, Dash0, and Datadog to ensure platform health",
      "Automate infrastructure provisioning, scaling, and maintenance using modern IaC practices",
      "Implement security best practices and ensure compliance across all platform components",
      "Collaborate with development teams to optimize application deployment and performance",
      "Stay current with emerging technologies and integrate AI-powered tools to streamline operations",
    ],
    bonusPoints: [
      "Experience with OpenTelemetry",
      "Background in DevOps/SRE practices and incident management",
      "Contributions to open-source infrastructure or observability projects",
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
