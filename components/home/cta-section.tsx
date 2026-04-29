"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

// Vercel Blob URL - H.264 encoded MP4 für beste iOS Kompatibilität
const VIDEO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5704899-uhd_4096_2160_24fps%20%281%29-4x9TYP7x6hUlQyIHdXXUnGOqdeGJUX.mp4"

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasAttemptedPlay = useRef(false)

  // iOS Safari: Videos müssen sichtbar sein um abzuspielen
  // Intersection Observer zum Starten wenn sichtbar
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // iOS Safari: Muted + playsInline sind PFLICHT für Autoplay
    video.muted = true
    video.playsInline = true
    video.volume = 0

    const attemptPlay = async () => {
      if (hasAttemptedPlay.current && !isVisible) return

      try {
        // iOS benötigt manchmal einen kurzen Delay
        await new Promise(resolve => setTimeout(resolve, 100))

        const playPromise = video.play()
        if (playPromise !== undefined) {
          await playPromise
          hasAttemptedPlay.current = true
          // Nur playbackRate setzen NACHDEM Video läuft
          video.playbackRate = 0.8
        }
      } catch {
        // iOS Low Power Mode oder andere Blockierung - Video bleibt pausiert
      }
    }

    const pauseVideo = () => {
      if (video && !video.paused) {
        video.pause()
      }
    }

    if (isVisible) {
      // Video starten wenn sichtbar
      if (video.readyState >= 2) {
        attemptPlay()
      } else {
        video.addEventListener("loadeddata", attemptPlay, { once: true })
      }
    } else {
      // iOS: Video pausieren wenn nicht sichtbar (spart Batterie)
      pauseVideo()
    }

    return () => {
      video.removeEventListener("loadeddata", attemptPlay)
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
          // iOS Safari: preload="metadata" ist besser für Performance
          preload="metadata"
          controls={false}

          webkit-playsinline="true"
          x-webkit-airplay="deny"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover"
        >
          {/* Codec-Hint hilft iOS bei der Erkennung */}
          <source src={VIDEO_URL} type="video/mp4; codecs=avc1.42E01E, mp4a.40.2" />
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
