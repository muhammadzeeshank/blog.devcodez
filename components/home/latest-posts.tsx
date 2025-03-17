import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import { badgeVariants } from "../ui/badge";
import { Icons } from "../icons";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block text-3xl font-bold tracking-tight ">
        Recently Published
      </h1>
      <ul className="divide-y divide-gray-200 pr-8 dark:divide-gray-700">
        {latestPosts
          .sort((a, b) => {
            if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <li key={post.slug} className="py-12">
              <article key={post.slug} className="text-wrap max-w-2xl">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground pb-2">
                      {formatDate(post.metadata.date?.toString())}
                    </p>
                    <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
                      <h3 className="font-bold text-xl py-2 leading-5 hover:text-blue-400">
                        {post.metadata.title}
                      </h3>
                    </Link>
                    <Link
                      href={`/blog/${post.metadata.category}`}
                      className={badgeVariants({ variant: "secondary" })}
                    >
                      {post.metadata.category}
                    </Link>

                    <p className="leading-8 text-foreground/70">
                      {post.metadata.summary}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.metadata.category}/${post.slug}`}
                    className="group inline-flex items-center text-sm transition-colors text-foreground/70 hover:text-foreground"
                  >
                    Read More
                    <Icons.arrowRight className="ml-1 h-2 w-2 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
      </ul>
    </>
  );
}
