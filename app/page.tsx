'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import { SiteFooter } from '@/components/site-footer'

function SearchParamsHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [searchParams])

  return null
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyAccepted: false
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const barStyles = [
    {
      id: 'rustikal',
      name: 'Rustikal',
      image: '/images/rustikal-bar.jpg',
      description: 'Der traditionelle bayerische Stil mit massiven Eichenholzmobeln, geschmiedeten Elementen und warmer, gemutlicher Atmosphare.',
      materials: 'Dunkles Eichenholz, Naturstein, Kupfer, Schmiedeeisen',
      colors: 'Dunkelbraun, Bernstein, Kupfer, Creme',
      atmosphere: 'Traditionell, warm, einladend'
    },
    {
      id: 'modern',
      name: 'Modern',
      image: '/images/modern-bar.jpg',
      description: 'Klare Linien und minimalistisches Design mit Fokus auf Funktionalitat und zeitgenossischer Asthetik.',
      materials: 'Helles Holz, Glas, Edelstahl, Beton',
      colors: 'Weiss, Grau, Schwarz, Akzente in Messing',
      atmosphere: 'Elegant, geraumig, zeitgenossisch'
    },
    {
      id: 'vintage',
      name: 'Vintage',
      image: '/images/vintage-bar.jpg',
      description: 'Nostalgischer Charme der 1920er bis 1960er Jahre mit authentischen Accessoires und zeitloser Eleganz.',
      materials: 'Patiniertes Holz, Messing, Leder, Samt',
      colors: 'Dunkelgrun, Burgunder, Gold, Braun',
      atmosphere: 'Nostalgisch, charaktervoll, elegant'
    },
    {
      id: 'industrial',
      name: 'Industrial',
      image: '/images/industrial-bar.jpg',
      description: 'Urbaner Loft-Stil mit rohen Texturen, offenen Rohren und dem Charakter einer echten Brauerei.',
      materials: 'Stahl, Beton, Rohes Holz, Backstein',
      colors: 'Anthrazit, Rost, Naturholz, Schwarz',
      atmosphere: 'Urban, roh, authentisch'
    }
  ]

  const locations = [
    {
      name: 'Keller',
      image: '/images/keller-bar.jpg',
      subtitle: 'Der klassische Bierkeller',
      pros: ['Naturliche Kuhlung', 'Authentische Atmosphare', 'Gerauschisolierung', 'Traditioneller Charakter'],
      cons: ['Beleuchtung erforderlich', 'Feuchtigkeit kontrollieren', 'Beluftung notwendig'],
      tip: 'Investieren Sie in einen Luftentfeuchter und sorgen Sie fur ausreichende Beluftung.'
    },
    {
      name: 'Garten',
      image: '/images/garten-bar.jpg',
      subtitle: 'Der deutsche Biergarten',
      pros: ['Frische Luft', 'Naturliches Ambiente', 'Erweiterbar', 'Gesellig'],
      cons: ['Wetterabhangig', 'Saisonal begrenzt', 'Schutz erforderlich'],
      tip: 'Eine Pergola mit Beleuchtung verlangert die Nutzungssaison erheblich.'
    },
    {
      name: 'Terrasse',
      image: '/images/terrasse-bar.jpg',
      subtitle: 'Ubergang zum Freien',
      pros: ['Direkter Hauszugang', 'Flexible Nutzung', 'Aussicht geniessen', 'Grillen moglich'],
      cons: ['Witterungsschutz notig', 'Nachbarschaftsrucksicht', 'Platzbegrenzung'],
      tip: 'Wetterfeste Mobel und ein Heizstrahler machen die Terrasse ganzjahrig nutzbar.'
    },
    {
      name: 'Garage',
      image: '/images/garage-bar.jpg',
      subtitle: 'Der Hobbyraum',
      pros: ['Grosser Raum', 'Freie Gestaltung', 'Unabhangig', 'Partygeeignet'],
      cons: ['Isolierung notig', 'Heizung erforderlich', 'Umbau aufwendig'],
      tip: 'Eine gute Isolierung und Heizung verwandeln die Garage in einen ganzjahrigen Treffpunkt.'
    },
    {
      name: 'Balkon',
      image: '/images/balkon-bar.jpg',
      subtitle: 'Die kompakte Losung',
      pros: ['Stadtisch praktisch', 'Geringe Kosten', 'Schnell eingerichtet', 'Intim'],
      cons: ['Sehr begrenzt', 'Larmrucksicht', 'Keine Privatsphare'],
      tip: 'Klappbare Mobel und ein kleiner Kuhler maximieren den begrenzten Raum.'
    },
    {
      name: 'Wohnzimmer',
      image: '/images/wohnzimmer-bar.jpg',
      subtitle: 'Die integrierte Bar',
      pros: ['Immer zuganglich', 'Klimatisiert', 'Reprasentativ', 'Komfortabel'],
      cons: ['Teil des Wohnraums', 'Stilabstimmung notig', 'Geruche verbreiten sich'],
      tip: 'Wahlen Sie Mobel, die sich harmonisch in Ihr bestehendes Interieur einfugen.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f8f4ed]">
      <Suspense fallback={null}>
        <SearchParamsHandler />
      </Suspense>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1410]/95 backdrop-blur-sm border-b border-[#3d2f1f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-[#c9a65c] font-serif text-xl tracking-wider">
              German Home Bier Bar
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#barstile" className="text-sm text-[#e8dcc8] hover:text-[#c9a65c] transition-colors tracking-wide">
                Barstile
              </Link>
              <Link href="#standorte" className="text-sm text-[#e8dcc8] hover:text-[#c9a65c] transition-colors tracking-wide">
                Standorte
              </Link>
              <Link href="#spirituosen" className="text-sm text-[#e8dcc8] hover:text-[#c9a65c] transition-colors tracking-wide">
                Spirituosen
              </Link>
              <Link href="#ueber-uns" className="text-sm text-[#e8dcc8] hover:text-[#c9a65c] transition-colors tracking-wide">
                Uber uns
              </Link>
              <Link href="/topics" className="text-sm text-[#e8dcc8] hover:text-[#c9a65c] transition-colors tracking-wide">
                Ratgeber
              </Link>
              <Link href="#kontakt" className="text-sm bg-[#8b5a2b] hover:bg-[#a0693c] text-[#f5efe6] px-5 py-2 transition-colors tracking-wide">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bar.jpg"
            alt="Deutsche Hausbar mit Holztheke und Messingarmaturen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/70 via-[#1a1410]/50 to-[#1a1410]/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <span className="inline-block text-[#c9a65c] text-sm tracking-[0.3em] uppercase mb-6">
            Informationsportal
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#f5efe6] mb-8 leading-tight">
            <span className="block">Deutsche</span>
            <span className="block text-[#c9a65c]">Hausbar-Kultur</span>
          </h1>
          <p className="text-lg md:text-xl text-[#d4c8b8] max-w-2xl mx-auto mb-12 leading-relaxed">
            Entdecken Sie die Kunst der deutschen Hausbar. 
            Von traditionellen Bierkellern bis zu modernen Designkonzepten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#barstile"
              className="inline-block bg-[#8b5a2b] hover:bg-[#a0693c] text-[#f5efe6] px-8 py-4 text-sm tracking-wider transition-colors"
            >
              Barstile entdecken
            </Link>
            <Link
              href="/topics"
              className="inline-block border border-[#c9a65c] text-[#c9a65c] hover:bg-[#c9a65c]/10 px-8 py-4 text-sm tracking-wider transition-colors"
            >
              Einrichtungsratgeber
            </Link>
          </div>

          <div className="border border-[#3d2f1f] bg-[#1a1410]/60 backdrop-blur-sm px-8 py-4 inline-block">
            <p className="text-[#6d5d4d] text-xs tracking-wide">
              <span className="text-[#c9a65c] font-medium">18+ </span>
              Diese Website enthalt Informationen uber alkoholische Getranke und richtet sich ausschliesslich an Personen ab 18 Jahren.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a65c] animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* Spirits Section - Highest Alcohol Content */}
      <section id="spirituosen" className="py-24 bg-[#1a1410] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/spirits.jpg"
            alt="Spirituosen Hintergrund"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410] via-[#1a1410]/95 to-[#1a1410]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9a65c] text-sm tracking-[0.3em] uppercase mb-4 block">
                Hochster Alkoholgehalt
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#f5efe6] mb-6">
                Traditionelle Spirituosen
              </h2>
              <p className="text-[#a89880] leading-relaxed mb-8">
                In einer gut ausgestatteten deutschen Hausbar finden sich neben Bier auch hochprozentige Spirituosen. 
                Diese traditionellen Getranke haben eine lange Geschichte in der deutschen Trinkkultur.
              </p>
              <div className="bg-[#2a2018]/80 border border-[#3d2f1f] p-6">
                <p className="text-[#c9a65c] text-sm font-medium mb-2">Hinweis</p>
                <p className="text-[#a89880] text-sm leading-relaxed">
                  Ubermassiger Alkoholkonsum ist gesundheitsschadlich. 
                  Diese Website dient ausschliesslich Informationszwecken.
                </p>
              </div>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-[#2a2018]/60 backdrop-blur-sm border border-[#3d2f1f] p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-serif text-[#f5efe6]">Obstbrand / Schnapps</h3>
                  <span className="text-4xl font-serif text-[#c9a65c]">40-45%</span>
                </div>
                <p className="text-[#a89880] text-sm leading-relaxed">
                  Fruchtdestillate aus Apfeln, Birnen, Kirschen oder Zwetschgen. 
                  Ein Klassiker der suddeutschen Brennkunst.
                </p>
              </div>
              
              <div className="bg-[#2a2018]/60 backdrop-blur-sm border border-[#3d2f1f] p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-serif text-[#f5efe6]">Korn / Doppelkorn</h3>
                  <span className="text-4xl font-serif text-[#c9a65c]">32-38%</span>
                </div>
                <p className="text-[#a89880] text-sm leading-relaxed">
                  Norddeutscher Getreideschnaps aus Weizen oder Roggen. 
                  Klar und rein im Geschmack.
                </p>
              </div>
              
              <div className="bg-[#2a2018]/60 backdrop-blur-sm border border-[#3d2f1f] p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-serif text-[#f5efe6]">Krauterlikor</h3>
                  <span className="text-4xl font-serif text-[#c9a65c]">35-42%</span>
                </div>
                <p className="text-[#a89880] text-sm leading-relaxed">
                  Traditionelle Digestifs mit komplexen Krautermischungen. 
                  Jagermeister, Underberg und viele regionale Varianten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar Styles Section */}
      <section id="barstile" className="py-24 bg-[#f8f4ed]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#8b5a2b] text-sm tracking-[0.3em] uppercase mb-4 block">
              Vier Klassische Stile
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2a2018] mb-6">
              Barstile fur Ihr Zuhause
            </h2>
            <p className="text-[#5a4a3a] max-w-2xl mx-auto leading-relaxed">
              Jeder Stil hat seinen eigenen Charakter. 
              Wahlen Sie den, der am besten zu Ihrem Geschmack und Wohnstil passt.
            </p>
          </div>

          <div className="space-y-32">
            {barStyles.map((style, idx) => (
              <div 
                key={style.id}
                id={style.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={style.image}
                      alt={`${style.name} Barstil`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-[#c9a65c] text-[#1a1410] px-4 py-2 text-sm font-medium tracking-wider">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-4xl md:text-5xl font-serif text-[#2a2018] mb-6">
                    {style.name}
                  </h3>
                  <p className="text-[#5a4a3a] leading-relaxed mb-8 text-lg">
                    {style.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-[#c9a65c] pl-6">
                      <span className="text-xs text-[#8b5a2b] tracking-[0.2em] uppercase block mb-2">Materialien</span>
                      <p className="text-[#2a2018]">{style.materials}</p>
                    </div>
                    <div className="border-l-2 border-[#c9a65c] pl-6">
                      <span className="text-xs text-[#8b5a2b] tracking-[0.2em] uppercase block mb-2">Farbpalette</span>
                      <p className="text-[#2a2018]">{style.colors}</p>
                    </div>
                    <div className="border-l-2 border-[#c9a65c] pl-6">
                      <span className="text-xs text-[#8b5a2b] tracking-[0.2em] uppercase block mb-2">Atmosphare</span>
                      <p className="text-[#2a2018]">{style.atmosphere}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="standorte" className="py-24 bg-[#2a2018]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#c9a65c] text-sm tracking-[0.3em] uppercase mb-4 block">
              Sechs Moglichkeiten
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#f5efe6] mb-6">
              Der ideale Standort
            </h2>
            <p className="text-[#a89880] max-w-2xl mx-auto leading-relaxed">
              Die Wahl des richtigen Ortes ist entscheidend fur Funktionalitat und Atmosphare Ihrer Hausbar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, idx) => (
              <div 
                key={location.name}
                className="group bg-[#1a1410] border border-[#3d2f1f] overflow-hidden hover:border-[#c9a65c] transition-colors"
              >
                {location.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={location.image}
                      alt={`${location.name} Bar`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[#c9a65c] font-serif text-sm">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl font-serif text-[#f5efe6]">{location.name}</h3>
                  </div>
                  <p className="text-[#6d5d4d] text-sm mb-6">{location.subtitle}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs text-[#8b5a2b] tracking-[0.15em] uppercase block mb-2">Vorteile</span>
                      <ul className="space-y-1">
                        {location.pros.map((pro, i) => (
                          <li key={i} className="text-[#a89880] text-sm flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#c9a65c]"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-xs text-[#8b5a2b] tracking-[0.15em] uppercase block mb-2">Zu beachten</span>
                      <ul className="space-y-1">
                        {location.cons.map((con, i) => (
                          <li key={i} className="text-[#6d5d4d] text-sm flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#5a4a3a]"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-[#3d2f1f]">
                    <p className="text-[#c9a65c] text-sm italic">{location.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-uns" className="py-24 bg-[#f8f4ed]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/about-bar.jpg"
                  alt="Deutsche Bierkultur"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#c9a65c] p-8 max-w-xs hidden lg:block">
                <p className="text-[#1a1410] font-serif text-lg leading-relaxed">
                  Reine Information, keine Verkaufsabsichten.
                </p>
              </div>
            </div>
            
            <div>
              <span className="text-[#8b5a2b] text-sm tracking-[0.3em] uppercase mb-4 block">
                Uber dieses Projekt
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2a2018] mb-8">
                German Home Bier Bar
              </h2>
              <div className="space-y-6 text-[#5a4a3a] leading-relaxed">
                <p>
                  Diese Website ist ein reines Informationsportal fur alle, die sich fur die Kunst 
                  der deutschen Hausbar-Gestaltung interessieren. Wir verkaufen keine Produkte 
                  und fordern nicht zum Alkoholkonsum auf.
                </p>
                <p>
                  Unser Ziel ist es, umfassendes Wissen uber verschiedene Barstile, geeignete 
                  Standorte, Materialien und Einrichtungsideen zu vermitteln. Von der traditionellen 
                  rustikalen Holzbar bis zum modernen Designkonzept.
                </p>
                <p>
                  Entdecken Sie auch unseren ausfuhrlichen Ratgeber zu Beleuchtung, Mobeln, 
                  Bierlagerung, Dekoration und typischen Anfangerfehlern.
                </p>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#kontakt"
                  className="inline-block bg-[#8b5a2b] hover:bg-[#a0693c] text-[#f5efe6] px-8 py-4 text-sm tracking-wider transition-colors text-center"
                >
                  Kontakt aufnehmen
                </Link>
                <Link 
                  href="/topics"
                  className="inline-block border border-[#2a2018] text-[#2a2018] hover:bg-[#2a2018] hover:text-[#f5efe6] px-8 py-4 text-sm tracking-wider transition-colors text-center"
                >
                  Zum Ratgeber
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-24 bg-[#1a1410]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a65c] text-sm tracking-[0.3em] uppercase mb-4 block">
              Schreiben Sie uns
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#f5efe6] mb-6">
              Kontakt
            </h2>
            <p className="text-[#a89880] leading-relaxed">
              Haben Sie Fragen oder Anregungen? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          <form 
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault()
              if (!formData.privacyAccepted) {
                return
              }
              setShowSuccessModal(true)
              setFormData({ name: '', email: '', message: '', privacyAccepted: false })
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="text-[#a89880] text-sm tracking-wide block mb-3">
                  Name
                </label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#2a2018] border border-[#3d2f1f] text-[#f5efe6] px-6 py-4 focus:border-[#c9a65c] focus:outline-none transition-colors"
                  placeholder="Ihr Name"
                  required
                />
              </div>
              <div>
                <label className="text-[#a89880] text-sm tracking-wide block mb-3">
                  E-Mail
                </label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#2a2018] border border-[#3d2f1f] text-[#f5efe6] px-6 py-4 focus:border-[#c9a65c] focus:outline-none transition-colors"
                  placeholder="ihre@email.de"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="text-[#a89880] text-sm tracking-wide block mb-3">
                Nachricht
              </label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className="w-full bg-[#2a2018] border border-[#3d2f1f] text-[#f5efe6] px-6 py-4 focus:border-[#c9a65c] focus:outline-none transition-colors resize-none"
                placeholder="Ihre Nachricht..."
                required
              />
            </div>

            <div className="flex items-start gap-4">
              <Checkbox 
                id="privacy"
                checked={formData.privacyAccepted}
                onCheckedChange={(checked) => setFormData({...formData, privacyAccepted: checked as boolean})}
                className="border-[#3d2f1f] data-[state=checked]:bg-[#c9a65c] data-[state=checked]:border-[#c9a65c] mt-1"
              />
              <label htmlFor="privacy" className="text-[#a89880] text-sm leading-relaxed cursor-pointer">
                Ich habe die Datenschutzerklarung gelesen und stimme der Verarbeitung meiner Daten 
                zu Kontaktzwecken zu. Meine Daten werden nicht an Dritte weitergegeben.
              </label>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#8b5a2b] hover:bg-[#a0693c] text-[#f5efe6] px-8 py-5 text-sm tracking-wider transition-colors"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {/* {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#1a1410]/90 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />
          <div className="relative bg-[#2a2018] border border-[#3d2f1f] p-12 max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto border-2 border-[#c9a65c] flex items-center justify-center">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#c9a65c" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-[#f5efe6] mb-4">
              Nachricht gesendet
            </h3>
            <p className="text-[#a89880] leading-relaxed mb-8">
              Vielen Dank fur Ihre Nachricht. Wir werden uns so schnell wie moglich bei Ihnen melden.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-[#8b5a2b] hover:bg-[#a0693c] text-[#f5efe6] px-8 py-4 text-sm tracking-wider transition-colors"
            >
              Schliessen
            </button>
          </div>
        </div>
      )} */}

<SiteFooter />
    </div>
  )
}
