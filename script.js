document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
  if(b&&n){
    b.addEventListener('click',()=>{const open=n.dataset.open==='1';n.dataset.open=open?'0':'1';b.setAttribute('aria-expanded',open?'false':'true');if(!open)n.querySelector('a')?.focus()});
    n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.dataset.open='0';b.setAttribute('aria-expanded','false')}));
  }

  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n?.dataset.open==='1'){n.dataset.open='0';b.setAttribute('aria-expanded','false');b.focus()}});
  // Orientation: direct search visitors should immediately know where they are.
  const path=location.pathname.replace(/\/index\.html$/,'/');
  document.querySelectorAll('.nav a[href^="/"]').forEach(a=>{
    const href=a.getAttribute('href');
    if(href!=='/' && path.startsWith(href)) a.setAttribute('aria-current','page');
  });


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
