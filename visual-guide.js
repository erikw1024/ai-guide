/* Visual walkthroughs for Robert's ChatGPT Guide.
   These are deliberately labelled annotated illustrations, not actual product screenshots.
   They supplement, rather than replace, the current UI and official Help Centre. */
(function () {
  'use strict';
  const guides = [
    {id:'navigation',title:'Finding your way around ChatGPT',summary:'Locate a new chat, chat history, Projects, the message box and account settings.',image:'assets/navigation-guide.svg',steps:['Use New chat to start a separate topic.','Use the sidebar to find older chats and Projects.','Type your request into the message box, then send it.','Open Settings to review your account, privacy and preferences.'],lessons:['navigation','history','first-chat'],official:'https://openai.com/academy/getting-started/'},
    {id:'conversation',title:'Start a chat and ask follow-up questions',summary:'See how one question becomes a more specific, useful conversation.',image:'assets/chat-followups-guide.svg',steps:['Start with a clear question or task.','Read the reply and identify what is missing.','Ask a follow-up in the same conversation.','Request a table, checklist or shorter explanation if useful.'],lessons:['first-chat','follow-ups','better-prompt'],official:'https://openai.com/academy/getting-started/'},
    {id:'documents',title:'Upload and work with a document',summary:'Attach a PDF, ask for an action register and verify the output.',image:'assets/document-guide.svg',steps:['Use the attachment control near the message box.','Choose a non-sensitive sample PDF or photo.','Ask for a summary, action register or explanation.','Confirm any dates, names or decisions against the original document.'],lessons:['pdfs','minutes','document-checking'],official:'https://help.openai.com/en/articles/8555545-file-uploads-faq'},
    {id:'voice',title:'Use ChatGPT by voice',summary:'Practise spoken questions and conversational Spanish without typing.',image:'assets/voice-guide.svg',steps:['Open ChatGPT on your phone or computer.','Look for the voice control near the message box.','Allow microphone access if prompted and start speaking.','End voice mode when finished; controls and features vary by device.'],lessons:['voice','spanish'],official:'https://help.openai.com/en/articles/20001274-chatgpt-voice'},
    {id:'projects',title:'Organise ongoing work with Projects',summary:'Keep building management, reference files and related chats together.',image:'assets/projects-guide.svg',steps:['Find Projects in the sidebar when available.','Create a Project for a recurring topic, such as Building management.','Add helpful Project instructions and suitable reference files.','Start related chats inside the Project to reuse the context.'],lessons:['projects','project-instructions','project-example'],official:'https://help.openai.com/en/articles/10169521-projects-in-chatgpt'},
    {id:'research',title:'Research and check sources',summary:'Use search for current facts, then open and scrutinise cited evidence.',image:'assets/search-guide.svg',steps:['Ask ChatGPT to search for recent or specific information.','Read the summary and note any claimed sources.','Open primary sources and confirm they support the relevant claim.','Check dates, limitations and differing perspectives before relying on it.'],lessons:['search','verify','news'],official:'https://help.openai.com/en/articles/9237897-chatgpt-search'},
    {id:'plugins',title:'Understand connected apps and permissions',summary:'Connect only the services you need and review what information can be accessed.',image:'assets/plugins-guide.svg',steps:['Open Settings and look for Plugins, if available.','Find a relevant integration, such as a documents or email service.','Read access permissions before connecting anything.','Test with non-sensitive data and disconnect if you no longer use it.'],lessons:['plugins','permissions'],official:'https://help.openai.com/en/articles/20001256-plugins-in-chatgpt'},
    {id:'spreadsheets',title:'Analyse a spreadsheet',summary:'Use a small fictional household budget to understand calculations and charts.',image:'assets/spreadsheet-guide.svg',steps:['Prepare a spreadsheet with headings and a few fictional rows.','Attach the file and ask ChatGPT to explain the columns.','Request a summary table or a chart of totals.','Check sums and categories in the original file.'],lessons:['spreadsheet','tables','compare-quotes'],official:'https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt'},
    {id:'privacy',title:'Find important privacy controls',summary:'Review Memory summary, Data Controls and optional Temporary Chat.',image:'assets/privacy-guide.svg',steps:['Open account Settings.','Review Personalisation and Memory summary if available.','Review Data Controls and connected services.','Consider Temporary Chat where appropriate and avoid unnecessary sensitive uploads.'],lessons:['memory','privacy-settings','hallucinations'],official:'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt'}
  ];
  const byId=Object.fromEntries(guides.map(g=>[g.id,g]));
  const lessonToImage={
    welcome:'navigation',navigation:'navigation',history:'navigation',
    'first-chat':'conversation','better-prompt':'conversation','follow-ups':'conversation',formats:'conversation',refining:'conversation',
    voice:'voice',spanish:'voice',
    photos:'documents',screenshots:'documents',pdfs:'documents',minutes:'documents','document-checking':'documents',
    search:'research',verify:'research',news:'research',deep:'research','research-plan':'research',
    projects:'projects','project-instructions':'projects','project-example':'projects',
    plugins:'plugins',permissions:'plugins',tasks:'plugins',
    spreadsheet:'spreadsheets',tables:'spreadsheets','compare-quotes':'spreadsheets',
    memory:'privacy','privacy-settings':'privacy',hallucinations:'privacy'
  };
  const capabilityToImage={
    navigation:'navigation',chat:'conversation',prompts:'conversation',voice:'voice',images:'documents',
    documents:'documents',spreadsheets:'spreadsheets',websearch:'research','deep-research':'research',
    learning:'conversation',projects:'projects',memory:'privacy',library:'documents',plugins:'plugins',
    tasks:'plugins',work:'projects',safety:'privacy',creative:'documents'
  };
  const escape=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[ch]));
  const lessonLinks=g=>g.lessons.map((id,i)=>'<a class="visual-lesson-link" href="#lesson/'+escape(id)+'">Lesson '+(i+1)+': '+escape((typeof LESSONS!=='undefined'?LESSONS:[]).find(l=>l.id===id)?.title||id)+' →</a>').join('');
  function displayGuide(g,compact) {
    const fig='<figure class="visual-figure"><img src="'+escape(g.image)+'" alt="'+escape(g.summary)+'" width="1200" height="720" loading="'+(compact?'lazy':'eager')+'" /><figcaption>Illustrative interface diagram, not an actual ChatGPT screenshot. Labels and layout may vary across devices and accounts.</figcaption></figure>';
    if(compact) return '<section class="visual-lesson" aria-label="Visual walkthrough"><div class="visual-lesson-heading"><div><div class="eyebrow">SEE IT IN PICTURES</div><h2>'+escape(g.title)+'</h2><p class="muted">'+escape(g.summary)+'</p></div><a class="btn btn-outline" href="#visual-guide/'+escape(g.id)+'">Full visual guide →</a></div>'+fig+'<a class="subtle-link" href="'+escape(g.official)+'" target="_blank" rel="noopener noreferrer">See official OpenAI instructions ↗</a></section>';
    return '<section class="visual-detail"><a class="subtle-link" href="#visual-guide">← All visual walkthroughs</a><div class="page-heading"><div class="eyebrow">VISUAL WALKTHROUGH</div><h1>'+escape(g.title)+'</h1><p class="lead">'+escape(g.summary)+'</p></div>'+fig+'<div class="visual-detail-grid"><section class="panel"><h2>What to look for</h2><ol class="visual-steps">'+g.steps.map(s=>'<li>'+escape(s)+'</li>').join('')+'</ol><p class="small muted">Use the diagram to identify the kind of control to look for, not its exact position on every version of ChatGPT.</p></section><aside class="panel panel-highlight"><h2>Try it yourself</h2>'+lessonLinks(g)+'<div class="visual-detail-actions"><a class="btn btn-primary" href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">Open ChatGPT ↗</a><a class="btn btn-outline" href="'+escape(g.official)+'" target="_blank" rel="noopener noreferrer">Official instructions ↗</a></div></aside></div></section>';
  }
  function gallery() {
    return '<section class="visual-gallery"><div class="page-heading"><div class="eyebrow">PICTURE GUIDES</div><h1>See how ChatGPT works</h1><p class="lead">Nine illustrated walkthroughs show the key parts of ChatGPT before you practise them. Every diagram is simplified and clearly labelled, so use the real ChatGPT screen alongside it.</p></div><div class="visual-note"><strong>About these images:</strong> These are explanatory diagrams, not screenshots of Robert’s account. ChatGPT changes regularly, and features may vary by plan, platform and version. Each guide links to current official instructions.</div><div class="visual-gallery-grid">'+guides.map((g,i)=>'<a class="visual-card" href="#visual-guide/'+escape(g.id)+'"><div class="visual-card-media"><img src="'+escape(g.image)+'" alt="" loading="lazy" width="1200" height="720" /></div><div class="visual-card-body"><span class="visual-card-number">'+String(i+1).padStart(2,'0')+'</span><h2>'+escape(g.title)+'</h2><p>'+escape(g.summary)+'</p><span class="visual-card-link">Open picture guide →</span></div></a>').join('')+'</div><div class="panel panel-highlight space-top"><h2>Want to see an actual ChatGPT screenshot?</h2><p>For a real annotated interface example, use the OpenAI Academy ChatGPT 101 resource. It is a reference, not a guarantee that your account has identical controls.</p><a href="https://d2xo500swnpgl1.cloudfront.net/slide-upload/oaiacademy/ChatGPT101-resources-45a6a1ae-3156-4d07-8842-6db543d65db7-1770079779741.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Open official illustrated resource ↗</a></div></section>';
  }
  function renderVisuals() {
    const app=document.getElementById('app');
    if(!app) return;
    const route=(location.hash||'#home').replace(/^#\/?/,'').split('/');
    if(route[0]==='visual-guide') {
      app.innerHTML=route[1]&&byId[route[1]]?displayGuide(byId[route[1]],false):gallery();
      return;
    }
    if(route[0]==='lesson' || route[0]==='capability'){
      const id=route[1], key=route[0]==='lesson'?lessonToImage[id]:capabilityToImage[id];
      const head=app.querySelector('.page-heading');
      if(head&&key&&byId[key]&&!app.querySelector('.visual-lesson'))head.insertAdjacentHTML('afterend',displayGuide(byId[key],true));
      return;
    }
    if(route[0]==='home') {
      const homeHero=app.querySelector('.hero');
      if(homeHero&&!app.querySelector('.visual-home-teaser')){
        homeHero.insertAdjacentHTML('afterend','<section class="visual-home-teaser"><div><div class="eyebrow">NEW: STEP-BY-STEP PICTURE GUIDES</div><h2>Prefer to see it on screen?</h2><p>Learn where to click with nine clear, annotated illustrations covering chats, files, voice, Projects, research and more.</p><a href="#visual-guide" class="btn btn-primary">See the picture guides →</a></div><a href="#visual-guide/navigation" aria-label="Open the navigation picture guide"><img src="assets/navigation-guide.svg" alt="Illustrated ChatGPT screen showing navigation controls" width="1200" height="720" loading="lazy" /></a></section>');
      }
    }
  }
  document.addEventListener('DOMContentLoaded',()=>{renderVisuals()});
  window.addEventListener('hashchange',()=>{renderVisuals()});
  if(document.readyState!=='loading') renderVisuals();
})();