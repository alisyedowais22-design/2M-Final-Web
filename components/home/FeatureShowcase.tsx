import Container from '@/components/ui/Container';
import OfferingCards from '@/components/sections/OfferingCards';
import {solutions,services} from '@/lib/content';
import Link from 'next/link';
export default function FeatureShowcase(){return <section className="bg-ink py-24 text-ivory lg:py-32"><Container><p className="label-eyebrow">What we build</p><h2 className="mb-12 mt-4 font-display text-3xl font-medium">Platforms that run the operational side of your business</h2><OfferingCards items={solutions}/><h2 className="mt-16 font-display text-2xl">Services that support them</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(o=><Link key={o.slug} href={o.route} className="focus-ring rounded-xl border border-ink-line p-5 text-base hover:border-bronze">{o.title}</Link>)}</div></Container></section>;}
