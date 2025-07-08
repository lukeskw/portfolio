'use client'
import { LanguageProps } from '@/types/language'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Header({ language: lang }: LanguageProps) {
  useEffect(() => {
    const localLanguage = localStorage.getItem('language') || 'en-US'
    if (localLanguage !== lang) {
      redirect(`/${localLanguage}`)
    }
  }, [lang])

  function toggleLanguage(toggledLanguage: string) {
    if (toggledLanguage !== lang) {
      localStorage.setItem('language', toggledLanguage)
      redirect(`/${toggledLanguage}`)
    }
  }

  return (
    <header className="flex w-full items-end justify-end">
      <div className="flex items-center justify-center gap-4 px-0 md:px-12">
        <Link href="" onClick={() => toggleLanguage('en-US')}>
          <ReactCountryFlag className="text-3xl" countryCode="US" svg />
        </Link>
        <Link href="" onClick={() => toggleLanguage('pt-BR')}>
          <ReactCountryFlag className="text-3xl" countryCode="BR" svg />
        </Link>
      </div>
    </header>
  )
}
