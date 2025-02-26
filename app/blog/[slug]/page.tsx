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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const filePath = `content/${slug}.md`;
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

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
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      />
    </div>
  );
}
