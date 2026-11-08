import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import {offerings} from '@/lib/content';
import Link from 'next/link';
export default function NotFound(){return <section className="bg-paper py-24"><Container><p className="label-eyebrow">404</p><h1 className="mt-4 font-display text-4xl text-ink">That page has moved or never existed</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">Here is everything we build. If you were looking for something specific, tell us and we will point you at it.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{offerings.map(o=><Link key={o.slug} href={o.route} className="focus-ring rounded-xl border border-paper-line p-6 text-base text-ink hover:border-bronze">{o.title}</Link>)}</div><div className="mt-10 flex flex-wrap gap-4"><Button href="/">Back to home</Button><Button href="/contact" variant="ghost-light">Contact us</Button></div></Container></section>;}
