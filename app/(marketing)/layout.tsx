import { MainNav } from "@/components/main-nav";
import { withBasePath } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ModeToggle } from "@/components/toggle";

import { SiteFooter } from "@/components/site-footer";

import MobileNav from "@/components/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OASIS Companion",
  description: "보안은 그대로, 일하는 방식은 새롭게. 웹페이지·이메일·문서를 한 번에 요약하고, 필요한 정보를 바로 물어보세요. 대기업·공공기관의 망분리 환경에서도 안심하고 사용할 수 있습니다.",
  metadataBase: new URL('https://jieunchoi-hw.github.io/oasis-companion-landing'),
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "OASIS Companion - 보안은 그대로, 일하는 방식은 새롭게",
    description: "웹페이지·이메일·문서를 한 번에 요약하고, 필요한 정보를 바로 물어보세요. 대기업·공공기관의 망분리 환경에서도 안심하고 사용할 수 있습니다.",
    url: "https://jieunchoi-hw.github.io/oasis-companion-landing",
    siteName: "OASIS Companion",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "OASIS Companion - 보안은 그대로, 일하는 방식은 새롭게",
        type: "image/png",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OASIS Companion - 보안은 그대로, 일하는 방식은 새롭게",
    description: "웹페이지·이메일·문서를 한 번에 요약하고, 필요한 정보를 바로 물어보세요.",
    images: ["/thumbnail.png"],
    creator: "@oasis_companion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="h-16 container sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between py-6 w-full">
            <MobileNav />
            <MainNav />
            <nav>
              <div className="md:flex">
                <div className="flex gap-4">
                  <ModeToggle />
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>

      <SiteFooter />
    </>
  );
}
