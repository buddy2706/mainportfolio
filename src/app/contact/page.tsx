import AnimatedSection from '@/components/animatedsection'
import {  FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="flex flex-col gap-3">
        <a href="mailto:monica.s.ahuja@gmail.com" className="flex items-center gap-2 text-gray-600">
          <Mail size={18} /> monica.s.ahuja@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/monicaahuja" className="flex items-center gap-2 text-gray-600">
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
    </AnimatedSection>
  )
}