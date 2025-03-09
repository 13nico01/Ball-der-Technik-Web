import type { Metadata, Viewport } from 'next'
import { Oswald, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import dynamic from 'next/dynamic'
import './globals.css'

const Navbar = dynamic(() => import('./components/Navbar'), {
  loading: () => <div className="h-20" />,
  ssr: true,
})

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: true,
})

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

const roboto = Roboto({ 
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

const pirata = localFont({
  src: '../public/fonts/PirataOne-Regular.ttf',
  display: 'swap',
  variable: '--font-pirata',
  preload: true,
  fallback: ['Georgia', 'serif'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#eaba5f',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'Ball der Technik - Hollabrunn',
  description: 'Der Ball der Technik der Schülervertretung der HTL Hollabrunn geht in die nächste Runde.',
  keywords: ['Ball der Technik', 'HTL Hollabrunn', 'Schulball', 'Technikball', 'Event', 'Tanzball'],
  authors: [{ name: 'Nico Zimmermann' }],
  openGraph: {
    title: 'Ball der Technik - Hollabrunn',
    description: 'Der Ball der Technik der Schülervertretung der HTL Hollabrunn geht in die nächste Runde.',
    url: 'https://ball.htl-hl.ac.at',
    siteName: 'Ball der Technik',
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ball der Technik - Hollabrunn',
    description: 'Der Ball der Technik der Schülervertretung der HTL Hollabrunn geht in die nächste Runde.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'google',
    other: {
      me: ['@nicozimmermann'],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="de" 
      className={`${oswald.variable} ${roboto.variable} ${pirata.variable}`}
      suppressHydrationWarning
    >
      <body className="text-white overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
