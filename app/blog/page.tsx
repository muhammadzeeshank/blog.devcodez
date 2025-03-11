import BlogCards from "@/components/blog-cards";
import { BreadcrumbWithCustomSeparator } from "@/components/bread-crumb";
import Header from "@/components/Header";

const Blog = () => {
  return (
    <>
      <Header>
        <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
          Blog
        </h1>
      </Header>
      <BlogCards />
    </>
  );
};

export default Blog;
