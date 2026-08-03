import { Playfair_Display, Inter } from 'next/font/google'
import Nav from '@/components/nav'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <nav />
        <div className="flex-1">{children}</div>
        <footer />
      </body>
    </html>
  )
}
