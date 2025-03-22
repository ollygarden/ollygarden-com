
// Define the Job type
export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  responsibilities: string[]; // New field
  bonusPoints: string[]; // New field
}

// Sample job data with gardening theme
const jobs: Job[] = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    location: "Remote",
    type: "Full-time",
    category: "frontend",
    description: "Help us cultivate beautiful and intuitive user interfaces for our telemetry platform. Like a skilled gardener arranges plants for visual appeal, you'll craft elegant UI components that make data visualization bloom.",
    requirements: [
      "3+ years experience in React ecosystem",
      "Proficiency with TypeScript and modern CSS",
      "Experience with data visualization libraries",
      "Understanding of web performance optimization"
    ],
    responsibilities: [
      "Design and implement UI components that help our customers' data flourish",
      "Nurture our component library with reusable, accessible patterns",
      "Cross-pollinate ideas with the design team to create intuitive user experiences",
      "Prune unnecessary code and improve performance across the application"
    ],
    bonusPoints: [
      "Experience with garden-variety animation libraries like Framer Motion",
      "Knowledge of WebGL or Canvas for advanced visualizations",
      "Contributions to open-source projects in the UI/UX space",
      "A green thumb for accessibility and internationalization"
    ]
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    category: "backend",
    description: "Build the root system of our telemetry platform. Just as roots support and nourish plants, you'll create robust API services and data pipelines that support our growing ecosystem.",
    requirements: [
      "4+ years experience with backend development",
      "Proficiency in Go, Rust or similar languages",
      "Experience with distributed systems",
      "Knowledge of database technologies and performance optimization"
    ],
    responsibilities: [
      "Cultivate robust API services that can scale with our growing customer base",
      "Plant efficient data pipelines to process high volumes of telemetry data",
      "Maintain the soil of our infrastructure - databases, caching systems, and message queues",
      "Collaborate with the frontend team to ensure our full-stack garden thrives"
    ],
    bonusPoints: [
      "Experience with telemetry standards like OpenTelemetry",
      "Familiarity with time-series databases for metrics data",
      "Knowledge of cloud-native technologies and container orchestration",
      "Open-source contributions to backend or infrastructure projects"
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    location: "Remote",
    type: "Full-time",
    category: "data",
    description: "Become our master botanist, studying the patterns in our customers' telemetry data. Like analyzing soil composition and growth patterns, you'll extract meaningful insights that help our platform grow stronger.",
    requirements: [
      "3+ years experience in data science or machine learning",
      "Proficiency with Python and data analysis libraries",
      "Experience with time-series analysis",
      "Strong understanding of statistical methods"
    ],
    responsibilities: [
      "Analyze telemetry data patterns like a botanist studies plant growth",
      "Develop algorithms to detect anomalies in telemetry data",
      "Create models that help predict system behavior and prevent wilting services",
      "Collaborate with product teams to implement data-driven features"
    ],
    bonusPoints: [
      "Experience with observability or monitoring systems",
      "Knowledge of unsupervised learning techniques for anomaly detection",
      "Familiarity with large-scale data processing frameworks",
      "Published research in relevant fields"
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
