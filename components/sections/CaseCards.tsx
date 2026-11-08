import Container from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import {cases} from '@/lib/content';
import {caseApproved} from '@/lib/site';
import {caseImages} from '@/lib/images';

export default function CaseCards(){
 return <section className="bg-paper py-24">
  <Container>
   <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
    <div>
     <p className="label-eyebrow">Case studies</p>
     <h2 className="mt-4 font-display text-3xl font-medium text-ink">Platforms running in production today</h2>
     <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">Different markets, operating models and technical requirements—each delivered as a working system rather than a portfolio concept.</p>
    </div>
    <Link href="/case-studies" className="focus-ring text-sm font-medium text-bronze">Explore all case studies →</Link>
   </div>
   <div className="mt-12 grid gap-6 md:grid-cols-3">
    {cases.map((c,i)=><Link key={c.slug} href={'/case-studies#'+c.slug} className="focus-ring group overflow-hidden rounded-xl border border-paper-line bg-white shadow-[0_18px_48px_-34px_rgba(14,26,51,.65)] transition-all duration-300 hover:-translate-y-1 hover:border-bronze/30 hover:shadow-xl">
     <div className="relative h-56 overflow-hidden">
      <Image src={caseImages[c.slug]} alt={`${c.market} case study`} fill sizes="(min-width:768px) 33vw,100vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent"/>
      <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-ink/75 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-bronze-light backdrop-blur">Case 0{i+1}</span>
     </div>
     <div className="p-7">
      <p className="font-mono text-[10px] uppercase leading-relaxed tracking-label text-bronze">{c.market}</p>
      <h3 className="mt-4 font-display text-xl font-medium text-ink">{caseApproved(c.slug)?c.name:'Fleet operator · '+c.market.split('·')[0].trim()}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{c.headline}</p>
      <span className="mt-6 inline-flex text-sm font-medium text-bronze">View case study →</span>
     </div>
    </Link>)}
   </div>
  </Container>
 </section>;
}
