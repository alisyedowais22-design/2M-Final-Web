import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import FaqAccordion from '@/components/home/FaqAccordion';
import {offerings} from '@/lib/content';
import Link from 'next/link';
import {pageMetadata} from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
export const metadata=pageMetadata('Frequently Asked Questions | 2M Designers','Answers about 2M fleet tracking, ERP, school management, POS, custom software, websites, mobile apps, hosting and integrations.','/faq');
export default function Page(){const questions=offerings.flatMap(o=>o.faqs);const schema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:questions.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))};return <><JsonLd data={schema}/><PageHero eyebrow="FAQ" path="/faq" title="Questions buyers actually ask" summary="Practical answers about compatibility, implementation, ownership and support across our products and services."/><section className="bg-paper py-20"><Container className="space-y-16">{offerings.map(o=><section key={o.slug}><h2 className="mb-6 font-display text-2xl text-ink"><Link className="focus-ring" href={o.route}>{o.title}</Link></h2><FaqAccordion items={o.faqs}/></section>)}</Container></section></>;}
