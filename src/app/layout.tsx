import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const mont = Montserrat({ 
  subsets: ['latin'],
  weight : "500"
})

export const metadata: Metadata = {
  title: 'Blockd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={mont.className}>{children}</body>
    </html>
  )
}
