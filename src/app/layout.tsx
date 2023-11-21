import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Kara's Website`,
  description: 'Generated by many tears wept',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen m-5`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
