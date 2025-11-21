/* Pro FlipBook script.js */

/* =========================
   Data: বই ও অধ্যায়
   এখানে আপনার আপলোড করা chapter1, chapter2 এবং chapter3 এর কনটেন্ট যুক্ত করা হয়েছে।
   ========================= */
const books = [
  {
    id: 'budget-bd',
    title: "বাংলাদেশের বাজেট",
    chapters: [
      // অধ্যায় ১: বাংলাদেশের বাজেট
      {
        id: 'chap1',
        title: "বাংলাদেশের বাজেট ও কাঠামো",
        pages: [
          `<h1>বাংলাদেশের বাজেট</h1>
           <p>বাংলাদেশের সরকারি বাজেট হলো একটি বার্ষিক অর্থনৈতিক পরিকল্পনা যেখানে সরকার নির্ধারণ করে আগামী অর্থবছরে কীভাবে আয় ও ব্যয় পরিচালিত হবে। এটি দেশের অর্থনৈতিক নীতি নির্ধারণ, উন্নয়ন প্রকল্প বাস্তবায়ন, এবং সামাজিক কল্যাণমূলক কর্মসূচি পরিচালনার মূল ভিত্তি।</p>
           <h2>বাজেটের কাঠামো</h2>
           <p>বাংলাদেশের বাজেট সাধারণত দুটি প্রধান অংশে বিভক্ত — রাজস্ব বাজেট এবং উন্নয়ন বাজেট। রাজস্ব বাজেটে সরকারের নিয়মিত আয় ও ব্যয় অন্তর্ভুক্ত থাকে। উন্নয়ন বাজেটে থাকে অবকাঠামো, শিক্ষা, স্বাস্থ্য, কৃষি ও প্রযুক্তি খাতে নতুন বিনিয়োগ ও প্রকল্প ব্যয়।</p>`,
           
          `<h2>রাজস্ব আয়ের উৎস</h2>
           <ul>
             <li>আয়কর ও মূল্য সংযোজন কর (ভ্যাট)</li>
             <li>আমদানি-রপ্তানি শুল্ক</li>
             <li>অন্য সরকারি ফি ও চার্জ</li>
             <li>অভ্যন্তরীণ ও বৈদেশিক ঋণ</li>
           </ul>
           <h2>বাজেট ঘাটতি</h2>
           <p>যখন সরকারের ব্যয় তার আয়ের চেয়ে বেশি হয়, তখন বাজেট ঘাটতি তৈরি হয়। ঘাটতি পূরণের জন্য সরকার সাধারণত ব্যাংক ঋণ, বিদেশি সাহায্য, বা সঞ্চয়পত্র বিক্রির মাধ্যমে অর্থ সংগ্রহ করে। সঠিক আর্থিক ব্যবস্থাপনা ছাড়া এই ঘাটতি দীর্ঘমেয়াদে অর্থনৈতিক চাপ সৃষ্টি করতে পারে।</p>`
        ]
      },
      // অধ্যায় ২: অর্থনৈতিক উন্নয়ন
      {
        id: 'chap2',
        title: "বাংলাদেশের অর্থনৈতিক উন্নয়ন",
        pages: [
          `<h1>বাংলাদেশের অর্থনৈতিক উন্নয়ন</h1>
           <p>স্বাধীনতার পর থেকে বাংলাদেশ এক সময়ের স্বল্পোন্নত দেশ থেকে আজ একটি উন্নয়নশীল অর্থনীতিতে পরিণত হয়েছে। গত পাঁচ দশকে কৃষি, শিল্প, রপ্তানি, শিক্ষা ও স্বাস্থ্য খাতে অব্যাহত অগ্রগতির ফলেই এই উন্নয়ন সম্ভব হয়েছে।</p>
           <h2>অর্থনৈতিক প্রবৃদ্ধি</h2>
           <p>বাংলাদেশের জিডিপি প্রবৃদ্ধি গত এক দশকে গড়ে ৬%–এর বেশি ছিল, যা দক্ষিণ এশিয়ার মধ্যে অন্যতম উচ্চ। এই প্রবৃদ্ধির পেছনে রয়েছে শ্রমঘন শিল্প, বিশেষ করে তৈরি পোশাক (RMG) খাতের অসাধারণ সাফল্য।</p>`,

          `<h2>শিল্প ও রপ্তানি খাত</h2>
           <p>তৈরি পোশাক শিল্প বাংলাদেশের বৈদেশিক মুদ্রা আয়ের প্রধান উৎস। পাশাপাশি ওষুধ, চামড়া, আইটি সেবা, ও কৃষিপণ্য রপ্তানিতেও উল্লেখযোগ্য অগ্রগতি হয়েছে। বর্তমানে বাংলাদেশ ১৫০টিরও বেশি দেশে রপ্তানি করে থাকে।</p>
           <h2>কৃষি ও গ্রামীণ উন্নয়ন</h2>
           <p>কৃষিই বাংলাদেশের অর্থনীতির প্রাণ। ধান, পাট, চা ও সবজি উৎপাদনে বাংলাদেশ এখন আত্মনির্ভর। কৃষি-প্রযুক্তির প্রসার, সেচ সুবিধা, এবং ক্ষুদ্রঋণ কর্মসূচি গ্রামীণ জীবনমান উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখছে।</p>`,

          `<h2>মানবসম্পদ উন্নয়ন</h2>
           <p>শিক্ষা ও দক্ষতা উন্নয়নের মাধ্যমে কর্মসংস্থান বাড়ানো হচ্ছে। দেশের যুব সমাজ এখন বিদেশে কর্মরত হয়ে রেমিট্যান্স পাঠাচ্ছে, যা অর্থনীতিকে শক্তিশালী করছে।</p>
           <h2>অবকাঠামো উন্নয়ন</h2>
           <p>পদ্মা সেতু, মেট্রোরেল, বঙ্গবন্ধু টানেল, এবং এক্সপ্রেসওয়ের মতো বৃহৎ প্রকল্পগুলো বাংলাদেশের অর্থনৈতিক কর্মকাণ্ডে নতুন সম্ভাবনা তৈরি করেছে।</p>
           <blockquote>“অর্থনৈতিক উন্নয়ন শুধু অবকাঠামো নয়, মানুষের জীবনমানের উন্নয়নই প্রকৃত অগ্রগতি।” — বাংলা অর্থনীতি ব্লগ</blockquote>`
        ]
      },
      // অধ্যায় ৩: টেকসই উন্নয়ন
      {
        id: 'chap3',
        title: "টেকসই উন্নয়ন ও ভবিষ্যৎ",
        pages: [
          `<h1>টেকসই উন্নয়ন ও ভবিষ্যৎ অর্থনীতি</h1>
           <p>বাংলাদেশের অর্থনীতি দ্রুত পরিবর্তিত হচ্ছে। বর্তমান সময়ে শুধু GDP বৃদ্ধি নয়, বরং পরিবেশ, সামাজিক অন্তর্ভুক্তি, এবং মানবসম্পদ উন্নয়নের দিকে নজর দেওয়া হচ্ছে। এটিই টেকসই উন্নয়নের মূলনীতি।</p>
           <h2>সবুজ অর্থনীতি</h2>
           <p>বাংলাদেশ সবুজ অর্থনীতি ও পুনর্নবীকরণযোগ্য শক্তির দিকে মনোযোগ দিচ্ছে। সোলার এনার্জি, বায়োগ্যাস, এবং পরিবেশবান্ধব কৃষি পদ্ধতির মাধ্যমে ভবিষ্যতের অর্থনীতি আরও টেকসই হবে।</p>`,

          `<h2>প্রযুক্তি ও ডিজিটাল অর্থনীতি</h2>
           <p>ডিজিটাল বাংলাদেশ প্রোগ্রামের মাধ্যমে প্রযুক্তি ও আইটি খাতে বিনিয়োগ বাড়ছে। স্মার্ট ব্যাংকিং, অনলাইন বাণিজ্য, এবং ই-গভর্নেন্স দেশকে আরও দক্ষ, স্বচ্ছ এবং অন্তর্ভুক্তিমূলক করছে।</p>
           <h2>ভবিষ্যৎ লক্ষ্য</h2>
           <ul>
             <li>সবুজ অর্থনীতি ও পুনর্নবীকরণযোগ্য শক্তি ব্যবহার বৃদ্ধি</li>
             <li>ডিজিটাল ও তথ্য প্রযুক্তি খাতে দক্ষতা বৃদ্ধি</li>
             <li>স্বচ্ছ ও দারিদ্র্যহীন সমাজ গঠন</li>
           </ul>
           <hr>
           <p style="text-align:center; font-style:italic;">সমাপ্ত</p>`
        ]
      }
    ]
  }
];

