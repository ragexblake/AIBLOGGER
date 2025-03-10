import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeuralPulse - AI, GenAI, Computer Vision & Deep Learning Blog",
  description: "Exploring the frontiers of artificial intelligence, generative AI, computer vision, and deep learning.",
  keywords: "AI, artificial intelligence, machine learning, deep learning, computer vision, generative AI",
  authors: [{ name: "NeuralPulse Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuralpulse.ai",
    title: "NeuralPulse - AI, GenAI, Computer Vision & Deep Learning Blog",
    description:
      "Exploring the frontiers of artificial intelligence, generative AI, computer vision, and deep learning.",
    siteName: "NeuralPulse",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralPulse - AI, GenAI, Computer Vision & Deep Learning Blog",
    description:
      "Exploring the frontiers of artificial intelligence, generative AI, computer vision, and deep learning.",
    creator: "@neuralpulse",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'