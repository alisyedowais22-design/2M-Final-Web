import type {MetadataRoute} from 'next';

export default function manifest():MetadataRoute.Manifest{return {
 name:'2M Designers — Enterprise Technology',
 short_name:'2M Designers',
 description:'Fleet telematics, ERP, school management and custom software for businesses in Pakistan and the GCC.',
 start_url:'/',
 display:'standalone',
 background_color:'#FFFFFF',
 theme_color:'#0E1A33',
 icons:[{src:'/icon.png',sizes:'192x192',type:'image/png'},{src:'/apple-touch-icon.png',sizes:'180x180',type:'image/png'}]
};}