/* ========================= PageFlip init ========================= */
const container = document.getElementById('flipbook');
const pageFlip = new window.PageFlip(container, {
  width: 550, // সাইজ একটু এডজাস্ট করা হয়েছে যেন মোবাইলে ভালো দেখায়
  height: 733,
  size: "stretch",
  minWidth: 320,
  maxWidth: 1000,
  minHeight: 400,
  maxHeight: 1400,
  maxShadowOpacity: 0.2,
  showCover: true,
  usePortrait: false
});

/* State vars */
let currentBook = null;
let flatPages = [];

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
if (bookSelect) {
    books.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.id;
        opt.textContent = b.title;
        bookSelect.appendChild(opt);
    });
}

/* loadBook: flatten chapters -> pages and feed PageFlip */
function loadBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    currentBook = book;
    flatPages = [];

    // Cover Page
    flatPages.push(`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;text-align:center;">
        <div>
          <h1 style="font-size:32px; color: #2c3e50;">${escapeHtml(book.title)}</h1>
          <p style="color:#666;margin-top:8px;font-size:18px;">বাংলা অর্থনীতি ব্লগ</p>
          <p style="margin-top:20px; font-size:40px;">📖</p>
        </div>
      </div>
    `);

    book.chapters.forEach((ch) => {
        // Chapter Title Page (optional, looks nice in books)
        flatPages.push(`
            <div style="padding:28px; display:flex; align-items:center; justify-content:center; height:100%; text-align:center;">
                <h2 style="border-bottom: 2px solid #d8b899; padding-bottom: 10px;">${escapeHtml(ch.title)}</h2>
            </div>
        `);
        
        // Actual content pages
        ch.pages.forEach((pg) => {
            flatPages.push(`<div class="page-content">${pg}</div>`);
        });
    });

    // create DOM elements for pageFlip
    const elements = flatPages.map(html => {
        const wrapper = document.createElement('div');
        wrapper.className = 'pf-page';
        wrapper.innerHTML = `<div>${html}</div>`;
        return wrapper;
    });

    pageFlip.loadFromHTML(elements);
    updateIndicator();
}

