import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from 'gray-matter';

interface BlogMetadata {
  title: string;
  date: string;
  category: string;
  [key: string]: any; // Allows additional frontmatter fields
}

interface BlogPost {
  metadata: BlogMetadata;
  slug: string;
  content: string;
}


// get all the mdx files from the dir
function getMDXFiles(dir: string): string[] {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx" || path.extname(file) === ".md");
  }

  // Read data from those files
function readMDXFile(filePath: fs.PathOrFileDescriptor): { metadata: BlogMetadata; content: string } {
    let rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    return { metadata: data as BlogMetadata, content }; // Explicitly type metadata
  }

  // present the mdx data and metadata
function getMDXData(dir: string): BlogPost[] {
  let mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts(): BlogPost[] {
  return getMDXData(path.join(process.cwd(), "content"));
}
export function getTermsOfServices() {
  return getMDXData(
    path.join(process.cwd(), "app", "terms-of-services")
  );
}
export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), "app", "privacy-policy"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date?.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}