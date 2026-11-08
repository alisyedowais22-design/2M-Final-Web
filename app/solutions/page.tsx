import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import OfferingCards from '@/components/sections/OfferingCards';
import CtaBand from '@/components/home/CtaBand';
import {solutions,services} from '@/lib/content';
import {heroSlides} from '@/lib/images';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata("Solutions — Fleet, ERP, School, Shipping & POS | 2M Designers","Fleet telematics, business ERP, school management, shipping and freight workflows, driver management, task management and POS software for Pakistan and the GCC.",'/solutions');
export default function Page(){return <><PageHero eyebrow="Solutions" path="/solutions" title={"Platforms that run the operational side of your business"} summary={"Seven products covering fleet, finance, freight, education, people, work and retail. Each runs standalone and each is stronger connected to the others, because the data your business depends on rarely stays inside one department."} image={heroSlides[0]}/><section className="bg-paper py-20 lg:py-28"><Container><OfferingCards items={solutions}/></Container></section><section className="bg-paper py-20"><Container><h2 className="mb-8 font-display text-3xl text-ink">And the engineering services around them</h2><OfferingCards items={services} compact/></Container></section><CtaBand source="/solutions" title={"Not sure which platform fits?"} copy={"Describe the process that is costing you time. We will tell you which of these solves it — or that none of them do."}/></>;}
