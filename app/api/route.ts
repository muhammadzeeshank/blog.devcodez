// import { db } from "@/db";

export async function GET() {
  try {
    // const data = await db.blog.findMany({
    //   take: 10,
    //   select: { title: true, category: true, slug: true },
    //   orderBy: [{ view_count: "desc" }],
    // });
    const data = [
        { title: "Mastering Next.js 14", category: "Web Development", slug: "mastering-nextjs-14" },
        { title: "Understanding React Server Components this is long title to test that how it is displayed on screen", category: "React", slug: "understanding-react-server-components" },
        { title: "Building Scalable APIs with NestJS", category: "Backend Development", slug: "building-scalable-apis-nestjs" },
        { title: "Advanced TypeScript Tips", category: "Programming", slug: "advanced-typescript-tips" },
        { title: "Optimizing Performance in Angular", category: "Angular", slug: "optimizing-performance-angular" },
        { title: "Introduction to Edge Functions", category: "Serverless", slug: "introduction-edge-functions" },
        { title: "Using TanStack Query for Data Fetching", category: "React", slug: "using-tanstack-query" },
        { title: "State Management in Next.js", category: "Web Development", slug: "state-management-nextjs" },
        { title: "Microservices with .NET 8", category: "Backend Development", slug: "microservices-dotnet-8" },
        { title: "AI in Web Development", category: "Technology", slug: "ai-in-web-development" },
      ];
      

    return Response.json(data);
  } catch (error) {
    console.error("Database Error...", error);
    throw new Error("Failed to fetch the popular posts");
  }
}

// export async function POST(request: Request) {
//   const { slug, title, category } = await request.json();

//   try {
//     const existingPost = await db.blog.findUnique({
//       where: { slug: slug },
//     });

//     if (existingPost) {
//       await db.blog.update({
//         where: { slug: slug },
//         data: {
//           view_count: { increment: 1 },
//         },
//       });
//     } else {
//       await db.blog.create({
//         data: {
//           slug: slug,
//           title: title,
//           category: category,
//         },
//       });
//     }
//   } catch (error) {
//     console.error("Error updating page view", error);
//     return new Response("Failed to post to DB", { status: 500 });
//   }

//   return new Response("Successfully posted to DB", { status: 200 });
// }