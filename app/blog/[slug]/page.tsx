import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const filePath = `content/${slug}.md`;
  if (!fs.existsSync(filePath)){
    notFound()
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return <div>My Post: {content}</div>;
}
