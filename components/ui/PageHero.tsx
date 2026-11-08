import Image from 'next/image';
import Container from './Container';
import Breadcrumbs from './Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import {absolute} from '@/lib/site';
export default function PageHero({eyebrow,title,summary,image,path,children}:{eyebrow:string;title:string;summary:string;image?:string;path:string;children?:React.ReactNode}) {
 const schema={'@context':'https://schema.org','@type':'WebPage','@id':absolute(path+'#webpage'),url:absolute(path),name:title,description:summary,isPartOf:{'@id':absolute('/#website')},about:{'@id':absolute('/#organization')},...(image?{primaryImageOfPage:{'@type':'ImageObject',url:image}}:{})};
 return <><JsonLd data={schema}/><section className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32">{image&&<Image src={image} alt="" fill sizes="100vw" priority className="object-cover"/>}<div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/60"/><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent"/><Container className="relative"><Breadcrumbs items={[{name:'Home',path:'/'},{name:eyebrow,path}]}/><p className="label-eyebrow">{eyebrow}</p><h1 className="mt-6 max-w-3xl font-display text-[36px] font-medium leading-[1.12] tracking-tight sm:text-[46px]">{title}</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">{summary}</p>{children}</Container></section></>;
}
