import {solutions,services,industries} from './content';
export type NavLink={label:string;href:string;description?:string};
export type NavColumn={heading:string;links:NavLink[]};
export type NavItem={label:string;href:string;columns?:NavColumn[]};
const links=(items:typeof solutions)=>items.map(o=>({label:o.title,href:o.route,description:o.shortName}));
export const primaryNav:NavItem[]=[
 {label:'Solutions',href:'/solutions',columns:[{heading:'Fleet, finance & freight',links:links(solutions.slice(0,3))},{heading:'People, work, retail & education',links:links(solutions.slice(3))}]},
 {label:'Services',href:'/services',columns:[{heading:'Build',links:links(services.slice(0,3))},{heading:'Grow & run',links:links(services.slice(3))}]},
 {label:'Projects',href:'/projects'},
 {label:'Industries',href:'/industries',columns:[
  {heading:'Operations',links:industries.slice(0,5).map(x=>({label:x.name,href:'/industries#'+x.slug,description:x.summary}))},
  {heading:'Specialist sectors',links:industries.slice(5).map(x=>({label:x.name,href:'/industries#'+x.slug,description:x.summary}))}
 ]},
 {label:'Case Studies',href:'/case-studies'},{label:'Insights',href:'/insights'},{label:'About',href:'/about'}
];
export const footerColumns:NavColumn[]=[{heading:'Solutions',links:links(solutions)},{heading:'Services',links:links(services)},{heading:'Company',links:[{label:'About 2M',href:'/about'},{label:'Client projects',href:'/projects'},{label:'Industries',href:'/industries'},{label:'Case studies',href:'/case-studies'},{label:'Insights',href:'/insights'},{label:'Contact',href:'/contact'},{label:'FAQ',href:'/faq'},{label:'Editorial policy',href:'/editorial-policy'}]}];
