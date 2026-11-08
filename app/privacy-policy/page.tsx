import PolicyTemplate from '@/components/templates/PolicyTemplate';
import data from '@/content/privacy-policy.json';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Privacy Policy | 2M Designers',data.intro,'/privacy-policy');
export default function Page(){return <PolicyTemplate {...data} path="/privacy-policy"/>;}
