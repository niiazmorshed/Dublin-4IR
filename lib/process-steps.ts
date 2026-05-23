export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: "discover" | "plan" | "build" | "test" | "launch" | "support";
  variant: "accent" | "surface";
  align: "left" | "right";
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understanding Client Requirements",
    description:
      "We engage with clients through in-depth consultations to clearly understand business objectives, challenges, and goals. Project scope and desired outcomes are defined collaboratively.",
    duration: "1–2 Weeks",
    icon: "discover",
    variant: "accent",
    align: "left",
  },
  {
    number: "02",
    title: "Mapping & Planning",
    description:
      "A strategic roadmap is created outlining workflows, milestones, technology stacks, and team allocation. Coordination between Ireland and Bangladesh teams is formalized at this stage.",
    duration: "1 Week",
    icon: "plan",
    variant: "surface",
    align: "right",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Expert developers and AI engineers bring ideas to life using modern tools and frameworks. Close client communication is maintained throughout for real-time feedback and iteration.",
    duration: "Project Phase",
    icon: "build",
    variant: "accent",
    align: "left",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Each solution undergoes rigorous testing for performance, security, and accuracy. Multiple validation phases are conducted before any deployment approval is granted.",
    duration: "1–2 Weeks",
    icon: "test",
    variant: "surface",
    align: "right",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description:
      "The solution is deployed to production with full monitoring. Rollout plans are carefully executed to minimize disruption and ensure a smooth go-live.",
    duration: "1 Week",
    icon: "launch",
    variant: "accent",
    align: "left",
  },
  {
    number: "06",
    title: "Ongoing Support & Maintenance",
    description:
      "Post-launch, Dublin 4IR provides continuous monitoring, bug fixes, updates, and managed services to keep solutions performant and up to date.",
    duration: "Ongoing",
    icon: "support",
    variant: "surface",
    align: "right",
  },
];
