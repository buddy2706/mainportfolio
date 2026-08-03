import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Monica Ahuja— Senior Technical AI PM',
  description: 'Portfolio of AI/ML product work across B2C, healthcare, and finance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}