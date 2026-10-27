import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo, Montserrat } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })

export const metadata: Metadata = {
  title: 'DORVEX | حلول متكاملة للشتر والبوابات الأوتوماتيكية',
  description:
    'DORVEX — Premium metal roller shutters, gates and automatic motors for shops, garages, factories, warehouses and villas. شتر معدني وبوابات وموتورات أوتوماتيكية.',
  generator: 'v0.app',
  applicationName: 'DORVEX',
  keywords: [
    'DORVEX',
    'roller shutters',
    'metal roller shutters',
    'automatic gates',
    'sliding gate',
    'gate motors',
    'شتر معدني',
    'بوابات أوتوماتيكية',
    'موتور بوابة',
  ],
  openGraph: {
    title: 'DORVEX | Premium Roller Shutters, Gates & Automation Solutions',
    description: 'Metal roller shutters, gates and automatic motors — DORVEX.',
    images: [{ url: '/images/hero.jpg', width: 1376, height: 768, alt: 'DORVEX roller shutter' }],
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
  },
  icons: {
    icon: '/images/dorvex-mark.png',
    apple: '/images/dorvex-mark.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b1a33',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
