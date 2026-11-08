import type {MetadataRoute} from 'next';
import {absolute,siteIndexable} from '@/lib/site';
export default function robots():MetadataRoute.Robots{return {rules:siteIndexable?{userAgent:'*',allow:'/',disallow:['/api/']}:{userAgent:'*',disallow:'/'},sitemap:absolute('/sitemap.xml'),host:absolute('/')};}
