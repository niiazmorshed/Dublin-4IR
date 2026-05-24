import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, formatPostDate, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post not found — Dublin 4ir" };

  return {
    title: `${post.title} — Dublin 4ir`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="mx-auto max-w-[760px] px-6 pb-24 pt-20 min-[960px]:pt-28">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
      >
        <span aria-hidden>←</span> Back to blog
      </Link>

      <article className="mt-8">
        <header>
          <div className="flex flex-wrap items-center gap-2 text-[12px] text-[var(--text-dim)]">
            <span className="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-tint)] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[var(--text-muted)] uppercase">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--text)]">
            {post.title}
          </h1>
          <p className="mt-3 text-[14px] text-[var(--text-dim)]">By {post.author}</p>
        </header>

        <div className="mt-8 space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-[16px] leading-[1.75] text-[var(--text)]">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
