import { FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* blob background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[900px] h-[900px] rounded-full bg-[var(--sage-50)] blur-3xl opacity-80" />
        <div className="absolute w-[650px] h-[650px] rounded-full bg-[var(--sage-100)] blur-2xl opacity-70" />
        <div className="absolute w-[420px] h-[420px] rounded-full bg-[var(--sage-300)] blur-2xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-32">
        <h1 className="font-[var(--font-serif)] text-5xl sm:text-6xl leading-tight text-[var(--ink)]">
          Senior Technical AI PM building AI/ML products across B2C, healthcare and finance.
        </h1>
        <p className="mt-8 text-lg text-[var(--muted)] max-w-xl mx-auto">
          Experienced bridging business strategy and technical execution: leading AI-native product initiatives.
        </p>
        <a
          href="https://www.linkedin.com/in/monicaahuja"
          target="_blank"
          className="mt-10 inline-flex items-center gap-2 bg-[var(--sage-800)] text-white px-8 py-4 rounded-md font-medium tracking-wide hover:bg-[var(--sage-600)] transition-colors"
        >
          <FaLinkedin size={18} /> FOLLOW ME ON LINKEDIN
        </a>
      </div>
    </section>
  )
}