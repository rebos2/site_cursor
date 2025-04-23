import type { Metadata } from 'next'
import { Exo_2, Archivo } from 'next/font/google'
import './globals.css'

const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo'
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo'
})

export const metadata: Metadata = {
  title: 'AI Code Audit - Flawless Vulnerability Detection',
  description: 'AI-powered code auditing service that detects vulnerabilities faster and more accurately than manual reviews.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${exo2.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  )
}