/* Pro FlipBook script.js - Fixed Version */

document.addEventListener('DOMContentLoaded', function() {
    
    /* 1. Data: বই ও অধ্যায় */
    const books = [
      {
        id: 'budget-bd',
        title: "বাংলাদেশের বাজেট",
        chapters: [
          {
            title: "বাংলাদেশের বাজেট ও কাঠামো",
            pages: [
              `<h1>বাংলাদেশের বাজেট</h1>
               <p>বাংলাদেশের সরকারি বাজেট হলো একটি বার্ষিক অর্থনৈতিক পরিকল্পনা যেখানে সরকার নির্ধারণ করে আগামী অর্থবছরে কীভাবে আয় ও ব্যয় পরিচালিত হবে।</p>
               <h2>বাজেটের কাঠামো</h2>
               <p>বাংলাদেশের বাজেট সাধারণত দুটি প্রধান অংশে বিভক্ত — রাজস্ব বাজেট এবং উন্নয়ন বাজেট।</p>`,
               
              `<h2>রাজস্ব আয়ের উৎস</h2>
               <ul>
                 <li>আয়কর ও মূল্য সংযোজন কর (ভ্যাট)</li>
                 <li>আমদানি-রপ্তানি শুল্ক</li>
               </ul>
               <h2>বাজেট ঘাটতি</h2>
               <p>যখন সরকারের ব্যয় তার আয়ের চেয়ে বেশি হয়, তখন বাজেট ঘাটতি তৈরি হয়।</p>`
            ]
          },
          {
            title: "বাংলাদেশের অর্থনৈতিক উন্নয়ন",
            pages: [
              `<h1>বাংলাদেশের অর্থনৈতিক উন্নয়ন</h1>
               <p>স্বাধীনতার পর থেকে বাংলাদেশ এক সময়ের স্বল্পোন্নত দেশ থেকে আজ একটি উন্নয়নশীল অর্থনীতিতে পরিণত হয়েছে।</p>`,
              `<h2>শিল্প ও রপ্তানি খাত</h2>
               <p>তৈরি পোশাক শিল্প বাংলাদেশের বৈদেশিক মুদ্রা আয়ের প্রধান উৎস।</p>`
            ]
          },
          {
            title: "টেকসই উন্নয়ন ও ভবিষ্যৎ",
            pages: [
              `<h1>টেকসই উন্নয়ন</h1>
               <p>বর্তমান সময়ে শুধু GDP বৃদ্ধি নয়, বরং পরিবেশ ও সামাজিক অন্তর্ভুক্তি নিয়েও ভাবা হচ্ছে।</p>`,
              `<h2>ভবিষ্যৎ লক্ষ্য</h2>
               <ul>
                 <li>সবুজ অর্থনীতি</li>
                 <li>স্মার্ট বাংলাদেশ ২০৪১</li>
               </ul>
               <hr><p style="text-align:center">সমাপ্ত</p>`
            ]
          }
        ]
      }
    ];

    /* 2. PageFlip Initialization (Crucial Fix) */
    const container = document.getElementById('flipbook');
    
    // লাইব্রেরি চেকিং: St.PageFlip নাকি window.PageFlip
    let PageFlipClass;
    if (window.St && window.St.PageFlip) {
        PageFlipClass = window.St.PageFlip;
    } else if (window.PageFlip) {
        PageFlipClass = window.PageFlip;
    } else {
        alert("FlipBook লাইব্রেরি লোড হয়নি। ইন্টারনেট সংযোগ চেক করুন অথবা পেজটি রিফ্রেশ করুন।");
        return;
    }

    const pageFlip = new PageFlipClass(container, {
        width: 550,
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

    /* 3. Logic & Functions */
    let currentBook = null;
    const bookSelect = document.getElementById('bookSelect');
    const pageIndicator = document.getElementById('pageIndicator');
    
    function loadBook(bookId) {
        const book = books.find(b => b.id === bookId);
        if (!book) return;
        currentBook = book;
        let flatPages = [];

        // Cover
        flatPages.push(`
            <div style="display:flex;align-items:center;justify-content:center;height:100%;text-align:center;">
                <div>
                    <h1 style="font-size:28px;color:#333">${book.title}</h1>
                    <p style="color:#666">বাংলা অর্থনীতি ব্লগ</p>
                </div>
            </div>
        `);

        // Chapters
        book.chapters.forEach(ch => {
            flatPages.push(`<div style="padding:20px;text-align:center;display:flex;align-items:center;justify-content:center;"><h2>${ch.title}</h2></div>`);
            ch.pages.forEach(pg => {
                flatPages.push(`<div class="page-content">${pg}</div>`);
            });
        });

        // Create Elements
        pageFlip.loadFromHTML(flatPages.map(html => {
            const div = document.createElement('div');
            div.className = 'pf-page';
            div.innerHTML = `<div>${html}</div>`;
            return div;
        }));
        
        updateIndicator();
    }

    function updateIndicator() {
        if (pageIndicator) {
            try {
                pageIndicator.textContent = `পৃষ্ঠা ${pageFlip.getCurrentPageIndex() + 1} / ${pageFlip.getPageCount()}`;
            } catch(e) { pageIndicator.textContent = '-'; }
        }
    }

    /* 4. Event Listeners */
    if (bookSelect) {
        books.forEach(b => {
            const opt = document.createElement('option');
            opt.value = b.id;
            opt.textContent = b.title;
            bookSelect.appendChild(opt);
        });
    }

    document.getElementById('prevBtn')?.addEventListener('click', () => pageFlip.flipPrev());
    document.getElementById('nextBtn')?.addEventListener('click', () => pageFlip.flipNext());
    document.getElementById('loadBookBtn')?.addEventListener('click', () => loadBook(bookSelect.value));
    
    pageFlip.on('flip', updateIndicator);

    // Initial Load
    if (books.length > 0) loadBook(books[0].id);
});
