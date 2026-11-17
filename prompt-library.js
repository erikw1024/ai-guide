(function promptLibrary(){
 'use strict';
 const catalogue=window.RobertPromptCatalogue;
 if(!catalogue)return;
 const {categories,prompts}=catalogue;
 const key='robert-prompt-library-favourites-v1';
 let fav=[];
 try{fav=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){}
 if(!Array.isArray(fav))fav=[];
 let filter='all',query='',onlyFavourites=false;
 const E=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const route=()=>(location.hash||'#home').replace(/^#\/?/,'').split('/');
 const category=id=>categories.find(x=>x.id===id);
 const byId=id=>prompts.find(x=>x.id===id);
 const imageFor=p=>p.category==='creative'&&/draw|sketch|paint|artwork|art material/i.test(p.title)?'assets/topics/drawing.svg':category(p.category).img;
 const isFav=id=>fav.includes(id);
 const short=(s,n=110)=>s.length>n?s.slice(0,n-1).trimEnd()+'…':s;
 function home(){
  return `<div class="pl-root"><header class="pl-hero"><div class="pl-eyebrow">ROBERT'S READY-TO-USE PROMPTS</div><h1>A practical prompt library for everyday life</h1><p>${prompts.length} detailed prompts for building matters, household finances, health research, news, Spanish, guitar, daily tasks, activities and learning. Adapt the wording to your situation and verify important facts.</p><div class="pl-hero-links"><a href="#project-setup/templates" class="btn btn-outline">Need Project instructions? →</a><a href="#prompt-lab" class="btn btn-outline">Learn to write your own →</a></div></header>
  <div class="pl-explainer"><div><span>1</span><strong>Find a relevant example</strong><p>Search or choose a category.</p></div><div><span>2</span><strong>Replace the square brackets</strong><p>Use fictional information while learning.</p></div><div><span>3</span><strong>Copy, ask and check</strong><p>Open ChatGPT and verify the result.</p></div></div>
  <section class="pl-featured"><div class="pl-section-head"><div><div class="pl-eyebrow">START WITH A FAMILIAR TASK</div><h2>Four examples for Robert</h2></div></div><div class="pl-featured-grid">${['building-01','finance-01','news-01','spanish-01'].map(id=>{const p=byId(id),c=category(p.category);return `<a href="#prompt-library/${id}" class="pl-feature"><img src="${E(imageFor(p))}" alt="" loading="lazy" width="1200" height="700"/><strong>${E(p.title)}</strong><small>${E(c.name)} →</small></a>`}).join('')}</div></section>
  <section id="pl-results" class="pl-listing"><div class="pl-section-head"><div><div class="pl-eyebrow">EXPLORE THE LIBRARY</div><h2>Find your next prompt</h2><p>Each prompt provides a clear task, input guidance, output format, accuracy checks and follow-up.</p></div><button class="btn btn-outline" type="button" data-pl-print="true">Print page</button></div>
  <label class="pl-search"><span aria-hidden="true">⌕</span><input id="pl-search-input" type="search" autocomplete="off" placeholder="Search prompts, topics or activities…" value="${E(query)}" aria-label="Search the prompt library" /></label>
  <div class="pl-filters" role="group" aria-label="Filter prompts">${['all',...categories.map(c=>c.id)].map(k=>`<button type="button" data-pl-filter="${k}" class="${filter===k?'selected':''}">${k==='all'?'All categories':E(category(k).name)}</button>`).join('')}</div>
  <div class="pl-list-top"><p id="pl-results-count" role="status">${prompts.length} prompts</p><label class="pl-fav-toggle"><input type="checkbox" data-pl-favs="true" ${onlyFavourites?'checked':''}/> Saved prompts only</label></div>
  <div class="pl-grid">${prompts.map((p,i)=>card(p,i)).join('')}</div><div class="pl-no-results" hidden><h3>No matching prompts</h3><p>Try a shorter search or another category.</p></div></section>
  <aside class="pl-help"><strong>Safety reminder:</strong> Remove personal identifiers before sharing files or text. AI output can be inaccurate, even when it sounds confident. Check source numbers, dates, citations and consequential health or financial claims.</aside></div>`;
 }
 function card(p,i){
  const c=category(p.category);
  return `<article class="pl-card" data-pl-id="${p.id}" data-pl-cat="${p.category}" data-pl-search="${E((p.title+' '+p.task+' '+c.name+' '+p.context).toLowerCase())}">
    <a class="pl-card-image" href="#prompt-library/${p.id}" aria-label="Open ${E(p.title)}"><img src="${E(imageFor(p))}" alt="" loading="lazy" width="1200" height="700"/><span>${E(c.name)}</span></a>
    <div class="pl-card-body"><div class="pl-card-top"><span>Prompt ${String(i+1).padStart(2,'0')}</span><button type="button" data-pl-save="${p.id}" aria-label="${isFav(p.id)?'Remove saved prompt':'Save prompt'}" aria-pressed="${isFav(p.id)}">${isFav(p.id)?'★':'☆'}</button></div><h3><a href="#prompt-library/${p.id}">${E(p.title)}</a></h3><p>${E(short(p.task,125))}</p><div class="pl-card-actions"><a href="#prompt-library/${p.id}">View and customise →</a><button type="button" data-pl-copy="${p.id}">Copy prompt</button></div></div></article>`;
 }
 function detail(id){
  const p=byId(id);if(!p)return home();
  const c=category(p.category), idx=prompts.indexOf(p),next=prompts[idx+1]||prompts[0], tokens=[...new Set([...p.prompt.matchAll(/\[([^\]]+)\]/g)].map(m=>m[1]))];
  return `<div class="pl-root"><div class="pl-breadcrumb"><a href="#prompt-library">Prompt library</a> <span>›</span> ${E(c.name)} <span>›</span> Prompt ${idx+1}</div><section class="pl-detail-hero"><div><div class="pl-eyebrow">${E(c.name)} · READY TO CUSTOMISE</div><h1>${E(p.title)}</h1><p>${E(p.task)}</p><div class="pl-detail-actions"><button class="btn btn-primary" type="button" data-pl-copy-editor="true">Copy customised prompt</button><button class="btn btn-outline" type="button" data-pl-save="${p.id}">${isFav(id)?'★ Saved':'☆ Save this prompt'}</button><a class="btn btn-outline" href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">Open ChatGPT ↗</a></div></div><img src="${E(imageFor(p))}" alt="" width="1200" height="700"/></section>
  <div class="pl-detail-layout"><article><section class="pl-edit"><div class="pl-section-head"><div><h2>Ready-to-use prompt</h2><p>You can edit any wording before copying.</p></div><button class="btn btn-outline" type="button" data-pl-reset-editor="${id}">Reset</button></div><textarea id="pl-editor" aria-label="Editable prompt" spellcheck="true" rows="21">${E(p.prompt)}</textarea><div class="pl-detail-actions"><button class="btn btn-primary" type="button" data-pl-copy-editor="true">Copy customised prompt</button><button class="btn btn-outline" type="button" data-pl-print="true">Print this prompt</button></div></section>
  <section class="pl-follow"><h2>A useful follow-up</h2><p>${E(p.followup)}</p><button type="button" class="btn btn-outline" data-pl-follow="${id}">Copy follow-up</button></section></article>
  <aside class="pl-detail-aside"><h2>Make it specific</h2><p>Replace the parts in <strong>square brackets</strong> with your own safe information before using the prompt.</p><div class="pl-variables">${tokens.map(t=>`<span>${E(t)}</span>`).join('')}</div><h3>Check the result</h3><p>${E(p.verify)}</p><h3>Suggested output</h3><p>${E(p.format)}</p><h3>Next steps</h3><p>Paste the prompt into a normal ChatGPT chat or an appropriate Project. Then use the follow-up question to improve the result.</p><a href="#project-setup" class="pl-aside-link">Learn how to use Projects →</a></aside></div>
  <nav class="pl-detail-next"><a href="#prompt-library">← All prompts</a><a href="#prompt-library/${next.id}">Next: ${E(next.title)} →</a></nav></div>`;
 }
 function updateCards(){
  const root=document.querySelector('#app .pl-root');if(!root)return;
  if(route()[1])return;
  let visible=0;
  for(const card of root.querySelectorAll('.pl-card')){
    const id=card.dataset.plId,cat=card.dataset.plCat;
    const ok=(filter==='all'||cat===filter)&&(!onlyFavourites||isFav(id))&&(!query||card.dataset.plSearch.includes(query));
    card.hidden=!ok;if(ok)visible++;
    const saveBtn=card.querySelector('[data-pl-save]');if(saveBtn){saveBtn.textContent=isFav(id)?'★':'☆';saveBtn.setAttribute('aria-pressed',String(isFav(id)));}
  }
  const count=root.querySelector('#pl-results-count');if(count)count.textContent=visible+' of '+prompts.length+' prompts';
  const none=root.querySelector('.pl-no-results');if(none)none.hidden=visible>0;
  root.querySelectorAll('[data-pl-filter]').forEach(b=>{const on=b.dataset.plFilter===filter;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});
 }
 function render(){
  const r=route();if(r[0]!=='prompt-library')return;
  const app=document.getElementById('app');if(!app)return;
  app.innerHTML=r[1]?detail(r[1]):home();
  updateCards();
  document.querySelector('#sidebar')?.classList.remove('open');
  document.querySelector('#menu-toggle')?.setAttribute('aria-expanded','false');
 }
 function persist(){try{localStorage.setItem(key,JSON.stringify(fav))}catch(e){}}
 async function copy(value){
  if(!value)return;
  try{
    if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);
    else{const t=document.createElement('textarea');t.value=value;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();if(!document.execCommand('copy'))throw Error();t.remove();}
    notice('Copied. Open ChatGPT and paste your prompt.');
  }catch(e){notice('Copy unavailable. Select the text manually.')}
 }
 function notice(msg){
  let el=document.getElementById('pl-toast');
  if(!el){el=document.createElement('div');el.id='pl-toast';el.className='pl-toast';el.setAttribute('role','status');document.body.appendChild(el);}
  el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2800);
 }
 document.addEventListener('click',e=>{
  if(!document.querySelector('#app .pl-root'))return;
  const el=e.target.closest('[data-pl-filter],[data-pl-save],[data-pl-copy],[data-pl-copy-editor],[data-pl-follow],[data-pl-reset-editor],[data-pl-print]');
  if(!el)return;
  if(el.dataset.plFilter){filter=el.dataset.plFilter;updateCards();}
  else if(el.dataset.plSave){const id=el.dataset.plSave;fav=isFav(id)?fav.filter(x=>x!==id):[...fav,id];persist();if(route()[1])render();else updateCards();}
  else if(el.dataset.plCopy){const p=byId(el.dataset.plCopy);if(p)copy(p.prompt);}
  else if(el.hasAttribute('data-pl-copy-editor'))copy(document.querySelector('#pl-editor')?.value||'');
  else if(el.dataset.plFollow){const p=byId(el.dataset.plFollow);if(p)copy(p.followup);}
  else if(el.dataset.plResetEditor){const p=byId(el.dataset.plResetEditor);const area=document.querySelector('#pl-editor');if(p&&area)area.value=p.prompt;}
  else if(el.dataset.plPrint)window.print();
 });
 document.addEventListener('input',e=>{
  if(e.target.id==='pl-search-input'){query=e.target.value.toLowerCase().trim();updateCards();}
  if(e.target.dataset.plFavs){onlyFavourites=e.target.checked;updateCards();}
 });
 window.addEventListener('hashchange',()=>requestAnimationFrame(render));
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();