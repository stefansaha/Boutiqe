"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"

// Vercel Blob URL
const VIDEO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5704899-uhd_4096_2160_24fps%20%281%29-4x9TYP7x6hUlQyIHdXXUnGOqdeGJUX.mp4"

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // iOS Safari: Videos müssen sichtbar sein um abzuspielen
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: "100px" }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const attemptPlay = useCallback(async () => {
    const video = videoRef.current
    if (!video) return

    // iOS Safari: Diese Properties MÜSSEN vor play() gesetzt sein
    video.muted = true
    video.volume = 0

    try {
      await video.play()
      video.playbackRate = 0.8
    } catch {
      // iOS Low Power Mode - Video bleibt pausiert
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // iOS: Attribute direkt auf dem DOM-Element setzen
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")
    video.setAttribute("muted", "")

    if (isVisible) {
      const handleCanPlay = () => attemptPlay()
      video.addEventListener("canplaythrough", handleCanPlay, { once: true })

      // Sofort versuchen falls bereits geladen
      if (video.readyState >= 3) {
        attemptPlay()
      }

      return () => {
        video.removeEventListener("canplaythrough", handleCanPlay)
      }
    } else {
      // Pausieren wenn nicht sichtbar
      if (!video.paused) {
        video.pause()
      }
    }
  }, [isVisible, attemptPlay])

  return (
    <section ref={sectionRef} className="relative pt-20 sm:pt-28 pb-24 lg:pb-32 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* iOS Safari Video: muted + playsinline + autoplay */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={VIDEO_URL}
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl leading-snug mb-4 sm:mb-6">
              Lust auf einen Besuch?
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              Montag bis Freitag, 10 bis 18 Uhr. Samstag bis 14 Uhr. Kein Termin nötig – einfach vorbeikommen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">Adresse</span>
              <p className="text-white mt-2 text-sm sm:text-base">
                Hauptstraße 12<br />97922 Lauda-Königshofen
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">Kontakt</span>
              <p className="text-white mt-2 text-sm sm:text-base">
                hallo@rinabelle.de<br />+49 9343 999 999 9
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">Social</span>
              <p className="mt-2">
                <a href="https://instagram.com/rinabelle.fashion" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors text-sm sm:text-base">@rinabelle.fashion</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/standort" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors text-center text-sm sm:text-base">
              Anfahrt planen
            </Link>
            <Link href="/kontakt" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors text-center text-sm sm:text-base">
              Nachricht schreiben
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
