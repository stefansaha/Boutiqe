import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kollektion | Rinabelle Fashion",
  description: "Entdecke unsere sorgfältig ausgewählte Kollektion. Elegante Kleider, Alltagslooks und besondere Styles.",
}

const categories = [
  {
    title: "Kleider",
    subtitle: "Für jeden Moment",
    description: "Luftige Sommerkleider, elegante Abendroben, lässige Wickelkleider. Ich suche Schnitte aus, die schmeicheln – nicht verkleiden.",
    image: "/images/collection-dresses.jpg",
  },
  {
    title: "Everyday Pieces",
    subtitle: "Die Basics, die keine sind",
    description: "Blusen mit dem gewissen Etwas. Hosen, die wirklich sitzen. Strick, der nicht kratzt. Stücke für jeden Tag, die trotzdem besonders sind.",
    image: "/images/collection-casual.jpg",
  },
  {
    title: "Besondere Anlässe",
    subtitle: "Wenn es zählt",
    description: "Hochzeit, Jubiläum, der eine wichtige Abend. Outfits, bei denen alle fragen: Wo hast du das her?",
    image: "/images/collection-elegant.jpg",
  },
  {
    title: "Accessoires",
    subtitle: "Die kleinen Dinge",
    description: "Schals aus feinster Wolle, handgefertigter Schmuck, Taschen mit Charakter. Das gewisse Extra.",
    image: "/images/collection-accessories.jpg",
  },
]

export default function CollectionPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero with Image */}
        <section className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px]">
          <Image
            src="/images/kollektion-hero.jpg"
            alt="Kollektion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-xl">
                <span className="text-white/60 text-xs sm:text-sm tracking-[0.2em] uppercase">Kollektion</span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-3 sm:mt-4 leading-[1.1]">
                  Weniger ist mehr.
                  <br />
                  <span className="text-white/70">Aber das Wenige muss stimmen.</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Jedes Stück in meiner Boutique habe ich selbst ausgesucht. Ich fahre zu kleinen Herstellern, 
                fühle jeden Stoff, prüfe jede Naht. Was hier hängt, würde ich selbst tragen.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
                  index !== categories.length - 1 ? "mb-16 sm:mb-24 lg:mb-32" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}>
                  <span className="text-secondary text-xs sm:text-sm tracking-[0.15em] uppercase">{category.subtitle}</span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {category.description}
                  </p>
                  <div className="mt-6 sm:mt-8 w-12 h-px bg-secondary/40" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note Section */}
        <section className="py-16 sm:py-24 bg-[#f8f6f3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4 sm:mb-6">
                  Die Kollektion wechselt
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Was du hier siehst, ist nur ein kleiner Einblick. Ich bekomme regelmäßig 
                  neue Stücke – manchmal nur wenige von jedem. Wenn dir etwas gefällt, 
                  komm lieber früher als später vorbei.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Auf Instagram zeige ich neue Arrivals oft zuerst. 
                  Folg mir, wenn du nichts verpassen willst.
                </p>
                <a 
                  href="https://instagram.com/rinabelle.fashion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 text-foreground hover:text-secondary transition-colors"
                >
                  <span className="text-sm tracking-[0.1em] uppercase">@rinabelle.fashion</span>
                  <span className="w-8 h-px bg-current" />
                </a>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/boutique-detail-1.jpg"
                  alt="Detail aus der Boutique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
                Nicht sicher, was dir steht?
              </h2>
              <p className="text-white/60 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
                Dafür bin ich da. Komm vorbei und wir finden gemeinsam heraus, 
                welche Schnitte, Farben und Stile dich am besten zur Geltung bringen.
              </p>
              <Link
                href="/erlebnis"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors text-sm sm:text-base"
              >
                So läuft ein Besuch ab
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
