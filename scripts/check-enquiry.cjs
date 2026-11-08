const fs=require('node:fs');const path=require('node:path');const vm=require('node:vm');const assert=require('node:assert/strict');const ts=require('typescript');
const root=path.resolve(__dirname,'..');const cache=new Map();let outbound=[];
const env={...process.env};delete env.CONTACT_WEBHOOK_URL;delete env.CONTACT_WEBHOOK_TOKEN;
let reply=async()=>new Response('{}',{status:200});
function load(file){file=path.resolve(file);if(cache.has(file))return cache.get(file).exports;const mod={exports:{}};cache.set(file,mod);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
const req=name=>{if(name==='next/server')return {NextResponse:{json:(b,o={})=>new Response(JSON.stringify(b),{status:o.status||200,headers:o.headers})}};if(name.startsWith('@/')){const p=path.join(root,name.slice(2));return p.endsWith('.json')?JSON.parse(fs.readFileSync(p,'utf8')):load(p+'.ts');}return require(name);};
vm.runInNewContext(code,{module:mod,exports:mod.exports,require:req,process:{env},URL,Response,Buffer,AbortSignal,console,fetch:async(...args)=>{outbound.push(args);return reply(...args);}});return mod.exports;}
const {POST}=load(path.join(root,'app/api/enquiry/route.ts'));
const base={name:'Test User',company:'Test',email:'test@example.test',phone:'+923001234567',service:'erp',method:'Email',message:'Please arrange an ERP demonstration.',source:'/solutions/erp',website:'',requestId:'test-idempotency-123'};
const send=(data,headers={})=>POST(new Request('https://www.2mdesigners.com/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://www.2mdesigners.com',...headers},body:typeof data==='string'?data:JSON.stringify(data)}));
(async()=>{
 assert.equal((await send({...base,email:'invalid'})).status,400);
 assert.equal((await send({...base,phone:'123'})).status,400);
 assert.equal((await send({...base,source:'https://evil.test'})).status,400);
 assert.equal((await send({...base,website:'bot'})).status,400);
 assert.equal((await send(base,{Origin:'https://evil.test'})).status,403);
 assert.equal((await send('bad-json')).status,400);
 assert.equal((await send('x'.repeat(17000))).status,413);
 assert.equal((await send(base)).status,503);assert.equal(outbound.length,0);
 env.CONTACT_WEBHOOK_URL='https://example.test/lead';env.CONTACT_WEBHOOK_TOKEN='test-token';
 reply=async()=>new Response('{}',{status:500});assert.equal((await send(base)).status,502);
 reply=async()=>{throw new Error('simulated offline');};assert.equal((await send(base)).status,502);
 reply=async()=>new Response('{}',{status:200});const success=await send(base);assert.equal(success.status,200);assert.equal((await success.json()).success,true);
 const [,options]=outbound.at(-1);assert.equal(options.headers['Idempotency-Key'],base.requestId);assert.equal(options.headers.Authorization,'Bearer test-token');const payload=JSON.parse(options.body);assert.equal(payload.source,'/solutions/erp');assert.equal(payload.serviceName,'2M ERP');assert.equal('website'in payload,false);
 await send(base);assert.equal((await send(base)).status,429);
 console.log('PASS: validation, origin checks, body limit, honeypot, disabled transport, delivery failure/success, attribution, idempotency header and rate limit. No external requests were made.');
})().catch(e=>{console.error(e);process.exitCode=1;});
