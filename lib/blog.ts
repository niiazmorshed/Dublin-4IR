export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** ISO date (YYYY-MM-DD) used for sorting and display. */
  date: string;
  readingTime: string;
  /** Body rendered as a sequence of paragraphs. Placeholder copy for now. */
  content: string[];
};

// Placeholder content — wire these up to a CMS or MDX source later.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-for-irish-public-sector",
    title: "Building Digital Services for the Irish Public Sector",
    excerpt:
      "What it takes to ship accessible, secure, and compliant services that scale to a national audience.",
    category: "Government",
    author: "Dublin4ir Team",
    date: "2026-05-12",
    readingTime: "6 min read",
    content: [
      "Public-sector software has a different bar to clear. Accessibility, data protection, and long-term maintainability aren't features you bolt on at the end — they shape the architecture from the first commit.",
      "We start every government engagement with a discovery phase: mapping the service against real user journeys, identifying the compliance surface, and agreeing a delivery model that survives changes in scope and staffing.",
      "This post is placeholder content. We'll replace it with a full write-up of our delivery playbook for national-scale services.",
    ],
  },
  {
    slug: "scaling-nextjs-for-enterprise",
    title: "Scaling Next.js for Enterprise Workloads",
    excerpt:
      "Server components, edge rendering, and the trade-offs we make when an app has to stay fast under real load.",
    category: "Engineering",
    author: "Dublin4ir Team",
    date: "2026-04-28",
    readingTime: "8 min read",
    content: [
      "The App Router changed how we think about where code runs. Defaulting to server components keeps client bundles small, but knowing when to reach for a client boundary is what keeps interactions snappy.",
      "We'll walk through how we structure features, where we cache, and how we measure the things that actually matter to users on slow connections.",
      "This post is placeholder content and will be expanded with concrete benchmarks and code samples.",
    ],
  },
  {
    slug: "design-systems-that-last",
    title: "Design Systems That Outlive the Redesign",
    excerpt:
      "Tokens, primitives, and the discipline that keeps a product consistent as the team grows.",
    category: "Design",
    author: "Dublin4ir Team",
    date: "2026-04-10",
    readingTime: "5 min read",
    content: [
      "A design system is only valuable if it's the path of least resistance. When the right component is also the easiest one to reach for, consistency takes care of itself.",
      "We treat tokens as the contract between design and engineering — colour, spacing, and type scales that mean the same thing in Figma and in code.",
      "This post is placeholder content. A deeper guide to our token architecture is on the way.",
    ],
  },
];

/** Returns all posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** Formats an ISO date as e.g. "12 May 2026". */
export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
