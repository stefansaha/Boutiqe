"use client"

import { useRef, useEffect } from "react"

interface ShapeGridProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left"
  speed?: number
  borderColor?: string
  squareSize?: number
  className?: string
}

export function ShapeGrid({
  direction = "diagonal",
  speed = 0.3,
  borderColor = "rgba(200, 138, 155, 0.15)",
  squareSize = 50,
  className = "",
}: ShapeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const offsetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let isRunning = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      if (!isRunning) return

      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = borderColor
      ctx.lineWidth = 1

      const ox = ((offsetRef.current.x % squareSize) + squareSize) % squareSize
      const oy = ((offsetRef.current.y % squareSize) + squareSize) % squareSize

      const cols = Math.ceil(w / squareSize) + 2
      const rows = Math.ceil(h / squareSize) + 2

      ctx.beginPath()
      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const x = col * squareSize + ox
          const y = row * squareSize + oy
          ctx.rect(x, y, squareSize, squareSize)
        }
      }
      ctx.stroke()

      // Update offset based on direction
      switch (direction) {
        case "right":
          offsetRef.current.x -= speed
          break
        case "left":
          offsetRef.current.x += speed
          break
        case "up":
          offsetRef.current.y += speed
          break
        case "down":
          offsetRef.current.y -= speed
          break
        case "diagonal":
          offsetRef.current.x -= speed
          offsetRef.current.y -= speed
          break
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)

    return () => {
      isRunning = false
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [direction, speed, borderColor, squareSize])

  return (
    <canvas 
      ref={canvasRef} 
      className={`block ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
