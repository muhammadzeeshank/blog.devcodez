import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { formatDate, getBlogPosts } from "../../utils";
import { BreadcrumbWithCustomSeparator } from "@/components/bread-crumb";
import Container from "@/components/container";
import Header from "@/components/Header";
import ReportViews from "@/components/report-views";
import { baseUrl } from "@/app/sitemap";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) {
  const param = await params;
  const post = getBlogPosts().find((post) => post.slug === param.slug);
  if (!post) {
    return;
  }

  const {
    title,
    date: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "one-dark-pro",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeDocument, { title: post.metadata.title })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(post.content)).toString();

  return (
    <>
      {/* structured data script 
      learn more about structured data at:
      https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "DevCodez Blog",
            },
          }),
        }}
      />
      <ReportViews
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />
      <Header>
        <BreadcrumbWithCustomSeparator
          category={post.metadata.category}
          slug={post.slug}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            {formatDate(post.metadata.date.toString())}
          </p>
        </div>
      </Header>
      <Container>
        <div className="mx-auto prose dark:prose-invert max-w-4xl p-4">
          {/* <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          /> */}
          {/* <h1 className="text-4xl font-bold mb-2">{post.metadata.title}</h1> */}
          {/* <p className="text-base mt-0 text-muted-foreground">{data.date}</p> */}
          {/* <hr className="my-4" /> */}
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </Container>
    </>
  );
}
