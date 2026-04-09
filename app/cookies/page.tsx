export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#1a1410] text-[#e8e0d4]">

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-[#f5efe6] mb-6">
            Cookie-Richtlinie
          </h1>
          <p className="text-[#a89880] mb-16">
            Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                1. Was sind Cookies?
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed">
                  Cookies sind kleine Textdateien, die auf Ihrem Endgerat (Computer, Tablet, Smartphone) gespeichert werden, wenn Sie unsere Website besuchen. Cookies ermoglichen es, Ihre Praferenzen zu speichern und Ihnen eine bessere Nutzererfahrung zu bieten. Einige Cookies sind technisch notwendig, damit die Website funktioniert, wahrend andere der Analyse des Nutzerverhaltens dienen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                2. Welche Cookies verwenden wir?
              </h2>
              <div className="space-y-4">
                <div className="bg-[#221a14] border border-[#2a2018] p-8">
                  <h3 className="text-lg text-[#e8e0d4] font-medium mb-3">Technisch notwendige Cookies</h3>
                  <p className="text-[#a89880] leading-relaxed mb-4">
                    Diese Cookies sind fur den Betrieb der Website unbedingt erforderlich. Sie ermoglichen grundlegende Funktionen wie die Seitennavigation und den Zugang zu sicheren Bereichen der Website.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#2a2018]">
                          <th className="text-left py-3 pr-4 text-[#c9a65c]">Cookie-Name</th>
                          <th className="text-left py-3 pr-4 text-[#c9a65c]">Zweck</th>
                          <th className="text-left py-3 text-[#c9a65c]">Speicherdauer</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#a89880]">
                        <tr className="border-b border-[#2a2018]/50">
                          <td className="py-3 pr-4">age_verified</td>
                          <td className="py-3 pr-4">Speichert die Altersbestatigung</td>
                          <td className="py-3">Sitzung</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4">session_id</td>
                          <td className="py-3 pr-4">Identifiziert die Browsersitzung</td>
                          <td className="py-3">Sitzung</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#221a14] border border-[#2a2018] p-8">
                  <h3 className="text-lg text-[#e8e0d4] font-medium mb-3">Funktionale Cookies</h3>
                  <p className="text-[#a89880] leading-relaxed mb-4">
                    Diese Cookies ermoglichen erweiterte Funktionalitaten und Personalisierung. Sie konnen von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#2a2018]">
                          <th className="text-left py-3 pr-4 text-[#c9a65c]">Cookie-Name</th>
                          <th className="text-left py-3 pr-4 text-[#c9a65c]">Zweck</th>
                          <th className="text-left py-3 text-[#c9a65c]">Speicherdauer</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#a89880]">
                        <tr>
                          <td className="py-3 pr-4">user_preferences</td>
                          <td className="py-3 pr-4">Speichert Benutzereinstellungen</td>
                          <td className="py-3">1 Jahr</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                3. Cookies verwalten und loschen
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8 space-y-4">
                <p className="text-[#a89880] leading-relaxed">
                  Sie konnen Ihren Browser so einstellen, dass Sie uber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies fur bestimmte Falle oder generell ausschliessen sowie das automatische Loschen der Cookies beim Schliessen des Browsers aktivieren.
                </p>
                <p className="text-[#a89880] leading-relaxed">
                  Bei der Deaktivierung von Cookies kann die Funktionalitat dieser Website eingeschrankt sein.
                </p>
                <div className="pt-4">
                  <h3 className="text-lg text-[#e8e0d4] font-medium mb-3">Browser-spezifische Anleitungen:</h3>
                  <ul className="text-[#a89880] space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#c9a65c] mt-2 shrink-0"></span>
                      <span>Chrome: Einstellungen &gt; Datenschutz und Sicherheit &gt; Cookies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#c9a65c] mt-2 shrink-0"></span>
                      <span>Firefox: Einstellungen &gt; Datenschutz &amp; Sicherheit &gt; Cookies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#c9a65c] mt-2 shrink-0"></span>
                      <span>Safari: Einstellungen &gt; Datenschutz &gt; Cookies und Websitedaten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#c9a65c] mt-2 shrink-0"></span>
                      <span>Edge: Einstellungen &gt; Cookies und Websiteberechtigungen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                4. Cookies von Drittanbietern
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed">
                  Diese Website verwendet moglicherweise Cookies von Drittanbietern, um bestimmte Dienste bereitzustellen. Diese Drittanbieter haben ihre eigenen Datenschutzrichtlinien, die wir empfehlen zu lesen. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Drittanbieter.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                5. Anderungen dieser Cookie-Richtlinie
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed">
                  Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu andern. Anderungen werden auf dieser Seite veroffentlicht. Wir empfehlen Ihnen, diese Seite regelmasig zu besuchen, um uber den aktuellen Stand unserer Cookie-Richtlinie informiert zu bleiben.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#c9a65c] mb-4">
                6. Kontakt
              </h2>
              <div className="bg-[#221a14] border border-[#2a2018] p-8">
                <p className="text-[#a89880] leading-relaxed mb-4">
                  Bei Fragen zu dieser Cookie-Richtlinie oder zur Verwendung von Cookies auf unserer Website konnen Sie uns jederzeit kontaktieren:
                </p>
                <p className="text-[#c9a65c]">
                  E-Mail: <a href="mailto:info@germanhomebierbar.com" className="hover:text-[#f5efe6] transition-colors underline">info@germanhomebierbar.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  )
}
