import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-6 border-t text-sm text-gray-500">
      <span>© {new Date().getFullYear()} Monica A</span>
      <div className="flex gap-4">
        <a href="https://www.github.com/buddy2706/mainportfolio" target="_blank"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/monicaahuja" target="_blank"><Linkedin size={18} /></a>
        <a href="mailto:monica.s.ahuja@gmail.com"><Mail size={18} /></a>
      </div>
    </footer>
  )
}
