 import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Oussama Kbaili - Full Stack Developer",
  description:
    "Award-winning full stack developer from Casablanca, Morocco. Crafting exceptional digital experiences with modern technologies.",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Morocco", "Casablanca", "Web Development"],
  authors: [{ name: "Oussama Kbaili" }],
  openGraph: {
    title: "Oussama Kbaili - Full Stack Developer",
    description: "Award-winning full stack developer from Casablanca, Morocco",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" async></script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
