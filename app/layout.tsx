import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amiens Triathlon',
  description: 'Club de triathlon d\'Amiens - Nager, Pédaler, Courir. Rejoignez notre communauté de passionnés !',
  generator: 'Amiens Triathlon',
  icons: {
    icon: '/logo-inverted.png',
    shortcut: '/logo-inverted.png',
    apple: '/logo-inverted.png',
  },
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
