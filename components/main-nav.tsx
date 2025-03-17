"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

export function MainNav() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        {theme === "dark" ? (
          <Icons.logoLight className="h-6 w-6" />
        ) : (
          <Icons.logoDark className="h-6 w-6" />
        )}
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground",
            pathname === "/blog" ? "text-foreground" : "text-foreground/70"
          )}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/70"
          )}
        >
          About
        </Link>
      </nav>
    </div>
  );
}
