import Container from '@/components/ui/Container';
import Link from 'next/link';
import {publicRoutes} from '@/lib/routes';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Site Map | 2M Designers','Browse every 2M Designers solution, service, industry, case study, insight and company information page.','/site-map');
export default function Page(){return <section className="bg-paper py-20"><Container><p className="label-eyebrow">Site map</p><h1 className="mt-4 font-display text-4xl text-ink">Every page, in one place</h1><ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{publicRoutes.map(r=><li key={r.path}><Link href={r.path} className="focus-ring block rounded-xl border border-paper-line p-5 text-base text-ink hover:border-bronze">{r.name}</Link></li>)}</ul></Container></section>;}
