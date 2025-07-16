import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amiens Triathlon',
  description: 'Club de triathlon d\'Amiens - Nager, Pédaler, Courir. Rejoignez notre communauté de passionnés !',
  generator: 'Amiens Triathlon',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
