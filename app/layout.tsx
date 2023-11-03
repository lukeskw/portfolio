import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { defaultLocale } from '@/middleware'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfirio DEV',
  description: 'Using tech to change the world!',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html className="light" lang={params.lang ?? defaultLocale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
