"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  isInView: boolean;
}

export function VideoPlayer({ videoSrc, isInView }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (isInView && !hasPlayed && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
      setHasPlayed(true);
    }
  }, [isInView, hasPlayed]);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12">
      <div className="relative rounded-lg overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-auto"
          controls
          playsInline
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
