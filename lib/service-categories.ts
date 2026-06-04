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
  icon:
    | "enterprise"
    | "sme"
    | "ecommerce"
    | "fintech"
    | "insurance"
    | "regtech"
    | "emerging"
    | "cloud"
    | "health";
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
    slug: "sme",
    title: "SME & Growth-Stage Platforms",
    summary: "Affordable, scalable software for small and mid-sized businesses.",
    description:
      "We help SMEs launch and scale digital products — from customer portals and operations tools to integrations with accounting, payroll, and CRM — without enterprise overhead.",
    icon: "sme",
    items: ["SME portals", "Ops automation", "CRM light", "Growth analytics"],
    subs: [
      { name: "SME Customer Portals", description: "Self-service hubs for clients and partners" },
      { name: "Operations & Workflow Tools", description: "Scheduling, invoicing, and task automation" },
      { name: "Lightweight CRM & Sales Tools", description: "Pipeline tracking built for growing teams" },
      { name: "Analytics & Reporting", description: "Dashboards that surface what matters to leadership" },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce & Retail Tech",
    summary: "Storefronts, marketplaces, omnichannel, and fulfilment integrations.",
    description:
      "We build high-conversion commerce experiences — B2C and B2B — with secure checkout, inventory sync, personalisation, and integrations to payment, logistics, and ERP systems.",
    icon: "ecommerce",
    items: ["Online stores", "Marketplaces", "Omnichannel", "Fulfilment APIs"],
    subs: [
      { name: "Custom Storefronts", description: "Headless and traditional commerce front ends" },
      { name: "Marketplace Platforms", description: "Multi-vendor listings, payouts, and moderation" },
      { name: "Omnichannel Retail", description: "Unified stock, pricing, and customer profiles" },
      { name: "Payments & Logistics Integrations", description: "Stripe, shipping carriers, and warehouse hooks" },
    ],
  },
  {
    slug: "fintech",
    title: "Fintech & Business Solutions",
    summary: "Financial strategy, payments, banking APIs, and workflow automation.",
    description:
      "We help financial and operations teams modernise products, integrate payments and banking APIs, and automate workflows that slow delivery down.",
    icon: "fintech",
    items: ["Fintech consulting", "Open banking", "Payment APIs", "Process automation"],
    subs: [
      { name: "Fintech Consultancy", description: "Financial technology strategy and implementation" },
      { name: "Open Banking & API Integration", description: "Account aggregation and regulated data flows" },
      { name: "Payment Gateway Integration", description: "Seamless payment and banking API connections" },
      { name: "Process Optimization & Workflow Automation", description: "Eliminating manual bottlenecks" },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance Technology",
    summary: "Policy admin, claims, underwriting tools, and broker portals.",
    description:
      "We design insurance platforms that streamline quoting, policy lifecycle, claims handling, and broker or customer self-service — with audit trails and integration-ready architecture.",
    icon: "insurance",
    items: ["Policy admin", "Claims systems", "Broker portals", "Underwriting tools"],
    subs: [
      { name: "Policy Administration Systems", description: "End-to-end policy issuance and servicing" },
      { name: "Claims Management", description: "FNOL, adjudication workflows, and customer updates" },
      { name: "Broker & Agent Portals", description: "Quoting, renewals, and commission visibility" },
      { name: "Underwriting & Risk Tools", description: "Rules engines and data-driven decision support" },
    ],
  },
  {
    slug: "regtech",
    title: "RegTech & Compliance",
    summary: "KYC/AML, reporting, audit trails, and regulatory workflow automation.",
    description:
      "We build RegTech solutions that help regulated businesses meet compliance obligations — automated reporting, identity checks, policy controls, and evidence-ready audit logs.",
    icon: "regtech",
    items: ["KYC / AML", "Reg reporting", "Audit trails", "Policy controls"],
    subs: [
      { name: "KYC & AML Workflows", description: "Identity verification and ongoing monitoring hooks" },
      { name: "Regulatory Reporting", description: "Scheduled submissions and data validation pipelines" },
      { name: "Audit & Evidence Management", description: "Immutable logs and reviewer-ready exports" },
      { name: "Policy & Control Automation", description: "Rule-based checks aligned to your frameworks" },
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
