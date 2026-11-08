import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjectCards from '@/components/projects/ProjectCards';
import {projects} from '@/lib/content';

export default function ProjectShowcase() {
  return <section className="bg-paper-muted py-20 lg:py-24">
    <Container>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="label-eyebrow">Client systems delivered</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium text-ink">ERP platforms shaped around the way each client works</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">Explore real dashboard views and the operational scope behind two client-specific implementations.</p>
        </div>
        <Button href="/projects" variant="ghost-light" className="shrink-0">View all projects</Button>
      </div>
      <div className="mt-12"><ProjectCards items={projects}/></div>
    </Container>
  </section>;
}
