import {NextRequest,NextResponse} from 'next/server';
import {createHash} from 'node:crypto';
import {validateEnquiry} from '@/lib/enquiry';
import options from '@/content/enquiry-options.json';
export const runtime='nodejs';
const buckets=new Map<string,{count:number;expires:number}>();
// Per-process guard. Configure a shared edge/provider rate limit for multi-instance hosting.
function rateLimited(key:string){const now=Date.now();for(const [k,v] of buckets)if(v.expires<now)buckets.delete(k);if(buckets.size>=10000)return true;const value=buckets.get(key)||{count:0,expires:now+600000};value.count++;buckets.set(key,value);return value.count>5;}
function response(body:unknown,status=200){return NextResponse.json(body,{status,headers:{'Cache-Control':'no-store',...(status===429?{'Retry-After':'600'}:{})}});}
export async function POST(req:NextRequest){
 const origin=req.headers.get('origin');const allowed=new Set([new URL(req.url).origin,new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://www.2mdesigners.com').origin]);
 if(origin&&!allowed.has(origin))return response({success:false,message:'Invalid request origin.'},403);
 if(!req.headers.get('content-type')?.includes('application/json'))return response({success:false,message:'Expected JSON.'},415);
 let input:unknown;
 try{const reader=req.body?.getReader();if(!reader)return response({success:false,message:'Missing request body.'},400);let bytes=0;const chunks:Uint8Array[]=[];while(true){const part=await reader.read();if(part.done)break;bytes+=part.value.byteLength;if(bytes>16384){await reader.cancel();return response({success:false,message:'Enquiry is too large.'},413);}chunks.push(part.value);}input=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{return response({success:false,message:'Invalid request.'},400);}
 const checked=validateEnquiry(input,options.map(o=>o.slug));
 if(Object.keys(checked.errors).length||!checked.data)return response({success:false,errors:checked.errors},400);
 const data=checked.data;if(data.website)return response({success:false,message:'Unable to process this enquiry.'},400);
 const key=createHash('sha256').update(data.email.toLowerCase()).digest('hex');
 if(rateLimited(key))return response({success:false,message:'Too many attempts. Please try again in ten minutes.'},429);
 const endpoint=process.env.CONTACT_WEBHOOK_URL;
 if(!endpoint)return response({success:false,message:'Online enquiries are temporarily unavailable. Please use a verified direct contact channel.'},503);
 try{
  const url=new URL(endpoint);if(url.protocol!=='https:')return response({success:false,message:'Online enquiries are temporarily unavailable.'},503);
  const payload=Object.fromEntries(Object.entries(data).filter(([field])=>field!=='website'));
  const result=await fetch(url,{method:'POST',redirect:'error',headers:{'Content-Type':'application/json','Idempotency-Key':data.requestId,...(process.env.CONTACT_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({...payload,serviceName:options.find(o=>o.slug===data.service)?.title||'Not sure yet',receivedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000),cache:'no-store'});
  if(!result.ok)return response({success:false,message:'We could not deliver your enquiry. Please try again shortly.'},502);
  return response({success:true});
 }catch{return response({success:false,message:'Delivery could not be confirmed. Please try again shortly.'},502);}
}
