document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
  if(b&&n){
    b.addEventListener('click',()=>{const open=n.dataset.open==='1';n.dataset.open=open?'0':'1';b.setAttribute('aria-expanded',open?'false':'true')});
    n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.dataset.open='0';b.setAttribute('aria-expanded','false')}));
  }

  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Orientation: direct search visitors should immediately know where they are.
  const path=location.pathname.replace(/\/index\.html$/,'/');
  document.querySelectorAll('.nav a[href^="/"]').forEach(a=>{
    const href=a.getAttribute('href');
    if(href!=='/' && path.startsWith(href)) a.setAttribute('aria-current','page');
  });


  // Interaction stays content-led: no persistent progress meter.

  // Scroll reveals enhance hierarchy; content remains visible with JS off/reduced motion.
  if(!reduce && 'IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}
      });
    },{rootMargin:'0px 0px -9% 0px',threshold:.06});

    document.querySelectorAll('[data-reveal]').forEach(el=>{
      el.classList.add('reveal-ready');
      const r=el.getBoundingClientRect();
      if(r.top<window.innerHeight*.92) el.classList.add('is-visible');
      else io.observe(el);
    });

    document.querySelectorAll('[data-stagger="true"]').forEach(grid=>{
      [...grid.children].forEach((child,i)=>{
        child.classList.add('reveal-child');
        child.style.setProperty('--stagger-delay',`${Math.min(i,6)*42}ms`);
        const r=child.getBoundingClientRect();
        if(r.top<window.innerHeight*.94) child.classList.add('is-visible');
        else io.observe(child);
      });
    });
  }else{
    document.querySelectorAll('[data-reveal], [data-stagger="true"]>*').forEach(el=>el.classList.add('is-visible'));
  }

  // Keep expansion in place. Deep links open the exact answer from another page.
  function openLinkedFAQ(){
    let id;try{id=decodeURIComponent(location.hash.slice(1))}catch(_){return}
    if(!id)return;
    const target=document.getElementById(id);
    if(target?.matches('details.faq-item')){target.open=true;target.scrollIntoView({block:'start',behavior:'auto'})}
  }
  openLinkedFAQ();window.addEventListener('hashchange',openLinkedFAQ);
});

document.addEventListener('DOMContentLoaded',()=>{
 const lessons={"oyako": {"normal": "4,000円", "unit": "親子2人1組", "trial": "1,500円", "title": "親子レッスン", "who": "3〜12歳のお子さまと保護者の方", "description": "同じ場所にいながら、調理の主役は子ども。自分で進める姿を、そばで見守る時間です。", "path": "/lessons/oyako/", "action": "親子レッスンの日程をLINEで確認", "price": "通常：親子2人1組 4,000円 ／ 初回体験：1,500円"}, "shogakusei": {"normal": "4,500円", "unit": "お子さま1名", "trial": "2,500円", "title": "小学生レッスン", "who": "小学1〜6年生・子どもが調理。保護者の見学もできます。", "description": "一人ひとつの道具で、家族の食卓につながる料理を作ります。続けたい場合は月2回の放課後クッキングクラブもあります。", "path": "/lessons/shogakusei/", "action": "小学生レッスンの日程をLINEで確認", "price": "通常：お子さま1名 4,500円 ／ 初回体験：2,500円"}, "oyatsu": {"normal": "4,000円", "unit": "親子2人分・1人参加も可", "trial": null, "title": "おやつレッスン", "who": "親子・小学生・大人の方。開催回ごとの参加条件をご確認ください。", "description": "「かわいい」「食べたい」「作ってみたい」を入口に、はかる・混ぜる・形を作る工程を楽しみます。", "path": "/lessons/oyatsu/", "action": "おやつの日程をLINEで確認", "price": "通常：親子2人分・1人参加も可 4,000円"}};
 document.querySelectorAll('[data-find-lesson]').forEach(button=>{
  button.addEventListener('click',()=>{
   const item=lessons[button.dataset.findLesson],result=document.getElementById('finder-result');
   if(!item||!result)return;
   document.querySelectorAll('[data-find-lesson]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   result.replaceChildren();
   const heading=document.createElement('h4');heading.textContent=item.title;result.append(heading);
   for(const [value,cls] of [[item.who,''],[item.price,'finder-pricing'],[item.description,'']]){const p=document.createElement('p');p.textContent=value;if(cls)p.className=cls;result.append(p)}
   const actions=document.createElement('div');actions.className='finder-actions';
   const detail=document.createElement('a');detail.href=item.path;detail.className='btn ghost';detail.textContent='レッスンを詳しく見る';actions.append(detail);
   const line=document.createElement('a');line.href='https://lin.ee/vgqcSd6';line.className='btn primary';line.target='_blank';line.rel='noopener';line.textContent=item.action;actions.append(line);result.append(actions);
  });
 });
 const tabs=[...document.querySelectorAll('.experience-tabs [role="tab"]')];
 function selectTab(tab,moveFocus=false){
  tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;const panel=document.getElementById(t.getAttribute('aria-controls'));if(panel)panel.hidden=!active});
  if(moveFocus)tab.focus();
 }
 tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectTab(tab));
  tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next],true)}});
 });
});
