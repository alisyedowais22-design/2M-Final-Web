import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import OfferingCards from '@/components/sections/OfferingCards';
import CtaBand from '@/components/home/CtaBand';
import Process from '@/components/sections/Process';
import {solutions,services} from '@/lib/content';
import {heroSlides} from '@/lib/images';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata("Software, Web, Mobile & Cloud Services | 2M Designers","Custom software, websites, Android and iOS apps, social media marketing, cloud hosting and API integrations \u2014 delivered standalone or with our platforms.",'/services');
export default function Page(){return <><PageHero eyebrow="Services" path="/services" title={"Engineering capability, available on its own"} summary={"You do not have to buy a platform to work with us. These services are delivered standalone for businesses that already know what they need building, hosting, connecting or promoting."} image={heroSlides[2]}/><section className="bg-paper py-20 lg:py-28"><Container><OfferingCards items={services}/></Container></section><Process/><section className="bg-paper py-20"><Container><h2 className="mb-8 font-display text-3xl text-ink">Or start from one of our platforms</h2><OfferingCards items={solutions} compact/></Container></section><CtaBand source="/services" title={"Have a project in mind?"} copy={"Send us the requirement, however rough. We will tell you what it involves and what it is likely to cost before you commit to anything."}/></>;}
