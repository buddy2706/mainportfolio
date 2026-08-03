'use client'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="font-semibold">Monica Ahuja</Link>
      <div className="flex gap-6">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-black">
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
