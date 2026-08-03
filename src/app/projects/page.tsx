import AnimatedSection from '@/components/animatedSection'
import ProjectCard from '@/components/projectCard'

const projects = [
  { title: '[PLACEHOLDER Project 1]', description: '[one-line summary]', tags: ['B2C'] },
  { title: '[PLACEHOLDER Project 2]', description: '[one-line summary]', tags: ['Healthcare'] },
  { title: '[PLACEHOLDER Project 3]', description: '[one-line summary]', tags: ['Finance'] },
]

export default function Projects() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </AnimatedSection>
  )
}