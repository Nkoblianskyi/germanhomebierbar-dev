'use client'

import Image from 'next/image'
import Link from 'next/link'

interface SiteHeaderProps {
  showKontakt?: boolean
}

export function SiteHeader({ showKontakt = true }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#1a1410]/95 backdrop-blur-sm border-b border-[#2a2018]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 ">
        <Image src="/favicon.ico" alt="German Home Bier Bar" width={32} height={32} />
          <p className="font-serif text-xl text-[#c9a65c]">German Home Bier Bar</p>
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="text-sm text-[#a89880] hover:text-[#c9a65c] transition-colors">
            Startseite
          </Link>
          <Link href="/topics" className="text-sm text-[#a89880] hover:text-[#c9a65c] transition-colors">
            Ratgeber
          </Link>
          {showKontakt && (
            <Link 
              href="/?scrollTo=kontakt" 
              className="text-sm bg-[#8b5a2b] hover:bg-[#a0693c] text-[#f5efe6] px-5 py-2 transition-colors tracking-wide"
            >
              Kontakt
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
