import BlogCards from "@/components/blog-cards";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="container-wrapper">
        <div className="container">
          <BlogCards />
        </div>
      </div>
    </>
  );
}
