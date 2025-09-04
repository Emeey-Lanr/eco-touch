import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'EcoTouch',
  description: 'An eco-friendly cleaning service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
