import { ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
}

export default function ProjectCard({ title, description, tags, link }: Project) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-lg">{title}</h3>
        {link && <a href={link} target="_blank"><ArrowUpRight size={18} /></a>}
      </div>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span key={t} className="text-xs bg-gray-100 rounded-full px-3 py-1">{t}</span>
        ))}
      </div>
    </div>
  )
}