import BlogCards from "@/components/blog-cards";
import { BreadcrumbWithCustomSeparator } from "@/components/bread-crumb";
import Container from "@/components/container";
import Header from "@/components/Header";
import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import TopCatogories from "@/components/home/top-categories";

const Blog = () => {
  return (
    <>
      <Header>
        <BreadcrumbWithCustomSeparator />
        <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
          Blog
        </h1>
      </Header>
      <Container>
        <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
          <div>
            <LatestPosts />
          </div>
          <div className="h-screen">
            <div>
              <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
              <TopCatogories />
            </div>
            <div className="mt-10 sticky top-20">
              <h1 className="font-bold mb-4">POPULAR POSTS</h1>
              <PopularPosts />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Blog;
