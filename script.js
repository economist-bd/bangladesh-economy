/* Pro FlipBook script.js
   - প্রতিটি বই/অধ্যায়/পাতা এখানে JS অবজেক্ট হিসেবে রাখো (books)
   - GitHub Pages ready: পাথ relative (assets/*)
*/

/* =========================
   Data: বই ও অধ্যায় (এখানে প্রথম বই 'বাংলাদেশের বাজেট')
   প্রত্যেক পৃষ্ঠায় HTML allowed (বৈধ ও সুরক্ষিত কনটেন্ট রাখবে)
   ========================= */


const chapters = [
  "assets/chapters/chapter1.html",
  "assets/chapters/chapter2.html",
  "assets/chapters/chapter3.html"
];


// চাইলে এখানে নতুন variables বা comments রাখতে পারেন,
// কিন্তু উপরের সমস্যাটির জন্য books এর কৌলাইন ঠিক থাকতে হবে।

// নিচের অংশ আগের মতই থাকবে, এখানে chapters variable না থাকলেও সমস্যা নেই (ব্যবহার হচ্ছে না বলে)

// ... (বাকি script.js ঠিকই আছে; আগের মতো চলবে)


/* ========================= PageFlip init ========================= */
const container = document.getElementById('flipbook');
const pageFlip = new window.PageFlip(container, {
  width: 750,
  height: 1000,
  size: "stretch",
  minWidth: 320,
  maxWidth: 1200,
  minHeight: 400,
  maxHeight: 1400,
  maxShadowOpacity: 0.2,
  showCover: true,
  usePortrait: false
});

/* State vars */
let currentBook = null;
let flatPages = [];
let pageToChapterMap = [];

