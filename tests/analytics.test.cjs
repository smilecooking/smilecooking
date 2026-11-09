const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const source=fs.readFileSync(__dirname+'/../analytics.js','utf8');
function fixture(options={}){
 const handlers={}, scripts=[];
 const href=options.href||'https://smilecooking.jp/lessons/oyako/?email=private@example.com&utm_source=instagram&utm_medium=social';
 const location=new URL(href);
 const document={title:'親子レッスン',referrer:'https://example.com/article?email=private@example.com',head:{appendChild:s=>scripts.push(s)},createElement:()=>({}),addEventListener:(name,fn)=>(handlers[name]??=[]).push(fn)};
 const window={SMILE_SITE_CONFIG:{analyticsEnabled:true,ga4MeasurementId:'G-08PRGT939K',...options.config}};
 window.self=window;window.top=options.frame?{}:window;
 if(options.optOut)window['ga-disable-G-08PRGT939K']=true;
 const context=vm.createContext({window,document,location,URL,URLSearchParams,Date});
 vm.runInContext(source,context);
 const events=()=>Array.from(window.dataLayer||[],x=>Array.from(x));
 const click=(href,position,scope='body')=>{
  const anchor={href,dataset:position?{location:position}:{},closest:selector=>selector===(scope==='finder'?'.finder-result':scope)?{}:null};
  const target={closest:selector=>selector==='a[href]'?anchor:null};
  for(const handler of handlers.click||[])handler({target});
 };
 const dispatch=target=>{for(const handler of handlers.click||[])handler({target})};
 return {window,context,events,click,scripts,dispatch};
}
test('one initial page view, no arbitrary query data, campaign preserved',()=>{
 const f=fixture();const list=f.events();assert.equal(f.scripts.length,1);
 assert.equal(list.filter(x=>x[0]==='event'&&x[1]==='page_view').length,1);
 assert.equal(list.find(x=>x[0]==='config')[2].send_page_view,false);
 const page=list.find(x=>x[1]==='page_view')[2];assert(!page.page_location.includes('email'));assert(page.page_location.includes('utm_source=instagram'));assert.equal(page.page_referrer,'https://example.com/article');
 vm.runInContext(source,f.context);assert.equal(f.scripts.length,1);assert.equal(f.events().filter(x=>x[1]==='page_view').length,1);
});
test('private review, local, embedded frame, disabled config and opt out do not collect',()=>{
 for(const options of [{href:'https://smilecooking-hp-review-20261101.m-e-0920-0112.chatgpt.site/'},{href:'http://terminal.local:4173/'},{frame:true},{optOut:true},{config:{analyticsEnabled:false}},{config:{ga4MeasurementId:'invalid'}}]){
  const f=fixture(options);assert.equal(f.scripts.length,0);assert.equal(f.events().length,0);
 }
});
test('delegated LINE clicks include dynamically generated finder links',()=>{
 const f=fixture();f.click('https://lin.ee/vgqcSd6',undefined,'finder');
 const items=f.events().filter(x=>x[1]==='line_cta_click');assert.equal(items.length,1);assert.equal(items[0][2].cta_location,'lesson_finder');assert.equal(items[0][2].lesson,'oyako');assert(!JSON.stringify(items).includes('private@example.com'));
 f.click('https://lin.ee/other','header');assert.equal(f.events().filter(x=>x[1]==='line_cta_click').length,1);
});
test('lesson links, Instagram and club have separate event names; no booking completion',()=>{
 const f=fixture();f.click('https://smilecooking.jp/lessons/shogakusei/','home');f.click('https://www.instagram.com/re_smile2022/','footer');f.click('https://smilecooking.jp/lessons/shogakusei/#club','home');
 const names=f.events().filter(x=>x[0]==='event').map(x=>x[1]);assert(names.includes('lesson_select'));assert(names.includes('instagram_click'));assert(names.includes('club_interest_click'));assert(!names.includes('purchase'));assert(!names.includes('generate_lead'));
});
test('FAQ opens report fixed topic only, ignore close and unknown topic',()=>{
 const f=fixture();
 for(const [topic,open] of [['parent-observation',false],['parent-observation',true],['private@example.com',false]]){
  const detail={open,dataset:{faqId:topic},matches:s=>s==='details[data-faq-id]'};
  const summary={parentElement:detail};f.dispatch({closest:s=>s==='summary'?summary:null});
 }
 const events=f.events().filter(x=>x[1]==='faq_open');assert.equal(events.length,1);assert.equal(events[0][2].faq_topic,'parent-observation');assert(!JSON.stringify(events).includes('private@example.com'));
});
test('FAQ topic links are separate from club interest and unknown hashes are ignored',()=>{
 const f=fixture();f.click('https://smilecooking.jp/faq/#club','home');f.click('https://smilecooking.jp/faq/#sibling-companion','guide');f.click('https://smilecooking.jp/faq/#unconfirmed','guide');
 const events=f.events().filter(x=>x[0]==='event');assert.equal(events.filter(x=>x[1]==='faq_link_click').length,2);assert.equal(events.filter(x=>x[1]==='club_interest_click').length,0);
});
