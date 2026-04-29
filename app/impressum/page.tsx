import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Impressum | Rinabelle Fashion",
  description: "Impressum und rechtliche Angaben der Rinabelle Fashion Boutique in Lauda-Königshofen.",
  robots: "noindex, follow",
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <article className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-12">Impressum</h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                  <p className="leading-relaxed">
                    Rinabelle Fashion
                    <br />
                    Ekaterina Musterfrau
                    <br />
                    Hauptstraße 12
                    <br />
                    97922 Lauda-Königshofen
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">Kontakt</h2>
                  <p className="leading-relaxed">
                    Telefon: +49 9343 999 999 9
                    <br />
                    E-Mail: hallo@rinabelle.de
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">Umsatzsteuer-ID</h2>
                  <p className="leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                    <br />
                    DE XXX XXX XXX
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <p className="leading-relaxed">
                    Ekaterina Musterfrau
                    <br />
                    Hauptstraße 12
                    <br />
                    97922 Lauda-Königshofen
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">Streitschlichtung</h2>
                  <p className="leading-relaxed mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-foreground transition-colors ml-1"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                    vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">Haftung für Inhalte</h2>
                  <p className="leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
                    wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte 
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">Haftung für Links</h2>
                  <p className="leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                    keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                    Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
