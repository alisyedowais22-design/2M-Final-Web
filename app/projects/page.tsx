import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import ProjectCards from '@/components/projects/ProjectCards';
import CtaBand from '@/components/home/CtaBand';
import {projects} from '@/lib/content';
import {pageMetadata} from '@/lib/seo';

export const metadata = pageMetadata(
  'Client ERP Projects | 2M Designers',
  'Explore client-specific ERP systems delivered for GO Track IoT and SASPAK Cargo, with real dashboard views and implementation details.',
  '/projects'
);

export default function Page() {
  return <>
    <PageHero
      eyebrow="Projects"
      path="/projects"
      title="Client systems built around real operations"
      summary="A closer look at client-specific ERP implementations, the workflows they connect and the dashboard experience delivered to each team."
    />
    <section className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="label-eyebrow">Selected work</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-ink">Different businesses need different systems</h2>
          </div>
          <p className="text-base leading-relaxed text-ink/70">These projects show how a shared ERP foundation can be shaped around very different operating models—from a broad business dashboard spanning finance, sales and inventory to a focused cargo-accounting workflow built around documents, jobs and parties.</p>
        </div>
        <div className="mt-12"><ProjectCards items={projects}/></div>
      </Container>
    </section>
    <CtaBand source="/projects" service="erp" title="Have a workflow that does not fit off-the-shelf software?" copy="Show us how the work moves today. We will identify the right modules, integrations and delivery scope for a client-specific system."/>
  </>;
}
