(function academy(){
  'use strict';
  const root='https://help.openai.com/en/articles/10169521-projects-in-chatgpt';
  const shots={
    create:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-af13531f23cdd675621b4353/ccc7528996947a4d4997b3c9d6934694/13d3472c-96a5-4a98-93ec-3ff3872cb3cd?fm=webp&q=80&w=450',
    settings:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-dfd7518cb9b5ab4588cb814d/6ca9c53aec99d74eda875f16468276a2/Screenshot_2026-02-24_at_11.48.11%C3%A2__AM.png?fm=webp&q=80&w=1344',
    workspace:'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-64ce53ad985cb2ce9e519dec/e98675d35f6171a2b4c763ec83b7ce7b/1377c26d-c319-4567-9c99-547ee9661ff3?fm=webp&q=80&w=1180'
  };
  const content=[
    {id:'purpose',stage:'Start',title:'Choose the right first Project',minutes:5,image:'project-structure',shot:'workspace',why:'Projects are best for ongoing subjects that involve several related chats, files and instructions.',desktop:['Write down three recurring tasks you regularly revisit.','Choose one subject: Building management is a practical first choice.','Identify related records such as agendas, committee minutes and quotes.','Keep one-off questions in ordinary chats; separate unrelated subjects into other Projects.'],phone:['Review your recent ChatGPT conversations.','Choose one topic that deserves its own workspace.'],check:'You can explain why this topic needs a Project rather than a single chat.',tip:'Start with one good Project. You can expand later.'},
    {id:'create',stage:'Start',title:'Create the Project and choose an icon',minutes:7,image:'project-setup-flow',shot:'create',why:'Create a recognisable workspace that is easy to find in the sidebar.',desktop:['Sign in at chatgpt.com.','Look for Projects in the left sidebar.','Select New project.','Enter Building management as the Project name.','Pick an icon and colour if these options are offered; confirm.','Open the new Project and check its name.'],phone:['Open the ChatGPT app and expand the navigation menu.','Find Projects and choose New project.','Enter a descriptive name, then open the Project.'],check:'The Project appears in the Projects list and opens successfully.',tip:'Controls and labels can differ by device, subscription and interface version.'},
    {id:'settings',stage:'Start',title:'Find Project settings',minutes:5,image:'project-structure',shot:'settings',why:'Project settings are where you can control the Project’s instructions and relevant options.',desktop:['Open your new Project.','Find the more options menu, usually indicated by three dots (•••).','Choose Project settings.','Look for the instructions field and any available memory or personalisation options.','Close settings without changing anything yet.'],phone:['Open the Project and its more options menu.','Find Project settings and review the controls.'],check:'You can find and return to Project settings.',tip:'Project settings are separate from your general ChatGPT account settings.'},
    {id:'memory',stage:'Set up',title:'Choose sensible memory boundaries',minutes:8,image:'project-memory',shot:'settings',why:'Privacy boundaries matter when you work with household finances, health research or committee records.',desktop:['Open Project settings and find the Memory option, if available.','Compare Default memory with Project-only memory.','For a topic that should remain separate, consider Project-only memory.','Review what your account says will be used as context.','Save your choice if you change it.'],phone:['Open the Project and locate Project settings.','Check which memory mode is selected; change it only if the option is available.'],check:'You understand which conversations and files can influence replies in this Project.',tip:'Shared Projects use project-only memory. Available controls depend on plan and settings.'},
    {id:'instructions',stage:'Set up',title:'Add tailored Project instructions',minutes:10,image:'project-setup-flow',shot:'settings',why:'Instructions set your preferred writing style, output formats and verification rules for every chat in this Project.',desktop:['Open Project settings.','Locate the Project instructions area.','Choose a ready-made template in this course.','Copy, read and adapt it to your work.','Paste into the instructions field and save.','Ask ChatGPT to summarise the rules it will follow.'],phone:['Open Project settings on your phone.','Paste the shorter or full instruction template and save.','Start a new chat to test the instructions.'],check:'The Project has clear rules for accuracy, tone, formatting and missing information.',tip:'Project instructions apply within that Project and override global custom instructions.'},
    {id:'sources',stage:'Set up',title:'Upload one safe practice document',minutes:10,image:'project-files',why:'A Project becomes useful when it has a few relevant reference documents.',desktop:['Find the Project Sources or Add files control.','Prepare a fictional or de-identified set of committee minutes.','Upload the file, then verify it appears in Project sources.','Ask ChatGPT to identify the title and date of the document.','Open the source and check its contents were interpreted correctly.'],phone:['Open the Project and its sources or attachment controls.','Add a suitable sample document if your device supports it.','Check that the Project now lists the file.'],check:'The file is attached and a detail from it has been checked against the original.',tip:'Use documents you have permission to share. Remove unnecessary names, addresses and account numbers.'},
    {id:'connected-sources',stage:'Set up',title:'Link Google Drive or other supported sources',minutes:8,image:'project-files',why:'In supported Projects, linked documents can provide context without uploading a separate file copy.',desktop:['In a private Project, find Add sources.','Choose a supported app such as Google Drive if offered.','Review the permission request before connecting.','Add a specific folder or file link.','Test that ChatGPT can reference the intended document.'],phone:['Look for Add sources in your Project.','Review permissions and continue on a computer if linking is unavailable.'],check:'You know whether you have uploaded a copy or linked an external source.',tip:'Google Drive linked in a Project does not necessarily pre-sync its contents. Confirm what is actually accessible.'},
    {id:'first-chat',stage:'Practise',title:'Have your first conversation inside the Project',minutes:9,image:'project-building',shot:'workspace',why:'A conversation inside the Project can use relevant instructions and reference sources.',desktop:['Open Building management and start a new chat inside it.','Ask for a summary of the fictional committee minutes.','Request a table of actions, owners, dates and missing decisions.','Ask which source passage supports each entry.','Check at least two facts in the original document.'],phone:['Open the Project on your phone.','Ask the same question, by voice if you prefer.','Request a simpler explanation or a shorter checklist.'],check:'You have a useful output and have checked it against the source.',tip:'Do not treat a plausible summary as evidence of a decision.'},
    {id:'existing-chats',stage:'Practise',title:'Move a related chat into the Project',minutes:7,image:'project-structure',why:'Some existing chats can be organised into the new workspace so they can use its instructions.',desktop:['Find a relevant conversation in ChatGPT history.','Open its menu and select Move to project if available, or drag it onto the Project.','Choose Building management.','Check it appears alongside other Project chats.'],phone:['Find a related chat and open its menu.','Look for Move to project and choose your Project.'],check:'You understand whether the chat is inside or outside the Project.',tip:'Some chats, including chats created with a GPT, cannot be moved. Start a fresh Project chat if needed.'},
    {id:'save-source',stage:'Practise',title:'Save a checked response for future use',minutes:6,image:'project-files',why:'A verified summary, decision register or standard template can be reused as a Project source.',desktop:['Open a Project conversation with a useful result.','Find the relevant response’s menu.','Select Add to project sources if available.','Check that it is visible among the Project sources.','In a new chat, refer back to it.'],phone:['Open a response inside the Project.','Look for an option to add it to Project sources.'],check:'You can distinguish the original source from an AI-generated summary.',tip:'Only save a generated conclusion as a trusted reference after checking it.'},
    {id:'sharing',stage:'Manage',title:'Keep it private or share deliberately',minutes:7,image:'project-memory',why:'Shared Projects can expose their chats, files and instructions to other members.',desktop:['Open Share if the control is available.','Review the members and any invitation or link settings.','Do not enable broad access unless collaboration is intended.','If you invite someone, choose chat or edit access as appropriate.','Check that the Project contains no information you are not entitled to share.'],phone:['Open the Project sharing settings.','Check who has access before changing anything.'],check:'You know whether your Project is private or shared and what collaborators can see.',tip:'Leave household financial and private health Projects unshared unless there is a clear need.'},
    {id:'building-workflow',stage:'Manage',title:'Example: monthly building committee workflow',minutes:12,image:'project-building',shot:'workspace',why:'Use the Project to manage committee agendas, quotations and action registers consistently.',desktop:['Add a fictional set of meeting minutes and one sample quote.','Use the Building management Project instructions template.','Ask for a meeting agenda and an action register.','Request owners, due dates and source references.','Ask ChatGPT to flag undecided items rather than inventing a resolution.','Save a checked summary for the next meeting.'],phone:['Ask by voice for a short status update on a fictional maintenance task.','Request a list of unresolved decisions.'],check:'Your fictional action register has no invented owners, dates or approvals.',tip:'Keep actual committee records in the authorised system of record.'},
    {id:'finance-workflow',stage:'Manage',title:'Example: household finance workflow',minutes:12,image:'project-finance',why:'Use a separate Project for budget patterns, bills and financial concepts.',desktop:['Create a Household finances Project.','Add a fictional expenses spreadsheet or de-identified bill.','Paste the Household finances template below.','Ask for total expenses by category and any anomalies.','Ask ChatGPT to show its calculations and highlight missing numbers.','Compare the output against original figures.'],phone:['Ask ChatGPT to explain a charge from a fictional bill.','Ask which numbers require checking.'],check:'You can reconcile a simple total without trusting the AI blindly.',tip:'Use qualified advice for investment, tax and other consequential financial decisions.'},
    {id:'maintenance',stage:'Manage',title:'Review and maintain your Projects monthly',minutes:8,image:'project-review',why:'Review sources, instructions, old conversations and sharing so the workspace remains reliable.',desktop:['Check which documents are outdated or superseded.','Keep verified summaries but do not mistake them for primary evidence.','Update instructions that are no longer accurate.','Review shared access and remove unneeded material.','Start a new monthly chat with a clear question.'],phone:['Review the current action list in your Project.','Record the most important question for next month.'],check:'You have a repeatable monthly maintenance routine.',tip:'A Project is useful working context, not a substitute for original records.'}
  ];
  const templates=[
    {id:'building',name:'Building management',icon:'▦',summary:'Committee minutes, maintenance, contractors and correspondence',text:`You are my practical residential building management assistant for New South Wales, Australia. Use clear Australian English.

Help me draft agendas and respectful resident notices, summarise committee minutes, create action registers and compare contractor quotations.

Rules:
1. Separate confirmed decisions, suggestions, open issues and assumptions.
2. Never invent approvals, meeting resolutions, dates, owners, legal obligations or contractor commitments.
3. Reference the specific source document and page or passage when available.
4. Action registers must use: Issue | Required action | Owner | Due date | Status | Source | Unanswered question.
5. Compare quotations by scope, exclusions, GST, warranties, risks and assumptions.
6. Flag anything requiring checks against NSW strata legislation, bylaws or expert advice.
7. Ask one focused question when an essential detail is missing.
8. Draft for my review. Do not present a communication as sent or an action as completed.

Keep recommendations practical and concise.`},
    {id:'finances',name:'Household finances',icon:'▥',summary:'Bills, budgeting and financial research',text:`You are my household finances assistant. Explain bills, budgeting, everyday costs and financial concepts using Australian English and AUD.

Rules:
1. Distinguish source amounts, calculations, estimates and opinions.
2. Show calculations and assumptions; reconcile totals and flag discrepancies.
3. Make GST treatment explicit when known.
4. Do not invent rates, returns, account balances, tax obligations or entitlements.
5. Use a table for comparisons showing cost, ongoing charges, risks and unanswered questions.
6. For current prices or regulations, use credible sources and dates.
7. Never request passwords, tax file numbers or full account numbers.
8. Prepare questions for a licensed financial adviser or accountant rather than making regulated decisions for me.

Finish with a short list of what should be checked before acting.`},
    {id:'health',name:'Health information',icon:'✚',summary:'Medical terminology, evidence and appointment questions',text:`You are my health-information research assistant. Explain general medical information in plain Australian English.

Rules:
1. Define unfamiliar terminology and separate well-supported findings from uncertain or emerging evidence.
2. Do not diagnose me, prescribe treatment or recommend stopping medication.
3. Use credible clinical guidelines and Australian health authorities when appropriate, with dated citations.
4. When I provide a letter, explain the wording without inventing conclusions or history.
5. Offer useful questions to raise with my doctor or pharmacist.
6. Flag possible urgency when relevant without assuming I have a condition.
7. Minimise personal identifying details.

Default format: What it means | What evidence says | What is unclear | Questions to discuss.`},
    {id:'news',name:'News and current affairs',icon:'▣',summary:'Balanced briefings, context and source verification',text:`You are my news and current-affairs research assistant. Cover Australian and international news in a factual, balanced way.

Rules:
1. Use web search for current events and identify event and publication dates.
2. Separate facts from interpretation, speculation and opinion.
3. Include primary sources and credible independent coverage, and explain disagreements.
4. Do not create false equivalence when evidence clearly supports one account.
5. Include short historical context and relevant economic or policy concepts.
6. Acknowledge unknowns and do not invent quotes, figures or events.

Default format: What happened | Why it matters | Evidence | Different perspectives | What to monitor.`},
    {id:'interests',name:'Spanish, guitar and drawing',icon:'♫',summary:'Practical tutoring at a comfortable pace',text:`You are my personal tutor for conversational Spanish, guitar and drawing.

Rules:
1. Ask which subject I want to practise today.
2. Keep lessons short and interactive, with one challenge at a time.
3. For Spanish, use simple conversational exchanges and correct important mistakes gently.
4. For guitar, propose manageable warm-ups, chord/rhythm practice and short reviews; offer easier alternatives.
5. For drawing, teach shape and observation skills in simple stages with optional visual examples.
6. Never assume my level or physical capacity; adapt to my feedback.
7. End with one realistic exercise for the next session.

Explain in Australian English and avoid long lectures.`}
  ];
  const firstPrompts={
    building:'From these fictional meeting minutes, produce an action register. Quote the source for each item and label missing owners or dates as not specified.',
    finances:'Analyse this fictional monthly expenses table. Reconcile totals, show spending by category and list which numbers need checking.',
    health:'Explain this unfamiliar medical term using general medical information and suggest five questions I could discuss with a doctor.',
    news:'Give me a sourced briefing on this topic, explaining the timeline, facts, uncertainty and substantively different views.',
    interests:'I want a 15-minute conversational Spanish lesson. Ask me one question at a time and give simple feedback.'
  };
  const key='robert-project-academy-v2';
  let saved={done:[]};
  try {saved=JSON.parse(localStorage.getItem(key)||'{"done":[]}')}catch(e){}
  if(!Array.isArray(saved.done))saved.done=[];
  let mobile=false,selected='building';
  const E=x=>String(x||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const route=()=> (location.hash||'#home').replace(/^#\/?/,'').split('/');
  const isDone=id=>saved.done.includes(id);
  const save=()=>{try{localStorage.setItem(key,JSON.stringify(saved))}catch(e){}};
  const link=(id,label)=>`<a href="#project-setup/${id}">${E(label)}</a>`;
  const image=(name,caption)=>`<figure class="pa-image"><img src="assets/projects/${E(name)}.svg" alt="${E(caption)}" loading="lazy" width="1200" height="700"/><figcaption>Illustrated example: ${E(caption)}</figcaption></figure>`;
  const shot=key=>!shots[key]?'':`<figure class="pa-shot"><div class="pa-source-label">GENUINE OPENAI SCREENSHOT</div><div class="pa-real-frame"><img src="${E(shots[key])}" alt="Screenshot of ${E(key)} in ChatGPT Projects" loading="lazy" referrerpolicy="no-referrer" data-fallback="assets/projects/project-structure.svg"/><span aria-hidden="true" class="pa-real-pin pa-pin-${E(key)}">1</span></div><figcaption><strong>1. ${E(({create:'Select New project from the sidebar.',settings:'Open the Project menu and select Project settings.',workspace:'Find reference files and related chats in this Project.'})[key])}</strong> Compare with the real ChatGPT interface. <a href="${root}" target="_blank" rel="noopener noreferrer">Official source ↗</a> (your screen may differ).</figcaption></figure>`;
  const h=()=>`<div class="pa-heading"><div class="pa-kicker">ROBERT'S CHATGPT COURSE · PRACTICAL TUTORIAL</div><h1>Set up Projects, step by step</h1><p>Learn where to click, what instructions to use, which files to add and how to organise recurring work. Follow each step on your own device.</p><div class="pa-buttons"><a class="btn btn-primary" href="#project-setup/${(content.find(c=>!isDone(c.id))||content[0]).id}">Continue the tutorial →</a><a class="btn btn-outline" href="#project-setup/templates">Copy Project instructions →</a></div></div>`;
  function overview(){
    const completed=content.filter(c=>isDone(c.id)).length;
    return `<div class="pa-root">${h()}${image('project-setup-flow','Your first Project in five stages')}<section class="pa-overview-screens" aria-label="Official Project interface screenshots">${shot('create')}${shot('settings')}${shot('workspace')}</section><section class="pa-progress"><strong>${completed} of ${content.length} steps complete</strong><div class="pa-meter"><span style="width:${100*completed/content.length}%"></span></div><p>Progress stays in this browser only.</p></section><div class="pa-stages">${['Start','Set up','Practise','Manage'].map(st=>`<section class="pa-stage"><h2>${st}</h2>${content.filter(c=>c.stage===st).map(c=>`<a class="pa-stage-row" href="#project-setup/${c.id}"><span>${isDone(c.id)?'✓':'○'}</span><div><strong>${E(c.title)}</strong><small>${E(c.why)}</small></div><em>${c.minutes} min</em></a>`).join('')}</section>`).join('')}</div><section class="pa-end-note"><strong>Which Project first?</strong> Building management is the simplest example here. You can apply the same process to Household finances, Health information, Current affairs or Spanish practice.</section><p><a target="_blank" rel="noopener noreferrer" href="${root}">Official OpenAI Projects guide ↗</a></p></div>`;
  }
  function lesson(id){
    const c=content.find(x=>x.id===id);if(!c)return overview();
    const i=content.indexOf(c),previous=content[i-1],next=content[i+1],list=mobile?c.phone:c.desktop;
    return `<div class="pa-root"><div class="pa-crumb">${link('','Projects tutorial')} <span>›</span> ${E(c.stage)} <span>›</span> Step ${i+1}</div><div class="pa-heading"><div class="pa-kicker">STEP ${i+1} OF ${content.length} · ${c.minutes} MINUTES</div><h1>${E(c.title)}</h1><p>${E(c.why)}</p></div><div class="pa-lesson-shell"><aside class="pa-lesson-rail"><h2>Lesson steps</h2>${content.map((l,j)=>`<a class="${c.id===l.id?'active':''}" href="#project-setup/${l.id}"><span>${isDone(l.id)?'✓':j+1}</span>${E(l.title)}</a>`).join('')}</aside><article class="pa-lesson-main">${['sources','first-chat','building-workflow','finance-workflow'].includes(id)?`<div class="pa-practice-downloads"><strong>Try it with fictional sample files</strong><p>These examples contain invented information and can be uploaded safely for practice.</p><div><a href="resources/sample-committee-minutes.txt" download class="btn btn-outline">Download sample committee minutes</a><a href="resources/sample-household-expenses.txt" download class="btn btn-outline">Download sample expenses</a></div></div>`:''}<div class="pa-visual-grid">${image(c.image,c.title)}${c.shot?shot(c.shot):image('project-review','Every Project benefits from a clear routine')}</div><section class="pa-process"><div class="pa-process-head"><h2>Follow these instructions</h2><div class="pa-switch"><button type="button" data-pa-device="desktop" class="${!mobile?'selected':''}">Computer</button><button type="button" data-pa-device="mobile" class="${mobile?'selected':''}">Phone</button></div></div><ol>${list.map((s,n)=>`<li><span>${n+1}</span><p>${E(s)}</p></li>`).join('')}</ol></section><section class="pa-check"><h2>Check your progress</h2><p>${E(c.check)}</p><p class="pa-tip"><strong>Useful to know:</strong> ${E(c.tip)}</p><button class="btn ${isDone(id)?'btn-outline':'btn-primary'}" type="button" data-pa-done="${id}">${isDone(id)?'✓ Done · mark incomplete':'Mark this step complete'}</button></section>${['instructions','building-workflow','finance-workflow'].includes(id)?'<div class="pa-buttons"><a class="btn btn-outline" href="#project-setup/templates">Copy an instruction template →</a></div>':''}<div class="pa-next">${previous?link(previous.id,'← '+previous.title):link('','← Course overview')}${next?link(next.id,next.title+' →'):link('templates','Copy Project instructions →')}</div></article></div></div>`;
  }
  function templatePage(){
    const t=templates.find(x=>x.id===selected)||templates[0];
    return `<div class="pa-root"><div class="pa-crumb">${link('','Projects tutorial')} <span>›</span> Ready-made instructions</div><div class="pa-heading"><div class="pa-kicker">COPY, ADAPT AND SAVE</div><h1>Project instruction templates</h1><p>These are tailored to Robert's interests. Choose a Project, read the rules and copy the text into its Project settings. Edit any details that don't suit you.</p></div><div class="pa-templates"><nav class="pa-template-nav" aria-label="Choose a Project instructions template">${templates.map(x=>`<button class="${selected===x.id?'active':''}" type="button" data-pa-template="${x.id}"><span>${E(x.icon)}</span><strong>${E(x.name)}</strong><small>${E(x.summary)}</small></button>`).join('')}</nav><section class="pa-template-box"><div class="pa-process-head"><div><h2>${E(t.name)}</h2><p>Use this text as Project instructions and adjust it to your needs.</p></div><button class="btn btn-primary" type="button" data-pa-copy="template">Copy instructions</button></div><textarea rows="19" id="pa-template-input" aria-label="Editable Project instructions">${E(t.text)}</textarea><div class="pa-buttons"><button type="button" class="btn btn-outline" data-pa-copy="first">Copy first practice prompt</button><a href="#project-setup/instructions" class="btn btn-outline">How to add these →</a><a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Open ChatGPT ↗</a></div></section></div><div class="pa-end-note">Keep your original documents outside ChatGPT as the authoritative record. Use these rules as guidance, not as a substitute for verification.</div></div>`;
  }
  function render(){
    const r=route();if(r[0]!=='project-setup')return;
    const target=document.getElementById('app');if(!target)return;
    target.innerHTML=r[1]==='templates'?templatePage():r[1]?lesson(r[1]):overview();
    for(const img of target.querySelectorAll('img[data-fallback]'))img.addEventListener('error',()=>{
      if(img.dataset.fallen)return;img.dataset.fallen='1';img.src=img.dataset.fallback;
      const l=img.closest('.pa-shot')?.querySelector('.pa-source-label');
      if(l)l.textContent='OFFICIAL IMAGE NOT AVAILABLE · DIAGRAM SHOWN';img.closest('.pa-shot')?.querySelector('.pa-real-pin')?.remove();
    });
    document.querySelector('#sidebar')?.classList.remove('open');
    document.querySelector('#menu-toggle')?.setAttribute('aria-expanded','false');
  }
  async function copy(value){
    if(!value)return;
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);
      else{const a=document.createElement('textarea');a.value=value;document.body.appendChild(a);a.select();if(!document.execCommand('copy'))throw Error();a.remove();}
      notify('Copied. Paste into your ChatGPT Project.');
    }catch(e){notify('Select and copy the text manually.')}
  }
  function notify(txt){
    let el=document.getElementById('pa-toast');
    if(!el){el=document.createElement('div');el.id='pa-toast';el.className='pa-toast';el.setAttribute('role','status');document.body.appendChild(el);}
    el.textContent=txt;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2700);
  }
  document.addEventListener('click',event=>{
    if(!document.querySelector('#app .pa-root'))return;
    const el=event.target.closest('[data-pa-done],[data-pa-template],[data-pa-copy],[data-pa-device]');
    if(!el)return;
    if(el.dataset.paDone){const id=el.dataset.paDone;saved.done=isDone(id)?saved.done.filter(x=>x!==id):[...saved.done,id];save();render();}
    else if(el.dataset.paTemplate){selected=el.dataset.paTemplate;render();}
    else if(el.dataset.paDevice){mobile=el.dataset.paDevice==='mobile';render();}
    else if(el.dataset.paCopy){copy(el.dataset.paCopy==='template'?document.querySelector('#pa-template-input')?.value:firstPrompts[selected]);}
  });
  window.addEventListener('hashchange',()=>requestAnimationFrame(render));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();