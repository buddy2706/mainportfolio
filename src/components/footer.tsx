import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-6 border-t text-sm text-gray-500">
      <span>© {new Date().getFullYear()} Monica Ahuja</span>
      <div className="flex gap-4">
        <a href="https://github.com/PLACEHOLDER" target="_blank"><FaGithub size={18} /></a>
        <a href="https://linkedin.com/in/PLACEHOLDER" target="_blank"><FaLinkedin size={18} /></a>
        <a href="mailto:monica@saahasforcause.org"><Mail size={18} /></a>
      </div>
    </footer>
  )
}