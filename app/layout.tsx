import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Gourav Chandra | Data Professional",
  description: "Portfolio of Gourav Chandra - Data Scientist, ML Engineer, and Analytics Expert",
  keywords: ["data science", "machine learning", "data analytics", "portfolio", "data visualization", "python", "AWS"],
  authors: [{ name: "Gourav Chandra" }],
  creator: "Gourav Chandra",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'