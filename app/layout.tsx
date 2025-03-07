import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevCodez Blog",
  description: "Learn web development, AI, and programming with expert tutorials on React, Angular, Next.js, .NET, databases, and artificial intelligence. Stay updated with coding best practices, real-world projects, and industry insights to enhance your skills. 🚀 #WebDevelopment #AI #Coding #Programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div data-wrapper="" className="border-grid flex flex-1 flex-col">
            <Navbar />
            <div className="container-wrapper">
              <div className="container">{children}</div>
            </div>

            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
