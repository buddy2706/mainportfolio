'use client'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Bookmark } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-[var(--sage-100)]">
      <div className="flex gap-10">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-[15px] text-[var(--ink)] hover:text-[var(--sage-800)]">
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-5 text-[var(--ink)]">
        <a href="https://www.linkedin.com/in/monicaahuja" target="_blank"><FaLinkedin size={18} /></a>
        <a href="/resources"><Bookmark size={18} /></a>
        <a href="https://github.com/buddy2706/mainportfolio" target="_blank"><FaGithub size={18} /></a>
      </div>
    </nav>
  )
}