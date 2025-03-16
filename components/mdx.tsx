import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { BlogPost } from "@/types/blog";

export async function CustomMDX({ source }: { source: BlogPost }) {
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
    .use(rehypeDocument, { title: source.metadata.title })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(source.content)).toString();

  return (
    <div className="mx-auto prose dark:prose-invert max-w-4xl p-4">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
