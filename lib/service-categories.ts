export type ServiceSubItem = {
  name: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  items: string[];
  subs: ServiceSubItem[];
  icon: "enterprise" | "fintech" | "emerging" | "cloud" | "health";
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "enterprise",
    title: "Enterprise Software Development",
    summary: "ERP, CRM, e-commerce, CMS, and bespoke web & mobile.",
    description:
      "We design and build scalable platforms for large organisations — from core business systems to customer-facing applications, with security and governance built in.",
    icon: "enterprise",
    items: ["ERP & CRM", "E-commerce", "Enterprise CMS", "Custom apps"],
    subs: [
      { name: "ERP & CRM Solutions", description: "Custom enterprise resource planning and CRM platforms" },
      { name: "E-Commerce Solutions", description: "Scalable online retail and marketplace platforms" },
      { name: "Enterprise CMS", description: "Content management systems for large organizations" },
      { name: "Custom Application Development", description: "Bespoke web and mobile applications" },
    ],
  },
  {
    slug: "fintech",
    title: "Fintech & Business Solutions",
    summary: "Financial strategy, insurance tech, payments, and workflow automation.",
    description:
      "We help financial and operations teams modernise products, integrate payments and banking APIs, and automate workflows that slow delivery down.",
    icon: "fintech",
    items: ["Fintech consulting", "Insurance platforms", "Payment APIs", "Process automation"],
    subs: [
      { name: "Fintech Consultancy", description: "Financial technology strategy and implementation" },
      { name: "Insurance Solutions", description: "Digital platforms for insurance operations" },
      { name: "Payment Gateway Integration", description: "Seamless payment and banking API connections" },
      { name: "Process Optimization & Workflow Automation", description: "Eliminating manual bottlenecks" },
    ],
  },
  {
    slug: "emerging",
    title: "AI, Data & Emerging Tech",
    summary: "ML, IoT, immersive experiences, and interactive products.",
    description:
      "From intelligent automation and analytics to connected devices, AR/VR, and games — we prototype and ship emerging tech with production-grade engineering.",
    icon: "emerging",
    items: ["AI / ML & data", "IoT", "AR / VR", "Games (Unity / cross-platform)"],
    subs: [
      { name: "AI/ML & Data Science", description: "Intelligent automation, predictive analytics, NLP" },
      { name: "IoT Solutions", description: "Connected device architecture and data pipelines" },
      { name: "AR/VR Solutions", description: "Augmented and virtual reality for training and commerce" },
      { name: "Game Development", description: "Unity 3D and cross-platform game experiences" },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud & DevOps",
    summary: "Architecture, migration, CI/CD, resilience, and security testing.",
    description:
      "We guide cloud strategy, migrate workloads to AWS or Azure, automate delivery pipelines, and harden infrastructure with proactive security testing.",
    icon: "cloud",
    items: ["Cloud consulting", "Migration & managed", "DevOps & QA", "Hosting & DR", "Pen testing"],
    subs: [
      { name: "Cloud Consulting", description: "Architecture design and cloud strategy" },
      { name: "Cloud Migration & Managed Services", description: "Seamless lift-and-shift to AWS/Azure" },
      { name: "DevOps & QA Automation", description: "CI/CD pipelines and automated testing" },
      { name: "Cloud Hosting & Disaster Recovery", description: "High-availability, resilient infrastructure" },
      { name: "Penetration Testing", description: "Security assessments and vulnerability management" },
    ],
  },
  {
    slug: "health",
    title: "HealthTech, LMS & IT Talent",
    summary: "Digital health, learning platforms, and flexible engineering capacity.",
    description:
      "Digital health and learning platforms, plus flexible engineering teams from Bangladesh — individuals or full squads aligned to your delivery model.",
    icon: "health",
    items: ["HealthTech", "LMS", "Talent augmentation", "IT outsourcing"],
    subs: [
      { name: "HealthTech Solutions", description: "Digital health platforms and patient management systems" },
      { name: "LMS Solutions", description: "Learning management systems for education and corporate training" },
      { name: "Tech Talent Augmentation", description: "Individual resources or full teams for your organization" },
      { name: "IT Outsourcing", description: "Cost-effective, high-quality development from Bangladesh" },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}
