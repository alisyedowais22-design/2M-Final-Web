import PolicyTemplate from '@/components/templates/PolicyTemplate';
import data from '@/content/terms-of-use.json';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Terms of Use | 2M Designers',data.intro,'/terms-of-use');
export default function Page(){return <PolicyTemplate {...data} path="/terms-of-use"/>;}
