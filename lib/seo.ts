import type { Metadata } from 'next';
import { absolute, site, siteIndexable } from './site';
export function pageMetadata(title: string, description: string, path: string, options?:{keywords?:readonly string[];image?:string}): Metadata {
 const image=options?.image||absolute('/images/2m-designers-logo.png');
 return { title: { absolute: title }, description, alternates: { canonical: absolute(path) },
 keywords:options?.keywords?[...options.keywords]:undefined,
 openGraph: { type: 'website', locale: 'en_GB', siteName: site.name, title, description, url: absolute(path),images:[{url:image,alt:title}] },
 twitter: { card: 'summary_large_image', title, description, images:[image] }, robots: { index: siteIndexable, follow: true } };
}
export function breadcrumbData(items: {name:string;path:string}[]) {
 return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((x,i)=>({'@type':'ListItem',position:i+1,name:x.name,item:absolute(x.path)}))};
}
export const rootSchema = { '@context':'https://schema.org','@graph':[
 {'@type':'Organization','@id':absolute('/#organization'),name:site.name,url:site.url,logo:absolute('/images/2m-designers-logo.png'),foundingDate:site.founded,description:site.description,sameAs:site.socials,
 ...(site.email?{email:site.email}:{}),...(site.phone?{telephone:site.phone}:{}),
 location:[{'@type':'Place',name:'Karachi head office',address:{'@type':'PostalAddress',addressLocality:'Karachi',addressCountry:'PK'}},{'@type':'Place',name:'Dubai regional presence',address:{'@type':'PostalAddress',addressLocality:'Dubai',addressCountry:'AE'}}]},
 {'@type':'WebSite','@id':absolute('/#website'),url:site.url,name:site.name,publisher:{'@id':absolute('/#organization')},inLanguage:'en'}
 ,{'@type':'ProfessionalService','@id':absolute('/#business'),name:site.name,url:site.url,image:absolute('/images/2m-designers-logo.png'),description:site.description,parentOrganization:{'@id':absolute('/#organization')},areaServed:[{'@type':'Country',name:'Pakistan'},{'@type':'Country',name:'United Arab Emirates'}],knowsAbout:['Fleet telematics','Enterprise resource planning','School management systems','Shipping automation','Point of sale software','Custom software development','Cloud infrastructure','API integrations']}
 ]};
