"use client"

import Image from "next/image"
import Link from "next/link"

const looks = [
  {
    title: "Kleider",
    image: "/images/fashion-1.jpg",
  },
  {
    title: "Everyday",
    image: "/images/fashion-2.jpg",
  },
  {
    title: "Besonderes",
    image: "/images/fashion-3.jpg",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header with asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-snug">
              Drei Kategorien,
              <br />
              <span className="text-secondary">unendlich viele Möglichkeiten</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground">
              Jedes Stück erzählt eine Geschichte. Welche wird deine?
            </p>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {/* Large Image */}
          <Link
            href="/kollektion"
            className="group md:col-span-7 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted"
          >
            <Image
              src={looks[0].image}
              alt={looks[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 lg:p-8">
              <span className="text-white/60 text-sm tracking-wider uppercase">01</span>
              <h3 className="font-serif text-white text-2xl lg:text-3xl mt-1">{looks[0].title}</h3>
            </div>
          </Link>

          {/* Two stacked images */}
          <div className="md:col-span-5 grid grid-rows-2 gap-4 lg:gap-6">
            {looks.slice(1).map((look, index) => (
              <Link
                key={look.title}
                href="/kollektion"
                className="group relative aspect-[4/3] overflow-hidden bg-muted"
              >
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 lg:p-6">
                  <span className="text-white/60 text-sm tracking-wider uppercase">0{index + 2}</span>
                  <h3 className="font-serif text-white text-xl lg:text-2xl mt-1">{look.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/kollektion"
            className="group inline-flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
          >
            <span className="font-medium">Alle Styles entdecken</span>
            <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  )
}
