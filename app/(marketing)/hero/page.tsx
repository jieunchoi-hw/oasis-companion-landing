import { BentoDemo } from "@/components/bento-features";
import { Icons } from "@/components/icons";
import BlurIn from "@/components/magicui/blur-in";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";
import { Companies } from "@/components/social-proof";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "@/node_modules/next/link";
import React from "react";

function HeroPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <div className="container flex max-w-[80rem] flex-col items-center gap-4 sm:mb-10 lg:mb-20 md:sm-20">
          {/* <Link
            href="https://twitter.com/kathanmehtaa"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          > */}

          <ShineBorder
            className="text-center capitalize  px-4 py-1.5 text-lg font-medium absolute"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            Introducing OASIS Companion ✨
          </ShineBorder>

          {/* </Link> */}

          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-14 items-start mt-28 sm:mt-32 md:mt-36">
            {/* 왼쪽 섹션 - 주요 메시지 */}
            <div className="flex-1 w-full">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-left">
                보안은 그대로, <br />
                일하는 방식은 새롭게 <br />
                <span className="inline-flex items-center gap-2">
                  <span className="h-7 sm:h-8 md:h-9 lg:h-11 w-auto inline-block relative">
                    <Logo
                      width={180}
                      height={44}
                      className="h-full w-auto object-contain"
                    />
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-heading">
                    Companion
                  </span>
                </span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-6 text-left">
                웹페이지·이메일·문서를 한 번에 요약하고, <br />
                필요한 정보를 바로 물어보세요.
                <br />
                대기업·공공기관의 망분리 환경에서도 안심하고 사용할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {/* <Link
                  href="/login"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Get Started
                </Link> */}
                <a
                  href="/#features"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                >
                  Let&apos;s Explore 👇🏻
                </a>
              </div>
            </div>

            {/* 오른쪽 섹션 - 4가지 키워드 */}
            <div className="flex-1 w-full relative pl-0 lg:pl-8 border-l-0 lg:border-l border-dashed border-gray-300 dark:border-gray-700">
              <div className="space-y-8">
                {/* 기능 카드 1 — 웹페이지·이메일 요약 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-900 dark:text-gray-100"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      웹페이지·이메일 요약
                    </h3>
                    <p className="text-base text-muted-foreground mt-1">
                      현재 보고 있는 화면을 즉시 분석하고 핵심 내용을
                      요약해드립니다.
                    </p>
                  </div>
                </div>

                {/* 기능 카드 2 — 검색 & 정보 탐색 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-900 dark:text-gray-100"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      검색 & 정보 탐색
                    </h3>
                    <p className="text-base text-muted-foreground mt-1">
                      웹, 뉴스, YouTube를 한 번에 검색하여 원하는 정보를 빠르게
                      찾을 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 기능 카드 3 — 법률·정책 문서 조회 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-900 dark:text-gray-100"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      법률·정책 문서 조회
                    </h3>
                    <p className="text-base text-muted-foreground mt-1">
                      법령, 판례, 행정규칙의 원문을 정확하게 검색하고 조회할 수
                      있습니다.
                    </p>
                  </div>
                </div>

                {/* 기능 카드 4 — 보안 환경 호환성 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-900 dark:text-gray-100"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      보안 환경 호환성
                    </h3>
                    <p className="text-base text-muted-foreground mt-1">
                      인터넷 차단이나 망분리 환경에서도 안전하게 사용할 수
                      있습니다. <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden md:overflow-auto lg:overflow-auto">
          <img
            src="/darkoutput.png"
            alt="Hero Image"
            className="hidden lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:block overflow-hidden md:overflow-auto lg:overflow-auto"
          />
          <img
            src="/lightoutput.png"
            alt="Hero Image"
            className="block lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:hidden overflow-hidden md:overflow-auto lg:overflow-auto"
          />

          <BorderBeam size={250} />
        </div>
      </section>

      {/* <Companies /> */}

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">
            FEATURES
          </h3>
        </div>
        <BentoDemo />
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            OASIS Companion - Unlock the Wisdom
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Let&apos;s Try Now -{" "}
            <a href="/login" className="underline underline-offset-4">
              Get Started
            </a>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
