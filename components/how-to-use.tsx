"use client";

import React from "react";
import Image from "next/image";
import { cn, withBasePath } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function HowToUse() {
  const { ref: titleRef, isInView: titleInView } = useInView({
    threshold: 0.1,
  });
  const { ref: cardsRef, isInView: cardsInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section id="how-to-use" className="container py-8 md:py-12 lg:py-24">
      <div
        ref={titleRef}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12"
      >
        <h3
          className={cn(
            "text-center text-sm font-semibold text-gray-500 pb-2 transition-all duration-1000 ease-out",
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "0.2s" }}
        >
          EASY START
        </h3>
        <p
          className={cn(
            "max-w-[85%] leading-normal bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl sm:leading-8 md:leading-10 font-semibold transition-all duration-1000 ease-out",
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "0.4s" }}
        >
          시작은 3단계면 충분합니다
        </p>
      </div>

      <div
        ref={cardsRef}
        className="mx-auto grid justify-center gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-[64rem]"
      >
        {/* Step 1: Chrome 확장프로그램 설치 */}
        <div
          className={cn(
            "relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all duration-1000 ease-out",
            cardsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-lg">
              1
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Chrome 확장프로그램 설치</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                설치 파일을 다운로드하여 로드하세요.
              </p>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20 flex items-center justify-center border border-purple-100 dark:border-purple-800/30">
              <Image
                src={withBasePath("/use/chrome.webp")}
                alt="Chrome 확장프로그램 설치 화면"
                width={400}
                height={192}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Step 2: 사내 계정으로 로그인 */}
        <div
          className={cn(
            "relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all duration-1000 ease-out",
            cardsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-lg">
              2
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">사내 계정으로 로그인</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                OASIS 플랫폼 계정으로 안전하게 로그인합니다.
              </p>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20 flex items-center justify-center border border-purple-100 dark:border-purple-800/30">
              <Image
                src={withBasePath("/use/login.webp")}
                alt="사내 계정 로그인 화면"
                width={400}
                height={192}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Step 3: 바로 사용 */}
        <div
          className={cn(
            "relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all duration-1000 ease-out",
            cardsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "1.0s" }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-lg">
              3
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">바로 사용</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                이메일·공지·웹페이지 어디서든 질문해보세요.
              </p>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20 flex items-center justify-center border border-purple-100 dark:border-purple-800/30">
              <Image
                src={withBasePath("/use/chat.webp")}
                alt="바로 사용 화면"
                width={400}
                height={192}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
