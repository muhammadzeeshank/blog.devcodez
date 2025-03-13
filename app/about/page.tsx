import Container from "@/components/container";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Code,
  Layers,
  Palette,
  Component,
  Type,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About Me
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            {/* <p className="text-muted-foreground text-center break-words">
              Software Developer
            </p> */}
            <p className="text-lg text-muted-foreground mt-3">
              Software Engineer | Full-Stack Developer | Tech Blogger
            </p>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm{" "}
              <span className="text-primary font-semibold">Zeeshan</span>, the
              creator and developer of{" "}
              <span className="text-primary font-semibold">DevCodez</span>.
              Passionate about modern web development, I love sharing my
              knowledge with the community through articles, tutorials, and
              projects.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-semibold">
              Tech Stack:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Layers className="text-primary w-5 h-5" /> Next.js 15
              </li>
              <li className="flex items-center gap-2">
                <Palette className="text-primary w-5 h-5" /> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <Component className="text-primary w-5 h-5" /> ShadCN UI
              </li>
              <li className="flex items-center gap-2">
                <Type className="text-primary w-5 h-5" /> TypeScript
              </li>
            </ul>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Through DevCodez, I aim to provide high-quality content,
              tutorials, and insights on web development. Join me on this
              journey to explore new technologies and improve coding skills.
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <Link
                href="https://github.com/devcodez"
                target="_blank"
                className="text-primary hover:text-primary-dark text-2xl"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/zeeshan"
                target="_blank"
                className="text-primary hover:text-primary-dark text-2xl"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://zeeshan.devcodez.com"
                target="_blank"
                className="text-primary hover:text-primary-dark text-2xl"
              >
                <Code className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
