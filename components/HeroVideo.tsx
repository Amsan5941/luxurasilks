"use client";

import { useEffect, useRef, useState } from "react";

interface VideoSource {
  src: string;
  type: string;
  quality: string;
}

interface HeroVideoProps {
  videoSources: VideoSource[];
  posterUrl: string;
  className?: string;
  isBlurred?: boolean;
  onVideoLoad?: () => void;
}

export default function HeroVideo({ 
  videoSources, 
  posterUrl, 
  className = "", 
  isBlurred = false,
  onVideoLoad
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      onVideoLoad?.();
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
      onVideoLoad?.();
    };

    const handleError = (e: Event) => {
      console.error('Video loading error:', e);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, [onVideoLoad]);

  const blurClass = isBlurred ? "blur-md scale-110" : "";
  
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload={isBlurred ? "metadata" : "auto"}
      poster={posterUrl}
      className={`absolute inset-0 w-full h-full object-cover ${blurClass} ${className}`}
      style={{ 
        willChange: 'opacity',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
    >
      {videoSources.map((source, index) => (
        <source key={index} src={source.src} type={source.type} />
      ))}
      {/* Fallback for browsers that don't support video */}
      <p className="absolute inset-0 flex items-center justify-center text-white bg-black/50">
        Your browser does not support the video element.
      </p>
    </video>
  );
}