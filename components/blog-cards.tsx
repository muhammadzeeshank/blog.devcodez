// "use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import fs from "fs";
import matter from 'gray-matter';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const dirContent = fs.readdirSync("content",  "utf-8");
const blogPosts = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const {data} = matter(fileContent);
  return data;
})

// const blogPosts: Map<number, BlogPost> = new Map([
//   [
//     1,
//     {
//       id: 1,
//       title: "Understanding Next.js 15",
//       description: "A deep dive into the latest features of Next.js 15.",
//       imageUrl: "/post-image.jpg",
//       date: "October 5, 2025",
//     },
//   ],
//   [
//     2,
//     {
//       id: 2,
//       title: "ShadCN UI for Modern Development",
//       description: "Using ShadCN components to enhance your UI.",
//       imageUrl: "/post-image.jpg",
//       date: "October 10, 2025",
//     },
//   ],
// ]);

export default function BlogCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {[...blogPosts.values()].map((post) => (
        <Card key={post.id} className="rounded-lg overflow-hidden shadow-md">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-bold text-primary">{post.title}</h2>
            <p className="text-muted-foreground text-sm">{post.date}</p>
            <p className="text-sm text-secondary-foreground mt-2">
              {post.description}
            </p>
            <Link href={`/blog/${post.id}`} passHref>
              <Button className="mt-4 w-full">Read More</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
