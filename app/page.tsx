import Hero from '@/components/home/Hero';
import LedgerBand from '@/components/home/LedgerBand';
import FeatureShowcase from '@/components/home/FeatureShowcase';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import WhyChoose from '@/components/home/WhyChoose';
import IndustriesBand from '@/components/home/IndustriesBand';
import CtaBand from '@/components/home/CtaBand';
import Process from '@/components/sections/Process';
import CaseCards from '@/components/sections/CaseCards';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import {solutions,integrations} from '@/lib/content';
import {offeringImages} from '@/lib/images';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Fleet Telematics, ERP & Enterprise Software Solutions','Fleet telematics, ERP, school management, shipping automation, POS, mobile apps, cloud and custom software for businesses across Pakistan and the GCC.','/',{keywords:['fleet management software Pakistan','ERP software Pakistan','school management system','custom software company','GPS tracking platform','enterprise software UAE']});
export default function Home(){const fleet=solutions[0];return <><Hero/><LedgerBand/><FeatureShowcase/><ProjectShowcase/><WhyChoose/><section className="bg-paper py-20"><Container className="grid items-center gap-12 lg:grid-cols-2"><div><p className="label-eyebrow">Featured platform</p><h2 className="mt-4 font-display text-3xl font-medium text-ink">2M Fleet Telematics</h2><p className="mt-5 text-base text-ink/70">{fleet.tagline}</p><ul className="mt-8 space-y-4 text-base text-ink/70">{fleet.capabilities.slice(0,4).map(c=><li key={c.title}><strong className="text-ink">{c.title}</strong><p className="mt-1 leading-relaxed">{c.copy}</p></li>)}</ul><div className="mt-8 flex flex-wrap gap-4"><Button href={fleet.route}>Explore the platform</Button><Button href="/contact?service=fleet-telematics&source=%2F" variant="ghost-light">Request a Demo</Button></div></div><div className="relative min-h-[460px] overflow-hidden rounded-xl"><Image src={offeringImages['fleet-telematics']} alt="Commercial road freight vehicles" fill sizes="(min-width:1024px) 50vw,100vw" className="object-cover"/></div></Container></section><IndustriesBand/><Process/><CaseCards/><section className="bg-paper py-20"><Container><p className="label-eyebrow">Integration</p><h2 className="mt-4 font-display text-3xl text-ink">We connect to what you already run</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{integrations.map(x=><div key={x} className="rounded-xl border border-paper-line p-6 text-base text-ink">{x}</div>)}</div></Container></section><CtaBand/></>;}
