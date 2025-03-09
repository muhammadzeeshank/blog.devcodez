import fs from "fs";
import path from "path";
import matter from 'gray-matter';


// get all the mdx files from the dir
function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  }

  // Read data from those files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
    let rawContent = fs.readFileSync(filePath, "utf-8");
    return matter(rawContent);
  }

  // present the mdx data and metadata
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}