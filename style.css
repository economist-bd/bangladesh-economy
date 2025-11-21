:root {
  --primary: #d8b899;
  --bg: #f6efe6;
  --paper: #fffdf7;
  --text: #2c3e50;
  --sidebar-bg: #ffffff;
  --header-h: 60px;
}

* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

html, body {
  height: 100%; margin: 0; padding: 0;
  font-family: "Noto Serif Bengali", serif;
  background: var(--bg);
  color: var(--text);
  overflow: hidden; /* অ্যাপের মতো অনুভূতির জন্য */
}

/* --- Header --- */
.site-header {
  height: var(--header-h);
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 15px;
  background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
}

.brand { display: flex; align-items: center; gap: 10px; }
.logo-icon { font-size: 24px; }
.brand h1 { margin: 0; font-size: 18px; font-weight: 700; }
.brand p { margin: 0; font-size: 12px; color: #666; }

.btn-icon {
  background: var(--primary); border: none; padding: 8px 15px;
  border-radius: 20px; cursor: pointer; font-weight: 600; font-size: 14px;
  display: flex; align-items: center; gap: 5px;
}

/* --- Layout --- */
.app-container {
  margin-top: var(--header-h);
  height: calc(100% - var(--header-h));
  position: relative;
  display: flex; justify-content: center;
}

/* --- Flipbook Area --- */
.viewer-area {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 10px;
}

#flipbook {
  /* ফ্লিপবুক কন্টেইনার */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* --- Page Content Styling --- */
.pf-page {
  background-color: var(--paper);
  border-right: 1px solid #eee;
  overflow: hidden;
}
.page-content {
  padding: 25px 30px;
  height: 100%;
  overflow-y: auto; /* টেক্সট বেশি হলে স্ক্রল হবে */
  font-size: 17px;
  line-height: 1.8;
  text-align: justify;
  scrollbar-width: thin;
}
/* Titles */
.page-content h1 { font-size: 24px; color: #222; margin-bottom: 15px; text-align: center; }
.page-content h2 { font-size: 20px; color: #444; border-bottom: 2px solid var(--primary); padding-bottom: 5px; margin-top: 20px; }
.page-content ul { padding-left: 20px; }

/* --- Bottom Controls --- */
.bottom-controls {
  margin-top: 10px;
  display: flex; align-items: center; gap: 15px;
  background: rgba(255,255,255,0.8);
  padding: 8px 20px; border-radius: 30px;
  backdrop-filter: blur(5px);
}
.nav-btn {
  background: #333; color: #fff; border: none;
  padding: 8px 16px; border-radius: 20px; cursor: pointer;
}
.nav-btn:active { transform: scale(0.95); }
.page-badge { font-weight: bold; color: #555; }

/* --- Sidebar (Settings Menu) --- */
.sidebar {
  position: fixed; top: 0; right: -320px; /* শুরুতে লুকানো */
  width: 300px; height: 100%;
  background: var(--sidebar-bg);
  box-shadow: -5px 0 20px rgba(0,0,0,0.1);
  transition: right 0.3s ease;
  z-index: 200; display: flex; flex-direction: column;
}
.sidebar.active { right: 0; }

.sidebar-header {
  padding: 15px; border-bottom: 1px solid #eee;
  display: flex; justify-content: space-between; align-items: center;
  background: #f9f9f9;
}
.close-btn { background: none; border: none; font-size: 24px; cursor: pointer; }
.sidebar-content { padding: 20px; overflow-y: auto; flex: 1; }

.sidebar-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5);
  z-index: 150; display: none;
}
.sidebar-overlay.active { display: block; }

/* --- UI Components in Sidebar --- */
.control-group { margin-bottom: 20px; }
.control-group h3 { font-size: 16px; margin: 0 0 10px 0; color: #666; text-transform: uppercase; letter-spacing: 1px; }
.full-width { width: 100%; padding: 10px; cursor: pointer; }
.full-width-select { width: 100%; padding: 8px; margin-bottom: 8px; border-radius: 5px; border: 1px solid #ddd; }

.btn-primary { background: var(--primary); border: none; border-radius: 5px; font-weight: bold; }
.btn-secondary { background: #444; color: #fff; border: none; border-radius: 5px; }
.btn-outline { background: transparent; border: 1px solid #ccc; border-radius: 5px; }
.btn-small { padding: 5px 10px; border: 1px solid #ddd; background: #fff; border-radius: 4px; cursor: pointer; }

.toggle-row { display: flex; justify-content: space-between; margin-bottom: 8px; align-items: center; }
.slider-row { display: flex; flex-direction: column; gap: 5px; margin-top: 10px; }
.mt-2 { margin-top: 10px; width: 100%; padding: 5px; }
.mt-3 { margin-top: 15px; }

/* --- Dark Mode --- */
body.dark {
  background: #111; --text: #ddd; --paper: #1e1e1e; --sidebar-bg: #222;
}
body.dark .site-header { background: #222; color: #fff; }
body.dark .sidebar-header { background: #2a2a2a; color: #fff; }
body.dark .close-btn { color: #fff; }
body.dark .page-content { color: #ddd; }
body.dark .page-content h1, body.dark .page-content h2 { color: #fff; }
body.dark select, body.dark button { color: #222; } /* Keep controls readable */
body.dark .nav-btn { background: #eee; color: #111; }

/* --- Mobile Specific --- */
@media (max-width: 768px) {
  .page-content { padding: 20px 20px; font-size: 16px; }
  .bottom-controls { width: 100%; justify-content: space-between; border-radius: 0; bottom: 0; position: absolute; }
  .nav-btn { font-size: 12px; padding: 8px 12px; }
  
  /* মোবাইলে স্লাইড এফেক্ট স্মুথ করার জন্য */
  #flipbook { transition: transform 0.3s; }
}
