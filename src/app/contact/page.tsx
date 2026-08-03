import AnimatedSection from '@/components/animatedsection'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <AnimatedSection>
      <h1
        style={{ fontFamily: 'var(--font-serif)' }}
        className="text-4xl text-[var(--ink)] mb-8"
      >
        Contact
      </h1>
      <div className="flex flex-col gap-4">
        <a href="mailto:monica.s.ahuja@gmail.com"
          className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--sage-800)]"
        >
          <Mail size={18} /> monica.s.ahuja@gmail.com
        </a>
        
           <a href="https://www.linkedin.com/in/monicaahuja"
          target="_blank"
          className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--sage-800)]"
        >
          <FaLinkedin size={18} /> LinkedIn
        </a>
        
           <a href="https://github.com/buddy2706/mainportfolio"
          target="_blank"
          className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--sage-800)]"
        >
          <FaGithub size={18} /> GitHub
        </a>
      </div>
    </AnimatedSection>
  )
}