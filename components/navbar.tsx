import Link from "next/link";

// import { CommandMenu } from "@/components/command-menu"
import { MobileNav } from "@/components/mobile-nav";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";
import { ModeSwitcher } from "./mode-switcher";
import Container from "./container";

export function Navbar() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-14 items-center">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* <CommandMenu /> */}
            </div>
            <nav className="flex items-center gap-0.5">
              <ModeSwitcher />

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0"
              >
                <Link
                  href="/rss"
                >
                  <Icons.rss className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
