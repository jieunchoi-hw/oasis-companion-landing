import * as React from "react";

// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Badge } from "./ui/badge";
// import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="h-6 w-auto" />
          <Badge className="hidden lg:block md:block">Companion</Badge>
          <p className="text-center text-sm leading-loose md:text-left md:whitespace-nowrap text-neutral-600 dark:text-neutral-400">
            Copyright © 2025 OASIS Companion. All rights reserved.
          </p>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </footer>
  );
}
