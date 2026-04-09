"use client"

import Link from "next/link"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#1a1410] text-[#e8e0d4]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#1a1410]/95 backdrop-blur-sm border-b border-[#2a2018]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif text-xl text-[#c9a65c]">
            German Home Bier Bar
          </Link>
          <nav className="flex gap-8">
            <Link href="/" className="text-sm text-[#a89880] hover:text-[#c9a65c] transition-colors">
              Startseite
            </Link>
            <Link href="/topics" className="text-sm text-[#a89880] hover:text-[#c9a65c] transition-colors">
              Ratgeber
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-[#f5efe6] mb-6">
            Datenschutzerklarung
          </h1>
          <p className="text-[#a89880] mb-16">
            Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8 space-y-4">
                <h3 className="text-lg text-[#e8e0d4] font-medium">Allgemeine Hinweise</h3>
                <p className="text-[#a89880] leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Uberblick daruber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie personlich identifiziert werden konnen.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                2. Datenerfassung auf dieser Website
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8 space-y-6">
                <div>
                  <h3 className="text-lg text-[#e8e0d4] font-medium mb-3">Wer ist verantwortlich fur die Datenerfassung auf dieser Website?</h3>
                  <p className="text-[#a89880] leading-relaxed">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten konnen Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-[#e8e0d4] font-medium mb-3">Wie erfassen wir Ihre Daten?</h3>
                  <p className="text-[#a89880] leading-relaxed">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-[#e8e0d4] font-medium mb-3">Wofur nutzen wir Ihre Daten?</h3>
                  <p className="text-[#a89880] leading-relaxed">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewahrleisten. Andere Daten konnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                3. Ihre Rechte
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft uber Herkunft, Empfanger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder Loschung dieser Daten zu verlangen.
                </p>
                <p className="text-[#a89880] leading-relaxed">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz konnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zustandigen Aufsichtsbehorde zu.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                4. Analyse-Tools und Tools von Drittanbietern
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed">
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zuruckverfolgt werden.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                5. Hosting
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die uber eine Website generiert werden, handeln.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                6. Kontaktformular
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und fur den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="text-[#a89880] leading-relaxed">
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                7. SSL- bzw. TLS-Verschlusselung
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgrunden und zum Schutz der Ubertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlusselung. Eine verschlusselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-[#12100c] border-t border-[#2a2018]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-serif text-xl text-[#c9a65c] mb-4">German Home Bier Bar</h4>
              <p className="text-[#6b6055] text-sm leading-relaxed">
                Informationsportal uber die Kultur der deutschen Hausbar.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#c9a65c] mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-[#6b6055] hover:text-[#a89880] transition-colors">Startseite</Link></li>
                <li><Link href="/topics" className="text-[#6b6055] hover:text-[#a89880] transition-colors">Ratgeber</Link></li>
                <li><Link href="/?scrollTo=kontakt" className="text-[#6b6055] hover:text-[#a89880] transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#c9a65c] mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/datenschutz" className="text-[#6b6055] hover:text-[#a89880] transition-colors">Datenschutz</Link></li>
                <li><Link href="/cookies" className="text-[#6b6055] hover:text-[#a89880] transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#2a2018] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4a4035] text-sm">
              germanhomebierbar.com
            </p>
            <p className="text-[#4a4035] text-sm">
              &copy; {new Date().getFullYear()} German Home Bier Bar. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
