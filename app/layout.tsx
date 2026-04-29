import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rinabelle.de'),
  title: {
    default: 'Rinabelle Fashion | Damenmode Boutique Lauda-Königshofen',
    template: '%s | Rinabelle Fashion',
  },
  description: 'Entdecke stilvolle Damenmode in unserer Boutique in Lauda-Königshofen. Persönliche Beratung, handverlesene Stücke und eine Atmosphäre zum Wohlfühlen. Mode, die sich anfühlt wie du.',
  keywords: [
    'Boutique', 
    'Damenmode', 
    'Lauda-Königshofen', 
    'Mode', 
    'Fashion', 
    'Rinabelle',
    'Frauenmode',
    'Kleider',
    'Stilberatung',
    'Baden-Württemberg',
    'Main-Tauber-Kreis',
  ],
  authors: [{ name: 'Rinabelle Fashion' }],
  creator: 'Rinabelle Fashion',
  publisher: 'Rinabelle Fashion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://rinabelle.de',
    siteName: 'Rinabelle Fashion',
    title: 'Rinabelle Fashion | Damenmode Boutique Lauda-Königshofen',
    description: 'Persönliche Beratung, handverlesene Stücke und eine Atmosphäre zum Wohlfühlen. Mode, die sich anfühlt wie du.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rinabelle Fashion Boutique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rinabelle Fashion | Damenmode Boutique',
    description: 'Persönliche Beratung, handverlesene Stücke und eine Atmosphäre zum Wohlfühlen.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rinabelle.de',
  },
  category: 'fashion',
}

export const viewport: Viewport = {
  themeColor: '#E8AFC1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// JSON-LD structured data for local business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Rinabelle Fashion',
  image: 'https://rinabelle.de/images/og-image.jpg',
  '@id': 'https://rinabelle.de',
  url: 'https://rinabelle.de',
  telephone: '+4993439999999',
  email: 'hallo@rinabelle.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hauptstraße 12',
    addressLocality: 'Lauda-Königshofen',
    postalCode: '97922',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.566,
    longitude: 9.7,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  priceRange: '€€',
  description: 'Stilvolle Damenmode mit persönlicher Beratung in Lauda-Königshofen. Handverlesene Stücke für jeden Anlass.',
  sameAs: [
    'https://instagram.com/rinabelle.fashion',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${lato.variable} bg-background`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link 
          rel="preload" 
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mp_-RutkdhvTvDPMy1RjySRDMLYCWdnxpL.mp4" 
          as="video" 
          type="video/mp4"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
