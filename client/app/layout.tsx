import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Horta Solidária',
  description: 'Projeto horta solidária'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br h-full overflow-x-hidden">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
