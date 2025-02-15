import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Code, Layers, Palette, Component, Type } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-center">
      {/* <div className="flex justify-center mb-6">
        <Image
          src="/profile.jpg"
          alt="Zeeshan's Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-primary shadow-lg"
        />
      </div> */}
      <h1 className="text-5xl font-bold text-primary">Muhammad Zeeshan</h1>
      <p className="text-lg text-muted-foreground mt-3">Software Engineer | Full-Stack Developer | Tech Blogger</p>
      <Separator className="my-6" />
      <Card className="shadow-lg border rounded-2xl p-8 text-left">
        <CardContent>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm <span className="text-primary font-semibold">Zeeshan</span>, the creator and developer of <span className="text-primary font-semibold">DevCodez</span>. Passionate about modern web development, I love sharing my knowledge with the community through articles, tutorials, and projects.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-semibold">Tech Stack:</p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-muted-foreground">
            <li className="flex items-center gap-2"><Layers className="text-primary w-5 h-5" /> Next.js 15</li>
            <li className="flex items-center gap-2"><Palette className="text-primary w-5 h-5" /> Tailwind CSS</li>
            <li className="flex items-center gap-2"><Component className="text-primary w-5 h-5" /> ShadCN UI</li>
            <li className="flex items-center gap-2"><Type className="text-primary w-5 h-5" /> TypeScript</li>
          </ul>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Through DevCodez, I aim to provide high-quality content, tutorials, and insights on web development. Join me on this journey to explore new technologies and improve coding skills.
          </p>
        </CardContent>
      </Card>
      <div className="flex justify-center gap-6 mt-6">
        <Link href="https://github.com/devcodez" target="_blank" className="text-primary hover:text-primary-dark text-2xl">
          <Github className="w-6 h-6" />
        </Link>
        <Link href="https://linkedin.com/in/zeeshan" target="_blank" className="text-primary hover:text-primary-dark text-2xl">
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link href="https://zeeshan.devcodez.com" target="_blank" className="text-primary hover:text-primary-dark text-2xl">
          <Code className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}