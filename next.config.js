/** @type {import('next').NextConfig} */
const nextConfig={
 reactStrictMode:true,
 poweredByHeader:false,
 compress:true,
 images:{remotePatterns:[{protocol:'https',hostname:'images.unsplash.com'}],formats:['image/webp'],minimumCacheTTL:86400,deviceSizes:[360,640,750,828,1080,1200,1600,1920]},
 async redirects(){return [
  {source:'/products',destination:'/solutions',permanent:true},
  {source:'/products/:slug',destination:'/solutions/:slug',permanent:true},
  {source:'/success-stories',destination:'/case-studies',permanent:true},
  {source:'/pricing',destination:'/contact?intent=proposal',permanent:true},
  {source:'/about/careers',destination:'/about',permanent:true},
  {source:'/login',destination:'/contact',permanent:true},
  {source:'/robot.txt',destination:'/robots.txt',permanent:true}
 ];},
 async headers(){return [
  {source:'/:path*',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'X-Frame-Options',value:'SAMEORIGIN'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'}]},
  {source:'/images/:path*',headers:[{key:'Cache-Control',value:'public, max-age=86400, stale-while-revalidate=604800'}]}
 ];}
};module.exports=nextConfig;
