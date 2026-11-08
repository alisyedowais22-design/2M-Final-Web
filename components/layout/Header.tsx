'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import {primaryNav} from '@/lib/nav-data';
import MobileNav from './MobileNav';

export default function Header(){
 const[mobileOpen,setMobileOpen]=useState(false);
 return <header className="sticky top-0 z-50 overflow-visible border-b border-paper-line bg-paper/95 shadow-[0_1px_0_rgba(14,26,51,0.04)] backdrop-blur">
  <div className="h-[3px] bg-gradient-to-r from-ink via-bronze to-ink"/>
  <Container className="flex h-[88px] items-center justify-between gap-4">
   <Link href="/" className="focus-ring shrink-0" aria-label="2M Designers home"><Image src="/images/2m-designers-logo.png" alt="2M Designers" width={64} height={64} priority className="h-16 w-16 object-contain"/></Link>
   <nav aria-label="Main navigation" className="hidden h-full items-center lg:flex">
    {primaryNav.map(item=><div key={item.href} className="group relative flex h-full items-center">
     <Link href={item.href} className="focus-ring flex h-full items-center px-2 text-sm font-medium text-ink/80 transition-colors hover:text-bronze group-focus-within:text-bronze group-hover:text-bronze xl:px-3">{item.label}</Link>
     {item.columns&&<button type="button" className="focus-ring flex h-full min-w-8 items-center justify-center text-ink/80 group-focus-within:text-bronze group-hover:text-bronze" aria-label={'Open '+item.label+' menu'} aria-haspopup="true"><svg width="10" height="10" viewBox="0 0 9 9" aria-hidden="true" className="transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180"><path d="M1 3L4.5 6.5L8 3" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg></button>}
     {item.columns&&<div className="pointer-events-none invisible absolute left-0 top-full z-[80] w-[720px] translate-y-2 overflow-hidden rounded-b-xl border border-paper-line bg-white opacity-0 shadow-[0_28px_65px_-20px_rgba(15,26,43,0.38)] transition-all duration-200 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="grid grid-cols-2 gap-7 p-7">
       {item.columns.map(col=><div key={col.heading}><p className="label-eyebrow mb-3">{col.heading}</p><ul className="space-y-1">{col.links.map(link=><li key={link.href}><Link href={link.href} className="focus-ring group/link block rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-paper-line hover:bg-paper-muted"><span className="block text-sm font-semibold text-ink group-hover/link:text-bronze">{link.label}</span>{link.description&&link.description!==link.label&&<span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-ink/55">{link.description}</span>}</Link></li>)}</ul></div>)}
      </div>
      <Link href={item.href} className="focus-ring flex items-center justify-between border-t border-paper-line bg-paper-muted px-8 py-4 text-sm font-semibold text-ink transition-colors hover:text-bronze"><span>View all {item.label.toLowerCase()}</span><span aria-hidden="true">→</span></Link>
     </div>}
    </div>)}
   </nav>
   <div className="hidden shrink-0 lg:block"><Button href="/contact" variant="ghost-light" className="!px-4 !py-3 !text-sm">Book a Consultation</Button></div>
   <button className="focus-ring flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden" aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={()=>setMobileOpen(true)}><span className="h-px w-5 bg-ink"/><span className="h-px w-5 bg-ink"/><span className="h-px w-5 bg-ink"/></button>
  </Container>
  <MobileNav open={mobileOpen} onClose={()=>setMobileOpen(false)}/>
 </header>;
}
