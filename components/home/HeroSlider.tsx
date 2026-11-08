import Image from 'next/image';
import {heroSlides} from '@/lib/images';

export default function HeroSlider(){return <div className="absolute inset-0 overflow-hidden bg-ink">
 {heroSlides.map((src,i)=><div key={src} className="hero-slide absolute inset-0" style={{animationDelay:`${i*5}s`}}>
  <Image src={src} alt="" fill priority={i===0} sizes="100vw" className="object-cover"/>
 </div>)}
 <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30"/>
 <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent"/>
 <div className="absolute bottom-7 right-6 z-30 hidden items-center gap-2 sm:flex" aria-hidden="true">
  {heroSlides.map((_,i)=><span key={i} className="h-[3px] w-5 bg-ivory/45"/>) }
 </div>
 </div>}