/* UI refs */
const bookSelect = document.getElementById('bookSelect');
const loadBookBtn = document.getElementById('loadBookBtn');
const pageIndicator = document.getElementById('pageIndicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const autoScrollToggle = document.getElementById('autoScrollToggle');
const autoTurnToggle = document.getElementById('autoTurnToggle');
const autoTurnInterval = document.getElementById('autoTurnInterval');
const autoTurnVal = document.getElementById('autoTurnVal');
const ttsPlay = document.getElementById('ttsPlay');
const ttsPause = document.getElementById('ttsPause');
const voiceSelect = document.getElementById('voiceSelect');
const bgMusic = document.getElementById('bgMusic');
const musicPlay = document.getElementById('musicPlay');
const musicPause = document.getElementById('musicPause');
const musicVol = document.getElementById('musicVol');
const darkToggle = document.getElementById('darkToggle');
const downloadBtn = document.getElementById('downloadBtn');

/* populate bookSelect */
books.forEach(b=>{
  const opt = document.createElement('option');
  opt.value = b.id; opt.textContent = b.title;
  bookSelect.appendChild(opt);
});

/* loadBook: flatten chapters -> pages and feed PageFlip */
function loadBook(bookId){
  const book = books.find(b=>b.id===bookId);
  if(!book) return;
  currentBook = book;
  flatPages = [];
  pageToChapterMap = [];

  // cover (optional)
  flatPages.push(`<div style="display:flex;align-items:center;justify-content:center;height:100%"><div><h1 style="font-size:32px">${escapeHtml(book.title)}</h1><p style="color:#666;margin-top:8px">বাংলা অর্থনীতি ব্লগ</p></div></div>`);
  pageToChapterMap.push({chapter:-1,page:-1});

  book.chapters.forEach((ch,ci)=>{
    // chapter title page
    flatPages.push(`<div style="padding:28px"><h2>${escapeHtml(ch.title)}</h2></div>`);
    pageToChapterMap.push({chapter:ci,page:-1});
    ch.pages.forEach((pg,pi)=>{
      flatPages.push(`<div style="padding:28px">${pg}</div>`);
      pageToChapterMap.push({chapter:ci,page:pi});
    });
  });

  // create DOM elements for pageFlip
  const elements = flatPages.map(html=>{
    const wrapper = document.createElement('div');
    wrapper.className = 'pf-page';
    wrapper.innerHTML = `<div>${html}</div>`;
    return wrapper;
  });

  pageFlip.loadFromHTML(elements);
  updateIndicator();
}

/* Navigation */
prevBtn.addEventListener('click', ()=> pageFlip.flipPrev());
nextBtn.addEventListener('click', ()=> pageFlip.flipNext());
pageFlip.on('flip', ()=> {
  updateIndicator();
  if(autoScrollEnabled) startAutoScrollCurrentPage();
});

/* Indicator */
function updateIndicator(){
  try{
    const current = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();
    pageIndicator.textContent = `পৃষ্ঠা ${current+1} / ${total}`;
  }catch(e){ pageIndicator.textContent = '—'; }
}

/* ================= Auto scroll & auto page-turn ================= */
let autoScrollEnabled = false;
let autoTurnEnabled = false;
let autoTurnTimer = null;
let autoScrollTimer = null;

autoTurnInterval.addEventListener('input', ()=> autoTurnVal.textContent = autoTurnInterval.value);
autoScrollToggle.addEventListener('change', ()=> {
  autoScrollEnabled = autoScrollToggle.checked;
  if(autoScrollEnabled) startAutoScrollCurrentPage(); else stopAutoScroll();
});
autoTurnToggle.addEventListener('change', ()=> {
  autoTurnEnabled = autoTurnToggle.checked;
  if(autoTurnEnabled) startAutoTurnLoop(); else stopAutoTurnLoop();
});

function startAutoTurnLoop(){
  stopAutoTurnLoop();
  autoTurnTimer = setInterval(()=>{
    if(pageFlip.getCurrentPageIndex() < pageFlip.getPageCount()-1) pageFlip.flipNext();
    else pageFlip.flip(0);
  }, parseInt(autoTurnInterval.value,10)*1000);
}
function stopAutoTurnLoop(){ if(autoTurnTimer){ clearInterval(autoTurnTimer); autoTurnTimer=null; } }

function startAutoScrollCurrentPage(){
  stopAutoScroll();
  if(!autoScrollEnabled) return;
  const pageEl = pageFlip.getPageElement(pageFlip.getCurrentPageIndex());
  if(!pageEl) return;
  const content = pageEl.querySelector('div');
  if(!content) return;
  content.scrollTop = 0;
  const duration = parseInt(autoTurnInterval.value,10)*1000;
  const stepMs = 50;
  const totalSteps = Math.max(1, Math.floor(duration/stepMs));
  let step = 0;
  autoScrollTimer = setInterval(()=>{
    step++;
    content.scrollTop = (content.scrollHeight - content.clientHeight) * (step/totalSteps);
    if(step >= totalSteps){ clearInterval(autoScrollTimer); autoScrollTimer=null; if(autoTurnEnabled) pageFlip.flipNext(); }
  }, stepMs);
}
function stopAutoScroll(){ if(autoScrollTimer){ clearInterval(autoScrollTimer); autoScrollTimer=null; } }

/* ================= TTS (Web Speech API) ================= */
const synth = window.speechSynthesis;
let voices = [];
let ttsUtter = null;

function populateVoices(){
  voices = synth.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach(v=>{
    const opt = document.createElement('option');
    opt.value = v.name; opt.textContent = `${v.name} — ${v.lang}`;
    voiceSelect.appendChild(opt);
  });
  const bn = voices.find(v => v.lang && v.lang.startsWith('bn'));
  if(bn) voiceSelect.value = bn.name;
}
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = populateVoices;

ttsPlay.addEventListener('click', ()=>{
  if(!currentBook){ alert('প্রথমে একটি বই লোড করুন।'); return; }
  const pageEl = pageFlip.getPageElement(pageFlip.getCurrentPageIndex());
  if(!pageEl) return;
  const text = pageEl.innerText || pageEl.textContent || '';
  if(!text.trim()) return;
  if(synth.speaking) synth.cancel();
  ttsUtter = new SpeechSynthesisUtterance(text);
  const sel = voices.find(v=>v.name === voiceSelect.value);
  if(sel) ttsUtter.voice = sel;
  ttsUtter.lang = sel ? sel.lang : 'bn-BD';
  ttsUtter.rate = 0.95;
  ttsUtter.pitch = 1;
  synth.speak(ttsUtter);
});

ttsPause.addEventListener('click', ()=>{
  if(synth.speaking && !synth.paused) synth.pause();
  else if(synth.paused) synth.resume();
});

/* ================= Background music ================= */
bgMusic.volume = parseFloat(musicVol.value);
musicPlay.addEventListener('click', ()=> bgMusic.play().catch(()=>{}));
musicPause.addEventListener('click', ()=> bgMusic.pause());
musicVol.addEventListener('input', ()=> bgMusic.volume = parseFloat(musicVol.value));

/* ================= Dark mode ================= */
darkToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
});

/* ================= Export PDF (simple print) ================= */
downloadBtn.addEventListener('click', ()=>{
  const popup = window.open('', '_blank');
  popup.document.write('<html><head><title>Export PDF</title>');
  popup.document.write('<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;600&display=swap" rel="stylesheet">');
  popup.document.write('<style>body{font-family:"Noto Serif Bengali", serif;padding:30px} .page{page-break-after:always;margin-bottom:20px}</style>');
  popup.document.write('</head><body>');
  for(let i=0;i<pageFlip.getPageCount();i++){
    const pg = pageFlip.getPageElement(i);
    popup.document.write('<div class="page">' + (pg ? pg.innerHTML : '') + '</div>');
  }
  popup.document.write('</body></html>');
  popup.document.close();
  setTimeout(()=> popup.print(), 700);
});

/* ================= Utilities ================= */
function escapeHtml(s){ return s; } // if raw text inserted, sanitize here

/* Load state & init */
document.getElementById('loadBookBtn').addEventListener('click', ()=> loadBook(bookSelect.value));
if(books.length){ bookSelect.value = books[0].id; loadBook(books[0].id); }

/* keyboard shortcuts */
document.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowRight') pageFlip.flipNext();
  if(e.key === 'ArrowLeft') pageFlip.flipPrev();
  if(e.key === ' ') { e.preventDefault(); if(bgMusic.paused) bgMusic.play(); else bgMusic.pause(); }
});
