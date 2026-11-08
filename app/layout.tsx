import type {Metadata} from 'next';
import {Space_Grotesk,Inter,IBM_Plex_Mono} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import JsonLd from '@/components/seo/JsonLd';
import {rootSchema} from '@/lib/seo';
import {site,siteIndexable} from '@/lib/site';
const spaceGrotesk=Space_Grotesk({subsets:['latin'],variable:'--font-space-grotesk',weight:['500','600','700'],display:'swap'});
const inter=Inter({subsets:['latin'],variable:'--font-inter',weight:['400','500','600'],display:'swap'});
const plexMono=IBM_Plex_Mono({subsets:['latin'],variable:'--font-plex-mono',weight:['400','500'],display:'swap',preload:false});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'2M Designers',template:'%s | 2M Designers'},description:site.description,applicationName:site.name,category:'technology',manifest:'/manifest.webmanifest',formatDetection:{email:false,address:false,telephone:false},robots:{index:siteIndexable,follow:true,googleBot:{index:siteIndexable,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},icons:{icon:[{url:'/favicon.ico'},{url:'/icon.png',type:'image/png',sizes:'192x192'}],apple:'/apple-touch-icon.png'},verification:{google:process.env.GOOGLE_SITE_VERIFICATION||undefined,other:process.env.BING_SITE_VERIFICATION?{'msvalidate.01':process.env.BING_SITE_VERIFICATION}:{}},referrer:'strict-origin-when-cross-origin'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}><body className="font-body"><a href="#main-content" className="skip-link">Skip to content</a><JsonLd data={rootSchema}/><Header/><main id="main-content">{children}</main><Footer/>{(site.whatsapp||site.phone)&&<FloatingContact phone={site.phone} whatsapp={site.whatsapp}/>}</body></html>;}
