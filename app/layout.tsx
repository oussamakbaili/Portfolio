import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // Updated title for Vercel deployment
  title: 'Oussama Kbaili - Software Engineer | Portfolio',
  description: 'Portfolio professionnel d\'Oussama Kbaili, Ingénieur Logiciel spécialisé en développement Full-Stack. Découvrez mes projets, compétences et expérience en React, Next.js, Laravel, et plus encore.',
  keywords: 'Oussama Kbaili, Software Engineer, Full-Stack Developer, React, Next.js, Laravel, Portfolio, Développeur, Casablanca, Maroc',
  authors: [{ name: 'Oussama Kbaili' }],
  creator: 'Oussama Kbaili',
  openGraph: {
    title: 'Oussama Kbaili - Software Engineer',
    description: 'Portfolio professionnel d\'Oussama Kbaili, Ingénieur Logiciel spécialisé en développement Full-Stack.',
    url: 'https://oussama-kbaili-software-engineer.vercel.app',
    siteName: 'Oussama Kbaili Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oussama Kbaili - Software Engineer',
    description: 'Portfolio professionnel d\'Oussama Kbaili, Ingénieur Logiciel spécialisé en développement Full-Stack.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}