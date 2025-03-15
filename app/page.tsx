import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl text-foreground font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-foreground/70 text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <Button asChild>
          <Link href="/blog">Read the Blog</Link>
        </Button>
      </div>
    </>
  );
}
