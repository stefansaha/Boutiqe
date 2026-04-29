"use client"

import { useEffect, useRef, RefObject } from "react"

/**
 * iOS Safari Video Autoplay Hook
 * 
 * iOS Safari blockiert Autoplay komplett ohne User-Interaktion.
 * Dieser Hook startet das Video bei der ersten Berührung der Seite.
 */

// Globaler State um zu tracken ob bereits eine Interaktion stattfand
let hasUserInteracted = false
const pendingVideos: Set<HTMLVideoElement> = new Set()

// Globaler Event-Listener (einmalig)
if (typeof window !== "undefined") {
  const startAllVideos = () => {
    hasUserInteracted = true
    pendingVideos.forEach((video) => {
      if (video.paused) {
        video.muted = true
        video.play().catch(() => {})
      }
    })
    pendingVideos.clear()
    // Event-Listener entfernen nach erster Interaktion
    document.removeEventListener("touchstart", startAllVideos)
    document.removeEventListener("touchend", startAllVideos)
    document.removeEventListener("click", startAllVideos)
    document.removeEventListener("scroll", startAllVideos, true)
  }

  document.addEventListener("touchstart", startAllVideos, { once: true, passive: true })
  document.addEventListener("touchend", startAllVideos, { once: true, passive: true })
  document.addEventListener("click", startAllVideos, { once: true, passive: true })
  document.addEventListener("scroll", startAllVideos, { once: true, capture: true, passive: true })
}

export function useIOSVideoAutoplay(
  videoRef: RefObject<HTMLVideoElement | null>,
  onReady?: () => void
): { isPlaying: boolean } {
  const isPlayingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // iOS-spezifische Attribute setzen
    video.muted = true
    video.playsInline = true
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")
    video.setAttribute("muted", "")

    const tryPlay = async () => {
      if (isPlayingRef.current) return
      
      try {
        video.muted = true
        await video.play()
        isPlayingRef.current = true
        onReady?.()
      } catch {
        // Wenn Autoplay fehlschlägt, Video für späteren Start registrieren
        if (!hasUserInteracted) {
          pendingVideos.add(video)
        }
        onReady?.()
      }
    }

    // Sofort versuchen
    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true })
    }

    // Wenn bereits interagiert wurde, sofort abspielen
    if (hasUserInteracted && video.paused) {
      tryPlay()
    } else if (!hasUserInteracted) {
      pendingVideos.add(video)
    }

    // Cleanup
    return () => {
      pendingVideos.delete(video)
      video.removeEventListener("loadeddata", tryPlay)
    }
  }, [videoRef, onReady])

  return { isPlaying: isPlayingRef.current }
}
