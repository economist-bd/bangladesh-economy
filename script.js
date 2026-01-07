document.addEventListener('DOMContentLoaded', function() {
    
    /* =========================
       ১. লাইব্রেরি ও ডাটা (৩টি বই)
       ========================= */
    const books = [
      {
  title: "বাজেট পরিচিতি",
  pages: [
    `<h1>বাংলাদেশের বাজেট: উন্নয়ন ও অর্থনীতির রূপরেখা</h1>
    <h2>ভূমিকা</h2>
    <p>বাজেট হলো একটি দেশের অর্থনীতির প্রাণ। সাধারণ অর্থে, একটি নির্দিষ্ট অর্থবছরের জন্য সরকারের সম্ভাব্য আয় ও ব্যয়ের হিসাবকেই বাজেট বলা হয়। বাংলাদেশে অর্থবছর গণনা করা হয় ১লা জুলাই থেকে পরবর্তী বছরের ৩০শে জুন পর্যন্ত। তবে বাজেট কেবল আয়-ব্যয়ের নিছক কোনো খতিয়ান বা হিসাব নয়; বরং এটি একটি দেশের আর্থ-সামাজিক উন্নয়নের মূল রূপরেখা। একটি সুষম বাজেট সরকারের নীতি, পরিকল্পনা এবং অগ্রাধিকারের প্রতিফলন ঘটায়, যা দেশের জিডিপি প্রবৃদ্ধি এবং সাধারণ মানুষের জীবনমান উন্নয়নে প্রত্যক্ষ ভূমিকা রাখে।</p>`,

    `<h2>বাজেটের মূল খাতসমূহ</h2>
    <p>বাংলাদেশের বাজেটে সরকারের উন্নয়ন ভাবনার প্রতিফলন ঘটে বিভিন্ন খাতে অর্থ বরাদ্দের মাধ্যমে। জনকল্যাণ ও টেকসই উন্নয়নের লক্ষ্যে সরকার বেশ কিছু খাতকে সর্বোচ্চ অগ্রাধিকার দিয়ে থাকে। এর মধ্যে উল্লেখযোগ্য হলো:</p>
    <ul>
      <li><strong>শিক্ষা ও প্রযুক্তি:</strong> ‘স্মার্ট বাংলাদেশ’ গড়ার লক্ষ্যে শিক্ষা ও প্রযুক্তি খাতে প্রতি বছরই বরাদ্দ বৃদ্ধি করা হচ্ছে। দক্ষ মানবসম্পদ তৈরি ও কারিগরি শিক্ষার প্রসারে সরকার বিপুল অর্থ ব্যয় করে।</li>
      <li><strong>স্বাস্থ্যসেবা:</strong> সুস্থ জাতি গঠনে স্বাস্থ্যখাতের গুরুত্ব অপরিসীম। সরকারি হাসপাতালগুলোর আধুনিকায়ন ও গ্রামীণ স্বাস্থ্যসেবা নিশ্চিতে বিশেষ বরাদ্দ রাখা হয়।</li>
      <li><strong>কৃষি ও গ্রামীণ উন্নয়ন:</strong> খাদ্যে স্বয়ংসম্পূর্ণতা অর্জন ও খাদ্যনিরাপত্তা নিশ্চিত করতে কৃষিখাতে ভর্তুকি ও প্রণোদনা দেওয়া হয়।</li>
    </ul>`,

    `<h2>রাজস্ব আয়: বাজেটের জোগান</h2>
    <p>সরকারের ব্যয়ের জন্য অর্থের প্রয়োজন, আর এই অর্থের প্রধান উৎস হলো রাজস্ব আয়। বাংলাদেশে রাজস্ব আয়ের সিংহভাগই আসে জাতীয় রাজস্ব বোর্ড (NBR) নিয়ন্ত্রিত কর খাত থেকে। এর মধ্যে সবচেয়ে বড় উৎস হলো মূল্য সংযোজন কর (ভ্যাট) এবং আয়কর।</p>
    <p>এছাড়াও আমদানি শুল্ক ও সম্পূরক শুল্ক থেকেও সরকার আয় করে। সরকার চেষ্টা করছে করের আওতা (Tax Net) বৃদ্ধি করতে, যাতে অভ্যন্তরীণ উৎস থেকেই উন্নয়নের ব্যয় মেটানো সম্ভব হয় এবং পরনির্ভরশীলতা কমে আসে।</p>`,

    `<h2>বাজেট ঘাটতি ও উন্নয়ন</h2>
    <p>বাংলাদেশের মতো উন্নয়নশীল দেশে প্রায়ই দেখা যায় সরকারের আয়ের চেয়ে ব্যয়ের পরিমাণ বেশি। অর্থনীতির ভাষায় একে ‘ঘাটতি বাজেট’ বলে। সরকার বিশাল অবকাঠামো উন্নয়ন (যেমন—পদ্মা সেতু, মেট্রোরেল) এবং সামাজিক নিরাপত্তা কর্মসূচির জন্য এই ঘাটতি বাজেট প্রণয়ন করে।</p>
    <p>এই ঘাটতি পূরণের জন্য সরকার অভ্যন্তরীণ উৎস (ব্যাংক ঋণ) এবং বৈদেশিক ঋণ বা অনুদান গ্রহণ করে। ঘাটতি জিডিপি-র ৫ শতাংশের মধ্যে থাকলে তা অর্থনীতির জন্য সহনীয় ধরা হয়।</p>`,

    `<h2>উপসংহার</h2>
    <p>বাজেট হলো রাষ্ট্রের আশা-আকাঙ্ক্ষার দলিল। এটি শুধুমাত্র সংখ্যার খেলা নয়, বরং প্রতিটি নাগরিকের ভাগ্য উন্নয়নের চাবিকাঠি। সঠিক পরিকল্পনা, রাজস্ব আয়ের সুষ্ঠু ব্যবস্থাপনা এবং দুর্নীতিরোধ করে বাজেটের সঠিক বাস্তবায়ন করা গেলে বাংলাদেশ অচিরেই একটি উন্নত ও সমৃদ্ধ রাষ্ট্রে পরিণত হবে।</p>`
  ]
},
          {
            title: "অর্থনৈতিক সমীক্ষা",
            pages: [
              `<h1>জিডিপি প্রবৃদ্ধি</h1><p>চলতি অর্থবছরে বাংলাদেশের জিডিপি প্রবৃদ্ধি লক্ষ্যমাত্রা অর্জনে রপ্তানি ও রেমিট্যান্স বড় ভূমিকা রাখছে।</p>`,
              `<h2>মুদ্রাস্ফীতি</h2><p>বৈশ্বিক কারণে মুদ্রাস্ফীতি বাড়লেও সরকার বিভিন্ন ভর্তুকি ও নীতি সহায়তার মাধ্যমে তা নিয়ন্ত্রণে রাখার চেষ্টা করছে।</p>`
            ]
          }
        ]
      },
      {
        id: 'macro-eco',
        title: "সামষ্টিক অর্থনীতি (Macroeconomics)",
        chapters: [
          {
            title: "ভূমিকা",
            pages: [
              `<h1>সামষ্টিক অর্থনীতি কী?</h1><p>অর্থনীতির যে শাখায় সামগ্রিক অর্থনীতি নিয়ে আলোচনা করা হয়, তাকে সামষ্টিক অর্থনীতি বলে। যেমন: জাতীয় আয়, মোট ভোগ, মোট সঞ্চয়।</p>`,
              `<h2>ব্যষ্টিক বনাম সামষ্টিক</h2><p>ব্যষ্টিক অর্থনীতি আলোচনা করে ব্যক্তি বা প্রতিষ্ঠানের সিদ্ধান্ত নিয়ে। আর সামষ্টিক অর্থনীতি আলোচনা করে পুরো দেশের অর্থনৈতিক অবস্থা নিয়ে।</p>`
            ]
          },
          {
            title: "জাতীয় আয়",
            pages: [
              `<h1>জাতীয় আয় পরিমাপ</h1><p>জিডিপি (GDP), জিএনপি (GNP) এবং এনএনপি (NNP) হলো জাতীয় আয় পরিমাপের প্রধান সূচক।</p>`,
              `<h2>চক্রাকার প্রবাহ</h2><p>অর্থনীতিতে আয় ও ব্যয়ের একটি চক্রাকার প্রবাহ থাকে যা পরিবার এবং উৎপাদনকারী প্রতিষ্ঠানের মধ্যে আবর্তিত হয়।</p>`
            ]
          }
        ]
      },
      {
        id: 'history-bank',
        title: "বাংলাদেশের ব্যাংকিং ইতিহাস",
        chapters: [
          {
            title: "প্রাচীন যুগ",
            pages: [
              `<h1>সূচনা</h1><p>বাংলাদেশে আধুনিক ব্যাংকিং ব্যবস্থা গড়ে ওঠার আগে মহাজন ও শেঠরা অর্থের লেনদেন করতেন। মোগল আমলেও হুন্ডি প্রথা চালু ছিল।</p>`,
              `<h2>ব্রিটিশ আমল</h2><p>ব্রিটিশ শাসনামলে ১৮৬০ সালের দিকে প্রথম আধুনিক ব্যাংকের ধারণা এই অঞ্চলে আসে। স্টেট ব্যাংক অফ পাকিস্তান পরে গুরুত্বপূর্ণ ভূমিকা রাখে।</p>`
            ]
          },
          {
            title: "স্বাধীনতার পরবর্তী সময়",
            pages: [
              `<h1>বাংলাদেশ ব্যাংক গঠন</h1><p>১৯৭১ সালে দেশ স্বাধীন হওয়ার পর 'বাংলাদেশ ব্যাংক' কেন্দ্রীয় ব্যাংক হিসেবে প্রতিষ্ঠিত হয়।</p>`,
              `<h2>বেসরকারি ব্যাংক</h2><p>আশির দশকের দিকে বাংলাদেশে বেসরকারি ব্যাংকিং খাতের যাত্রা শুরু হয়, যা অর্থনীতিতে গতি আনে।</p>`
            ]
          }
        ]
      }
    ];

    /* =========================
       ২. PageFlip সেটআপ (মোবাইল ফ্রেন্ডলি)
       ========================= */
    const container = document.getElementById('flipbook');
    const isMobile = window.innerWidth < 768; // মোবাইল ডিটেকশন

    // লাইব্রেরি চেক
    let PageFlipClass;
    if (window.St && window.St.PageFlip) PageFlipClass = window.St.PageFlip;
    else if (window.PageFlip) PageFlipClass = window.PageFlip;
    else return;

    const pageFlip = new PageFlipClass(container, {
        width: isMobile ? 350 : 550, // মোবাইলে ছোট সাইজ
        height: isMobile ? 600 : 733,
        size: "stretch",
        // মোবাইলে এক পাতা (Portrait), পিসিতে দুই পাতা
        usePortrait: isMobile ? true : false, 
        showCover: true,
        maxShadowOpacity: 0.3
    });

    /* =========================
       ৩. লজিক ও ফাংশন
       ========================= */
    let currentBook = null;
    const pageIndicator = document.getElementById('pageIndicator');
    const currentBookTitle = document.getElementById('currentBookTitle');

    function loadBook(bookId) {
        const book = books.find(b => b.id === bookId);
        if (!book) return;
        currentBook = book;
        currentBookTitle.textContent = book.title;

        let flatPages = [];

        // কভার পেজ
        flatPages.push(`
            <div class="page-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#fdf6e3;">
                <h1 style="font-size:${isMobile ? '24px':'32px'};color:#2c3e50;">${book.title}</h1>
                <p style="color:#666;">বাংলা ই-লাইব্রেরি</p>
                <div style="font-size:50px; margin-top:20px;">📚</div>
            </div>
        `);

        book.chapters.forEach(ch => {
            flatPages.push(`
                <div class="page-content" style="display:flex;align-items:center;justify-content:center;text-align:center;">
                    <h2 style="color:#d8b899;border-bottom:2px solid #d8b899;">${ch.title}</h2>
                </div>
            `);
            ch.pages.forEach(pg => {
                flatPages.push(`<div class="page-content">${pg}</div>`);
            });
        });

        const elements = flatPages.map(html => {
            const div = document.createElement('div');
            div.className = 'pf-page';
            div.innerHTML = html;
            return div;
        });

        pageFlip.loadFromHTML(elements);
        
        // সাইডবার বন্ধ করা (মোবাইলের জন্য)
        closeSidebar();
    }

    function updateIndicator() {
        try {
            pageIndicator.textContent = `${pageFlip.getCurrentPageIndex() + 1} / ${pageFlip.getPageCount()}`;
        } catch(e) {}
    }

    /* =========================
       ৪. সাইডবার ও মেনু কন্ট্রোল
       ========================= */
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    document.getElementById('menuToggleBtn').addEventListener('click', openSidebar);
    document.getElementById('closeMenuBtn').addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    /* =========================
       ৫. অন্যান্য ফিচার (অটো স্ক্রল, ভয়েস ইত্যাদি)
       ========================= */
    
    // বই লিস্ট পপুলেট করা
    const bookSelect = document.getElementById('bookSelect');
    books.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.id; opt.textContent = b.title;
        bookSelect.appendChild(opt);
    });
    document.getElementById('loadBookBtn').addEventListener('click', () => loadBook(bookSelect.value));

    // নেভিগেশন
    document.getElementById('prevBtn').addEventListener('click', () => pageFlip.flipPrev());
    document.getElementById('nextBtn').addEventListener('click', () => pageFlip.flipNext());
    pageFlip.on('flip', () => {
        updateIndicator();
        if(autoScrollEnabled) startAutoScroll();
    });

    // অটো স্ক্রল
    let autoScrollEnabled = false;
    let scrollTimer = null;
    document.getElementById('autoScrollToggle').addEventListener('change', (e) => {
        autoScrollEnabled = e.target.checked;
        if(autoScrollEnabled) startAutoScroll(); else clearInterval(scrollTimer);
    });

    function startAutoScroll() {
        clearInterval(scrollTimer);
        const pageEl = pageFlip.getPageElement(pageFlip.getCurrentPageIndex());
        if(!pageEl) return;
        const content = pageEl.querySelector('.page-content');
        if(!content) return;
        
        content.scrollTop = 0;
        let step = 0;
        scrollTimer = setInterval(() => {
            content.scrollTop += 1;
            step++;
            if(content.scrollTop + content.clientHeight >= content.scrollHeight) {
                clearInterval(scrollTimer);
                // অটো টার্ন চালু থাকলে পরের পেজে যাবে
                if(document.getElementById('autoTurnToggle').checked) {
                    setTimeout(() => pageFlip.flipNext(), 2000);
                }
            }
        }, 50);
    }

    // ডার্ক মোড
    document.getElementById('darkToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // ভয়েস (TTS)
    const synth = window.speechSynthesis;
    document.getElementById('ttsPlay').addEventListener('click', () => {
        const pageEl = pageFlip.getPageElement(pageFlip.getCurrentPageIndex());
        const text = pageEl ? pageEl.innerText : '';
        if(text) {
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'bn-BD';
            synth.speak(utter);
        }
    });
    document.getElementById('ttsPause').addEventListener('click', () => synth.cancel());

    /* =========================
       ৬. শুরু করা
       ========================= */
    loadBook(books[0].id);
    
    // উইন্ডো রিসাইজ হ্যান্ডেল
    window.addEventListener('resize', () => {
        // পেজ রিফ্রেশ করলে ভালো হয় রেস্পন্সিভনেসের জন্য
        // location.reload(); // অপশনাল
    });
});
