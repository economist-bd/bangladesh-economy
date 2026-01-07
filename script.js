document.addEventListener('DOMContentLoaded', function() {
    
    /* =========================
       ১. লাইব্রেরি ও ডাটা
       ========================= */
    const books = [
      {
        id: 'budget-intro', // ১. এখানে ID যোগ করা হয়েছে
        title: "বাজেট পরিচিতি",
        chapters: [         // ২. Pages গুলোকে chapters এর ভেতরে ঢুকানো হয়েছে
          {
            title: "বাজেট বিস্তারিত",
            pages: [
              `<h1>বাংলাদেশের বাজেট: উন্নয়ন ও অর্থনীতির রূপরেখা</h1>
              <h2>ভূমিকা</h2>
              <p>বাজেট হলো একটি দেশের অর্থনীতির প্রাণ। সাধারণ অর্থে, একটি নির্দিষ্ট অর্থবছরের জন্য সরকারের সম্ভাব্য আয় ও ব্যয়ের হিসাবকেই বাজেট বলা হয়। বাংলাদেশে অর্থবছর গণনা করা হয় ১লা জুলাই থেকে পরবর্তী বছরের ৩০শে জুন পর্যন্ত। তবে বাজেট কেবল আয়-ব্যয়ের নিছক কোনো খতিয়ান বা হিসাব নয়; বরং এটি একটি দেশের আর্থ-সামাজিক উন্নয়নের মূল রূপরেখা।</p>`,

              `<h2>বাজেটের মূল খাতসমূহ</h2>
              <p>বাংলাদেশের বাজেটে সরকারের উন্নয়ন ভাবনার প্রতিফলন ঘটে বিভিন্ন খাতে অর্থ বরাদ্দের মাধ্যমে। জনকল্যাণ ও টেকসই উন্নয়নের লক্ষ্যে সরকার বেশ কিছু খাতকে সর্বোচ্চ অগ্রাধিকার দিয়ে থাকে। এর মধ্যে উল্লেখযোগ্য হলো:</p>
              <ul>
                <li><strong>শিক্ষা ও প্রযুক্তি:</strong> ‘স্মার্ট বাংলাদেশ’ গড়ার লক্ষ্যে শিক্ষা ও প্রযুক্তি খাতে প্রতি বছরই বরাদ্দ বৃদ্ধি করা হচ্ছে।</li>
                <li><strong>স্বাস্থ্যসেবা:</strong> সুস্থ জাতি গঠনে স্বাস্থ্যখাতের গুরুত্ব অপরিসীম।</li>
                <li><strong>কৃষি ও গ্রামীণ উন্নয়ন:</strong> খাদ্যে স্বয়ংসম্পূর্ণতা অর্জন ও খাদ্যনিরাপত্তা নিশ্চিত করতে কৃষিখাতে ভর্তুকি ও প্রণোদনা দেওয়া হয়।</li>
              </ul>`,

              `<h2>রাজস্ব আয়: বাজেটের জোগান</h2>
              <p>সরকারের ব্যয়ের জন্য অর্থের প্রয়োজন, আর এই অর্থের প্রধান উৎস হলো রাজস্ব আয়। বাংলাদেশে রাজস্ব আয়ের সিংহভাগই আসে জাতীয় রাজস্ব বোর্ড (NBR) নিয়ন্ত্রিত কর খাত থেকে। এর মধ্যে সবচেয়ে বড় উৎস হলো মূল্য সংযোজন কর (ভ্যাট) এবং আয়কর।</p>
              <p>এছাড়াও আমদানি শুল্ক ও সম্পূরক শুল্ক থেকেও সরকার আয় করে। সরকার চেষ্টা করছে করের আওতা (Tax Net) বৃদ্ধি করতে।</p>`,

              `<h2>বাজেট ঘাটতি ও উন্নয়ন</h2>
              <p>বাংলাদেশের মতো উন্নয়নশীল দেশে প্রায়ই দেখা যায় সরকারের আয়ের চেয়ে ব্যয়ের পরিমাণ বেশি। অর্থনীতির ভাষায় একে ‘ঘাটতি বাজেট’ বলে। সরকার বিশাল অবকাঠামো উন্নয়ন (যেমন—পদ্মা সেতু, মেট্রোরেল) এবং সামাজিক নিরাপত্তা কর্মসূচির জন্য এই ঘাটতি বাজেট প্রণয়ন করে।</p>`,

              `<h2>উপসংহার</h2>
              <p>বাজেট হলো রাষ্ট্রের আশা-আকাঙ্ক্ষার দলিল। এটি শুধুমাত্র সংখ্যার খেলা নয়, বরং প্রতিটি নাগরিকের ভাগ্য উন্নয়নের চাবিকাঠি। সঠিক পরিকল্পনা, রাজস্ব আয়ের সুষ্ঠু ব্যবস্থাপনা এবং দুর্নীতিরোধ করে বাজেটের সঠিক বাস্তবায়ন করা গেলে বাংলাদেশ অচিরেই একটি উন্নত ও সমৃদ্ধ রাষ্ট্রে পরিণত হবে।</p>`
            ]
          },
          {
             title: "অর্থনৈতিক সমীক্ষা", // দ্বিতীয় অংশটিকে আরেকটি চ্যাপ্টার বানানো হয়েছে
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
            title: "সামষ্টিক অর্থনীতির পরিচয়",
            pages: [
              `<h1>সামষ্টিক অর্থনীতি কী?</h1>
              <p>অর্থনীতিকে প্রধানত দুই ভাগে ভাগ করা হয়: ব্যষ্টিক (Micro) এবং সামষ্টিক (Macro)। গ্রিক শব্দ 'Macro' যার অর্থ 'বিশাল' বা 'সমগ্র'। অর্থনীতির যে শাখায় কোনো ব্যক্তি বা প্রতিষ্ঠানের আলোচনা না করে সামগ্রিক অর্থনীতি বা জাতীয় পর্যায়ের অর্থনৈতিক সমস্যা ও সম্ভাবনা নিয়ে আলোচনা করা হয়, তাকে সামষ্টিক অর্থনীতি বলে।</p>
              <p><strong>উদাহরন:</strong> একজন ব্যক্তির আয় নিয়ে আলোচনা হলো ব্যষ্টিক অর্থনীতি, কিন্তু পুরো দেশের জাতীয় আয় নিয়ে আলোচনা হলো সামষ্টিক অর্থনীতি। ১৯৩৬ সালে বিখ্যাত অর্থনীতিবিদ জন মেইনার্ড কেইনস (J.M. Keynes) তাঁর বিখ্যাত গ্রন্থে এই শাখার গুরুত্ব তুলে ধরেন, তাই তাঁকে সামষ্টিক অর্থনীতির জনক বলা হয়।</p>`,

              `<h1>আলোচ্য বিষয় ও গুরুত্ব</h1>
              <p>সামষ্টিক অর্থনীতির পরিধি অত্যন্ত ব্যাপক। একটি দেশের অর্থনীতির চাকা সচল কি না, তা বুঝতে এই শাখাটি অপরিহার্য। এর প্রধান আলোচ্য বিষয়গুলো হলো:</p>
              <ul>
                  <li><strong>জাতীয় আয় ও নিয়োগ:</strong> দেশের মোট উৎপাদন এবং বেকারত্ব সমস্যা সমাধান।</li>
                  <li><strong>মুদ্রাস্ফীতি (Inflation):</strong> দ্রব্যমূল্যের ঊর্ধ্বগতি ও টাকার মান কমে যাওয়া নিয়ন্ত্রণ।</li>
                  <li><strong>বিনিয়োগ ও সঞ্চয়:</strong> জাতীয় পর্যায়ে মানুষ কতটুকু সঞ্চয় করছে এবং ব্যবসায়ীরা কতটা বিনিয়োগ করছে।</li>
                  <li><strong>মুদ্রা ও ব্যাংক ব্যবস্থা:</strong> কেন্দ্রীয় ব্যাংকের ভূমিকা ও সুদের হার নির্ধারণ।</li>
              </ul>`
            ]
          },
          {
            title: "জাতীয় আয় পরিমাপ",
            pages: [
              `<h1>জাতীয় আয়ের ধারণা</h1>
              <p>জাতীয় আয় হলো একটি নির্দিষ্ট সময়ে (সাধারণত এক বছরে) কোনো দেশের ভৌগোলিক সীমানার মধ্যে বা নাগরিকদের দ্বারা উৎপাদিত চূড়ান্ত দ্রব্য ও সেবার মোট আর্থিক মূল্য। এটি একটি দেশের অর্থনৈতিক স্বাস্থ্যের ব্যারোমিটার।</p>
              <h2>প্রধান তিনটি সূচক:</h2>
              <ul>
                  <li><strong>জিডিপি (GDP):</strong> দেশের সীমানার ভেতর উৎপাদিত পণ্যের মূল্য (বিদেশিরা উৎপাদন করলেও যুক্ত হবে)।</li>
                  <li><strong>জিএনপি (GNP):</strong> দেশের নাগরিকদের উৎপাদিত পণ্যের মূল্য (বিদেশে থাকলেও যুক্ত হবে)।</li>
                  <li><strong>এনএনপি (NNP):</strong> জিএনপি থেকে মূলধনের ক্ষয়ক্ষতি বা অবচয় বাদ দিলে যা থাকে।</li>
              </ul>`,
              
              `<h1>আয় ও ব্যয়ের প্রবাহ</h1>
              <p>অর্থনীতিতে আয় কখনোই একজায়গাতে স্থির থাকে না। এটি চক্রাকারে ঘোরে। একে বলা হয় 'জাতীয় আয়ের চক্রাকার প্রবাহ' (Circular Flow of Income)।</p>
              <p>সহজ কথায়, পরিবারের সদস্যরা শ্রম বা জমি প্রদান করে উৎপাদনকারী প্রতিষ্ঠানের কাছে। বিনিময়ে তারা মজুরি বা খাজনা পায়। আবার সেই টাকা দিয়েই তারা প্রতিষ্ঠানের তৈরি পণ্য বা সেবা ক্রয় করে। অর্থাৎ, এক দলের ব্যয় অন্য দলের আয়ে পরিণত হয়। এই প্রবাহ সচল থাকলেই দেশের অর্থনীতি চাঙ্গা থাকে। প্রবাহ বাধাগ্রস্ত হলে মহামন্দা দেখা দিতে পারে।</p>`
            ]
          }
        ]
      },
      {
        id: 'history-bank',
        title: "বাংলাদেশের ব্যাংকিং ইতিহাস",
        chapters: [
          {
            title: "প্রাচীন ও ব্রিটিশ আমল",
            pages: [
              `<h1>প্রাচীন যুগের লেনদেন</h1>
              <p>বাংলাদেশে আধুনিক ব্যাংকিং ব্যবস্থা একদিনে গড়ে ওঠেনি। প্রাচীনকালে যখন মুদ্রার প্রচলন ছিল না, তখন দ্রব্য-বিনিময় প্রথা (Barter System) চালু ছিল। পরবর্তীতে কড়ি ও ধাতব মুদ্রার ব্যবহার শুরু হয়।</p>
              <p>মধ্যযুগ ও মোগল আমলে এই অঞ্চলে 'মহাজন', 'শেঠ' এবং 'পোদ্দার' শ্রেণীর ব্যবসায়ীরা ব্যাংকারের ভূমিকা পালন করতেন। তারা হুন্ডির মাধ্যমে এক স্থান থেকে অন্য স্থানে অর্থ আদান-প্রদান করতেন এবং সুদের বিনিময়ে ঋণ দিতেন। যা ছিল অত্যন্ত চড়া সুদের কারবার।</p>`,

              `<h1>ব্রিটিশ ও পাকিস্তান আমল</h1>
              <p>উপমহাদেশে আধুনিক ব্যাংকিংয়ের সূচনা হয় ব্রিটিশ শাসনামলে। ১৭৭০ সালে 'ব্যাংক অফ হিন্দুস্তান' প্রতিষ্ঠিত হয়। এরপর ১৯০৬ সালে দেশীয় উদ্যোক্তাদের চেষ্টায় বেশ কিছু বাণিজ্যিক ব্যাংক গড়ে ওঠে।</p>
              <p>১৯৪৭ সালে পাকিস্তান রাষ্ট্র সৃষ্টির পর ১৯৪৮ সালে 'স্টেট ব্যাংক অফ পাকিস্তান' কেন্দ্রীয় ব্যাংক হিসেবে প্রতিষ্ঠিত হয়। তবে পূর্ব পাকিস্তানে (বর্তমান বাংলাদেশ) ব্যাংকিং কার্যক্রম ছিল মূলত পশ্চিম পাকিস্তানি মালিকদের নিয়ন্ত্রণে। হাবিব ব্যাংক, ইউনাইটেড ব্যাংক এবং মুসলিম কমার্শিয়াল ব্যাংকই তখন প্রধান ছিল। বাঙালিদের মালিকানায় ১৯৫৯ সালে 'ইস্টার্ন মার্কেন্টাইল ব্যাংক' (বর্তমান পূবালী ব্যাংক) প্রতিষ্ঠিত হয়।</p>`
            ]
          },
          {
            title: "স্বাধীন বাংলাদেশ ও আধুনিকায়ন",
            pages: [
              `<h1>স্বাধীনতার পরবর্তী পদক্ষেপ</h1>
              <p>১৯৭১ সালে মহান মুক্তিযুদ্ধের মাধ্যমে বাংলাদেশ স্বাধীন হওয়ার পর ব্যাংকিং খাতে আমূল পরিবর্তন আসে। ১৯৭২ সালে রাষ্ট্রপতির ১২৭ নং আদেশের মাধ্যমে 'বাংলাদেশ ব্যাংক' প্রতিষ্ঠিত হয়, যা দেশের কেন্দ্রীয় ব্যাংক হিসেবে আত্মপ্রকাশ করে।</p>
              <p>বঙ্গবন্ধু শেখ মুজিবুর রহমান পাকিস্তানের রেখে যাওয়া সব ব্যাংককে জাতীয়করণ (Nationalization) করেন। সোনালী, জনতা, অগ্রণী, রূপালী—এই ব্যাংকগুলো সরকারি মালিকানায় দেশের অর্থনীতি পুনর্গঠনে কাজ শুরু করে। গ্রামীণ ও কৃষি অর্থনীতিকে বাঁচাতে কৃষি ব্যাংকের ভূমিকা ছিল অপরিসীম।</p>`,

              `<h1>বেসরকারীকরণ ও ডিজিটাল যুগ</h1>
              <p>আশির দশকে সরকার বুঝতে পারে যে শুধু সরকারি ব্যাংক দিয়ে অর্থনীতির দ্রুত বিকাশ সম্ভব নয়। তাই আশির দশকের শুরুতে বিরাষ্ট্রীয়করণ বা প্রাইভেটাইজেশন নীতি গ্রহণ করা হয়। ১৯৮২ সালে আরব বাংলাদেশ ব্যাংক (AB Bank) প্রতিষ্ঠার মাধ্যমে দেশে বেসরকারি ব্যাংকিংয়ের যাত্রা শুরু হয়।</p>
              <p><strong>বর্তমান অবস্থা:</strong> বর্তমানে বাংলাদেশে সরকারি, বেসরকারি, বিদেশি এবং বিশেষায়িত মিলে ৬০টিরও বেশি ব্যাংক রয়েছে। এর সাথে যুক্ত হয়েছে ইসলামী ব্যাংকিং ব্যবস্থা এবং মোবাইল ব্যাংকিং (যেমন: বিকাশ, নগদ)। এখন ঘরে বসেই মানুষ ব্যাংকিং সেবা পাচ্ছে, যা ডিজিটাল বাংলাদেশের এক অনন্য উদাহরণ।</p>`
            ]
          }
        ]
      }
    ];

    /* =========================
       ২. PageFlip সেটআপ
       ========================= */
    const container = document.getElementById('flipbook');
    const isMobile = window.innerWidth < 768;

    let PageFlipClass;
    // PageFlip লাইব্রেরি লোড হয়েছে কিনা চেক করা
    if (window.St && window.St.PageFlip) PageFlipClass = window.St.PageFlip;
    else if (window.PageFlip) PageFlipClass = window.PageFlip;
    else {
        console.error("PageFlip library not found! Make sure you included the script tag in HTML.");
        return;
    }

    const pageFlip = new PageFlipClass(container, {
        width: isMobile ? 350 : 550,
        height: isMobile ? 600 : 733,
        size: "stretch",
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
        if (!book) {
            console.error("Book not found for ID:", bookId);
            return;
        }
        currentBook = book;
        if(currentBookTitle) currentBookTitle.textContent = book.title;

        let flatPages = [];

        // কভার পেজ
        flatPages.push(`
            <div class="page-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#fdf6e3; height: 100%;">
                <h1 style="font-size:${isMobile ? '24px':'32px'};color:#2c3e50;">${book.title}</h1>
                <p style="color:#666;">বাংলা ই-লাইব্রেরি</p>
                <div style="font-size:50px; margin-top:20px;">📚</div>
            </div>
        `);

        // চ্যাপ্টার এবং পেজ প্রসেসিং
        if (book.chapters && Array.isArray(book.chapters)) {
            book.chapters.forEach(ch => {
                // চ্যাপ্টার টাইটেল পেজ
                flatPages.push(`
                    <div class="page-content" style="display:flex;align-items:center;justify-content:center;text-align:center; height: 100%;">
                        <h2 style="color:#d8b899;border-bottom:2px solid #d8b899;">${ch.title}</h2>
                    </div>
                `);
                // মূল কন্টেন্ট পেজ
                ch.pages.forEach(pg => {
                    flatPages.push(`<div class="page-content">${pg}</div>`);
                });
            });
        }

        const elements = flatPages.map(html => {
            const div = document.createElement('div');
            div.className = 'pf-page';
            div.innerHTML = html;
            return div;
        });

        pageFlip.loadFromHTML(elements);
        
        // সাইডবার বন্ধ করা (যদি ফাংশনটি নিচে থাকে)
        if(typeof closeSidebar === 'function') closeSidebar();
    }

    function updateIndicator() {
        if(pageIndicator) {
            try {
                // PageFlip অনেক সময় লোড হতে দেরি করে, তাই try-catch রাখা ভালো
                pageIndicator.textContent = `${pageFlip.getCurrentPageIndex() + 1} / ${pageFlip.getPageCount()}`;
            } catch(e) {}
        }
    }

    /* =========================
       ৪. সাইডবার ও মেনু কন্ট্রোল
       ========================= */
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    function openSidebar() {
        if(sidebar) sidebar.classList.add('active');
        if(overlay) overlay.classList.add('active');
    }
    function closeSidebar() {
        if(sidebar) sidebar.classList.remove('active');
        if(overlay) overlay.classList.remove('active');
    }

    const menuBtn = document.getElementById('menuToggleBtn');
    if(menuBtn) menuBtn.addEventListener('click', openSidebar);
    
    const closeBtn = document.getElementById('closeMenuBtn');
    if(closeBtn) closeBtn.addEventListener('click', closeSidebar);
    
    if(overlay) overlay.addEventListener('click', closeSidebar);

    /* =========================
       ৫. অন্যান্য ফিচার
       ========================= */
    
    // বই লিস্ট পপুলেট করা
    const bookSelect = document.getElementById('bookSelect');
    if(bookSelect) {
        // আগের অপশন ক্লিয়ার করি
        bookSelect.innerHTML = '';
        books.forEach(b => {
            const opt = document.createElement('option');
            opt.value = b.id; 
            opt.textContent = b.title;
            bookSelect.appendChild(opt);
        });
        
        const loadBtn = document.getElementById('loadBookBtn');
        if(loadBtn) {
            loadBtn.addEventListener('click', () => loadBook(bookSelect.value));
        }
    }

    // নেভিগেশন বাটন
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if(prevBtn) prevBtn.addEventListener('click', () => pageFlip.flipPrev());
    if(nextBtn) nextBtn.addEventListener('click', () => pageFlip.flipNext());

    pageFlip.on('flip', () => {
        updateIndicator();
        if(autoScrollEnabled) startAutoScroll();
    });

    // অটো স্ক্রল
    let autoScrollEnabled = false;
    let scrollTimer = null;
    const autoScrollToggle = document.getElementById('autoScrollToggle');
    
    if(autoScrollToggle) {
        autoScrollToggle.addEventListener('change', (e) => {
            autoScrollEnabled = e.target.checked;
            if(autoScrollEnabled) startAutoScroll(); else clearInterval(scrollTimer);
        });
    }

    function startAutoScroll() {
        clearInterval(scrollTimer);
        // পেজ ফ্লিপ হওয়ার সাথে সাথে এলিমেন্ট পাওয়া নাও যেতে পারে, তাই একটু ডিলে দেওয়া হলো
        setTimeout(() => {
            try {
                const pageIndex = pageFlip.getCurrentPageIndex();
                const pageEl = pageFlip.getPageElement(pageIndex);
                if(!pageEl) return;
                
                // .page-content এর বদলে সরাসরি pageEl বা তার চাইল্ড ধরা ভালো
                const content = pageEl.querySelector('.page-content');
                if(!content) return;
                
                content.scrollTop = 0;
                scrollTimer = setInterval(() => {
                    content.scrollTop += 1;
                    // অটো টার্ন
                    if(content.scrollTop + content.clientHeight >= content.scrollHeight) {
                        clearInterval(scrollTimer);
                        const autoTurn = document.getElementById('autoTurnToggle');
                        if(autoTurn && autoTurn.checked) {
                            setTimeout(() => pageFlip.flipNext(), 2000);
                        }
                    }
                }, 50);
            } catch(e) { console.log("Scroll error:", e); }
        }, 100);
    }

    // ডার্ক মোড
    const darkToggle = document.getElementById('darkToggle');
    if(darkToggle) {
        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });
    }

    // ভয়েস (TTS)
    const synth = window.speechSynthesis;
    const ttsPlay = document.getElementById('ttsPlay');
    const ttsPause = document.getElementById('ttsPause');

    if(ttsPlay) {
        ttsPlay.addEventListener('click', () => {
            try {
                const pageEl = pageFlip.getPageElement(pageFlip.getCurrentPageIndex());
                const text = pageEl ? pageEl.innerText : '';
                if(text) {
                    const utter = new SpeechSynthesisUtterance(text);
                    utter.lang = 'bn-BD';
                    synth.speak(utter);
                }
            } catch(e) {}
        });
    }
    if(ttsPause) {
        ttsPause.addEventListener('click', () => synth.cancel());
    }

    /* =========================
       ৬. শুরু করা
       ========================= */
    // এখন প্রথম বইটির ID 'budget-intro', তাই এটি দিয়ে কল করতে হবে
    loadBook(books[0].id);

    window.addEventListener('resize', () => {
        // রিসাইজে রিলোড দরকার হতে পারে
    });
});
