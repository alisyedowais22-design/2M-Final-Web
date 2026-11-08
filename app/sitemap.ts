import type {MetadataRoute} from 'next';
import {publicRoutes} from '@/lib/routes';
import {absolute,site,siteIndexable} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{return siteIndexable?publicRoutes.map(r=>({url:absolute(r.path),lastModified:site.modifiedDate,changeFrequency:r.path==='/'?'weekly':r.path.startsWith('/insights/')?'monthly':'yearly',priority:r.path==='/'?1:r.path==='/solutions'||r.path==='/services'||r.path==='/projects'?0.9:r.path.startsWith('/solutions/')||r.path.startsWith('/services/')?0.8:0.6})):[];}
