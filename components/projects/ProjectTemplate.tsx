import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import OfferingCards from '@/components/sections/OfferingCards';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import type {Project} from '@/lib/content';
import {offerings} from '@/lib/content';
import {absolute} from '@/lib/site';

export default function ProjectTemplate({project}:{project:Project}) {
  const primary = project.screenshots[0];
  const additional = project.screenshots.slice(1);
  const related = project.related.flatMap(name => offerings.filter(offering => offering.title === name));
  const enquiry = `/contact?service=erp&source=${encodeURIComponent(project.route)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': absolute(project.route + '#software'),
    name: project.title,
    description: project.description,
    url: absolute(project.route),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    image: project.screenshots.map(screenshot => absolute(screenshot.src)),
    creator: {'@id': absolute('/#organization')}
  };

  return <>
    <JsonLd data={schema}/>
    <section className="bg-ink pb-28 pt-20 text-ivory lg:pb-32 lg:pt-28">
      <Container>
        <Breadcrumbs items={[{name:'Home',path:'/'},{name:'Projects',path:'/projects'},{name:project.title,path:project.route}]}/>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="label-eyebrow">Client project · {project.client}</p>
            <h1 className="mt-6 max-w-4xl font-display text-[36px] font-medium leading-[1.1] tracking-tight sm:text-[46px]">{project.headline}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">{project.summary}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={enquiry}>Discuss a similar system</Button>
              <Button href="/solutions/erp" variant="secondary">Explore 2M ERP</Button>
            </div>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-ink-line bg-ink-line sm:grid-cols-3 lg:grid-cols-1">
            {project.facts.map(fact => <div key={fact.label} className="bg-ink-elevated p-5">
              <dt className="font-mono text-[10px] uppercase tracking-label text-mist">{fact.label}</dt>
              <dd className="mt-2 text-base font-medium text-ivory">{fact.value}</dd>
            </div>)}
          </dl>
        </div>
      </Container>
    </section>

    <section className="bg-paper pb-20 lg:pb-28">
      <Container className="relative -mt-16">
        <figure className="overflow-hidden rounded-xl border border-paper-line bg-white shadow-[0_24px_64px_-28px_rgba(14,26,51,0.35)]">
          <Image src={primary.src} alt={primary.alt} width={1920} height={870} priority sizes="(min-width:1320px) 1320px,100vw" className="h-auto w-full"/>
          <figcaption className="border-t border-paper-line px-6 py-4 text-sm text-ink/60">{primary.caption}</figcaption>
        </figure>
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="label-eyebrow">Project overview</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-ink">Built around the client’s operating workflow</h2>
          </div>
          <div>{project.overview.map(paragraph => <p key={paragraph} className="mb-5 text-base leading-relaxed text-ink/70 last:mb-0">{paragraph}</p>)}</div>
        </div>
      </Container>
    </section>

    <section className="bg-paper-muted py-20 lg:py-28">
      <Container>
        <p className="label-eyebrow">Delivered capabilities</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium text-ink">What the interface brings together</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.highlights.map((highlight,index) => <article key={highlight.title} className="rounded-xl border border-paper-line bg-white p-7 shadow-sm">
            <span className="font-mono text-xs text-bronze">{String(index + 1).padStart(2,'0')}</span>
            <h3 className="mt-4 text-lg font-semibold text-ink">{highlight.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">{highlight.copy}</p>
          </article>)}
        </div>
      </Container>
    </section>

    <section className="bg-ink py-20 text-ivory lg:py-28">
      <Container>
        <p className="label-eyebrow">System coverage</p>
        <h2 className="mt-4 font-display text-3xl font-medium">Modules and workflows visible in the delivered system</h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-mist">This scope is taken from the supplied dashboard views. It describes what is visible in this implementation and does not imply that every project needs the same module set.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.modules.map(module => <li key={module} className="rounded-xl border border-ink-line bg-ink-elevated p-5 text-base">{module}</li>)}
        </ul>
      </Container>
    </section>

    {additional.length > 0 && <section className="bg-paper py-20 lg:py-28">
      <Container>
        <p className="label-eyebrow">More dashboard views</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-ink">The same system across working modes</h2>
        <div className="mt-10 space-y-8">
          {additional.map(screenshot => <figure key={screenshot.src} className="overflow-hidden rounded-xl border border-paper-line bg-white shadow-sm">
            <Image src={screenshot.src} alt={screenshot.alt} width={1920} height={870} sizes="(min-width:1320px) 1320px,100vw" className="h-auto w-full"/>
            <figcaption className="border-t border-paper-line px-6 py-4 text-sm text-ink/60">{screenshot.caption}</figcaption>
          </figure>)}
        </div>
      </Container>
    </section>}

    <section className="bg-paper py-20 lg:py-28">
      <Container>
        <p className="label-eyebrow">Related capabilities</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-ink">The building blocks behind this type of delivery</h2>
        <div className="mt-10"><OfferingCards items={related} compact/></div>
      </Container>
    </section>
    <CtaBand source={project.route} service="erp" title={project.closing[0]} copy={project.closing[1]}/>
  </>;
}
