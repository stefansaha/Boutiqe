import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kontakt | Rinabelle Fashion",
  description: "Schreib mir eine Nachricht. Fragen, Terminwünsche oder einfach Hallo sagen – ich freu mich.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero with Image */}
        <section className="relative h-[45vh] sm:h-[50vh] min-h-[350px] sm:min-h-[400px]">
          <Image
            src="/images/kontakt-hero.jpg"
            alt="Kontakt"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-xl">
                <span className="text-white/60 text-xs sm:text-sm tracking-[0.2em] uppercase">Kontakt</span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-3 sm:mt-4 leading-[1.1]">
                  Lass uns reden.
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Form Side */}
              <div className="lg:col-span-7">
                <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 max-w-lg">
                  Fragen zur Kollektion? Möchtest du einen Beratungstermin? 
                  Oder einfach Hallo sagen? Schreib mir.
                </p>
                <ContactForm />
              </div>

              {/* Contact Info Side */}
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="lg:sticky lg:top-32">
                  <h2 className="font-serif text-2xl text-foreground mb-10">Direkt erreichen</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">Telefon</span>
                      <a 
                        href="tel:+4993439999999" 
                        className="block text-foreground text-lg mt-2 hover:text-secondary transition-colors"
                      >
                        +49 9343 999 999 9
                      </a>
                    </div>

                    <div>
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">E-Mail</span>
                      <a 
                        href="mailto:hallo@rinabelle.de" 
                        className="block text-foreground text-lg mt-2 hover:text-secondary transition-colors"
                      >
                        hallo@rinabelle.de
                      </a>
                    </div>

                    <div>
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">Instagram</span>
                      <a 
                        href="https://instagram.com/rinabelle.fashion" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-foreground text-lg mt-2 hover:text-secondary transition-colors"
                      >
                        @rinabelle.fashion
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Neuankünfte & Styling-Inspiration
                      </p>
                    </div>

                    <div className="pt-8 border-t border-foreground/10">
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">Adresse</span>
                      <p className="text-foreground text-lg mt-2 leading-relaxed">
                        Hauptstraße 12
                        <br />
                        97922 Lauda-Königshofen
                      </p>
                      <Link 
                        href="/standort" 
                        className="inline-flex items-center gap-3 mt-4 text-secondary hover:text-foreground transition-colors text-sm"
                      >
                        Anfahrt & Öffnungszeiten
                        <span className="w-6 h-px bg-current" />
                      </Link>
                    </div>

                    <div className="pt-8 border-t border-foreground/10">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Ich antworte meistens innerhalb von 24 Stunden. 
                        Wenn es schneller gehen soll, ruf einfach an.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-[#f8f6f3]">
          <div className="aspect-[21/9] max-h-[450px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.5!2d9.7!3d49.566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDMzJzU3LjYiTiA5wrA0MicwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Rinabelle Fashion"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
