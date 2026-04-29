"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/kollektion", label: "Kollektion" },
  { href: "/ueber-uns", label: "Über mich" },
  { href: "/erlebnis", label: "Dein Besuch" },
  { href: "/standort", label: "Standort" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const showDarkNav = !isHomePage || isScrolled

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          showDarkNav
            ? "bg-white py-4 shadow-sm"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <nav className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className={cn(
                "font-serif text-xl sm:text-2xl tracking-wide transition-colors duration-300",
                showDarkNav ? "text-foreground" : "text-white"
              )}
            >
              Rinabelle
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm tracking-wide transition-colors duration-300 py-2",
                    showDarkNav 
                      ? pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      : pathname === link.href
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                  {/* Active indicator line */}
                  <span 
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px transition-all duration-300",
                      pathname === link.href 
                        ? "w-full bg-current" 
                        : "w-0 bg-current group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden relative w-10 h-10 flex items-center justify-center transition-colors z-50",
                isOpen ? "text-foreground" : showDarkNav ? "text-foreground" : "text-white"
              )}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-5">
                <span 
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300",
                    isOpen ? "top-2 rotate-45" : "top-0"
                  )} 
                />
                <span 
                  className={cn(
                    "absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300",
                    isOpen ? "opacity-0" : "opacity-100"
                  )} 
                />
                <span 
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300",
                    isOpen ? "top-2 -rotate-45" : "top-4"
                  )} 
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-400",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-[#faf9f7] transition-opacity duration-400",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-between pt-28 pb-10 px-8">
          <nav>
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li 
                  key={link.href}
                  className={cn(
                    "overflow-hidden transition-all duration-400",
                    isOpen ? "opacity-100" : "opacity-0"
                  )}
                  style={{ 
                    transitionDelay: isOpen ? `${50 + index * 40}ms` : "0ms" 
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-4 font-serif text-3xl transition-colors border-b border-border/30",
                      pathname === link.href 
                        ? "text-secondary" 
                        : "text-foreground active:text-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <div 
            className={cn(
              "transition-all duration-400",
              isOpen ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
          >
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a 
                href="https://instagram.com/rinabelle.fashion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>Lauda-Königshofen</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
