'use client';
import {useSearchParams} from 'next/navigation';
import EnquiryForm from './EnquiryForm';
import options from '@/content/enquiry-options.json';
export default function ContactEnquiry({enabled}:{enabled:boolean}){const p=useSearchParams();const value=p.get('service')||'';const service=options.some(o=>o.slug===value)?value:'';const rawSource=p.get('source')||'/contact';const source=/^\/(?!\/)[^\r\n]*$/.test(rawSource)&&rawSource.length<=250?rawSource:'/contact';return <EnquiryForm key={service} source={source} service={service} enabled={enabled}/>;}
