import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Standort | Rinabelle Fashion",
  description: "Finde uns in Lauda-Königshofen. Adresse, Öffnungszeiten und Anfahrt zur Boutique.",
}

const openingHours = [
  { day: "Montag", hours: "10 – 18 Uhr" },
  { day: "Dienstag", hours: "10 – 18 Uhr" },
  { day: "Mittwoch", hours: "10 – 18 Uhr" },
  { day: "Donnerstag", hours: "10 – 18 Uhr" },
  { day: "Freitag", hours: "10 – 18 Uhr" },
  { day: "Samstag", hours: "10 – 14 Uhr" },
  { day: "Sonntag", hours: "geschlossen" },
]

export default function LocationPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-accent text-sm tracking-[0.15em] uppercase font-medium">Standort</span>
              <h1 className="font-serif text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                Komm vorbei.
                <br />
                <span className="text-secondary">Die Tür ist offen.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Map & Info */}
        <section className="py-20 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Map */}
              <div className="lg:col-span-7">
                <div className="aspect-square lg:aspect-[4/3] overflow-hidden bg-muted">
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
              </div>

              {/* Info */}
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="space-y-10">
                  {/* Address */}
                  <div>
                    <h2 className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-4">Adresse</h2>
                    <p className="text-foreground text-lg leading-relaxed">
                      Rinabelle Fashion
                      <br />
                      Hauptstraße 12
                      <br />
                      97922 Lauda-Königshofen
                    </p>
                    <a
                      href="https://maps.google.com/?q=Hauptstraße+12+97922+Lauda-Königshofen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-secondary hover:text-foreground transition-colors text-sm"
                    >
                      In Google Maps öffnen
                      <span className="w-4 h-px bg-current" />
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h2 className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-4">Öffnungszeiten</h2>
                    <div className="space-y-2">
                      {openingHours.map((item) => (
                        <div key={item.day} className="flex justify-between text-foreground">
                          <span>{item.day}</span>
                          <span className={item.hours === "geschlossen" ? "text-muted-foreground" : ""}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h2 className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-4">Kontakt</h2>
                    <div className="space-y-2 text-foreground">
                      <a href="tel:+4993439999999" className="block hover:text-secondary transition-colors">
                        +49 9343 999 999 9
                      </a>
                      <a href="mailto:hallo@rinabelle.de" className="block hover:text-secondary transition-colors">
                        hallo@rinabelle.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl text-foreground mb-12">Anfahrt</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
              <div>
                <h3 className="font-medium text-foreground mb-3">Mit dem Auto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Über die A81 (Ausfahrt Boxberg) oder A3 (Ausfahrt Wertheim). 
                  Kostenlose Parkplätze gibt es direkt in der Innenstadt, 
                  nur eine Minute zu Fuß von der Boutique.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Mit der Bahn</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Der Bahnhof Lauda liegt an der Frankenbahn (Würzburg – Stuttgart). 
                  Von dort sind es etwa 5 Minuten zu Fuß zur Hauptstraße.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6">
              Fragen? Schreib mir.
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Ob Terminanfrage, Frage zur Kollektion oder einfach Hallo sagen – 
              ich antworte meistens noch am selben Tag.
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors"
            >
              Nachricht schreiben
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
