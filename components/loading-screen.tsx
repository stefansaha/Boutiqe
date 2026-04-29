"use client"

import { useEffect, useState } from "react"
import { TypingDotsLoader } from "react-loaderkit"

interface LoadingScreenProps {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      // Start fade out
      setIsVisible(false)
      // Remove from DOM after animation
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000] transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Elegant loading content */}
      <div className="flex flex-col items-center gap-8">
        {/* Logo / Brand */}
        <h1 className="font-serif text-white text-3xl sm:text-4xl tracking-wide">
          Rinabelle
        </h1>

        {/* Loader */}
        <TypingDotsLoader
          size={128}
          color="#FFFFFF"
          speed={1.2}
        />

        {/* Quote */}
        <p className="text-white text-sm sm:text-base tracking-wide max-w-xs text-center font-light italic">
          Schönheit braucht einen Moment...
        </p>
      </div>
    </div>
  )
}
