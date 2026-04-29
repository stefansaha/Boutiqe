"use client"

import Image from "next/image"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f8f6f3]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src="/images/boutique-interior.jpg"
                alt="Rinabelle Boutique"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping element */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 w-48 lg:w-64 bg-white p-6 lg:p-8 shadow-lg">
              <p className="font-serif text-secondary text-lg lg:text-xl italic leading-relaxed">
                &ldquo;Ich möchte, dass du dich schön fühlst – nicht verkleidet.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-3">— Ekaterina</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:pl-8">
            <span className="text-accent text-sm tracking-[0.15em] uppercase font-medium">Die Geschichte</span>

            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mt-4 mb-6 leading-snug">
              Ein kleiner Laden miterladeb
              <br />
              großem Herz
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Als ich Rinabelle eröffnete, hatte ich einen einfachen Gedanken: Mode muss sich
                gut anfühlen. Nicht nur auf der Haut, sondern im ganzen Selbst.
              </p>
              <p>
                Hier gibt es keine aufdringliche Verkaufsmasche. Hier gibt es ehrliche Meinungen,
                einen Kaffee wenn du magst, und die Zeit, die du brauchst.
              </p>
            </div>

            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-3 mt-8 text-foreground hover:text-secondary transition-colors group"
            >
              <span className="font-medium">Mehr erfahren</span>
              <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
            </Link>
          </div>
        </div>
      </div>


    </section>
  )
}
