"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { LoadingScreen } from "@/components/loading-screen"
import { useIOSVideoAutoplay } from "@/lib/use-ios-video-autoplay"

// Vercel Blob URL
const VIDEO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8386975-uhd_4096_2160_25fps%20%281%29%20%281%29-w0ze6gWvgrrNeCaWGXH3aWF9gfqVHc.mp4"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleReady = useCallback(() => {
    setIsVideoReady(true)
    setIsLoading(false)
  }, [])

  // iOS Video Autoplay Hook - startet bei erster Berührung
  useIOSVideoAutoplay(videoRef, handleReady)

  // Fallback-Timer falls nichts passiert
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
      setIsVideoReady(true)
    }, 4000)

    return () => clearTimeout(fallbackTimer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <section className="relative h-svh min-h-[500px] sm:min-h-[600px] max-h-[900px]">
        <div className="absolute inset-0 bg-[#000000] overflow-hidden">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{
              opacity: isVideoReady ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={VIDEO_URL}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/20" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-xl">
              <span className="inline-block text-white/70 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6">
                Lauda-Königshofen
              </span>

              <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 sm:mb-6">
                Mode, die sich
                <br />
                <span className="italic">anfühlt wie du</span>
              </h1>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
                Persönliche Beratung, handverlesene Stücke und eine Atmosphäre zum Wohlfühlen. Komm vorbei.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/kollektion"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#e8b4b8] text-[#1a1a1a] font-medium hover:bg-[#dba5a9] transition-colors text-center"
                >
                  Kollektion ansehen
                </Link>
                <Link
                  href="/standort"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-white/40 text-white font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Boutique finden
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="w-px h-10 sm:h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>
    </>
  )
}
