import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'PDF Parse Test',
  description: 'A Next.js application for parsing PDFs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
