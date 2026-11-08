import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbData } from '@/lib/seo';
export default function Breadcrumbs({items}:{items:{name:string;path:string}[]}) {return <><JsonLd data={breadcrumbData(items)}/><nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-inherit">{items.map((x,i)=><span key={x.path}>{i>0&&<span aria-hidden="true" className="mx-2">/</span>}{i===items.length-1?<span aria-current="page">{x.name}</span>:<Link className="underline underline-offset-4 focus-ring" href={x.path}>{x.name}</Link>}</span>)}</nav></>;}
