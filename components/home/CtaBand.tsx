import Container from '@/components/ui/Container';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {contactEnabled,site} from '@/lib/site';

const helpful=['Your current manual process','Users, branches, vehicles or campuses','The result you need from the system'];

export default function CtaBand({source='/',service='',title='Ready to digitise your operation?',copy='Tell us what is manual, invisible or costing you money today. We will come back with a straight answer on what it takes to fix — including when the answer is that you do not need us.'}:{source?:string;service?:string;title?:string;copy?:string}){
 return <section id="enquire" className="bg-ink py-20 text-ivory lg:py-28">
  <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
   <div className="rounded-xl border border-ink-line bg-ink-elevated/70 p-7 shadow-[0_24px_60px_-36px_rgba(0,0,0,.75)] lg:sticky lg:top-32 lg:p-9">
    <p className="label-eyebrow">Get started</p>
    <h2 className="mt-4 font-display text-3xl font-medium leading-tight">{title}</h2>
    <p className="mt-5 text-base leading-relaxed text-mist">{copy}</p>
    <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
     {[['01','Free consultation','No obligation or hidden commitment.'],['02','Defined scope','Modules, integrations and delivery boundaries.'],['03','Clear response','A useful reply within one business day.']].map(([n,t,c])=><div key={n} className="rounded-lg border border-ink-line bg-ink/45 p-4"><div className="flex items-start gap-3"><span className="font-mono text-xs text-bronze-light">{n}</span><div><h3 className="text-sm font-semibold text-ivory">{t}</h3><p className="mt-1 text-xs leading-relaxed text-mist">{c}</p></div></div></div>)}
    </div>
    <div className="mt-8 border-t border-ink-line pt-7">
     <p className="font-mono text-[10px] uppercase tracking-label text-bronze-light">A useful first message includes</p>
     <ul className="mt-4 space-y-3">{helpful.map(item=><li key={item} className="flex items-center gap-3 text-sm text-ivory/85"><span className="h-1.5 w-1.5 rounded-full bg-bronze"/><span>{item}</span></li>)}</ul>
    </div>
    {(site.whatsapp||site.phone)&&<div className="mt-8 flex flex-wrap gap-4">{site.whatsapp&&<a className="focus-ring rounded border border-bronze/40 px-4 py-3 text-sm text-bronze-light" href={'https://wa.me/'+site.whatsapp}>Message on WhatsApp</a>}{site.phone&&<a className="focus-ring rounded border border-ink-line px-4 py-3 text-sm text-ivory" href={'tel:'+site.phone.replace(/[^+\d]/g,'')}>{site.phone}</a>}</div>}
   </div>
   <EnquiryForm source={source} service={service} enabled={contactEnabled}/>
  </Container>
 </section>;
}
