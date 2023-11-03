'use client'
import { LanguageProps } from '@/app/@types/language'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'

export default function Header({ language: lang }: LanguageProps) {
  return (
    <header className="flex w-full items-end justify-end">
      <div className="flex items-center justify-center gap-4 px-0 md:px-12">
        <Link href="/en-US">
          <ReactCountryFlag className="text-3xl" countryCode="US" svg />
        </Link>
        <Link href="/pt-BR">
          <ReactCountryFlag className="text-3xl" countryCode="BR" svg />
        </Link>
      </div>
    </header>
  )
}
