"use client";

import { Icons } from "./icons";
import Link from "next/link";
import { Input } from "./ui/input";
import SubmitButton from "./submit-button";
import { POSTS } from "@/lib/constants";
import { createSubscriber } from "@/lib/actions";
import { useFormState } from "react-dom";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logoDark className="h-6 w-6" />
              <span className="text-md font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-foreground/70  text-sm">
              Stay Up to Date with the latest news and insights from our blog.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@devcodezofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.youtube className="h-6 w-6 text-foreground/70 hover:text-foreground  " />
              </a>
              <a
                href="https://github.com/muhammadzeeshank"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Icons.gitHub className="h-6 w-6 text-foreground/70 hover:text-foreground  " />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              {POSTS.map((post) => (
                <li key={post.title}>
                  <Link
                    href={post.href}
                    className="text-foreground/70 hover:text-foreground"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:w3tsadev@gmail.com"
                  className="text-foreground/70 hover:text-foreground"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-foreground/70 hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-foreground/70 hover:text-foreground"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-foreground/70  text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form action={dispatch}>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  defaultValue=""
                  aria-describedby="email-error"
                />
                <SubmitButton />
              </div>
              <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email && (
                  <p
                    key={state.errors.email[0]}
                    className="text-xs text-red-500"
                  >
                    {state.errors.email[0]}
                  </p>
                )}
                {!state?.errors?.email && (
                  <p className="text-xs text-green-500">{state?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-foreground/70 dark:border-gray-700 ">
          &copy; 2025 Muhammad Zeeshan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