/* Navigation */
if(prevBtn) prevBtn.addEventListener('click', () => pageFlip.flipPrev());
if(nextBtn) nextBtn.addEventListener('click', () => pageFlip.flipNext());

pageFlip.on('flip', () => {
    updateIndicator();
    if (autoScrollEnabled) startAutoScrollCurrentPage();
});

/* Indicator */
function updateIndicator() {
    try {
        const current = pageFlip.getCurrentPageIndex();
        const total = pageFlip.getPageCount();
        if(pageIndicator) pageIndicator.textContent = `পৃষ্ঠা ${current + 1} / ${total}`;
    } catch (e) {
        if(pageIndicator) pageIndicator.textContent = '—';
    }
}

/* ================= Auto scroll & auto page-turn ================= */
let autoScrollEnabled = false;
let autoTurnEnabled = false;
let autoTurnTimer = null;
let autoScrollTimer = null;

if(autoTurnInterval) autoTurnInterval.addEventListener('input', () => autoTurnVal.textContent = autoTurnInterval.value);
if(autoScrollToggle) autoScrollToggle.addEventListener('change', () => {
    autoScrollEnabled = autoScrollToggle.checked;
    if (autoScrollEnabled) startAutoScrollCurrentPage(); else stopAutoScroll();
});
if(autoTurnToggle) autoTurnToggle.addEventListener('change', () => {
    autoTurnEnabled = autoTurnToggle.checked;
    if (autoTurnEnabled) startAutoTurnLoop(); else stopAutoTurnLoop();
});

function startAutoTurnLoop() {
    stopAutoTurnLoop();
    autoTurnTimer = setInterval(() => {
        if (pageFlip.getCurrentPageIndex() < pageFlip.getPageCount() - 1) pageFlip.flipNext();
        else pageFlip.flip(0);
    }, parseInt(autoTurnInterval.value, 10) * 1000);
}
function stopAutoTurnLoop() { if (autoTurnTimer) { clearInterval(autoTurnTimer); autoTurnTimer = null; } }

