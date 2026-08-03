import { ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
}

export default function ProjectCard({ title, description, tags, link }: Project) {
  return (
    <div className="border border-[var(--sage-100)] rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[var(--ink)]">
          {title}
        </h3>
        {link && (
          <a href={link} target="_blank" className="text-[var(--sage-600)]">
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>
      <p className="mt-2 text-[var(--muted)] text-sm">{description}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-[var(--sage-50)] text-[var(--sage-800)] rounded-full px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}