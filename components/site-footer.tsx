import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            <a
              href={siteConfig.links.portfolio}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              © Dev.Zeeshan 
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}