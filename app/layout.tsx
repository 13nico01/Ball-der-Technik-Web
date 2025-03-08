import type { Metadata, Viewport } from 'next'
import { Oswald, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

const roboto = Roboto({ 
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#eaba5f',
}

export const metadata: Metadata = {
  title: 'Ball der Technik - HTL Hollabrunn',
  description: 'Der Ball der Technik der HTL Hollabrunn - Eine Nacht voller Eleganz und Innovation.',
  keywords: ['Ball der Technik', 'HTL Hollabrunn', 'Schulball', 'Technikball', 'Event', 'Tanzball'],
  authors: [{ name: 'Nico Zimmermann' }],
  openGraph: {
    title: 'Ball der Technik - HTL Hollabrunn',
    description: 'Der Ball der Technik der HTL Hollabrunn - Eine Nacht voller Eleganz und Innovation.',
    url: 'https://ball.htl-hl.ac.at',
    siteName: 'Ball der Technik',
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ball der Technik - HTL Hollabrunn',
    description: 'Der Ball der Technik der HTL Hollabrunn - Eine Nacht voller Eleganz und Innovation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${oswald.variable} ${roboto.variable}`}>
      <body className="text-white overflow-x-hidden">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
