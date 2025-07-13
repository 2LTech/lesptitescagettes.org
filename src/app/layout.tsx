import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Les P'tites Cagettes",
  description: 'ASSOCIATION DE PRODUCTEURS ET DE CONSOMMATEURS - TREIGNAC'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
