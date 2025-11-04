"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface FeatureSection {
  smallTitle: string;
  largeTitle: string;
  description: string;
  cards: {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
  }[];
}

const featureSections: FeatureSection[] = [
  {
    smallTitle: "OASIS Companion은",
    largeTitle: "편리합니다",
    description:
      "복잡한 문서나 이메일, 웹페이지도 클릭 한 번이면 끝.\n화면을 전환하지 않고, 지금 보고 있는 내용 그대로 요약하거나 검색할 수 있습니다.\n업무 흐름을 끊지 않고 필요한 정보를 즉시 얻으세요.",
    cards: [
      {
        title: "메일·공지·웹페이지를 한 번에 요약",
        description:
          "현재 화면을 자동으로 분석해 핵심 문장만 정리합니다.\n불필요한 문장은 제거하고, 요점만 빠르게 파악할 수 있습니다.",
        image: "/features/web-summary.png",
        imageAlt: "요약 결과 예시",
      },
      {
        title: "클릭 한 번으로 검색 결과 확인",
        description:
          "웹, 뉴스, YouTube, 기술 문서까지 통합 검색을 지원합니다.\n탭을 이동하지 않아도 필요한 정보를 한눈에 확인할 수 있습니다.",
        image: "/features/summary-button.png",
        imageAlt: "검색 결과 예시",
      },
    ],
  },
  {
    smallTitle: "OASIS Companion은",
    largeTitle: "안전합니다",
    description:
      "회사 내부 문서와 시스템에 대해서도 보안 걱정 없이 질문할 수 있습니다.\nOASIS Companion은 사내 네트워크와 연동되어,\n외부로 데이터를 전송하지 않고 내부에서만 질의·응답을 처리합니다.\n민감한 업무 자료도 안심하고 활용하세요.",
    cards: [
      {
        title: "사내 문서와 이메일을 안심하고 물어보세요",
        description:
          '회의록, 보고서, 프로젝트 문서 등 사내 자산을 안전하게 분석합니다.\n외부 유출 걱정 없이 "이 문서 요약해줘" "지난 회의 내용 찾아줘"라고 질문하세요.',
        image: "/features/safe-email.png",
        imageAlt: "사내 문서 요약을 요청하는 화면",
      },
      {
        title: "내부 시스템에 바로 연결하세요",
        description:
          "OASIS Companion은 사내 포털, 파일 시스템, 데이터베이스 등\n내부 시스템과 직접 연동되어 필요한 정보를 즉시 찾아줍니다.",
        image: "/features/safe-portal.png",
        imageAlt: "내부 시스템 데이터에 질의하는 Companion UI",
      },
    ],
  },
  {
    smallTitle: "OASIS Companion은",
    largeTitle: "사용자 맞춤형입니다",
    description:
      "사용자의 패턴과 대화 맥락을 학습하여,\n질문할수록 더 정확하고 개인화된 답변을 제공합니다.\n업무 방식에 자연스럽게 녹아드는 똑똑한 AI 파트너입니다.",
    cards: [
      {
        title: "사용자의 말투와 별명까지 기억",
        description:
          "개인별 선호 표현과 업무 스타일을 반영해\n자연스러운 맞춤 응답을 제공합니다.",
        image: "/features/custom-setting.png",
        imageAlt: "사용자별 톤으로 응답하는 Companion",
      },
      {
        title: "문맥을 이해하는 대화형 기억",
        description:
          "형태소 분석과 유사도 기반 메모리로\n이전 대화 내용을 이해하고 연속적인 대화를 이어갑니다.",
        image: "/features/custom-memory.png",
        imageAlt: "문맥 연결된 대화 흐름 예시",
      },
    ],
  },
];

function FeatureCard({
  title,
  description,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "transition-shadow duration-300 ease-out",
        "hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_4px_8px_rgba(0,0,0,.1),0_20px_40px_rgba(0,0,0,.15)]",
        "dark:hover:[box-shadow:0_0_0_1px_rgba(255,255,255,.15),0_4px_8px_rgba(0,0,0,.3),0_20px_40px_rgba(0,0,0,.4)]",
        "h-full min-h-[400px]"
      )}
    >
      {/* 이미지 영역 */}
      <div className="relative h-[80%] w-full overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20">
        {image && !imageError ? (
          <div className="absolute inset-4 md:inset-6 lg:inset-8">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center space-y-4 w-full">
              <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 opacity-20 dark:opacity-10 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {imageAlt || "이미지 준비 중"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-1 flex-col justify-center gap-3 p-6">
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {title}
        </h3>
        <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export function BentoDemo() {
  return (
    <div className="space-y-24 py-12">
      {featureSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-8">
          {/* 섹션 헤더 */}
          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              {section.smallTitle}
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {section.largeTitle}
            </h2>
            <p className="mx-auto max-w-2xl whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
              {section.description}
            </p>
          </div>

          {/* 카드 그리드 */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
            {section.cards.map((card, cardIndex) => (
              <FeatureCard key={cardIndex} {...card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
