/* Robert's ChatGPT Guide: inline visual learning expansion, November 2026.
   Official examples are unmodified images published by OpenAI Help Centre; hosted there
   and attributed underneath. Illustrations are designed for this course. */
(function() {
  'use strict';
  const official = {
    projectsList: {
      title:'Where to create a Project',
      summary:'The New project control is at the top of the Projects list in this official example.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-af13531f23cdd675621b4353/ccc7528996947a4d4997b3c9d6934694/13d3472c-96a5-4a98-93ec-3ff3872cb3cd?fm=webp&q=80&w=450',
      source:'https://help.openai.com/en/articles/10169521-projects-in-chatgpt',
      note:'Select New project in the sidebar. The appearance may vary.',pin:[22,17],callout:'1 · New project'
    },
    projectSettings: {
      title:'Where to set Project instructions',
      summary:'The Project settings option appears in a Project menu in this example.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-dfd7518cb9b5ab4588cb814d/6ca9c53aec99d74eda875f16468276a2/Screenshot_2026-02-24_at_11.48.11%C3%A2__AM.png?fm=webp&q=80&w=1344',
      source:'https://help.openai.com/en/articles/10169521-projects-in-chatgpt',
      note:'Open the menu for the Project, then Project settings.',pin:[88,23],callout:'1 · Project settings'
    },
    pluginInstall: {
      title:'Recognise a plugin installation card',
      summary:'An example plugin card with installation choices.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/plugins_img_099048c330d44aa985aa1ac0c02df953/3bfa18e686e72533f19d8102af325e36/plugin-installation-card.png?fm=webp&q=80&w=1344',
      source:'https://help.openai.com/en/articles/20001256-plugins-in-chatgpt',
      note:'Review the publisher and permissions before choosing Install.',pin:[92,51],callout:'1 · Install'
    },
    privacyWeb: {
      title:'Data Controls: model-improvement setting',
      summary:'Official screenshot of the model-improvement options.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-eafd2219cc9bbd22423b516f/5fef974f8097aad71b5fdb5514f54fbe/image.png?fm=webp&q=80&w=1060',
      source:'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt',
      note:'This is a genuine interface screenshot. Review the actual setting on your account.',pin:[77,30],callout:'1 · Model improvement'
    },
    privacyMobile: {
      title:'Mobile data-sharing toggle',
      summary:'Official example of the Improve the model for everyone toggle on a mobile device.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-ab931165e2dc0ab2a79122a0/d01a1cd89dd570dbb911dd9e30f3c4b8/image.png?fm=webp&q=80&w=400',
      source:'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt',
      note:'Use Settings > Data controls to find the equivalent option on your device.',pin:[92,48],callout:'1 · Toggle'
    },
    deepSites: {
      title:'Deep Research: choose websites',
      summary:'OpenAI screenshot showing how to specify sites for a research task.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/6HvalMJqB9m7aEw1TQQ6HN/4bb571b3eda41d27af12eabe0c2fad1d/manage_sites.png?fm=webp&q=80&w=1164',
      source:'https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt',
      note:'Enter the source sites you trust and check whether wider web searching is allowed.',pin:[92,88],callout:'1 · Search scope'
    },
    analysisTable: {
      title:'ChatGPT analysing tabular data',
      summary:'Example of an interactive table produced from uploaded information.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-5da0767ef872b32508a5e85a/3ad1939e2dca003c248fc4a2e453e40b/ZzJVwdB5QJu-lDylZtr0-N6TtZW23f1i8Vhy5dx7QK0mVA5HtEOjYHWd0nix2ecjQx-3jLY5Ts5dDQuMpnRK5tO9X2YkuFh9VHoit_KAKusajT1DaQcHyTZu-fuD1DPG?fm=webp&q=80&w=1156',
      source:'https://help.openai.com/en/articles/9213685-extracting-insights-with-chatgpt-data-analysis',
      note:'Example uses fictional sales data. Always confirm your own calculations.',pin:[92,24],callout:'1 · Table actions'
    },
    analysisChart: {
      title:'A chart created by ChatGPT',
      summary:'Chart example with actions for downloading and changing the view.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-b2c580c3a9e654f26ca04bc8/e1fef862a6b8de583fe37bbace5d7368/SW4SvJm-0lErK9KGoJeV2uJzyRumzJiND7MKNgDCvyhu8r7R7xb2s1f43Wv_6XbZjzWkrYnyIJxY3TrSyqlTSqTXBXI2cV-32sGADTo4P7MIr2Z1Ec48V-9ygc-UeYH3?fm=webp&q=80&w=1344',
      source:'https://help.openai.com/en/articles/9213685-extracting-insights-with-chatgpt-data-analysis',
      note:'A chart can help reveal trends, but it is only as good as the numbers underneath.',pin:[90,8],callout:'1 · Chart actions'
    },
    searchMenu: {
      title:'Search option in ChatGPT (earlier interface)',
      summary:'Historic OpenAI example showing Search in the source-picker menu.',
      url:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-ca4f4e49315f4f902b229090/ee80e3d80aa0db09ba643e6c1b47d40d/Screenshot_2025-04-28_at_14_49_38.png?fm=webp&q=80&w=1344',
      source:'https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt',
      note:'Historical 2025 interface screenshot. Use View all tools > Search in current ChatGPT where available.',pin:[59,41],callout:'1 · Search (older UI)'
    }
  };
  const shotForGuide={
    projects:['projectsList','projectSettings'],plugins:['pluginInstall'],privacy:['privacyWeb','privacyMobile'],research:['deepSites','searchMenu'],spreadsheets:['analysisTable','analysisChart'],documents:['analysisTable'],conversation:['analysisTable'],navigation:['projectsList']
  };
  const coreImage={
    navigation:'assets/navigation-guide.svg',conversation:'assets/chat-followups-guide.svg',documents:'assets/document-guide.svg',
    voice:'assets/voice-guide.svg',projects:'assets/projects-guide.svg',research:'assets/search-guide.svg',
    plugins:'assets/plugins-guide.svg',spreadsheets:'assets/spreadsheet-guide.svg',privacy:'assets/privacy-guide.svg'
  };
  const topicImage=key=>'assets/topics/'+key+'.svg';
  const lessonMap={
    welcome:['conversation','workflow'],navigation:['navigation','workflow'], 'first-chat':['conversation','workflow'],
    history:['navigation','workflow'],'better-prompt':['conversation','workflow'],'follow-ups':['conversation','workflow'],formats:['conversation','workflow'],refining:['conversation','workflow'],
    voice:['voice','spanish'],photos:['documents','drawing'],screenshots:['documents','workflow'],pdfs:['documents','building'],minutes:['documents','building'],'document-checking':['documents','health'],
    search:['research','news'],verify:['research','news'],news:['research','news'],deep:['research','news'],tutor:['conversation','workflow'],spanish:['voice','spanish'],
    projects:['projects','building'],'project-instructions':['projects','building'],'project-example':['projects','building'],memory:['privacy','workflow'],
    tables:['spreadsheets','finance'],spreadsheet:['spreadsheets','finance'],'compare-quotes':['spreadsheets','finance'],health:['research','health'],
    plugins:['plugins','workflow'],permissions:['plugins','workflow'],tasks:['plugins','workflow'],work:['projects','workflow'],'image-create':['documents','drawing'],
    'research-plan':['research','news'],hallucinations:['privacy','news'],'privacy-settings':['privacy','health'],'final-challenge':['conversation','workflow']
  };
  const capMap={
    navigation:['navigation','workflow'],chat:['conversation','workflow'],prompts:['conversation','workflow'],voice:['voice','spanish'],
    images:['documents','drawing'],documents:['documents','building'],spreadsheets:['spreadsheets','finance'],
    websearch:['research','news'],'deep-research':['research','news'],learning:['conversation','workflow'],
    projects:['projects','building'],memory:['privacy','health'],library:['documents','workflow'],
    plugins:['plugins','workflow'],tasks:['plugins','workflow'],work:['projects','workflow'],creative:['documents','drawing'],safety:['privacy','health']
  };
  const caseTopics={
    minutes:'building',tenders:'building',resident:'building',agenda:'building',issue:'building',
    budget:'finance',energy:'finance',finance:'finance',subscription:'finance',investment:'finance',
    letter:'health',appointments:'health',evidence:'health',
    'daily-news':'news','fact-check':'news',economics:'news',
    'spanish-chat':'spanish',guitar:'guitar',drawing:'drawing'
  };
  function h(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function path(){return (location.hash||'#home').replace(/^#\/?/,'').split('/');}
  function assetForLesson(id){return (lessonMap[id]||['conversation','workflow']);}
  function shotKeys(guide){return shotForGuide[guide]||[];}
  function cleanSnippet(s,n=76){const text=String(s||'').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();return text.length>n?text.slice(0,n-1).trimEnd()+'…':text;}
  function svgText(s,max=28){let text=cleanSnippet(s,95);let words=text.split(/\s+/),lines=[''];for(const w of words){const i=lines.length-1;if((lines[i]+' '+w).trim().length>max&&lines[i]&&lines.length<3)lines.push(w);else if(lines[i].length+w.length<=max)lines[i]=(lines[i]+' '+w).trim();}return lines.filter(Boolean).slice(0,3);}
  function miniStepSvg(i,text,topic){
    const themes={building:'#16796D',finance:'#3B7A9E',health:'#5A8C81',news:'#6F89AA',spanish:'#BF8166',guitar:'#8E7A98',drawing:'#B0847E',workflow:'#137F78'};
    const color=themes[topic]||'#137F78',n=String(i+1).padStart(2,'0');
    const lines=svgText(text,38).map((x,j)=>'<text x="142" y="'+(77+j*28)+'" font-family="Arial,sans-serif" font-size="21" fill="#274252">'+h(x)+'</text>').join('');
    const icon=['<path d="M37 55h51 M37 74h41 M37 93h47"/>','<path d="M40 55h39v41H40z M47 65h25 M47 75h18"/>','<path d="M42 81l15 14 31-36"/>','<path d="M39 81l12 14 28-39 M75 100h22"/>'][i%4];
    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="680" height="154" viewBox="0 0 680 154" role="img"><rect width="680" height="154" rx="18" fill="#F6FAF9"/><rect x="2" y="2" width="676" height="150" rx="17" fill="none" stroke="#DCE9E5" stroke-width="3"/><circle cx="67" cy="76" r="47" fill="'+color+'" opacity=".12"/><g transform="translate(0 0)" stroke="'+color+'" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round">'+icon+'</g><rect x="569" y="30" width="75" height="46" rx="15" fill="#E3F1ED"/><text x="605" y="62" font-size="25" font-weight="800" fill="'+color+'" text-anchor="middle" font-family="Arial,sans-serif">'+n+'</text>'+lines+'</svg>';
    return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
  }
  function screenshotCard(key,compact=false){
    const o=official[key];if(!o)return '';
    return '<figure class="rv-official '+(compact?'rv-official-compact':'')+'">'+
       '<div class="rv-official-bar"><span class="rv-verified">REAL OPENAI SCREENSHOT</span><span class="rv-screen-label">'+h(o.title)+'</span></div>'+
       '<div class="rv-official-image"><img src="'+h(o.url)+'" loading="lazy" referrerpolicy="no-referrer" alt="'+h(o.summary)+'" data-fallback="'+h(coreImage[key==='privacyWeb'||key==='privacyMobile'?'privacy':key==='pluginInstall'?'plugins':key.startsWith('project')?'projects':key.startsWith('analysis')?'spreadsheets':'research'])+'"/><div class="rv-pin" style="left:'+o.pin[0]+'%;top:'+o.pin[1]+'%" aria-hidden="true">1</div></div>'+
       '<figcaption><strong>'+h(o.callout)+':</strong> '+h(o.note)+' <a href="'+h(o.source)+'" target="_blank" rel="noopener noreferrer">Source: OpenAI Help Centre ↗</a></figcaption></figure>';
  }
  function screenshotGrid(keys,compact=false){
    return '<div class="rv-official-grid '+(compact?'compact':'')+'">'+keys.map(k=>screenshotCard(k,compact)).join('')+'</div>';
  }
  function adaptErrors(host){
    host.querySelectorAll('img[data-fallback]').forEach(el=>{
      if(el.dataset.bound)return;
      el.dataset.bound='1';
      el.addEventListener('error',()=>{
        if(el.dataset.fallbackLoaded)return;
        el.dataset.fallbackLoaded='1';
        el.src=el.getAttribute('data-fallback');
        const badge=el.closest('.rv-official')?.querySelector('.rv-verified');
        if(badge)badge.textContent='OFFICIAL IMAGE UNAVAILABLE · DIAGRAM SHOWN';
      });
    });
  }
  function featuredLesson(l){
    const [guide,topic]=assetForLesson(l.id),shots=shotKeys(guide);
    const primary='<figure class="rv-feature"><img src="'+coreImage[guide]+'" alt="Annotated illustration: '+h(l.title)+'" loading="lazy" width="1200" height="720"/><figcaption>Annotated illustration: find the key controls before trying the task.</figcaption></figure>';
    const secondary='<figure class="rv-feature"><img src="'+topicImage(topic)+'" alt="Visual example related to '+h(l.title)+'" loading="lazy" width="1200" height="700"/><figcaption>A practical example connected to Robert’s everyday interests.</figcaption></figure>';
    const titles= l.steps.slice(0,4).map((x,i)=>'<div class="rv-route-step"><span>'+String(i+1).padStart(2,'0')+'</span><p>'+h(cleanSnippet(x,95))+'</p></div>').join('');
    return '<section class="rv-lesson-rich" aria-label="Illustrated overview for this lesson">'+
      '<div class="rv-kicker">VISUAL WALKTHROUGH · '+h(l.mins)+' MINUTE LESSON</div>'+
      '<div class="rv-double">'+primary+secondary+'</div>'+
      '<div class="rv-route-summary"><div><h2>What you will see and do</h2><p>Follow these checkpoints on your own ChatGPT screen. The illustrations are simplified teaching aids.</p></div><div class="rv-route-steps">'+titles+'</div></div>'+
      (shots.length?'<div class="rv-real-head"><h2>See the real ChatGPT interface</h2><p>The following screenshots come from OpenAI’s official Help Centre. Some may show an earlier interface.</p></div>'+screenshotGrid(shots.slice(0,2),true):'')+
      '<div class="rv-resource-links"><a href="#visual-guide/'+guide+'">Open the detailed picture guide ↗</a><a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">Practise in ChatGPT ↗</a></div>'+
      '</section>';
  }
  function enrichLesson(root,id){
    root.querySelector('.visual-lesson')?.remove();
    const l=(typeof LESSONS!=='undefined'?LESSONS:[]).find(x=>x.id===id);
    if(!l)return;
    const head=root.querySelector('.page-heading');
    if(head&&!root.querySelector('.rv-lesson-rich'))head.insertAdjacentHTML('afterend',featuredLesson(l));
    const topic=assetForLesson(id)[1];
    root.querySelectorAll('.lesson-step').forEach((node,i)=>{
      if(node.querySelector('.rv-step-pic'))return;
      const im=document.createElement('img');
      im.className='rv-step-pic';im.loading='lazy';im.width=680;im.height=154;
      im.alt='Illustrated step '+(i+1)+': '+cleanSnippet(l.steps[i],100);
      im.src=miniStepSvg(i,l.steps[i],topic);
      node.appendChild(im);
    });
  }
  function enrichCapability(root,id){
    root.querySelector('.visual-lesson')?.remove();
    const c=(typeof CAPABILITIES!=='undefined'?CAPABILITIES:[]).find(x=>x.id===id);
    if(!c)return;
    const [guide,topic]=capMap[id]||['conversation','workflow'];
    const head=root.querySelector('.page-heading');
    if(head&&!root.querySelector('.rv-capability-rich')){
      head.insertAdjacentHTML('afterend',
      '<section class="rv-capability-rich"><div class="rv-kicker">EXPLORE THE CAPABILITY</div><div class="rv-double">'+
      '<figure class="rv-feature"><img src="'+coreImage[guide]+'" alt="Annotated interface diagram for '+h(c.name)+'" loading="lazy" width="1200" height="720"/><figcaption>Illustrated interface orientation.</figcaption></figure>'+
      '<figure class="rv-feature"><img src="'+topicImage(topic)+'" alt="Example of '+h(c.name)+' in everyday use" loading="lazy" width="1200" height="700"/><figcaption>See how this capability can help in an everyday task.</figcaption></figure>'+
      '</div>'+ (shotKeys(guide).length?'<h2>Official screenshots</h2>'+screenshotGrid(shotKeys(guide).slice(0,2),true):'')+
      '<a class="rv-text-link" href="#visual-guide/'+guide+'">Open the step-by-step picture guide →</a></section>');
    }
  }
  function enrichUseCase(root,id){
    const x=(typeof USE_CASES!=='undefined'?USE_CASES:[]).find(x=>x.id===id);
    if(!x)return;
    const topic=caseTopics[id]||'workflow';
    const head=root.querySelector('.page-heading');
    if(head&&!root.querySelector('.rv-case-banner')){
      head.insertAdjacentHTML('afterend','<section class="rv-case-banner"><figure><img src="'+topicImage(topic)+'" width="1200" height="700" loading="lazy" alt="Illustration for '+h(x.title)+'"/></figure><div><div class="rv-kicker">TRY IT FOR YOUR LIFE</div><h2>'+h(x.title)+'</h2><p>'+h(x.description)+'</p><p><strong>Start with fictional or de-identified information.</strong> Then use the practice prompt below.</p></div></section>');
    }
  }
  function enrichCards(root){
    const part=path()[0];
    if(part==='capabilities'){
      root.querySelectorAll('.cards .card').forEach(c=>{
        if(c.querySelector('.rv-card-picture'))return;
        const name=c.querySelector('h3')?.textContent.trim();
        const cap=(typeof CAPABILITIES!=='undefined'?CAPABILITIES:[]).find(x=>x.name===name);
        if(!cap)return;
        const pair=capMap[cap.id]||['conversation','workflow'];
        c.insertAdjacentHTML('afterbegin','<div class="rv-card-picture"><img src="'+coreImage[pair[0]]+'" alt="" loading="lazy" width="1200" height="720"/></div>');
      });
    }
    if(part==='use-cases'){
      root.querySelectorAll('.scenario-list .scenario').forEach(c=>{
        if(c.querySelector('.rv-case-thumbnail'))return;
        const name=c.querySelector('h3')?.textContent.trim();
        const item=(typeof USE_CASES!=='undefined'?USE_CASES:[]).find(x=>x.title===name);
        if(item)c.insertAdjacentHTML('afterbegin','<div class="rv-case-thumbnail"><img src="'+topicImage(caseTopics[item.id]||'workflow')+'" alt="" loading="lazy" width="1200" height="700"/></div>');
      });
    }
  }
  function enrichHome(root){
    if(root.querySelector('.rv-home-stories'))return;
    const section=root.querySelector('.stat-row');
    if(section)section.insertAdjacentHTML('afterend',
      '<section class="rv-home-stories"><div class="rv-home-stories-head"><div class="rv-kicker">LEARN BY SEEING</div><h2>How Robert can use ChatGPT</h2><p>Choose a familiar activity, then follow a visual, step-by-step example.</p></div><div class="rv-home-stories-grid">'+
      [['building','Building management','#use-case/minutes'],['finance','Household finances','#use-case/budget'],['news','News and fact-checking','#use-case/daily-news']].map(([key,title,url])=>
      '<a href="'+url+'" class="rv-story-card"><img src="'+topicImage(key)+'" alt="" loading="lazy" width="1200" height="700"/><span>'+h(title)+' →</span></a>').join('')+
      '</div><div class="rv-home-foot"><a href="#visual-guide" class="btn btn-outline">Browse picture guides →</a><a href="#capabilities" class="btn btn-outline">See ChatGPT capabilities →</a></div></section>');
  }
  function enrichSupporting(root,route){
    if(root.querySelector('.rv-extra-support'))return;
    const config={
      pathway:['workflow','Follow the learning journey','An overview of the learning process from first question to reliable result.'],
      'prompt-lab':['workflow','Turn a vague idea into a useful prompt','Add a goal, context, output format and practical constraints.'],
      'quick-reference':['workflow','Choose the right feature','Start with a question, then move to files, projects or research when useful.'],
      safety:['health','Check before you trust','Use original sources for important decisions and minimise sensitive data in uploads.'],
      saved:['workflow','Your next small step','Continue with the lessons that matter most to you.']
    };
    const cfg=config[route];if(!cfg)return;
    const head=root.querySelector('.page-heading');
    if(head)head.insertAdjacentHTML('afterend','<figure class="rv-extra-support rv-feature"><img src="'+topicImage(cfg[0])+'" alt="'+h(cfg[1])+'" loading="lazy" width="1200" height="700"/><figcaption><strong>'+h(cfg[1])+'.</strong> '+h(cfg[2])+'</figcaption></figure>');
  }
  function visualGalleryExtras(root){
    const gallery=root.querySelector('.visual-gallery');
    if(!gallery||gallery.querySelector('.rv-gallery-extras'))return;
    const note=gallery.querySelector('.visual-note');
    const html='<section class="rv-gallery-extras"><div class="rv-kicker">GENUINE OPENAI EXAMPLES</div><h2>Real screenshots from the official Help Centre</h2><p>Browse actual examples of ChatGPT’s controls and outputs. These are source-attributed screenshots and may show earlier versions of the interface. The numbered markers explain what to look for.</p>'+
       screenshotGrid(['projectsList','projectSettings','pluginInstall','privacyWeb','privacyMobile','deepSites','analysisTable','analysisChart','searchMenu'])+
       '</section>';
    if(note)note.insertAdjacentHTML('afterend',html);else gallery.insertAdjacentHTML('beforeend',html);
    gallery.querySelectorAll('.visual-card-media img').forEach(img=>{img.loading='lazy'});
  }
  function visualDetailExtras(root){
    const detail=root.querySelector('.visual-detail');
    if(!detail||detail.querySelector('.rv-gallery-extras'))return;
    const id=path()[1],shots=shotKeys(id);
    const figure=detail.querySelector('.visual-figure');
    if(figure&&shots.length)figure.insertAdjacentHTML('afterend',
      '<section class="rv-gallery-extras"><div class="rv-kicker">REAL INTERFACE EXAMPLES</div><h2>Compare with official screenshots</h2><p>These real OpenAI screenshots complement the annotated diagram above. The interface on Robert’s account may look slightly different.</p>'+screenshotGrid(shots)+'</section>');
  }
  function initVisualEnhancement(){
    const app=document.getElementById('app');if(!app)return;
    let inEnhance=false;
    function enhance(){
      if(inEnhance)return;inEnhance=true;
      try{
        const [section,id]=path();
        if(section==='lesson') enrichLesson(app,id);
        else if(section==='capability')enrichCapability(app,id);
        else if(section==='use-case')enrichUseCase(app,id);
        else if(section==='home')enrichHome(app);
        else if(section==='visual-guide'){visualGalleryExtras(app);visualDetailExtras(app);}
        else enrichSupporting(app,section);
        enrichCards(app);
        adaptErrors(app);
      }finally{inEnhance=false}
    }
    const observer=new MutationObserver(records=>{
      if(records.some(r=>r.target===app && r.addedNodes.length)) enhance();
    });
    observer.observe(app,{childList:true});
    window.addEventListener('hashchange',()=>{requestAnimationFrame(enhance)});
    window.robertVisualEnhance=enhance;
    enhance();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initVisualEnhancement);
  else initVisualEnhancement();
})();