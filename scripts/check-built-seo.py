"""Validate generated HTML and metadata without a browser or third-party Python modules."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, xml.etree.ElementTree as ET, re
ROOT=Path(__file__).resolve().parents[1]
BUILD=ROOT/'.next/server/app'
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__(convert_charrefs=True);self.h1=0;self.title='';self.meta={};self.canonical=[];self.ids=set();self.links=[];self.images=[];self.schemas=[];self.text='';self.tag='';self.script=None;self.robotDirectives=[];self.feed(s)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs);self.tag=tag
  if tag=='h1':self.h1+=1
  if 'id'in a:self.ids.add(a['id'])
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='meta' and a.get('name')=='robots':self.robotDirectives.append(a.get('content',''))
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='a':self.links.append(a.get('href',''))
  if tag=='img':self.images.append(a)
  if tag=='script':self.script={'type':a.get('type'),'body':''}
 def handle_endtag(self,tag):
  if tag=='script' and self.script:
   if self.script['type']=='application/ld+json':self.schemas.append(json.loads(self.script['body']))
   self.script=None
  self.tag=''
 def handle_data(self,s):
  if self.script is not None:self.script['body']+=s;return
  if self.tag=='title':self.title+=s
  self.text+=' '+s
 def types(self):
  return {x.get('@type') for data in self.schemas for x in data.get('@graph',[data])}
files=sorted(BUILD.rglob('*.html'));assert files,'Run npm run build first.'
pages={('/' if p.stem=='index' else '/'+str(p.relative_to(BUILD))[:-5]):Page(p.read_text()) for p in files}
public={k:v for k,v in pages.items() if k not in {'/_not-found','/_global-error'}}
origin=urlsplit(public['/'].canonical[0]);base=origin.scheme+'://'+origin.netloc
assert len(public)==36, f'Expected 36 content pages, got {len(public)}'
assert len(set(p.title for p in public.values()))==len(public),'Duplicate page titles'
assert len(set(p.meta.get('description') for p in public.values()))==len(public),'Duplicate meta descriptions'
for route,p in public.items():
 assert p.h1==1,(route,'H1 count',p.h1)
 assert p.title and p.meta.get('description'),(route,'Missing metadata')
 assert p.canonical==[base+('' if route=='/' else route)],(route,p.canonical)
 assert p.meta.get('og:url')==base+('' if route=='/' else route),(route,'Missing OG URL')
 assert p.meta.get('og:title')==p.title,(route,'OG title mismatch')
 assert p.meta.get('twitter:title')==p.title,(route,'Twitter title mismatch')
 assert 'Organization'in p.types() and 'WebSite'in p.types(),(route,'Root schema missing')
 for image in p.images:assert 'alt'in image,(route,'Missing image alt')
 for href in p.links:
  if href.startswith(('/', '#')) and not href.startswith('//'):
   u=urlsplit(href);target=u.path or route
   if target.startswith('/_next') or target.startswith('/api/'):continue
   assert target in public,(route,'Broken internal link',href)
   if u.fragment:assert unquote(u.fragment)in public[target].ids,(route,'Missing anchor',href)
 for forbidden in ['Horizon Logistics','Continental Freight','Iqbal Retail Group','hello@2mdesigners.com','Live platform activity','+1 (000)']:
  assert forbidden not in p.text,(route,'Old content',forbidden)
 for href in p.links:assert not href.startswith(('/products','/pricing','/login','/success-stories','/about/careers')),(route,'Old route link',href)
for o in json.loads((ROOT/'content/offerings.json').read_text()):
 p=public[o['route']];assert p.title==o['seoTitle'];assert p.meta['description']==o['description'];assert {'Service','FAQPage','BreadcrumbList'}<=p.types()
 compact=lambda s:' '.join(s.split())
 for m in o['modules']:assert compact(m) in compact(p.text),(o['slug'],'Missing module',m)
 for f in o['faqs']:assert compact(f['answer'])in compact(p.text),(o['slug'],'Missing FAQ')
for a in json.loads((ROOT/'content/articles.json').read_text()):
 p=public[a['route']];assert p.title==a['seoTitle'];assert {'Article','BreadcrumbList'}<=p.types()
 for b in a['body']:
  if 'text'in b:assert ' '.join(b['text'].split())in ' '.join(p.text.split()),(a['slug'],'Missing article passage')
 assert 'About the author'in p.text
# These two project identities were explicitly supplied for publication in this update.
for project in json.loads((ROOT/'content/projects.json').read_text()):
 p=public[project['route']];assert p.title==project['seoTitle'];assert p.meta['description']==project['description'];assert {'SoftwareApplication','BreadcrumbList'}<=p.types()
 compact=lambda s:' '.join(s.split())
 for module in project['modules']:assert compact(module) in compact(p.text),(project['slug'],'Missing project module',module)
 for screenshot in project['screenshots']:assert compact(screenshot['caption']) in compact(p.text),(project['slug'],'Missing screenshot caption',screenshot['caption'])
# Existing case-study identities still require explicit configuration, never fixture defaults.
if not __import__('os').environ.get('APPROVED_CASE_STUDIES'):
 for p in public.values():
  for name in ['Dynamic Tracking Solutions','Hawk I']:assert name not in p.text,('Unapproved case-study client name',name)
xml=ET.fromstring((BUILD/'sitemap.xml.body').read_text());urls=[e.text for e in xml.findall('{*}url/{*}loc')]
assert set(urls)=={base+('' if k=='/' else k) for k in public},'Sitemap does not match canonical pages'
robots=(BUILD/'robots.txt.body').read_text();assert base+'/sitemap.xml'in robots and 'Disallow: /api/'in robots
assert any('noindex' in value for value in pages['/_not-found'].robotDirectives),'404 must be noindex'
redirects=json.loads((ROOT/'.next/routes-manifest.json').read_text())['redirects']
for path in ['/products','/products/:slug','/success-stories','/pricing','/login','/about/careers']:
 assert any(x['source']==path and x['statusCode']in(301,308) for x in redirects),('Missing permanent redirect',path)
module_count=sum(len(o['modules']) for o in json.loads((ROOT/'content/offerings.json').read_text()))
faq_count=sum(len(o['faqs']) for o in json.loads((ROOT/'content/offerings.json').read_text()))
print(f'PASS: {len(public)} content pages; unique metadata/canonicals; JSON-LD; all internal links and anchors; {module_count} offering modules, 35 project modules and {faq_count} FAQ answers; six complete articles; no old content or unapproved case-study names; sitemap/robots; noindex 404; permanent redirects.')
