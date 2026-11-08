import PolicyTemplate from '@/components/templates/PolicyTemplate';
import data from '@/content/editorial-policy.json';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Editorial Policy | 2M Designers',data.intro,'/editorial-policy');
export default function Page(){return <PolicyTemplate {...data} path="/editorial-policy"/>;}
