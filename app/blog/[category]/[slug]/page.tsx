import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { reporter } from "vfile-reporter";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { getBlogPosts } from "../../utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  let post = getBlogPosts().find((post) => post.slug === slug);

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
    <div className="mx-auto prose dark:prose-invert max-w-3xl p-4">
      <h1 className="text-4xl font-bold mb-2">{post.metadata.title}</h1>
      {/* <p className="text-base mt-0 text-muted-foreground">{data.date}</p> */}
      <hr className="my-4" />
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
