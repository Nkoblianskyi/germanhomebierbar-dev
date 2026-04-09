'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function TopicsPage() {
  const [activeSection, setActiveSection] = useState('beleuchtung')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beleuchtung', 'moebel', 'lagerung', 'dekoration', 'fehler']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f4ed]">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#1a1410] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-bar.jpg"
            alt="Hintergrund"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#c9a65c] text-sm tracking-[0.3em] uppercase mb-4 block">
            Umfassender Leitfaden
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#f5efe6] mb-6">
            Einrichtungsratgeber
          </h1>
          <p className="text-[#a89880] max-w-2xl mx-auto leading-relaxed">
            Alles, was Sie uber Beleuchtung, Mobel, Bierlagerung, Dekoration 
            und typische Anfangerfehler wissen mussen.
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 bg-[#f8f4ed] border-b border-[#e0d8c8] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto pb-2">
            {[
              { id: 'beleuchtung', label: 'Beleuchtung' },
              { id: 'moebel', label: 'Mobel' },
              { id: 'lagerung', label: 'Bierlagerung' },
              { id: 'dekoration', label: 'Dekoration' },
              { id: 'fehler', label: 'Typische Fehler' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm whitespace-nowrap transition-colors ${
                  activeSection === item.id 
                    ? 'text-[#8b5a2b] font-medium' 
                    : 'text-[#6d5d4d] hover:text-[#8b5a2b]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        {/* Beleuchtung */}
        <section id="beleuchtung" className="mb-32 scroll-mt-40">
          <div className="mb-12">
            <span className="text-[#8b5a2b] text-sm tracking-[0.3em] uppercase mb-4 block">01</span>
            <h2 className="text-4xl font-serif text-[#2a2018] mb-6">Beleuchtung</h2>
            <p className="text-[#5a4a3a] leading-relaxed text-lg">
              Die richtige Beleuchtung ist entscheidend fur die Atmosphare Ihrer Hausbar. 
              Sie sollte funktional sein, aber auch eine gemutliche Stimmung erzeugen.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-[#e0d8c8] p-8">
              <h3 className="text-2xl font-serif text-[#2a2018] mb-4">Grundbeleuchtung</h3>
              <p className="text-[#5a4a3a] leading-relaxed mb-6">
                Die Grundbeleuchtung sorgt fur eine gleichmassige Ausleuchtung des Raumes. 
                Vermeiden Sie zu helles, kaltes Licht - warmweisse LED mit 2700-3000 Kelvin sind ideal.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-[#c9a65c] pl-6">
                  <span className="text-xs text-[#8b5a2b] tracking-[0.2em] uppercase block mb-2">Empfohlen</span>
                  <p className="text-[#2a2018]">Einbaustrahler mit Dimmer, Deckenleuchten im passenden Stil</p>
                </div>
                <div className="border-l-2 border-[#c9a65c] pl-6">
                  <span className="text-xs text-[#8b5a2b] tracking-[0.2em] uppercase block mb-2">Farbtemperatur</span>
                  <p className="text-[#2a2018]">2700-3000 Kelvin (warmweiss)</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e0d8c8] p-8">
              <h3 className="text-2xl font-serif text-[#2a2018] mb-4">Akzentbeleuchtung</h3>
              <p className="text-[#5a4a3a] leading-relaxed mb-6">
                Akzentlichter heben besondere Bereiche hervor und schaffen Tiefe. 
                Sie sind das Geheimnis fur eine professionell wirkende Bar-Atmosphare.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-1 h-1 bg-[#c9a65c] mt-3 shrink-0"></span>
                  <div>
                    <span className="text-[#2a2018] font-medium">LED-Streifen unter der Theke</span>
                    <p className="text-[#6d5d4d] text-sm mt-1">Schaffen eine schwebende Optik und indirektes Licht</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-1 h-1 bg-[#c9a65c] mt-3 shrink-0"></span>
                  <div>
                    <span className="text-[#2a2018] font-medium">Regalbeleuchtung</span>
                    <p className="text-[#6d5d4d] text-sm mt-1">Setzen Sie Ihre Flaschen und Glaser gekonnt in Szene</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-1 h-1 bg-[#c9a65c] mt-3 shrink-0"></span>
                  <div>
                    <span className="text-[#2a2018] font-medium">Pendelleuchten uber der Theke</span>
                    <p className="text-[#6d5d4d] text-sm mt-1">Definieren den Barbereich und bieten Arbeitslicht</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-1 h-1 bg-[#c9a65c] mt-3 shrink-0"></span>
                  <div>
                    <span className="text-[#2a2018] font-medium">Kerzen und Laternen</span>
                    <p className="text-[#6d5d4d] text-sm mt-1">Fur zusatzliche Warme und Gemutlichkeit</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2018] p-8 text-[#f5efe6]">
              <h4 className="text-[#c9a65c] text-sm tracking-[0.2em] uppercase mb-3">Profi-Tipp</h4>
              <p className="leading-relaxed">
                Installieren Sie mehrere unabhangige Lichtquellen mit Dimmern. 
                So konnen Sie die Stimmung je nach Anlass von hell und gesellig 
                bis intim und gedampft variieren.
              </p>
            </div>
          </div>
        </section>

        {/* Mobel */}
        <section id="moebel" className="mb-32 scroll-mt-40">
          <div className="mb-12">
            <span className="text-[#8b5a2b] text-sm tracking-[0.3em] uppercase mb-4 block">02</span>
            <h2 className="text-4xl font-serif text-[#2a2018] mb-6">Mobel</h2>
            <p className="text-[#5a4a3a] leading-relaxed text-lg">
              Die Auswahl der richtigen Mobel bestimmt sowohl die Funktionalitat 
              als auch die Asthetik Ihrer Hausbar.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-[#e0d8c8] p-8">
                <span className="text-5xl font-serif text-[#c9a65c] block mb-4">01</span>
                <h3 className="text-xl font-serif text-[#2a2018] mb-3">Bartheke</h3>
                <p className="text-[#6d5d4d] text-sm leading-relaxed">
                  Das Herzstuck jeder Bar. Achten Sie auf die richtige Hohe (105-115 cm), 
                  ausreichend Tiefe fur Getranke und eine strapazierhige Oberflache.
                </p>
              </div>
              <div className="bg-white border border-[#e0d8c8] p-8">
                <span className="text-5xl font-serif text-[#c9a65c] block mb-4">02</span>
                <h3 className="text-xl font-serif text-[#2a2018] mb-3">Barhocker</h3>
                <p className="text-[#6d5d4d] text-sm leading-relaxed">
                  Wahlen Sie Hocker mit einer Sitzhohe von 75-85 cm. 
                  Ruckenlehnen und Fussrasten erhohen den Komfort erheblich.
                </p>
              </div>
              <div className="bg-white border border-[#e0d8c8] p-8">
                <span className="text-5xl font-serif text-[#c9a65c] block mb-4">03</span>
                <h3 className="text-xl font-serif text-[#2a2018] mb-3">Regalsystem</h3>
                <p className="text-[#6d5d4d] text-sm leading-relaxed">
                  Offene Regale prasentieren Ihre Sammlung. 
                  Geschlossene Schranke schutzen wertvolle Flaschen vor Licht.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e0d8c8] p-8">
              <h3 className="text-2xl font-serif text-[#2a2018] mb-6">Materialempfehlungen nach Stil</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#8b5a2b] font-medium mb-3">Rustikal</h4>
                  <p className="text-[#6d5d4d] text-sm leading-relaxed">
                    Massives Eichen- oder Fichtenholz, gealtertes Metall, Naturstein. 
                    Authentische Oberflachen mit sichtbarer Maserung.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#8b5a2b] font-medium mb-3">Modern</h4>
                  <p className="text-[#6d5d4d] text-sm leading-relaxed">
                    Hochglanzlacke, Glas, Edelstahl, helles Holz. 
                    Klare Kanten und minimalistische Formen.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#8b5a2b] font-medium mb-3">Vintage</h4>
                  <p className="text-[#6d5d4d] text-sm leading-relaxed">
                    Patiniertes Messing, geoltes Leder, dunkles Mahagoni. 
                    Samt und Velours fur Polsterungen.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#8b5a2b] font-medium mb-3">Industrial</h4>
                  <p className="text-[#6d5d4d] text-sm leading-relaxed">
                    Rohstahl, sichtbare Schweissnahte, recyceltes Holz. 
                    Kombinieren Sie raue Texturen mit glatten Oberflachen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bierlagerung */}
        <section id="lagerung" className="mb-32 scroll-mt-40">
          <div className="mb-12">
            <span className="text-[#8b5a2b] text-sm tracking-[0.3em] uppercase mb-4 block">03</span>
            <h2 className="text-4xl font-serif text-[#2a2018] mb-6">Bierlagerung</h2>
            <p className="text-[#5a4a3a] leading-relaxed text-lg">
              Die korrekte Lagerung von Bier ist entscheidend fur den Geschmack. 
              Jede Biersorte hat ihre optimale Trinktemperatur.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-[#2a2018] p-8">
              <h3 className="text-2xl font-serif text-[#f5efe6] mb-6">Optimale Temperaturen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-[#c9a65c] pl-6">
                  <span className="text-[#c9a65c] text-2xl font-serif block mb-1">4-6 C</span>
                  <span className="text-[#a89880] text-sm">Lager, Pilsner, Helles</span>
                </div>
                <div className="border-l-2 border-[#c9a65c] pl-6">
                  <span className="text-[#c9a65c] text-2xl font-serif block mb-1">6-8 C</span>
                  <span className="text-[#a89880] text-sm">Kolsch, Weissbier, Marzen</span>
                </div>
                <div className="border-l-2 border-[#c9a65c] pl-6">
                  <span className="text-[#c9a65c] text-2xl font-serif block mb-1">8-10 C</span>
                  <span className="text-[#a89880] text-sm">Altbier, Bockbier, Dunkles</span>
                </div>
                <div className="border-l-2 border-[#c9a65c] pl-6">
                  <span className="text-[#c9a65c] text-2xl font-serif block mb-1">10-14 C</span>
                  <span className="text-[#a89880] text-sm">Starkbier, Craft Beer, Belgische Ales</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e0d8c8] p-8">
              <h3 className="text-2xl font-serif text-[#2a2018] mb-6">Kuhllosungen</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <span className="text-[#c9a65c] font-serif text-xl shrink-0">A</span>
                  <div>
                    <h4 className="text-[#2a2018] font-medium mb-2">Getranke-Kuhlschrank</h4>
                    <p className="text-[#6d5d4d] text-sm leading-relaxed">
                      Die praktischste Losung fur die meisten Hausbars. 
                      Modelle mit Glasturen prasentieren Ihre Sammlung stilvoll. 
                      Achten Sie auf einstellbare Temperaturbereiche.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-[#c9a65c] font-serif text-xl shrink-0">B</span>
                  <div>
                    <h4 className="text-[#2a2018] font-medium mb-2">Zapfanlage</h4>
                    <p className="text-[#6d5d4d] text-sm leading-relaxed">
                      Fur das authentische Kneipenerlebnis. 
                      Kompakte Systeme fur 5-Liter-Fasser sind erschwinglich und platzsparend. 
                      Professionelle Anlagen fur echte Enthusiasten.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-[#c9a65c] font-serif text-xl shrink-0">C</span>
                  <div>
                    <h4 className="text-[#2a2018] font-medium mb-2">Weinklimaschrank</h4>
                    <p className="text-[#6d5d4d] text-sm leading-relaxed">
                      Geeignet fur Craft Beers und belgische Ales, die bei hoheren Temperaturen 
                      gelagert werden. Mehrere Temperaturzonen sind ideal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f0e8] border border-[#e0d8c8] p-8">
              <h4 className="text-[#8b5a2b] text-sm tracking-[0.2em] uppercase mb-3">Wichtig zu wissen</h4>
              <ul className="space-y-2 text-[#5a4a3a] text-sm">
                <li className="flex gap-3">
                  <span className="w-1 h-1 bg-[#8b5a2b] mt-2 shrink-0"></span>
                  Lagern Sie Bier immer dunkel - UV-Licht zerstort den Geschmack
                </li>
                <li className="flex gap-3">
                  <span className="w-1 h-1 bg-[#8b5a2b] mt-2 shrink-0"></span>
                  Flaschen stehend lagern, um den Kronkorken vor Feuchtigkeit zu schutzen
                </li>
                <li className="flex gap-3">
                  <span className="w-1 h-1 bg-[#8b5a2b] mt-2 shrink-0"></span>
                  Temperaturschwankungen vermeiden - konstante Kuhlung ist entscheidend
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dekoration */}
        <section id="dekoration" className="mb-32 scroll-mt-40">
          <div className="mb-12">
            <span className="text-[#8b5a2b] text-sm tracking-[0.3em] uppercase mb-4 block">04</span>
            <h2 className="text-4xl font-serif text-[#2a2018] mb-6">Dekoration</h2>
            <p className="text-[#5a4a3a] leading-relaxed text-lg">
              Die richtigen Accessoires verleihen Ihrer Bar Personlichkeit und Authentizitat. 
              Weniger ist oft mehr - wahlen Sie mit Bedacht.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Bierkruge', desc: 'Traditionelle Steinzeug- oder Glasskruge als Sammlerstucke' },
              { name: 'Vintage-Schilder', desc: 'Alte Brauerei-Reklame und emaillierte Blechtafeln' },
              { name: 'Bierdeckel', desc: 'Gerahmte Sammlungen oder als Untersetzer im Einsatz' },
              { name: 'Glaser-Set', desc: 'Stilgerechte Glaser fur jede Biersorte' },
              { name: 'Flaschenoffner', desc: 'Wandmontierte Klassiker aus Gusseisen oder Messing' },
              { name: 'Bar-Spiegel', desc: 'Vergrossern den Raum optisch und reflektieren Licht' },
              { name: 'Pflanzen', desc: 'Hopfen-Ranken oder robuste Grunpflanzen fur Frische' },
              { name: 'Holzfasser', desc: 'Dekorativ oder funktional als Stehtisch nutzbar' },
              { name: 'Beleuchtete Regale', desc: 'Setzen Sie Ihre Flaschensammlung in Szene' }
            ].map((item) => (
              <div key={item.name} className="bg-white border border-[#e0d8c8] p-6 hover:border-[#c9a65c] transition-colors">
                <h3 className="text-lg font-serif text-[#2a2018] mb-2">{item.name}</h3>
                <p className="text-[#6d5d4d] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#2a2018] p-8">
            <h4 className="text-[#c9a65c] text-sm tracking-[0.2em] uppercase mb-4">Stilregel</h4>
            <p className="text-[#e8dcc8] leading-relaxed">
              Bleiben Sie bei einem Stilkonzept und mischen Sie nicht zu viele verschiedene Epochen 
              oder Asthetiken. Eine rustikale Bar braucht keine Neonrohren, eine moderne Bar keine 
              antiken Bierkruge. Konsistenz schafft Atmosphare.
            </p>
          </div>
        </section>

        {/* Typische Fehler */}
        <section id="fehler" className="scroll-mt-40">
          <div className="mb-12">
            <span className="text-[#8b5a2b] text-sm tracking-[0.3em] uppercase mb-4 block">05</span>
            <h2 className="text-4xl font-serif text-[#2a2018] mb-6">Typische Anfangerfehler</h2>
            <p className="text-[#5a4a3a] leading-relaxed text-lg">
              Vermeiden Sie diese haufigen Fehler, um Zeit, Geld und Frustration zu sparen.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                fehler: 'Unzureichende Beluftung',
                folge: 'Schimmelbildung, muffiger Geruch, ungesundes Raumklima',
                loesung: 'Installieren Sie eine angemessene Luftungsanlage, besonders im Keller oder geschlossenen Raumen.'
              },
              {
                fehler: 'Falsche Thekenhohe',
                folge: 'Unbequemes Sitzen, Ruckenschmerzen, fehlende Geselligkeit',
                loesung: 'Standardhohe 105-115 cm fur Stehtische, 90-95 cm fur Sitzbars. Hocker entsprechend anpassen.'
              },
              {
                fehler: 'Zu helle Beleuchtung',
                folge: 'Kalte, unwirtliche Atmosphare ohne Gemutlichkeit',
                loesung: 'Warmweisses Licht (2700-3000K), Dimmer installieren, mehrere Lichtquellen kombinieren.'
              },
              {
                fehler: 'Mangelnde Stromversorgung',
                folge: 'Uberlastete Sicherungen, keine Anschlusse fur Kuhlschrank und Zapfanlage',
                loesung: 'Planen Sie mindestens 2-3 separate Stromkreise fur Ihre Bar ein.'
              },
              {
                fehler: 'Fehlende Wasserversorgung',
                folge: 'Umstandliches Reinigen, kein Ausguss fur Reste',
                loesung: 'Ein kleines Spulbecken ist Gold wert - planen Sie es von Anfang an ein.'
              },
              {
                fehler: 'Billige Materialien',
                folge: 'Schneller Verschleiss, unschone Optik, haufiger Austausch',
                loesung: 'Investieren Sie in Qualitat bei Theke und Hockern - sie werden taglich beansprucht.'
              },
              {
                fehler: 'Vernachlassigter Stauraum',
                folge: 'Chaos, keine Ordnung, standiges Suchen',
                loesung: 'Planen Sie grosszugig Schranke, Regale und Schubladen fur Glaser, Zubehor und Vorrate.'
              },
              {
                fehler: 'Ignorierte Akustik',
                folge: 'Hall, schlechte Sprachverstandlichkeit, unangenehme Lautstarke',
                loesung: 'Textilien, Teppiche und Akustikpaneele dampfen den Schall effektiv.'
              },
              {
                fehler: 'Fehlende Planung',
                folge: 'Nachtragliche teure Anderungen, unbefriedigende Kompromisse',
                loesung: 'Erstellen Sie einen detaillierten Plan mit Massskizze bevor Sie beginnen.'
              },
              {
                fehler: 'Ubertriebene Dekoration',
                folge: 'Uberladene Optik, schwer zu reinigen, kitschiger Eindruck',
                loesung: 'Weniger ist mehr. Wahlen Sie wenige, aber hochwertige Dekoelemente.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-[#e0d8c8] p-6 hover:border-[#c9a65c] transition-colors">
                <div className="flex gap-6">
                  <span className="text-[#c9a65c] font-serif text-2xl shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-serif text-[#2a2018] mb-2">{item.fehler}</h3>
                    <p className="text-[#8b5a2b] text-sm mb-3">Folge: {item.folge}</p>
                    <p className="text-[#5a4a3a] text-sm leading-relaxed">
                      <span className="text-[#2a2018] font-medium">Losung:</span> {item.loesung}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-[#5a4a3a] mb-6">
            Bereit, Ihre eigene Hausbar zu planen?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#barstile"
              className="inline-block bg-[#8b5a2b] hover:bg-[#a0693c] text-[#f5efe6] px-8 py-4 text-sm tracking-wider transition-colors"
            >
              Barstile ansehen
            </Link>
            <Link 
              href="/?scrollTo=kontakt"
              className="inline-block border border-[#2a2018] text-[#2a2018] hover:bg-[#2a2018] hover:text-[#f5efe6] px-8 py-4 text-sm tracking-wider transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
