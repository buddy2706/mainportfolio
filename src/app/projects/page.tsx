import AnimatedSection from '@/components/animatedsection'
import ProjectCard from '@/components/projectcard'

const projects = [
  { title: 'Property Maintenance', description: 'Property Maintenance coordination is a structural handoff problem between three parties,and a guided workflow', tags: ['AI/ML', 'B2C'] },
  { title: 'Prescription Refill Management', description: 'Prescription refill drop-off reframed|An AI product management case study: 0-1 discovery through working prototype', tags: ['Healthcare'] },
  { title: 'Billing and Authorization', description: 'WIP - TBD', tags: ['Finance'] },
]

export default function Projects() {
  return (
    <AnimatedSection>
      <h1
        style={{ fontFamily: 'var(--font-serif)' }}
        className="text-4xl text-[var(--ink)] mb-4"
      >
        Projects
      </h1>
      <p className="text-[var(--muted)] mb-10 max-w-xl">
        Selected work in BI product management and AI product development, including dashboards, requirements artifacts, and independently built AI tools.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </AnimatedSection>
  )
}