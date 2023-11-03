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
}: {
  children: React.ReactNode
}) {
  return (
    <html className="light" lang={defaultLocale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
