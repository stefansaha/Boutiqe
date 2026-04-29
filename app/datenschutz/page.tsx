import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutz | Rinabelle Fashion",
  description: "Datenschutzerklärung der Rinabelle Fashion Boutique. Informationen zur Verarbeitung personenbezogener Daten.",
  robots: "noindex, follow",
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <article className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-12">Datenschutzerklärung</h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
                  <h3 className="font-medium text-foreground mb-2 mt-6">Allgemeine Hinweise</h3>
                  <p className="leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">2. Verantwortliche Stelle</h2>
                  <p className="leading-relaxed mb-4">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="leading-relaxed">
                    Rinabelle Fashion
                    <br />
                    Ekaterina Musterfrau
                    <br />
                    Hauptstraße 12
                    <br />
                    97922 Lauda-Königshofen
                    <br />
                    <br />
                    Telefon: +49 9343 999 999 9
                    <br />
                    E-Mail: hallo@rinabelle.de
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
                  
                  <h3 className="font-medium text-foreground mb-2 mt-6">Kontaktformular</h3>
                  <p className="leading-relaxed mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                    dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                    Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="leading-relaxed">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                    sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
                    Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  </p>

                  <h3 className="font-medium text-foreground mb-2 mt-6">Server-Log-Dateien</h3>
                  <p className="leading-relaxed">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                    so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                    Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, 
                    Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">4. Analyse-Tools und Werbung</h2>
                  
                  <h3 className="font-medium text-foreground mb-2 mt-6">Vercel Analytics</h3>
                  <p className="leading-relaxed">
                    Diese Website nutzt Vercel Analytics, einen Webanalysedienst. Vercel Analytics 
                    erfasst anonymisierte Daten über die Nutzung der Website, ohne persönliche Daten 
                    zu speichern. Es werden keine Cookies verwendet und keine IP-Adressen gespeichert.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">5. Externe Dienste</h2>
                  
                  <h3 className="font-medium text-foreground mb-2 mt-6">Google Maps</h3>
                  <p className="leading-relaxed">
                    Diese Website nutzt Google Maps zur Darstellung von Karten. Bei der Nutzung von 
                    Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen 
                    durch Besucher der Webseiten erhoben, verarbeitet und genutzt. Nähere Informationen 
                    finden Sie in der Datenschutzerklärung von Google.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="font-serif text-xl text-foreground mb-4">6. Ihre Rechte</h2>
                  <p className="leading-relaxed mb-4">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
                    und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
                    außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                  </p>
                  <p className="leading-relaxed">
                    Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese 
                    jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                    Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">7. Aktualität</h2>
                  <p className="leading-relaxed">
                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: Januar 2024.
                    <br /><br />
                    Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher 
                    beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese 
                    Datenschutzerklärung zu ändern.
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
