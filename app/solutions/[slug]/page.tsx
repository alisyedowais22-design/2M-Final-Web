import {notFound} from 'next/navigation';
import {offerings} from '@/lib/content';
import DetailTemplate from '@/components/templates/DetailTemplate';
import {pageMetadata} from '@/lib/seo';
import {offeringImages} from '@/lib/images';
export const dynamicParams=false;
export function generateStaticParams(){return offerings.filter(o=>o.kind==='solution').map(o=>({slug:o.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const o=offerings.find(o=>o.kind==='solution'&&o.slug===slug);return o?pageMetadata(o.seoTitle,o.description,o.route,{keywords:o.keywords,image:offeringImages[o.slug]}):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const o=offerings.find(o=>o.kind==='solution'&&o.slug===slug);if(!o)notFound();return <DetailTemplate data={o}/>;}
