import PolicyTemplate from '@/components/templates/PolicyTemplate';
import data from '@/content/cookie-policy.json';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Cookie Policy | 2M Designers',data.intro,'/cookie-policy');
export default function Page(){return <PolicyTemplate {...data} path="/cookie-policy"/>;}
