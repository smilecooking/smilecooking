from pathlib import Path
from urllib.parse import urlsplit, unquote
from lxml import html
from fontTools.ttLib import TTFont
import json,sys

root=Path(__file__).resolve().parents[1]
pages=['index.html','guide/index.html','faq/index.html','lessons/index.html','lessons/oyako/index.html','lessons/shogakusei/index.html','lessons/oyatsu/index.html','access/index.html','curriculum/index.html','kodawari/index.html','policy/index.html','news.html','lessons/2026-08/index.html','lessons/2026-09/index.html','lessons/kinenbi/index.html']
errors=[];docs={p:html.fromstring((root/p).read_text()) for p in pages}
cmap=TTFont(root/'assets/fonts/NotoSansJP.ttf').getBestCmap()
def require(test,msg):
 if not test:errors.append(msg)
def target_for(path):
 path=unquote(path).lstrip('/');p=root/path
 return p/'index.html' if p.is_dir() or not path else p
for p,d in docs.items():
 require(len(d.xpath('//h1'))==1,p+': one H1')
 ids=d.xpath('//*[@id]/@id');require(len(ids)==len(set(ids)),p+': unique IDs')
 require(d.xpath('//link[@rel="canonical"]/@href')==['https://smilecooking.jp/'+('' if p=='index.html' else p.removesuffix('index.html'))],p+': canonical preserved')
 require(not any('noindex' in x for x in d.xpath('//meta[@name="robots"]/@content')),p+': publicly indexable')
 for s in d.xpath('//script[@type="application/ld+json"]'):
  try:json.loads(s.text)
  except Exception:errors.append(p+': invalid JSON-LD')
 for x in d.xpath('//a[@href]|//img[@src]|//script[@src]|//link[@rel="stylesheet"]'):
  value=x.get('href') or x.get('src');u=urlsplit(value)
  if u.netloc:
   if u.netloc=='lin.ee':require(value=='https://lin.ee/vgqcSd6',p+': canonical LINE')
   continue
  if u.scheme:continue
  dest=target_for(u.path) if u.path.startswith('/') else (root/p if not u.path else root/p).parent/u.path
  if not u.path:dest=root/p
  if dest.is_dir():dest=dest/'index.html'
  require(dest.exists(),p+': missing target '+value)
  if u.fragment and dest.exists() and dest.suffix=='.html':
   t=html.fromstring(dest.read_text());require(unquote(u.fragment) in t.xpath('//*[@id]/@id'),p+': missing anchor '+value)
 for img in d.xpath('//img'):require(bool(img.get('alt')),p+': image alt')
 text=''.join(d.xpath('//body//text()[not(ancestor::script)]'))
 missing={c for c in text if '\u3000'<=c<='\u9fff' and ord(c) not in cmap}
 require(not missing,p+': missing Japanese font glyphs '+''.join(missing))
 require('無料見学でのレッスン参加はできません' not in text,p+': old sibling warning')
 require('小学生体験後' not in text,p+': obsolete club eligibility')
 require('小学生体験は約60分' not in text,p+': unconfirmed trial time')

faq=docs['faq/index.html']
for key in ['parent-observation','sibling-companion']:
 require(len(faq.xpath(f'//details[@id="{key}"]'))==1,'one authoritative FAQ for '+key)
 require(all(len(d.xpath(f'//details[@id="{key}"]'))==0 for p,d in docs.items() if p!='faq/index.html'),'no duplicate full FAQ outside /faq/: '+key)
body=faq.xpath('string(//*[@id="sibling-companion"])')
for text in ['短時間','追加のレッスン料金','ご用意できない','料金はかかりません','保護者の方と一緒','専用の授乳室や託児サービスではありません']:
 require(text in body,'sibling policy preserves '+text)
require(not any(x in body for x in ['2,500円','3,000円','1,000円']),'FAQ fees link instead of duplicating rates')
guide=docs['guide/index.html'];require('体験価格' in guide.xpath('string(//*[@id="try-lessons"])'),'elementary first-time rate')
for id in ['price','trial','start','rules','cancel','cancellation','access','faq']:require(bool(guide.xpath(f'//*[@id="{id}"]')),'legacy guide anchor '+id)
redirects=json.loads((root/'URL_MIGRATION.json').read_text())['redirects']
for old,new in redirects.items():
 d=html.fromstring(target_for(old).read_text());refresh=d.xpath('//meta[translate(@http-equiv,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")="refresh"]/@content')
 require(any(new in x for x in refresh),'legacy redirect '+old)
robots=(root/'robots.txt').read_text();require('Disallow: /\n' not in robots,'official robots indexable')
result={'content_pages':len(pages),'legacy_redirects':len(redirects),'errors':errors}
print(json.dumps(result,ensure_ascii=False,indent=2))
sys.exit(bool(errors))
