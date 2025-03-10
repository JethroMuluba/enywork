import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Enywork SARL - Solutions Numériques sur Mesure",
  description:
    "Enywork SARL est une start-up congolaise spécialisée dans la conception et le développement de logiciels sur mesure.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

