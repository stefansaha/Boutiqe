"use client"

import { useEffect, RefObject } from "react"

let hasUserInteracted = false
const pendingVideos: Set<HTMLVideoElement> = new Set()

type DebugLog = (msg: string) => void

export function useIOSVideoAutoplay(
  videoRef: RefObject<HTMLVideoElement | null>,
  onReady?: () => void,
  log?: DebugLog
) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const debug = (msg: string) => {
      console.log("[video-debug]", msg)
      log?.(msg)
    }

    const prepareVideo = () => {
      video.muted = true
      video.defaultMuted = true
      video.playsInline = true
      video.setAttribute("muted", "")
      video.setAttribute("playsinline", "")
      video.setAttribute("webkit-playsinline", "")
    }

    const tryPlay = async (reason: string) => {
      prepareVideo()

      debug(`--- tryPlay: ${reason} ---`)
      debug(`readyState: ${video.readyState}`)
      debug(`networkState: ${video.networkState}`)
      debug(`paused before: ${video.paused}`)
      debug(`muted: ${video.muted}`)
      debug(`defaultMuted: ${video.defaultMuted}`)
      debug(`playsInline: ${video.playsInline}`)
      debug(`currentSrc: ${video.currentSrc || "none"}`)

      try {
        await video.play()
        debug("play() success")
        debug(`paused after: ${video.paused}`)
        onReady?.()
      } catch (err: any) {
        debug(`play() failed: ${err?.name || "unknown"}`)
        debug(`message: ${err?.message || "no message"}`)
        debug(`paused after fail: ${video.paused}`)

        pendingVideos.add(video)
      }
    }

    const startAllVideos = () => {
      hasUserInteracted = true
      debug("user interaction detected")

      pendingVideos.forEach((pendingVideo) => {
        pendingVideo.muted = true
        pendingVideo.defaultMuted = true
        pendingVideo.playsInline = true
        pendingVideo.setAttribute("muted", "")
        pendingVideo.setAttribute("playsinline", "")
        pendingVideo.setAttribute("webkit-playsinline", "")

        pendingVideo
          .play()
          .then(() => {
            debug("pending video play() success after interaction")
            onReady?.()
          })
          .catch((err: any) => {
            debug(`pending video failed: ${err?.name}`)
            debug(`message: ${err?.message}`)
          })
      })

      pendingVideos.clear()
    }

    const events = {
      loadedmetadata: () => debug("event: loadedmetadata"),
      loadeddata: () => debug("event: loadeddata"),
      canplay: () => debug("event: canplay"),
      playing: () => {
        debug("event: playing")
        onReady?.()
      },
      pause: () => debug("event: pause"),
      waiting: () => debug("event: waiting"),
      stalled: () => debug("event: stalled"),
      error: () => {
        debug(`event: error code ${video.error?.code || "unknown"}`)
        debug(video.error?.message || "no error message")
      },
    }

    Object.entries(events).forEach(([event, handler]) => {
      video.addEventListener(event, handler)
    })

    document.addEventListener("touchstart", startAllVideos, { once: true, passive: true })
    document.addEventListener("click", startAllVideos, { once: true, passive: true })

    prepareVideo()

    if (video.readyState >= 2) {
      tryPlay("readyState >= 2")
    } else {
      video.addEventListener("loadeddata", () => tryPlay("loadeddata"), { once: true })
      tryPlay("initial mount")
    }

    if (hasUserInteracted && video.paused) {
      tryPlay("already interacted")
    }

    return () => {
      pendingVideos.delete(video)

      Object.entries(events).forEach(([event, handler]) => {
        video.removeEventListener(event, handler)
      })

      document.removeEventListener("touchstart", startAllVideos)
      document.removeEventListener("click", startAllVideos)
    }
  }, [videoRef, onReady, log])
}