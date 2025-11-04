"use client";

import { BentoDemo } from "@/components/bento-features";
import { HowToUse } from "@/components/how-to-use";
import { Icons } from "@/components/icons";
import BlurIn from "@/components/magicui/blur-in";
import ShineBorder from "@/components/magicui/shine-border";
import { Companies } from "@/components/social-proof";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { VideoPlayer } from "@/components/video-player";
import { cn, withBasePath } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import Link from "@/node_modules/next/link";
import React from "react";

function HeroPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: videoRef, isInView: videoInView } = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <div className="container flex max-w-[80rem] flex-col items-center gap-4 sm:mb-10 lg:mb-20 md:sm-20">
          {/* Shine Border with initial animation */}
          <div
            className="animate-fade-in-up w-full flex justify-center"
            style={{ animationDelay: "0.2s" }}
          >
            <ShineBorder
              className="text-center capitalize px-4 py-1.5 text-lg font-medium"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <span className="inline-flex items-center gap-2">
                Introducing OASIS Companion
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </span>
            </ShineBorder>
          </div>

          <div
            ref={heroRef}
            className="w-full flex flex-col lg:flex-row gap-8 lg:gap-14 items-start mt-10 sm:mt-16 md:mt-20"
          >
            {/* 왼쪽 섹션 - 주요 메시지 */}
            <div
              className={cn(
                "flex-1 w-full transition-all duration-1000 ease-out",
                heroInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              )}
              style={{ transitionDelay: "0.3s" }}
            >
              <h1
                className={cn(
                  "font-heading text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-left transition-all duration-1000 ease-out",
                  heroInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: "0.5s" }}
              >
                <span className="whitespace-nowrap">보안은 그대로,</span> <br />
                <span className="whitespace-nowrap">
                  일하는 방식은 새롭게
                </span>{" "}
                <br />
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
              <p
                className={cn(
                  "max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-6 text-left transition-all duration-1000 ease-out",
                  heroInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: "0.7s" }}
              >
                웹페이지·이메일·문서를 한 번에 요약하고, <br />
                필요한 정보를 바로 물어보세요.
                <br />
                대기업·공공기관의 망분리 환경에서도 안심하고 사용할 수 있습니다.
              </p>
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 ease-out",
                  heroInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: "0.9s" }}
              >
                {/* <Link
                  href="/login"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Get Started
                </Link> */}
                <a
                  href={withBasePath("/#features")}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    Let&apos;s Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* 오른쪽 섹션 - 4가지 키워드 */}
            <div
              className={cn(
                "flex-1 w-full relative pl-0 lg:pl-8 border-l-0 lg:border-l border-dashed border-gray-300 dark:border-gray-700 transition-all duration-1000 ease-out",
                heroInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              )}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="space-y-8">
                {/* 기능 카드 1 — 웹페이지·이메일 요약 */}
                <div
                  className={cn(
                    "flex items-start gap-4 transition-all duration-700 ease-out",
                    heroInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: "0.6s" }}
                >
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
                <div
                  className={cn(
                    "flex items-start gap-4 transition-all duration-700 ease-out",
                    heroInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: "0.8s" }}
                >
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
                <div
                  className={cn(
                    "flex items-start gap-4 transition-all duration-700 ease-out",
                    heroInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: "1.0s" }}
                >
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
                <div
                  className={cn(
                    "flex items-start gap-4 transition-all duration-700 ease-out",
                    heroInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: "1.2s" }}
                >
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
        
        {/* Video Player Component */}
        <div ref={videoRef}>
          <VideoPlayer 
            videoSrc={withBasePath("/video/intro.mp4")}
            isInView={videoInView}
          />
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

      <HowToUse />

      <section id="open-source" className="container py-8 md:py-8 lg:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="inline-flex items-center gap-2">
            <span className="h-7 sm:h-8 md:h-9 lg:h-11 w-auto inline-block relative animate-glow">
              <Logo
                width={180}
                height={44}
                className="h-full w-auto object-contain"
              />
            </span>
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-heading animate-text-glow">
              Companion
            </span>
          </span>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Let&apos;s Try Now
          </p>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
