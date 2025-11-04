"use client";

import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn, withBasePath } from "@/lib/utils";

interface VideoPlayerProps {
  videoSrc: string;
  className?: string;
  isInView?: boolean;
}

export function VideoPlayer({ videoSrc, className, isInView = true }: VideoPlayerProps) {
  const videoElementRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [showControls, setShowControls] = React.useState(false);

  React.useEffect(() => {
    const video = videoElementRef.current;

    if (video) {
      const handleLoadedData = () => {
        setDuration(video.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      video.addEventListener("loadedmetadata", handleLoadedData);
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      if (video.duration) {
        setDuration(video.duration);
      }

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedData);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const video = videoElementRef.current;
    if (video) {
      if (video.paused) {
        video
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Error playing video:", err);
          });
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoElementRef.current && duration) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percentage = x / bounds.width;
      const newTime = percentage * duration;
      videoElementRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time) || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={cn(
        "relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden transition-all duration-1000 ease-out",
        isInView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95",
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoElementRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="lg:max-w-[1000px] rounded-[inherit] border object-contain shadow-lg"
      />

      {/* BorderBeam */}
      <BorderBeam size={250} className="z-0" />

      {/* Custom Video Controls */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 transition-opacity duration-300 z-50",
          showControls ? "opacity-100" : "opacity-0"
        )}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Progress Bar */}
        <div
          className="w-full h-1 bg-gray-600 rounded-full cursor-pointer mb-3 group"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-purple-500 rounded-full relative transition-all group-hover:h-1.5"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              className="hover:scale-110 transition-transform cursor-pointer bg-white/10 px-2 py-2 rounded z-50"
              aria-label={isPlaying ? "Pause" : "Play"}
              type="button"
            >
              {isPlaying ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Time Display */}
            <div className="text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