function startAutoScrollCurrentPage() {
    stopAutoScroll();
    if (!autoScrollEnabled) return;
    const pageEl = pageFlip.getPageElement(pageFlip.getCurrentPageIndex());
    if (!pageEl) return;
    const content = pageEl.querySelector('div');
    if (!content) return;
    content.scrollTop = 0;
    const duration = parseInt(autoTurnInterval.value, 10) * 1000;
    const stepMs = 50;
    const totalSteps = Math.max(1, Math.floor(duration / stepMs));
    let step = 0;
    autoScrollTimer = setInterval(() => {
        step++;
        content.scrollTop = (content.scrollHeight - content.clientHeight) * (step / totalSteps);
        if (step >= totalSteps) { clearInterval(autoScrollTimer); autoScrollTimer = null; if (autoTurnEnabled) pageFlip.flipNext(); }
    }, stepMs);
}
function stopAutoScroll() { if (autoScrollTimer) { clearInterval(autoScrollTimer); autoScrollTimer = null; } }

/* ================= TTS (Web Speech API) ================= */
const synth = window.speechSynthesis;
let voices = [];
let ttsUtter = null;

function populateVoices() {
    voices = synth.getVoices();
    if(voiceSelect) {
        voiceSelect.innerHTML = '';
        voices.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.name; opt.textContent = `${v.name} — ${v.lang}`;
            voiceSelect.appendChild(opt);
        });
        const bn = voices.find(v => v.lang && v.lang.startsWith('bn'));
        if (bn) voiceSelect.value = bn.name;
    }
}
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = populateVoices;

if(ttsPlay) ttsPlay.addEventListener('click', () => {
    if (!currentBook) { alert('প্রথমে একটি বই লোড করুন।'); return; }
    const pageEl = pageFlip.getPageElement(pageFlip.getCurrentPageIndex());
    if (!pageEl) return;
    const text = pageEl.innerText || pageEl.textContent || '';
    if (!text.trim()) return;
    if (synth.speaking) synth.cancel();
    ttsUtter = new SpeechSynthesisUtterance(text);
    const sel = voices.find(v => v.name === voiceSelect.value);
    if (sel) ttsUtter.voice = sel;
    ttsUtter.lang = sel ? sel.lang : 'bn-BD';
    ttsUtter.rate = 0.95;
    ttsUtter.pitch = 1;
    synth.speak(ttsUtter);
});

if(ttsPause) ttsPause.addEventListener('click', () => {
    if (synth.speaking && !synth.paused) synth.pause();
    else if (synth.paused) synth.resume();
});

/* ================= Background music ================= */
if(bgMusic && musicVol) {
    bgMusic.volume = parseFloat(musicVol.value);
    if(musicPlay) musicPlay.addEventListener('click', () => bgMusic.play().catch(() => { }));
    if(musicPause) musicPause.addEventListener('click', () => bgMusic.pause());
    musicVol.addEventListener('input', () => bgMusic.volume = parseFloat(musicVol.value));
}

/* ================= Dark mode ================= */
if(darkToggle) darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
});

/* ================= Export PDF (simple print) ================= */
if(downloadBtn) downloadBtn.addEventListener('click', () => {
    const popup = window.open('', '_blank');
    popup.document.write('<html><head><title>Export PDF</title>');
    popup.document.write('<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;600&display=swap" rel="stylesheet">');
    popup.document.write('<style>body{font-family:"Noto Serif Bengali", serif;padding:30px} .page{page-break-after:always;margin-bottom:20px}</style>');
    popup.document.write('</head><body>');
    for (let i = 0; i < pageFlip.getPageCount(); i++) {
        const pg = pageFlip.getPageElement(i);
        popup.document.write('<div class="page">' + (pg ? pg.innerHTML : '') + '</div>');
    }
    popup.document.write('</body></html>');
    popup.document.close();
    setTimeout(() => popup.print(), 700);
});

/* ================= Utilities ================= */
function escapeHtml(s) { return s; }

/* Load state & init */
if(loadBookBtn) document.getElementById('loadBookBtn').addEventListener('click', () => loadBook(bookSelect.value));
if (books.length) { 
    if(bookSelect) bookSelect.value = books[0].id; 
    loadBook(books[0].id); 
}

/* keyboard shortcuts */
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') pageFlip.flipNext();
    if (e.key === 'ArrowLeft') pageFlip.flipPrev();
    if (e.key === ' ' && bgMusic) { e.preventDefault(); if (bgMusic.paused) bgMusic.play(); else bgMusic.pause(); }
});
