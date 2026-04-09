export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#1a1410] text-[#e8e0d4]">

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-[#f5efe6] mb-6">
            Datenschutzerklarung
          </h1>
          <p className="text-[#a89880] mb-16">
            Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-12">
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

    </div>
  )
}
