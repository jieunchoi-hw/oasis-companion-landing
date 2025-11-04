"use client";

import { withBasePath } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type LogoProps = Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export function Logo(props: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // resolvedTheme는 system 테마를 실제 테마로 변환해줌
  const isDark = mounted && resolvedTheme === "dark";
  const logoSource = isDark
    ? withBasePath("/darklogo.svg")
    : withBasePath("/lightlogo.svg");

  return (
    <Image
      src={logoSource}
      alt="OASIS Logo"
      width={180}
      height={44}
      {...props}
    />
  );
}
