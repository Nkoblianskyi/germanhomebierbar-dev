import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="py-16 bg-[#12100c] border-t border-[#2a2018]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-1 ">
              <Image src="/favicon.ico" alt="German Home Bier Bar" width={32} height={32} />
              <p className="font-serif text-xl text-[#c9a65c]">German Home Bier Bar</p>
            </Link>
            <p className="text-[#6d5d4d] text-sm leading-relaxed">
              Informationsportal uber die Kunst der deutschen Hausbar-Gestaltung.
              Keine Verkaufsabsichten.
            </p>
          </div>
          <div>
            <h4 className="text-[#a89880] text-sm tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#barstile" className="text-[#6d5d4d] hover:text-[#c9a65c] text-sm transition-colors">
                  Barstile
                </Link>
              </li>
              <li>
                <Link href="/#standorte" className="text-[#6d5d4d] hover:text-[#c9a65c] text-sm transition-colors">
                  Standorte
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-[#6d5d4d] hover:text-[#c9a65c] text-sm transition-colors">
                  Ratgeber
                </Link>
              </li>
              <li>
                <Link href="/?scrollTo=kontakt" className="text-[#6d5d4d] hover:text-[#c9a65c] text-sm transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#a89880] text-sm tracking-wider uppercase mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/datenschutz" className="text-[#6d5d4d] hover:text-[#c9a65c] text-sm transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-[#6d5d4d] hover:text-[#c9a65c] text-sm transition-colors">
                  Cookie-Richtlinie
                </Link>
              </li>
            </ul>
            <p className="text-[#6d5d4d] text-sm leading-relaxed mt-4">
              Diese Website richtet sich ausschliesslich an Personen ab 18 Jahren.
            </p>
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
  )
}
