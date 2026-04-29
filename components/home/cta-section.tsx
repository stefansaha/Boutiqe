"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

// Vercel Blob URL - besser für iOS Autoplay
const VIDEO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5704899-uhd_4096_2160_24fps%20%281%29-4x9TYP7x6hUlQyIHdXXUnGOqdeGJUX.mp4"

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Use Intersection Observer to play video when section is visible
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isVisible) return

    // Critical iOS settings
    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    video.autoplay = true
    video.loop = true
    video.preload = "auto"

    video.setAttribute("muted", "")
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")
    video.setAttribute("autoplay", "")

    video.playbackRate = 0.8

    let playAttempts = 0
    const maxAttempts = 10

    const attemptPlay = async () => {
      if (playAttempts >= maxAttempts) return

      playAttempts++
      video.muted = true
      video.volume = 0

      try {
        if (video.readyState < 2) {
          video.load()
        }
        await video.play()
      } catch {
        setTimeout(attemptPlay, 200)
      }
    }

    attemptPlay()

    const onReady = () => attemptPlay()
    video.addEventListener("loadedmetadata", onReady)
    video.addEventListener("loadeddata", onReady)
    video.addEventListener("canplay", onReady)

    return () => {
      video.removeEventListener("loadedmetadata", onReady)
      video.removeEventListener("loadeddata", onReady)
      video.removeEventListener("canplay", onReady)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative pt-20 sm:pt-28 pb-24 lg:pb-32 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          className="w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
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
