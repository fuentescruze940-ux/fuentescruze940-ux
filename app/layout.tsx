import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Juan Eduardo Fuentes Cruz - Desarrollador Full Stack",
  description:
    "Portfolio y blog personal de Juan Eduardo Fuentes Cruz. Desarrollador Full Stack especializado en React, Next.js y tecnologías web modernas.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-64">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
