import React from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { JetBrains_Mono } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jet' })

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
    <html className="light" lang="en">
      <body className={jetbrains.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
