import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Dublin 4ir",
  description:
    "Notes on building digital products for government and enterprise — engineering, design, and delivery.",
};

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-24 pt-20 min-[960px]:px-10 min-[960px]:pt-28">
      <header className="max-w-[60ch]">
        <p className="section-eyebrow">
          Blog
        </p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em] text-[var(--text)]">
          Notes on building{" "}
          <span className={`${serifItalic} text-[var(--text-muted)]`}>digital products</span>
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-[var(--text-dim)]">
          Engineering, design, and delivery — what we learn shipping software for government and
          enterprise teams.
        </p>
      </header>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group surface-card-sm flex h-full flex-col p-6 transition-colors hover:border-[var(--border-strong)] hover:bg-[rgba(255,255,255,0.08)]"
            >
              <span className="inline-flex w-fit rounded-full border border-[var(--border-soft)] bg-[var(--surface-tint)] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[var(--text-muted)] uppercase">
                {post.category}
              </span>
              <h2 className="mt-4 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)]">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[var(--text-dim)]">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-[12px] text-[var(--text-dim)]">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
