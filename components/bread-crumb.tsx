import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({
  category,
  slug,
}: {
  category?: string;
  slug?: string;
}) {
  // Case: neither category nor slug provided
  if (!category && !slug) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="no-underline" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>{/* <Slash /> */}</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Case: category provided, with or without slug.
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="no-underline" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>{/* <Slash /> */}</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="no-underline" href="/blog">
            Blog
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* When slug is not provided, category is the active page */}
        {category && !slug && (
          <>
            <BreadcrumbSeparator>{/* <Slash /> */}</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{category}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {/* When both category and slug are provided */}
        {category && slug && (
          <>
            <BreadcrumbSeparator>{/* <Slash /> */}</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="no-underline"
                href={`/blog/${category}`}
              >
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>{/* <Slash /> */}</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
