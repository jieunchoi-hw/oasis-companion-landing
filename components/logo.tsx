"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type LogoProps = React.ComponentProps<typeof Image>;

export function Logo(props: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // resolvedTheme는 system 테마를 실제 테마로 변환해줌
  const isDark = mounted && resolvedTheme === "dark";
  const logoSource = isDark ? "/darklogo.svg" : "/lightlogo.svg";

  // src와 alt를 제외한 나머지 props만 spread
  const { src, alt, ...restProps } = props;

  return (
    <Image
      src={logoSource}
      alt="OASIS Logo"
      width={180}
      height={44}
      {...restProps}
    />
  );
}

