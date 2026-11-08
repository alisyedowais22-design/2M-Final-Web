import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import {cases,findOffering} from '@/lib/content';
import {caseApproved} from '@/lib/site';
import {caseImages,heroSlides} from '@/lib/images';
import CtaBand from '@/components/home/CtaBand';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata('Case Studies — Fleet & Enterprise Software | 2M Designers','Explore how 2M delivers bilingual fleet platforms, mixed-device tracking and security-focused vehicle operations for businesses in Pakistan and the UAE.','/case-studies',{image:caseImages['uae-bilingual-platform']});

export default function Page(){return <>
 <PageHero eyebrow="Case Studies" path="/case-studies" title="Systems carrying real operations, not portfolio pieces" summary="Each case study explains the operational problem, the engineering work delivered and the practical capability created for the client." image={heroSlides[0]}/>
 <section className="bg-paper py-20 lg:py-28">
  <Container>
   <div className="mx-auto mb-14 max-w-3xl text-center">
    <p className="label-eyebrow">Selected deployments</p>
    <h2 className="mt-4 font-display text-3xl font-medium text-ink">Built for different markets and operating priorities</h2>
    <p className="mt-5 text-base leading-relaxed text-ink/70">These accounts describe delivered scope and capabilities. Client identities remain withheld unless publication has been approved.</p>
   </div>
   <div className="space-y-12">
    {cases.map((c,index)=><article key={c.slug} id={c.slug} className="scroll-mt-28 overflow-hidden rounded-2xl border border-paper-line bg-white shadow-[0_24px_65px_-44px_rgba(14,26,51,.65)]">
     <div className={`grid lg:grid-cols-[0.9fr_1.1fr] ${index%2?'lg:[&>*:first-child]:order-2':''}`}>
      <div className="relative min-h-[320px] lg:min-h-[480px]">
       <Image src={caseImages[c.slug]} alt={`${c.market} technology deployment`} fill sizes="(min-width:1024px) 45vw,100vw" className="object-cover"/>
       <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"/>
       <div className="absolute bottom-7 left-7 right-7 text-ivory">
        <p className="font-mono text-[10px] uppercase tracking-label text-bronze-light">Deployment 0{index+1}</p>
        <p className="mt-3 text-sm text-white/85">{c.market}</p>
       </div>
      </div>
      <div className="p-7 sm:p-10 lg:p-12">
       <p className="label-eyebrow">{caseApproved(c.slug)?c.name:'Client identity protected'}</p>
       <h2 className="mt-4 font-display text-3xl font-medium text-ink">{c.headline}</h2>
       <div className="mt-8 rounded-xl bg-paper-muted p-6">
        <h3 className="text-base font-semibold text-ink">The challenge</h3>
        <p className="mt-3 text-sm leading-7 text-ink/70">{caseApproved(c.slug)?c.challenge:c.challenge.replaceAll(c.name,'The operator')}</p>
       </div>
       <h3 className="mt-8 text-base font-semibold text-ink">What we delivered</h3>
       <ol className="mt-5 space-y-4">
        {c.work.map((p,i)=><li key={p} className="flex gap-4 text-sm leading-7 text-ink/70"><span className="mt-1 font-mono text-xs text-bronze">{String(i+1).padStart(2,'0')}</span><span>{p}</span></li>)}
       </ol>
      </div>
     </div>
     <div className="border-t border-paper-line bg-paper-muted p-7 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-3">
       {c.outcomes.map(o=><div key={o.copy} className="rounded-xl border border-paper-line bg-white p-6"><p className="font-display text-2xl font-medium text-bronze">{o.title}</p><p className="mt-2 text-sm leading-relaxed text-ink/65">{o.copy}</p></div>)}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-3"><span className="text-sm font-semibold text-ink">Solutions used:</span>{c.related.map(n=><Link key={n} href={findOffering(n)!.route} className="focus-ring rounded-full border border-paper-line bg-white px-4 py-2 text-sm text-bronze transition-colors hover:border-bronze">{n}</Link>)}</div>
     </div>
    </article>)}
   </div>
  </Container>
 </section>
 <CtaBand source="/case-studies" title="Could this be your operation?" copy="Tell us where visibility, control or integration breaks down today. We will map the right platform, modules and delivery approach around your workflow."/>
 </>}
