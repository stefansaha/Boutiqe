import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Über uns | Rinabelle Fashion",
  description: "Die Geschichte hinter Rinabelle Fashion. Eine Boutique mit Herz und Leidenschaft für individuelle Damenmode.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-accent text-sm tracking-[0.15em] uppercase font-medium">Über uns</span>
              <h1 className="font-serif text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                Nicht nur ein Laden.
                <br />
                <span className="text-secondary">Eine kleine Welt für sich.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Image */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/owner-portrait.jpg"
                      alt="Ekaterina, Inhaberin von Rinabelle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Ekaterina in der Boutique, 2024
                  </p>
                </div>
              </div>

              {/* Story Text */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-foreground leading-relaxed mb-8">
                    Ich bin Ekaterina, und Rinabelle ist mein Herzensprojekt.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bevor ich diese Boutique eröffnete, habe ich Jahre in der Modebranche gearbeitet. 
                    Große Läden, schnelle Trends, hoher Druck. Irgendwann fragte ich mich: Worum geht 
                    es hier eigentlich noch?
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Mode sollte Freude machen. Sie sollte dir das Gefühl geben, genau richtig zu sein – 
                    nicht zu viel, nicht zu wenig. Einfach du, nur vielleicht ein bisschen strahlender.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bei Rinabelle gibt es keine Verkaufszahlen, die ich erreichen muss. Keine saisonale 
                    Massenware. Stattdessen: Stücke, die ich selbst tragen würde. Beratung, die ehrlich ist. 
                    Und die Zeit, die du brauchst.
                  </p>

                  <blockquote className="border-l-2 border-secondary pl-6 my-10">
                    <p className="font-serif text-foreground text-xl italic">
                      Mein Ziel ist nicht, dir etwas zu verkaufen. Mein Ziel ist, dass du dich gut fühlst.
                    </p>
                  </blockquote>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Wenn du vorbeischaust, wirst du verstehen was ich meine. Bis dahin – ich freue mich auf dich.
                  </p>

                  <p className="font-serif text-secondary text-lg mt-8">
                    Deine Ekaterina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Simple horizontal */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <span className="text-secondary font-serif text-4xl">01</span>
                <h3 className="font-serif text-xl text-foreground mt-4 mb-3">Ehrlichkeit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wenn etwas nicht sitzt, sage ich es dir. Schmeichelei bringt niemandem etwas.
                </p>
              </div>
              <div>
                <span className="text-secondary font-serif text-4xl">02</span>
                <h3 className="font-serif text-xl text-foreground mt-4 mb-3">Qualität</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jedes Stück wird mit Bedacht ausgewählt. Materialien, Verarbeitung, Passform – alles zählt.
                </p>
              </div>
              <div>
                <span className="text-secondary font-serif text-4xl">03</span>
                <h3 className="font-serif text-xl text-foreground mt-4 mb-3">Persönlichkeit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Keine Trends um der Trends willen. Mode, die zu dir passt, nicht umgekehrt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6">
              Neugierig geworden?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Am besten lernst du Rinabelle persönlich kennen. Ich freu mich auf deinen Besuch.
            </p>
            <Link
              href="/standort"
              className="inline-block px-8 py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors"
            >
              Zur Boutique
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
