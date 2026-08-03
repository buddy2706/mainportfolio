import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

type Project = {
  title: string
  description: string
  tags: string[]
  productUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, tags, productUrl, githubUrl }: Project) {
  return (
    <div className="border border-[var(--sage-100)] rounded-lg p-6 bg-white hover:shadow-md transition-shadow flex flex-col">
      <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[var(--ink)]">
        {title}
      </h3>
      <p className="mt-2 text-[var(--muted)] text-sm flex-1">{description}</p>
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
      {(productUrl || githubUrl) && (
        <div className="mt-5 pt-4 border-t border-[var(--sage-100)] flex gap-5">
          {productUrl && (
            
              href={productUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-[var(--sage-800)] hover:text-[var(--sage-600)]"
            >
              <ExternalLink size={15} /> View Product
            </a>
          )}
          {githubUrl && (
            
              href={githubUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-[var(--sage-800)] hover:text-[var(--sage-600)]"
            >
              <FaGithub size={15} /> GitHub
            </a>
          )}
        </div>
      )}
    </div>
  )
}