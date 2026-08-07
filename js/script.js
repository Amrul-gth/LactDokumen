// ==============================================================================
// SISTEM LOGIN & AUTH
// ==============================================================================
if (!sessionStorage.getItem('isLoggedIn')) window.location.href = 'login.html';
function logout() { sessionStorage.removeItem('isLoggedIn'); sessionStorage.removeItem('userRole'); window.location.href = 'login.html'; }

// ==============================================================================
// VARIABEL GLOBAL & STATE PROYEK (30 HALAMAN)
// ==============================================================================
let logoKiriUrl = 'assets/images/infra1.png', logoTengahUrl = 'assets/images/infra1.png', logoKananUrl = 'assets/images/telkomlogo.png';        

// Array Data Evidence
let evidenceData = [{ file: null, preview: '', caption: 'PROGRES MATERIAL DELIVERY' },{ file: null, preview: '', caption: 'PROGRES TERMINASI' },{ file: null, preview: '', caption: 'PROGRES OTDR' },{ file: null, preview: '', caption: 'PROGRES PENARIKAN' },{ file: null, preview: '', caption: 'PROGRES INSTAL AKSESORIS' },{ file: null, preview: '', caption: 'PROGRES SURVEY CORE ODC' }];
let opmData = [{ file: null, preview: '', caption: 'P-OUT SPL-1.04 ODC' },{ file: null, preview: '', caption: 'DMP-FAH 63' },{ file: null, preview: '', caption: 'AKSESORIS ODP' },{ file: null, preview: '', caption: 'PORT 1' },{ file: null, preview: '', caption: 'PORT 2' },{ file: null, preview: '', caption: 'PORT 3' },{ file: null, preview: '', caption: 'PORT 4' },{ file: null, preview: '', caption: 'PORT 5' },{ file: null, preview: '', caption: 'PORT 6' }];
let opm2Data = [{ file: null, preview: '', caption: 'PORT 7' },{ file: null, preview: '', caption: 'PORT 8' },{ file: null, preview: '', caption: '' }];
let opm3Data = [{ file: null, preview: '', caption: 'P-OUT SPL-1.04 ODC' },{ file: null, preview: '', caption: 'DMP-FAH 64' },{ file: null, preview: '', caption: 'AKSESORIS ODP' },{ file: null, preview: '', caption: 'PORT 1' },{ file: null, preview: '', caption: 'PORT 2' },{ file: null, preview: '', caption: 'PORT 3' },{ file: null, preview: '', caption: 'PORT 4' },{ file: null, preview: '', caption: 'PORT 5' },{ file: null, preview: '', caption: 'PORT 6' }];
let opm4Data = [{ file: null, preview: '', caption: 'PORT 7' },{ file: null, preview: '', caption: 'PORT 8' },{ file: null, preview: '', caption: '' }];
let evossmData = Array(6).fill().map(()=>({ file: null, preview: '', caption: '' }));
let lkData = [{ file: null, preview: '', caption: 'LABEL KABEL - A' },{ file: null, preview: '', caption: 'LABEL KABEL - B' }];
let pcData = Array(3).fill().map(()=>({ file: null, preview: '', caption: '' }));
let evpsData = Array(3).fill().map(()=>({ file: null, preview: '', caption: '' }));
let evddData = Array(3).fill().map(()=>({ file: null, preview: '', caption: '' }));
let evrpData = Array(3).fill().map(()=>({ file: null, preview: '', caption: '' }));
let evhl1Data = [{ file: null, preview: '', caption: 'PU-AS-HL 1-2' },{ file: null, preview: '', caption: 'PU-AS-HL 3-4' },{ file: null, preview: '', caption: 'PU-AS-HL 5-6' },{ file: null, preview: '', caption: 'PU-AS-HL 7-8' },{ file: null, preview: '', caption: 'PU-AS-HL 9-10' },{ file: null, preview: '', caption: 'PU-AS-HL 11-12' },{ file: null, preview: '', caption: 'PU-AS-HL 13-14' },{ file: null, preview: '', caption: 'PU-AS-HL 15-16' },{ file: null, preview: '', caption: 'PU-AS-HL 17' }];
let evhl2Data = [{ file: null, preview: '', caption: 'PU-AS-HL 18' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];
let evde1Data = [{ file: null, preview: '', caption: 'PU-AS-DE 1' },{ file: null, preview: '', caption: 'PU-AS-DE 2-3' },{ file: null, preview: '', caption: 'PU-AS-DE 4-5' },{ file: null, preview: '', caption: 'PU-AS-DE 6-7' },{ file: null, preview: '', caption: 'PU-AS-DE 8-9' },{ file: null, preview: '', caption: 'PU-AS-DE 10-11' },{ file: null, preview: '', caption: 'PU-AS-DE 12-13' },{ file: null, preview: '', caption: 'PU-AS-DE 14-15' },{ file: null, preview: '', caption: 'PU-AS-DE 16-17' }];
let evde2Data = [{ file: null, preview: '', caption: 'PU-AS-DE 18-19' },{ file: null, preview: '', caption: 'PU-AS-DE 20-21' },{ file: null, preview: '', caption: 'PU-AS-DE 22-23' },{ file: null, preview: '', caption: 'PU-AS-DE 24-25' },{ file: null, preview: '', caption: 'PU-AS-DE 26-27' },{ file: null, preview: '', caption: 'PU-AS-DE 28-29' },{ file: null, preview: '', caption: 'PU-AS-DE 30-31' },{ file: null, preview: '', caption: 'PU-AS-DE 32-33' },{ file: null, preview: '', caption: 'PU-AS-DE 34-35' }];
let evde3Data = [{ file: null, preview: '', caption: 'PU-AS-DE 36-37' },{ file: null, preview: '', caption: 'PU-AS-DE 38-39' },{ file: null, preview: '', caption: 'PU-AS-DE 40-41' },{ file: null, preview: '', caption: 'PU-AS-DE 42-43' },{ file: null, preview: '', caption: 'PU-AS-DE 44-45' },{ file: null, preview: '', caption: 'PU-AS-DE 46-47' },{ file: null, preview: '', caption: 'PU-AS-DE 48' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];
let evscData = [{ file: null, preview: '', caption: 'PU-AS-SC 1' },{ file: null, preview: '', caption: 'PU-AS-SC 2' },{ file: null, preview: '', caption: 'PU-AS-SC 3' },{ file: null, preview: '', caption: 'PU-AS-SC 4' },{ file: null, preview: '', caption: 'PU-AS-SC 5' },{ file: null, preview: '', caption: 'PU-AS-SC 6' },{ file: null, preview: '', caption: 'PU-AS-SC 7' },{ file: null, preview: '', caption: 'PU-AS-SC 8' },{ file: null, preview: '', caption: 'PU-AS-SC 9' }];
let evsc2Data = [{ file: null, preview: '', caption: 'PU-AS-SC 10' },{ file: null, preview: '', caption: 'PU-AS-SC 11' },{ file: null, preview: '', caption: 'PU-AS-SC 12' },{ file: null, preview: '', caption: 'PU-AS-SC 13' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];
let evpuData = [{ file: null, preview: '', caption: 'TN7-1' },{ file: null, preview: '', caption: 'TN7-2' },{ file: null, preview: '', caption: 'TN7-3' },{ file: null, preview: '', caption: 'TN7-4' },{ file: null, preview: '', caption: 'TN7-5' },{ file: null, preview: '', caption: 'TN7-6' },{ file: null, preview: '', caption: 'TN7-7' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];

let singleFilesStatus = { boq: false, tb6: false, tb7: false, otdr1: false, otdr2: false, otdr3: false, kml: false, mancore: false };
let singleFilesBase64 = { boq: '', tb6: '', tb7: '', otdr1: '', otdr2: '', otdr3: '', kml: '', mancore: '' }; 

let globalTTD = '', globalParaf = '';
let imageTransforms = {}; const defaultTf = { w: '100%', h: '100%', ox: 0, oy: 0 }; 

let dynamicArrays = {};
let totalPages = 30;
let pageOrder = Array.from({length: 30}, (_, i) => i + 1); 
let dynamicPagesConfig = [], duplicateCounts = {}; 
let isSplitScreenActive = false;

let currentProjectId = localStorage.getItem('revpro_active_id') || Date.now().toString();
if (!localStorage.getItem('revpro_active_id')) localStorage.setItem('revpro_active_id', currentProjectId);

const pageTitles = ["Global", "Daftar Isi", "Laporan", "BOQ", "Ev Prog", "Tb OPM 1", "Tb OPM 2", "OPM 1", "Ljt 1", "OPM 2", "Ljt 2", "OS-SM", "Lbl Kbl", "Patchcord", "PS ODC", "DD-HDPE", "Rise Pipe", "Aks HL", "Ljt HL", "Aks DE 1", "Aks DE 2", "Aks DE 3", "Aks SC", "Ljt SC", "PU-S7.0", "OTDR 1", "OTDR 2", "OTDR 3", "KML", "Mancore"];

const gridConfigs = { 'ev': { id: 'evidence-inputs-container', limit: 6 }, 'opm': { id: 'opm-inputs-container', limit: 9 }, 'opm2': { id: 'opm2-inputs-container', limit: 3 }, 'opm3': { id: 'opm3-inputs-container', limit: 9 }, 'opm4': { id: 'opm4-inputs-container', limit: 3 }, 'evossm': { id: 'evossm-inputs-container', limit: 6 }, 'lk': { id: 'lk-inputs-container', limit: 2 }, 'pc': { id: 'pc-inputs-container', limit: 3 }, 'evps': { id: 'evps-inputs-container', limit: 3 }, 'evdd': { id: 'evdd-inputs-container', limit: 3 }, 'evrp': { id: 'evrp-inputs-container', limit: 3 }, 'evhl1': { id: 'evhl1-inputs-container', limit: 9 }, 'evhl2': { id: 'evhl2-inputs-container', limit: 3 }, 'evde1': { id: 'evde1-inputs-container', limit: 9 }, 'evde2': { id: 'evde2-inputs-container', limit: 9 }, 'evde3': { id: 'evde3-inputs-container', limit: 9 }, 'evsc': { id: 'evsc-inputs-container', limit: 9 }, 'evsc2': { id: 'evsc2-inputs-container', limit: 6 }, 'evpu': { id: 'evpu-inputs-container', limit: 9 } };

document.addEventListener('DOMContentLoaded', async () => {
    await initDB(); await loadProjectFromDB(currentProjectId);
    buildNavigasiForm(); buildNavigasiPreview(); rebuildSemuaFormInputs(); generateTerbilang(); updateReport(); initSignature();
    const handleScrollSpy = function() {
        if(!isSplitScreenActive && document.getElementById('report-tab').classList.contains('hidden')) return;
        let current = pageOrder[0]; const scrollPos = this.scrollTop + 200; 
        for(let i=0; i<pageOrder.length; i++) { const page = document.getElementById('preview-page-' + pageOrder[i]); if(page && page.offsetTop <= scrollPos) current = pageOrder[i]; }
        const selectEl = document.getElementById('preview-page-select'); if(selectEl && selectEl.value != current) selectEl.value = current;
    };
    document.getElementById('main-content-scroll')?.addEventListener('scroll', handleScrollSpy); document.getElementById('report-tab')?.addEventListener('scroll', handleScrollSpy);
});

// ==========================================
// DB INTERNAL INDEXEDDB & AUTO SAVE
// ==========================================
const dbName = "RevProDB", storeName = "projects";
function initDB() { return new Promise((res, rej) => { const req = indexedDB.open(dbName, 1); req.onupgradeneeded = (e) => { let db = e.target.result; if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName, { keyPath: "id" }); }; req.onsuccess = (e) => res(e.target.result); req.onerror = (e) => rej(e.target.error); }); }
async function saveProjectToDB(data) { const db = await initDB(); return new Promise((res, rej) => { const tx = db.transaction(storeName, "readwrite"); tx.objectStore(storeName).put(data); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); }); }
async function getProjectFromDB(id) { const db = await initDB(); return new Promise((res, rej) => { const req = db.transaction(storeName, "readonly").objectStore(storeName).get(id); req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error); }); }
async function getAllProjectsFromDB() { const db = await initDB(); return new Promise((res, rej) => { const req = db.transaction(storeName, "readonly").objectStore(storeName).getAll(); req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error); }); }
async function deleteProjectFromDB(id) { const db = await initDB(); return new Promise((res, rej) => { const tx = db.transaction(storeName, "readwrite"); tx.objectStore(storeName).delete(id); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); }); }

function serializeProjectData() {
    let inputs = {}; document.querySelectorAll('input:not([type="file"]), textarea, select').forEach(el => { if(el.id) inputs[el.id] = el.value; });
    return { id: currentProjectId, timestamp: Date.now(), projectName: safeVal('inp-proyek') !== '-' ? safeVal('inp-proyek') : 'Proyek Tanpa Nama', spName: safeVal('inp-sp') !== '-' ? safeVal('inp-sp') : 'Tanpa SP', version: 3001, inputs: inputs, singleFilesStatus: singleFilesStatus, singleFilesBase64: singleFilesBase64, globalTTD: globalTTD, globalParaf: globalParaf, imageTransforms: imageTransforms, totalPages: totalPages, pageOrder: pageOrder, dynamicPagesConfig: dynamicPagesConfig, duplicateCounts: duplicateCounts, arrays: { evidenceData, opmData, opm2Data, opm3Data, opm4Data, evossmData, lkData, pcData, evpsData, evddData, evrpData, evhl1Data, evhl2Data, evde1Data, evde2Data, evde3Data, evscData, evsc2Data, evpuData }, dynamicArrays: dynamicArrays };
}
let autoSaveTimeout = null;
async function triggerAutoSave() { clearTimeout(autoSaveTimeout); autoSaveTimeout = setTimeout(async () => { try { await saveProjectToDB(serializeProjectData()); } catch (e) {} }, 1500); }
async function loadProjectFromDB(id) { try { const data = await getProjectFromDB(id); if (data) restoreProjectData(data); } catch(e) {} }

function restoreProjectData(data) {
    if (data.version !== 3001) {
        if(data.inputs) { for(let id in data.inputs) { let el = document.getElementById(id); if(el) { el.value = data.inputs[id]; if(el.tagName === 'TEXTAREA') el.innerHTML = data.inputs[id]; } } }
        totalPages = 30; pageOrder = Array.from({length: 30}, (_, i) => i + 1); buildNavigasiForm(); buildNavigasiPreview(); updateReport(); updateDashboard(); showToast("Versi 30 Hal Aktif. Data teks diselamatkan.", "success"); return;
    }
    totalPages = data.totalPages || 30; pageOrder = data.pageOrder || Array.from({length: 30}, (_, i) => i + 1); dynamicPagesConfig = data.dynamicPagesConfig || []; duplicateCounts = data.duplicateCounts || {};
    document.querySelectorAll('.form-page-section').forEach(el => { let id = parseInt(el.id.replace('form-page-', '')); if(id > 30) el.remove(); }); document.querySelectorAll('#print-area > div').forEach(el => { let id = parseInt(el.id.replace('preview-page-', '')); if(id > 30) el.remove(); });
    
    dynamicPagesConfig.forEach(cfg => {
        const sf = document.getElementById('form-page-' + cfg.sourceId); let ch = sf.innerHTML.replace(/id="([^"]+)"/g, `id="$1_dup${cfg.id}"`).replace(/onclick="document\.getElementById\('([^']+)'\)\.click\(\)"/g, `onclick="document.getElementById('$1_dup${cfg.id}').click()"`).replace(/handleTableUpload\(this,\s*'([^']+)',\s*'([^']+)'(?:,\s*'([^']+)')?\)/g, `handleTableUpload(this, '$1_dup${cfg.id}', '$2_dup${cfg.id}', '$3_dup${cfg.id}')`).replace(/id="btn-rm-([^"]+)"/g, `id="btn-rm-$1_dup${cfg.id}"`).replace(/removeSingleImg\(event,\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\)/g, `removeSingleImg(event, '$1_dup${cfg.id}', '$2_dup${cfg.id}', '$3_dup${cfg.id}', '$4_dup${cfg.id}', '$5_dup${cfg.id}')`);
        Object.keys(gridConfigs).forEach(p => ch = ch.replace(new RegExp(`'${p}'`, 'g'), `'${p}_dup${cfg.id}'`));
        const fEl = document.createElement('div'); fEl.id = `form-page-${cfg.id}`; fEl.className = 'form-page-section hidden animate-fade-in'; fEl.innerHTML = ch;
        const h3 = fEl.querySelector('h3'); if(h3) h3.innerHTML = h3.innerHTML.replace(/\(HAL \d+\)/, '') + ` (HAL TAMBAHAN: ${cfg.customTitle.toUpperCase()})`;
        const hb = document.createElement('button'); hb.type = 'button'; hb.className = 'w-full mt-4 bg-red-100 text-red-600 font-bold py-2 rounded-lg'; hb.innerHTML = '🗑️ Hapus Tambahan'; hb.onclick = () => hapusHalamanDinamis(cfg.id); fEl.appendChild(hb);
        document.getElementById('form-pages-wrapper').appendChild(fEl);
        const pA = document.getElementById('print-area'), np = document.createElement('div'); np.id = `preview-page-${cfg.id}`; np.className = `paper-a4 flex flex-col bg-white ${[6,7,28,29,30].includes(cfg.sourceId) ? 'landscape' : ''}`; pA.appendChild(np);
    });
    refreshDOMOrder();
    if(data.inputs) { for(let id in data.inputs) { let el = document.getElementById(id); if(el) { el.value = data.inputs[id]; if(el.tagName === 'TEXTAREA') el.innerHTML = data.inputs[id]; } } }
    singleFilesStatus = data.singleFilesStatus || singleFilesStatus; singleFilesBase64 = data.singleFilesBase64 || singleFilesBase64; globalTTD = data.globalTTD || ''; globalParaf = data.globalParaf || ''; imageTransforms = data.imageTransforms || {};
    for(let key in singleFilesBase64) { let b64 = singleFilesBase64[key]; if(b64) { let iId = 'prev-'+key; let img = document.getElementById(iId), txt = document.getElementById(iId.replace('prev-','txt-')), bm = document.getElementById('btn-rm-'+key); if(img) { img.src=b64; img.classList.remove('hidden'); } if(txt) txt.classList.add('hidden'); if(bm) bm.classList.remove('hidden'); } }
    if(data.arrays) { evidenceData = data.arrays.evidenceData; opmData = data.arrays.opmData; opm2Data = data.arrays.opm2Data; opm3Data = data.arrays.opm3Data; opm4Data = data.arrays.opm4Data; evossmData = data.arrays.evossmData; lkData = data.arrays.lkData; pcData = data.arrays.pcData; evpsData = data.arrays.evpsData; evddData = data.arrays.evddData; evrpData = data.arrays.evrpData; evhl1Data = data.arrays.evhl1Data; evhl2Data = data.arrays.evhl2Data; evde1Data = data.arrays.evde1Data; evde2Data = data.arrays.evde2Data; evde3Data = data.arrays.evde3Data; evscData = data.arrays.evscData; evsc2Data = data.arrays.evsc2Data; evpuData = data.arrays.evpuData; }
    if(data.dynamicArrays) dynamicArrays = data.dynamicArrays;
    buildNavigasiForm(); buildNavigasiPreview(); rebuildSemuaFormInputs();
    dynamicPagesConfig.forEach(cfg => { if(gridConfigs[cfg.sourceId]) rebuildFormByPrefix(`${gridConfigs[cfg.sourceId].id.replace('-inputs-container','')}_dup${cfg.id}`); });
    updateReport(); updateDashboard();
}

// ==========================================
// RIWAYAT MODAL
// ==========================================
async function openModalHistory() {
    clearActiveMenu(); document.getElementById('modal-history').classList.remove('hidden'); const lc = document.getElementById('history-list'); lc.innerHTML = '<p class="text-center text-gray-500 py-8">Memuat riwayat...</p>';
    try {
        const prjs = await getAllProjectsFromDB(); if(prjs.length === 0) { lc.innerHTML = '<p class="text-center text-gray-500 py-8">Belum ada proyek.</p>'; return; }
        prjs.sort((a, b) => b.timestamp - a.timestamp); lc.innerHTML = '';
        prjs.forEach(p => {
            const dateStr = new Date(p.timestamp).toLocaleString('id-ID', {day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit'});
            const isActive = p.id === currentProjectId ? '<span class="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">Dibuka</span>' : '';
            lc.innerHTML += `<div class="flex justify-between items-center p-4 border border-gray-200 rounded-xl hover:bg-orange-50 bg-white"><div class="flex-1 min-w-0 pr-4"><h4 class="font-bold text-gray-800 text-sm truncate">${p.projectName} ${isActive}</h4><p class="text-xs text-gray-500 truncate">${p.spName}</p><p class="text-[10px] text-gray-400 mt-1 font-semibold">${dateStr}</p></div><div class="flex gap-2"><button onclick="loadHistoryItem('${p.id}')" class="bg-orange-500 text-white px-3 py-1.5 rounded shadow text-xs font-bold">Buka</button><button onclick="deleteHistoryItem('${p.id}')" class="bg-red-100 text-red-600 px-3 py-1.5 rounded shadow-sm text-xs font-bold">Hapus</button></div></div>`;
        });
    } catch(e) { lc.innerHTML = '<p class="text-center text-red-500 py-8">Gagal muat.</p>'; }
}
function closeModalHistory() { document.getElementById('modal-history').classList.add('hidden'); }
async function loadHistoryItem(id) { showToast("Memuat proyek...", "loading"); currentProjectId = id; localStorage.setItem('revpro_active_id', currentProjectId); await loadProjectFromDB(id); closeModalHistory(); showToast("✅ Proyek dimuat!", "success"); }
async function deleteHistoryItem(id) { if(confirm("Hapus permanen riwayat?")) { await deleteProjectFromDB(id); if (id === currentProjectId) { currentProjectId = Date.now().toString(); localStorage.setItem('revpro_active_id', currentProjectId); confirmResetProject(); } openModalHistory(); } }

// ==========================================
// UI & GENERAL UTILS
// ==========================================
function showToast(message, type = 'normal') { const t = document.createElement('div'); t.className = `bg-slate-800 text-white px-4 py-3 rounded-lg shadow-xl text-sm opacity-0 transform translate-y-2 transition-all duration-300 z-50 border-l-4 ${type === 'error' ? 'border-red-500' : (type === 'success' ? 'border-green-500' : 'border-orange-500')}`; t.innerText = message; document.getElementById('toast-container').appendChild(t); requestAnimationFrame(() => t.classList.remove('opacity-0', 'translate-y-2')); setTimeout(() => { t.classList.add('opacity-0', 'translate-y-2'); setTimeout(() => t.remove(), 300); }, 3000); }
function clearActiveMenu() { document.querySelectorAll('aside nav .nav-btn').forEach(b => { b.classList.remove('bg-gradient-to-r', 'from-red-600', 'to-orange-500', 'text-white', 'shadow-md'); b.classList.add('text-gray-300'); }); }
function toggleSplitScreen() { isSplitScreenActive = !isSplitScreenActive; const ms = document.getElementById('main-content-scroll'), f = document.getElementById('form-tab'), r = document.getElementById('report-tab'), d = document.getElementById('dashboard-tab'), btn = document.getElementById('btn-split-screen'); if(isSplitScreenActive) { clearActiveMenu(); btn.innerHTML = `<span class="text-lg">🪟</span> Matikan Split Screen`; btn.classList.add('bg-indigo-600', 'text-white'); ms.classList.add('split-mode-active'); f.classList.remove('hidden', 'max-w-6xl', 'mx-auto'); r.classList.remove('hidden'); d.classList.add('hidden'); showToast("🪟 Split Screen Aktif!"); const a = document.querySelector('.form-page-section:not(.hidden)'); if(a) scrollToPage(a.id.replace('form-page-', '')); } else { btn.innerHTML = `<span class="text-lg">🪟</span> Split Screen Mode`; btn.classList.remove('bg-indigo-600', 'text-white'); ms.classList.remove('split-mode-active'); f.classList.add('max-w-6xl', 'mx-auto'); r.classList.add('hidden'); switchTab('form-tab'); showToast("Tampilan normal diaktifkan."); } updateReport(); }
function switchTab(t) { if(isSplitScreenActive && (t==='form-tab'||t==='report-tab')) { document.getElementById('dashboard-tab').classList.add('hidden'); document.getElementById('form-tab').classList.remove('hidden'); document.getElementById('report-tab').classList.remove('hidden'); } else { ['form-tab','dashboard-tab','report-tab'].forEach(id=>document.getElementById(id).classList.add('hidden')); document.getElementById(t).classList.remove('hidden'); } document.querySelectorAll('aside nav .nav-btn').forEach(b=>{ b.classList.remove('bg-gradient-to-r','text-white'); b.classList.add('text-gray-300'); }); const a = Array.from(document.querySelectorAll('aside nav .nav-btn')).find(b=>b.getAttribute('onclick').includes(t)); if(a){ a.classList.add('bg-gradient-to-r','text-white'); a.classList.remove('text-gray-300'); } if(t==='dashboard-tab') updateDashboard(); if(t==='report-tab') updateReport(); }
function switchForm(pId) { document.querySelectorAll('.form-page-section').forEach(p=>p.classList.add('hidden')); document.querySelectorAll('.page-nav-btn').forEach(b=>{ b.classList.remove('bg-red-600','text-white'); b.classList.add('text-slate-600'); }); document.getElementById('form-page-'+pId)?.classList.remove('hidden'); document.getElementById('btn-form-'+pId)?.classList.add('bg-red-600','text-white'); if(isSplitScreenActive) { scrollToPage(pId); const s = document.getElementById('preview-page-select'); if(s) s.value=pId; } }
function scrollToPage(p) { const c = isSplitScreenActive ? document.getElementById('report-tab') : document.getElementById('main-content-scroll'), t = document.getElementById('preview-page-'+p); if(t) c.scrollTo({top:t.offsetTop - 80, behavior:'smooth'}); }
function tambahDaftarIsi() { const c = document.getElementById('container-daftar-isi'), d = document.createElement('div'); d.className = 'flex gap-2 items-center'; d.innerHTML = `<input type="text" oninput="updateReport()" class="flex-1 border rounded-lg p-2 font-medium uppercase"><button type="button" onclick="hapusDaftarIsi(this)" class="bg-red-100 text-red-600 px-3 py-2 rounded-lg font-bold">X</button>`; c.appendChild(d); updateReport(); triggerAutoSave(); }
function hapusDaftarIsi(btn) { btn.parentElement.remove(); updateReport(); triggerAutoSave(); }
function formatTanggal(ds) { if (!ds || ds === '') return "......."; const d = new Date(ds); if (isNaN(d.getTime())) return "......."; const bln = ['JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER']; return `${d.getDate()} ${bln[d.getMonth()]} ${d.getFullYear()}`; }
function spellDate(ds) { if (!ds || ds === '') return "......., tanggal ......."; const d = new Date(ds); if (isNaN(d.getTime())) return "......., tanggal ......."; const hari = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'][d.getDay()], bln = ['JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'][d.getMonth()]; const aT = (n) => { const s = ["", "SATU", "DUA", "TIGA", "EMPAT", "LIMA", "ENAM", "TUJUH", "DELAPAN", "SEMBILAN", "SEPULUH", "SEBELAS"]; if(n < 12) return s[n]; if(n < 20) return s[n-10] + " BELAS"; if(n < 100) return s[Math.floor(n/10)] + " PULUH " + s[n%10]; if(n < 200) return "SERATUS " + aT(n-100); if(n < 1000) return s[Math.floor(n/100)] + " RATUS " + aT(n%100); if(n < 2000) return "SERIBU " + aT(n-1000); if(n < 10000) return s[Math.floor(n/1000)] + " RIBU " + aT(n%1000); return n; }; return `${hari}, tanggal ${aT(d.getDate()).trim()} bulan ${bln} tahun ${aT(d.getFullYear()).trim()}`; }
function generateTerbilang() { updateReport(); triggerAutoSave(); }
function updateDashboard() { let f=0; [evidenceData,opmData,opm2Data,opm3Data,opm4Data,evossmData,lkData,pcData,evpsData,evddData,evrpData,evhl1Data,evhl2Data,evde1Data,evde2Data,evde3Data,evscData,evsc2Data,evpuData].forEach(a=>f+=a.filter(i=>i.preview!=='').length); let s=0; Object.values(singleFilesStatus).forEach(v=>s+=v?1:0); const tF=f+s, tS=122; document.getElementById('dash-filled').innerText=tF; let p=Math.min(Math.round((tF/tS)*100),100); document.getElementById('dash-percent').innerText=`${p}%`; document.getElementById('dash-progress-bar').style.width=`${p}%`; }

function refreshDOMOrder() { const fW = document.getElementById('form-pages-wrapper'), pA = document.getElementById('print-area'); pageOrder.forEach(id => { const fP = document.getElementById(`form-page-${id}`), pP = document.getElementById(`preview-page-${id}`); if(fP) fW.appendChild(fP); if(pP) pA.appendChild(pP); }); }
function buildNavigasiForm() { const nC = document.getElementById('nav-container'); nC.querySelectorAll('.page-nav-btn').forEach(b => b.remove()); let html = ''; pageOrder.forEach((id, idx) => { let title = id<=30 ? pageTitles[id-1] : (dynamicPagesConfig.find(p=>p.id===id)?.customTitle || 'Custom'); html += `<button type="button" onclick="switchForm(${id})" id="btn-form-${id}" class="page-nav-btn shrink-0 px-4 py-2 rounded-lg font-bold text-xs ${idx===0 ? 'bg-red-600 text-white' : 'text-slate-600'}">${idx+1}: ${title}</button>`; }); nC.insertAdjacentHTML('afterbegin', html); }
function buildNavigasiPreview() { const s = document.getElementById('preview-page-select'); let o=''; pageOrder.forEach((id, idx) => { let title = id<=30 ? pageTitles[id-1] : (dynamicPagesConfig.find(p=>p.id===id)?.customTitle || 'Custom'); o += `<option value="${id}">Hal ${idx+1} - ${title}</option>`; }); s.innerHTML = o; }
function openModalTambah() { document.getElementById('modal-tambah').classList.remove('hidden'); } function closeModalTambah() { document.getElementById('modal-tambah').classList.add('hidden'); }
function openModalReset() { clearActiveMenu(); document.getElementById('modal-reset').classList.remove('hidden'); } function closeModalReset() { document.getElementById('modal-reset').classList.add('hidden'); }

// === FUNGSI RESET / NEW ===
function confirmResetProject() {
    closeModalReset(); currentProjectId = Date.now().toString(); localStorage.setItem('revpro_active_id', currentProjectId);
    singleFilesStatus = { boq: false, tb6: false, tb7: false, otdr1: false, otdr2: false, otdr3: false, kml: false, mancore: false }; singleFilesBase64 = { boq: '', tb6: '', tb7: '', otdr1: '', otdr2: '', otdr3: '', kml: '', mancore: '' }; globalTTD = ''; globalParaf = ''; imageTransforms = {}; 
    [evidenceData, opmData, opm2Data, opm3Data, opm4Data, evossmData, lkData, pcData, evpsData, evddData, evrpData, evhl1Data, evhl2Data, evde1Data, evde2Data, evde3Data, evscData, evsc2Data, evpuData].forEach(arr => arr.forEach(item => { item.file = null; item.preview = ''; }));
    dynamicPagesConfig.forEach(cfg => { document.getElementById('form-page-'+cfg.id)?.remove(); document.getElementById('preview-page-'+cfg.id)?.remove(); });
    dynamicPagesConfig = []; duplicateCounts = {}; pageOrder = Array.from({length: 30}, (_, i) => i + 1); totalPages = 30; dynamicArrays = {};
    document.querySelectorAll('img[id^="prev-"]').forEach(img => { img.src = ''; img.classList.add('hidden'); }); document.querySelectorAll('[id^="txt-"]').forEach(txt => txt.classList.remove('hidden')); document.querySelectorAll('[id^="btn-rm-"]').forEach(btn => btn.classList.add('hidden'));
    clearCanvas('sig-canvas-ttd'); clearCanvas('sig-canvas-paraf'); document.querySelectorAll('input[type="file"]').forEach(i => i.value = '');
    refreshDOMOrder(); buildNavigasiForm(); buildNavigasiPreview(); rebuildSemuaFormInputs(); switchForm(1); updateReport(); updateDashboard(); triggerAutoSave(); showToast("🔄 Workspace Baru Dibuka! Proyek sebelumnya ada di Riwayat.", 'success');
}

function tambahHalamanDinamis() {
    closeModalTambah(); const sId = parseInt(document.getElementById('select-template-page').value); totalPages++; const nId = totalPages; duplicateCounts[sId] = (duplicateCounts[sId] || 0) + 1; const dn = duplicateCounts[sId]; const ct = `${pageTitles[sId-1]} Dup ${dn}`;
    const sF = document.getElementById('form-page-' + sId); let ch = sF.innerHTML.replace(/id="([^"]+)"/g, `id="$1_dup${nId}"`).replace(/onclick="document\.getElementById\('([^']+)'\)\.click\(\)"/g, `onclick="document.getElementById('$1_dup${nId}').click()"`).replace(/handleTableUpload\(this,\s*'([^']+)',\s*'([^']+)'(?:,\s*'([^']+)')?\)/g, `handleTableUpload(this, '$1_dup${nId}', '$2_dup${nId}', '$3_dup${nId}')`).replace(/id="btn-rm-([^"]+)"/g, `id="btn-rm-$1_dup${nId}"`).replace(/removeSingleImg\(event,\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\)/g, `removeSingleImg(event, '$1_dup${nId}', '$2_dup${nId}', '$3_dup${nId}', '$4_dup${nId}', '$5_dup${nId}')`);
    Object.keys(gridConfigs).forEach(p => ch = ch.replace(new RegExp(`'${p}'`, 'g'), `'${p}_dup${nId}'`));
    const fE = document.createElement('div'); fE.id = `form-page-${nId}`; fE.className = 'form-page-section hidden animate-fade-in'; fE.innerHTML = ch;
    const h3 = fE.querySelector('h3'); if(h3) h3.innerHTML = h3.innerHTML.replace(/\(HAL \d+\)/, '') + ` (HAL TAMBAHAN: ${ct.toUpperCase()})`;
    sF.querySelectorAll('input:not([type="file"]), select, textarea').forEach((o, i) => { let ci = fE.querySelectorAll('input:not([type="file"]), select, textarea')[i]; if(ci) { ci.value=o.value; ci.setAttribute('value',o.value); if(o.tagName.toLowerCase()==='textarea') ci.innerHTML=o.value; } });
    sF.querySelectorAll('img[id^="prev-"]').forEach((o, i) => { let ci = fE.querySelectorAll('img[id^="prev-"]')[i]; if(ci && o.src && !o.classList.contains('hidden')) { ci.src=o.src; ci.classList.remove('hidden'); fE.querySelector('#'+ci.id.replace('prev-','txt-'))?.classList.add('hidden'); fE.querySelector('#'+ci.id.replace('prev-','btn-rm-'))?.classList.remove('hidden'); singleFilesBase64[o.id.replace('prev-','') + `_dup${nId}`] = o.src; } });
    const hb = document.createElement('button'); hb.type='button'; hb.className='w-full mt-4 bg-red-100 text-red-600 font-bold py-2 rounded-lg'; hb.innerHTML='🗑️ Hapus Tambahan'; hb.onclick = () => hapusHalamanDinamis(nId); fE.appendChild(hb); document.getElementById('form-pages-wrapper').appendChild(fE);
    const nP = document.createElement('div'); nP.id = `preview-page-${nId}`; nP.className = `paper-a4 flex flex-col bg-white ${[6,7,29,30].includes(sId) ? 'landscape' : ''}`; document.getElementById('print-area').appendChild(nP);
    dynamicPagesConfig.push({ id: nId, sourceId: sId, customTitle: ct, dupNum: dn }); pageOrder.splice(pageOrder.indexOf(sId) + 1, 0, nId); refreshDOMOrder();
    if(gridConfigs[sId]) rebuildFormByPrefix(`${gridConfigs[sId].id.replace('-inputs-container','')}_dup${nId}`);
    buildNavigasiForm(); buildNavigasiPreview(); switchForm(nId); showToast(`✅ Halaman diduplikasi!`, 'success'); updateReport(); triggerAutoSave();
}
function hapusHalamanDinamis(pId) { document.getElementById('form-page-' + pId)?.remove(); document.getElementById('preview-page-' + pId)?.remove(); dynamicPagesConfig = dynamicPagesConfig.filter(p => p.id !== pId); pageOrder = pageOrder.filter(id => id !== pId); Object.keys(dynamicArrays).forEach(k => { if(k.includes(`_dup${pId}`)) delete dynamicArrays[k]; }); Object.keys(singleFilesBase64).forEach(k => { if(k.includes(`_dup${pId}`)) delete singleFilesBase64[k]; }); refreshDOMOrder(); buildNavigasiForm(); buildNavigasiPreview(); switchForm(pageOrder[0]); updateReport(); triggerAutoSave(); }

function getArrayByPrefix(p) {
    const t = { 'ev':evidenceData, 'opm':opmData, 'opm2':opm2Data, 'opm3':opm3Data, 'opm4':opm4Data, 'evossm':evossmData, 'lk':lkData, 'pc':pcData, 'evps':evpsData, 'evdd':evddData, 'evrp':evrpData, 'evhl1':evhl1Data, 'evhl2':evhl2Data, 'evde1':evde1Data, 'evde2':evde2Data, 'evde3':evde3Data, 'evsc':evscData, 'evsc2':evsc2Data, 'evpu':evpuData };
    if(t[p]) return t[p];
    if(p.includes('_dup')) { if(!dynamicArrays[p]) { dynamicArrays[p] = []; getArrayByPrefix(p.split('_dup')[0]).forEach(i => dynamicArrays[p].push({file:i.file, preview:i.preview, caption:i.caption})); } return dynamicArrays[p]; }
}
function rebuildFormByPrefix(p) {
    const b = { 'ev':buildEvidenceFormInputs, 'opm':buildOpmFormInputs, 'opm2':buildOpm2FormInputs, 'opm3':buildOpm3FormInputs, 'opm4':buildOpm4FormInputs, 'evossm':buildEvossmFormInputs, 'lk':buildLkFormInputs, 'pc':buildPcFormInputs, 'evps':buildEvpsFormInputs, 'evdd':buildEvddFormInputs, 'evrp':buildEvrpFormInputs, 'evhl1':buildEvhl1FormInputs, 'evhl2':buildEvhl2FormInputs, 'evde1':buildEvde1FormInputs, 'evde2':buildEvde2FormInputs, 'evde3':buildEvde3FormInputs, 'evsc':buildEvscFormInputs, 'evsc2':buildEvsc2FormInputs, 'evpu':buildEvpuFormInputs };
    if(b[p]) return b[p]();
    if(p.includes('_dup')) { let parts = p.split('_dup'), c = gridConfigs[parts[0]]; if(c) generateFormInputs(getArrayByPrefix(p), `${c.id}_dup${parts[1]}`, p, c.limit); }
}

function rebuildSemuaFormInputs() { buildEvidenceFormInputs(); buildOpmFormInputs(); buildOpm2FormInputs(); buildOpm3FormInputs(); buildOpm4FormInputs(); buildEvossmFormInputs(); buildLkFormInputs(); buildPcFormInputs(); buildEvpsFormInputs(); buildEvddFormInputs(); buildEvrpFormInputs(); buildEvhl1FormInputs(); buildEvhl2FormInputs(); buildEvde1FormInputs(); buildEvde2FormInputs(); buildEvde3FormInputs(); buildEvscFormInputs(); buildEvsc2FormInputs(); buildEvpuFormInputs(); }
function buildEvidenceFormInputs() { generateFormInputs(evidenceData, 'evidence-inputs-container', 'ev', 6); }
function buildOpmFormInputs() { generateFormInputs(opmData, 'opm-inputs-container', 'opm', 9); }
function buildOpm2FormInputs() { generateFormInputs(opm2Data, 'opm2-inputs-container', 'opm2', 3); }
function buildOpm3FormInputs() { generateFormInputs(opm3Data, 'opm3-inputs-container', 'opm3', 9); }
function buildOpm4FormInputs() { generateFormInputs(opm4Data, 'opm4-inputs-container', 'opm4', 3); }
function buildEvossmFormInputs() { generateFormInputs(evossmData, 'evossm-inputs-container', 'evossm', 6); }
function buildLkFormInputs() { generateFormInputs(lkData, 'lk-inputs-container', 'lk', 2); }
function buildPcFormInputs() { generateFormInputs(pcData, 'pc-inputs-container', 'pc', 3); }
function buildEvpsFormInputs() { generateFormInputs(evpsData, 'evps-inputs-container', 'evps', 3); }
function buildEvddFormInputs() { generateFormInputs(evddData, 'evdd-inputs-container', 'evdd', 3); }
function buildEvrpFormInputs() { generateFormInputs(evrpData, 'evrp-inputs-container', 'evrp', 3); }
function buildEvhl1FormInputs() { generateFormInputs(evhl1Data, 'evhl1-inputs-container', 'evhl1', 9); }
function buildEvhl2FormInputs() { generateFormInputs(evhl2Data, 'evhl2-inputs-container', 'evhl2', 3); }
function buildEvde1FormInputs() { generateFormInputs(evde1Data, 'evde1-inputs-container', 'evde1', 9); }
function buildEvde2FormInputs() { generateFormInputs(evde2Data, 'evde2-inputs-container', 'evde2', 9); }
function buildEvde3FormInputs() { generateFormInputs(evde3Data, 'evde3-inputs-container', 'evde3', 9); }
function buildEvscFormInputs() { generateFormInputs(evscData, 'evsc-inputs-container', 'evsc', 9); }
function buildEvsc2FormInputs() { generateFormInputs(evsc2Data, 'evsc2-inputs-container', 'evsc2', 6); }
function buildEvpuFormInputs() { generateFormInputs(evpuData, 'evpu-inputs-container', 'evpu', 9); }

// ==========================================
// DRAG & DROP FOTO
// ==========================================
let dragSourcePrefix = null, dragSourceIndex = null;
window.handleDragStart = function(e, p, i) { dragSourcePrefix=p; dragSourceIndex=i; e.dataTransfer.effectAllowed='move'; setTimeout(() => e.target?.classList.add('opacity-40'), 10); };
window.handleDragEnd = function(e) { e.target?.classList.remove('opacity-40'); dragSourcePrefix=null; dragSourceIndex=null; };
window.handleDragOver = function(e) { e.preventDefault(); e.dataTransfer.dropEffect='move'; e.target.closest('.drop-zone-item')?.classList.add('ring-2', 'ring-red-500'); };
window.handleDragLeaveItem = function(e) { e.target.closest('.drop-zone-item')?.classList.remove('ring-2', 'ring-red-500'); };
window.handleDrop = function(e, tP, tI) {
    e.preventDefault(); e.stopPropagation(); e.target.closest('.drop-zone-item')?.classList.remove('ring-2', 'ring-red-500');
    if (e.dataTransfer.files && e.dataTransfer.files.length>0) {
        if(e.dataTransfer.files[0].type.startsWith('image/')) { const r=new FileReader(); r.onload=(evt)=>{ let a=getArrayByPrefix(tP); a[tI].file=null; a[tI].preview=evt.target.result; rebuildFormByPrefix(tP); updateReport(); updateDashboard(); triggerAutoSave(); showToast("✅ Ditarik!", "success"); }; r.readAsDataURL(e.dataTransfer.files[0]); }
    } else if (dragSourcePrefix!==null && dragSourceIndex!==null) {
        let sA=getArrayByPrefix(dragSourcePrefix), tA=getArrayByPrefix(tP), kS=dragSourcePrefix+'_'+dragSourceIndex, kT=tP+'_'+tI, tp=sA[dragSourceIndex].preview, tf=sA[dragSourceIndex].file; sA[dragSourceIndex].preview=tA[tI].preview; sA[dragSourceIndex].file=tA[tI].file; tA[tI].preview=tp; tA[tI].file=tf; let tTf=imageTransforms[kS]; imageTransforms[kS]=imageTransforms[kT]; imageTransforms[kT]=tTf; rebuildFormByPrefix(dragSourcePrefix); if(dragSourcePrefix!==tP) rebuildFormByPrefix(tP); updateReport(); updateDashboard(); triggerAutoSave(); showToast("🔄 Ditukar!", "success");
    } dragSourcePrefix=null; dragSourceIndex=null;
};
document.addEventListener('dragover', (e) => { const d=e.target.closest('.border-dashed'), i=e.target.closest('.drop-zone-item'); if(d&&!i) { e.preventDefault(); d.classList.add('bg-red-200'); } });
document.addEventListener('dragleave', (e) => { const d=e.target.closest('.border-dashed'), i=e.target.closest('.drop-zone-item'); if(d&&!i) { e.preventDefault(); d.classList.remove('bg-red-200'); } });
document.addEventListener('drop', (e) => {
    const d=e.target.closest('.border-dashed'), i=e.target.closest('.drop-zone-item');
    if(d&&!i) { e.preventDefault(); d.classList.remove('bg-red-200'); if(e.dataTransfer.files && e.dataTransfer.files.length>0) { const m = d.querySelector('input[multiple]'), s = d.querySelector('input:not([multiple])'); if(m) { let f=m.getAttribute('onchange')?.match(/handleMultipleArray\(.*,\s*'([^']+)',\s*(\d+)\)/); if(f) handleMultipleArray(e.dataTransfer.files, f[1], parseInt(f[2])); } else if(s) { s.files = e.dataTransfer.files; s.dispatchEvent(new Event('change', {bubbles:true})); } } }
});

function handleTableUpload(input, pId, tId, btnRmId=null) {
    if(input.files && input.files[0]) {
        if(input.files[0].type === 'application/pdf') { showToast("⚠️ Format PDF digunakan."); document.getElementById(pId).src = 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg'; document.getElementById(pId).classList.remove('hidden'); document.getElementById(tId).classList.add('hidden'); document.getElementById(btnRmId)?.classList.remove('hidden'); updateReport(); updateDashboard(); triggerAutoSave(); return; }
        if(!input.files[0].type.startsWith('image/')) return;
        const r = new FileReader(); r.onload = function(e) { document.getElementById(pId).src = e.target.result; document.getElementById(pId).classList.remove('hidden'); document.getElementById(tId).classList.add('hidden'); document.getElementById(btnRmId)?.classList.remove('hidden'); let sK = input.id.replace('inp-file-','').replace('tabel-','tb').replace('-p',''); if(!singleFilesStatus[sK] && sK!=='otdr' && sK!=='otdr2' && sK!=='otdr3' && sK!=='kml' && sK!=='mancore') sK = pId.replace('prev-',''); singleFilesStatus[sK]=true; singleFilesBase64[sK] = e.target.result; updateReport(); updateDashboard(); triggerAutoSave(); showToast("✅ File diupload!", "success"); }; r.readAsDataURL(input.files[0]);
    }
}
function generateFormInputs(dA, cId, px, lim) {
    const c = document.getElementById(cId); if(!c) return; c.innerHTML = '';
    for(let index = 0; index < lim; index++) { const item = dA[index]; const iC = item.preview ? `<img src="${item.preview}" class="w-full h-full object-contain pointer-events-none rounded-lg">` : `<span class="text-[10px] text-red-400 font-medium group-hover:scale-110 transition text-center leading-tight pointer-events-none">Klik / Drop<br>Gambar</span>`; c.innerHTML += `<div class="drop-zone-item border p-2 rounded-xl bg-white relative shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing border-dashed border-2 border-transparent hover:border-red-200" draggable="true" ondragstart="handleDragStart(event, '${px}', ${index})" ondragend="handleDragEnd(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeaveItem(event)" ondrop="handleDrop(event, '${px}', ${index})"><div onclick="document.getElementById('${px}-file-${index}').click()" class="h-28 bg-red-50/50 mb-2 cursor-pointer flex items-center justify-center relative group rounded-lg overflow-hidden border border-dashed border-red-200 hover:border-red-400">${iC}</div>${item.preview ? `<button onclick="removeImgArray('${px}', ${index})" type="button" class="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full text-xs font-bold leading-none shadow hover:bg-red-700 hover:scale-110 z-10">&times;</button>` : ''}<input type="text" oninput="updateCaptionArray('${px}', ${index}, this.value)" class="w-full text-[10px] sm:text-xs border-b border-transparent hover:border-red-200 p-1 text-center font-bold uppercase rounded outline-none focus:border-red-500 focus:bg-red-50" value="${item.caption}"><input type="file" id="${px}-file-${index}" accept="image/*" class="hidden" onchange="handleSingleArray(this, '${px}', ${index})"></div>`; }
}
function handleSingleArray(inpt, px, i) { if(inpt.files && inpt.files[0]) { const r=new FileReader(); r.onload=function(e){ let tA=getArrayByPrefix(px); tA[i].file=null; tA[i].preview=e.target.result; rebuildFormByPrefix(px); updateReport(); updateDashboard(); triggerAutoSave(); showToast("✅ Uploaded!", "success"); }; r.readAsDataURL(inpt.files[0]); } }
function handleMultipleArray(fs, px, mx) { let tA=getArrayByPrefix(px), fA=Array.from(fs).filter(f=>f.type.startsWith('image/')).slice(0,mx); if(fA.length===0) return; let fI=0, uC=0; for(let i=0;i<mx;i++) { if(!tA[i].preview && fI<fA.length) { const r=new FileReader(); let cI=i; r.onload=function(e){ tA[cI].file=null; tA[cI].preview=e.target.result; rebuildFormByPrefix(px); updateReport(); updateDashboard(); triggerAutoSave(); }; r.readAsDataURL(fA[fI++]); uC++; } } if(uC>0) showToast(`✅ ${uC} Gambar diupload!`, "success"); }
function removeImgArray(px, i) { event.stopPropagation(); let tA=getArrayByPrefix(px); tA[i].file=null; tA[i].preview=''; rebuildFormByPrefix(px); updateReport(); updateDashboard(); triggerAutoSave(); }
function updateCaptionArray(px, i, v) { getArrayByPrefix(px)[i].caption=v; updateReport(); }

// === MOUSE INTERACTION (GESER & RESIZE GAMBAR) ===
let isDraggingImgPreview=false, isResizingImg=false, activeTfKey=null, activeEl=null, startX, startY, startW, startH, startOx, startOy, resizeDir='';
document.addEventListener('mousedown', (e) => { 
    if (e.target.classList.contains('res-handle') || e.target.classList.contains('drag-area')) { 
        activeEl = e.target.closest('.resizable-wrapper'); if (!activeEl) return; activeTfKey = activeEl.dataset.key;
        if (activeTfKey && (activeTfKey.includes('boq') || activeTfKey.includes('tb6') || activeTfKey.includes('tb7'))) return; 
        const parent = activeEl.parentElement; if (parent) { const rect = parent.getBoundingClientRect(); if (!parent.dataset.locked) { parent.style.width = rect.width + 'px'; parent.style.height = rect.height + 'px'; parent.style.overflow = 'hidden'; parent.dataset.locked = 'true'; } activeEl.style.maxWidth = 'none'; activeEl.style.maxHeight = 'none'; }
        if (e.target.classList.contains('res-handle')) { isResizingImg = true; resizeDir = e.target.dataset.dir; startW = activeEl.offsetWidth; startH = activeEl.offsetHeight; if (!imageTransforms[activeTfKey]) imageTransforms[activeTfKey] = { w: startW, h: startH, ox: 0, oy: 0 }; startW = imageTransforms[activeTfKey].w || startW; startH = imageTransforms[activeTfKey].h || startH; } 
        else if (e.target.classList.contains('drag-area')) { isDraggingImgPreview = true; if(!imageTransforms[activeTfKey]) imageTransforms[activeTfKey] = { w: '100%', h: '100%', ox: 0, oy: 0 }; startOx = imageTransforms[activeTfKey].ox || 0; startOy = imageTransforms[activeTfKey].oy || 0; }
        startX = e.clientX; startY = e.clientY; e.preventDefault(); 
    } 
});
document.addEventListener('mousemove', (e) => { 
    if (isResizingImg && activeEl) { let dx=e.clientX-startX, dy=e.clientY-startY, nW=startW, nH=startH; if(resizeDir.includes('e')) nW=startW+(dx*2); if(resizeDir.includes('w')) nW=startW-(dx*2); if(resizeDir.includes('s')) nH=startH+(dy*2); if(resizeDir.includes('n')) nH=startH-(dy*2); if(nW<20) nW=20; if(nH<20) nH=20; imageTransforms[activeTfKey].w=nW; imageTransforms[activeTfKey].h=nH; activeEl.style.width=nW+'px'; activeEl.style.height=nH+'px'; } 
    else if (isDraggingImgPreview && activeEl) { let nOx=startOx+(e.clientX-startX), nOy=startOy+(e.clientY-startY); imageTransforms[activeTfKey].ox=nOx; imageTransforms[activeTfKey].oy=nOy; activeEl.style.transform=`translate(${nOx}px, ${nOy}px)`; }
});
window.addEventListener('mouseup', () => { if(isDraggingImgPreview||isResizingImg) { isDraggingImgPreview=false; isResizingImg=false; activeEl=null; triggerAutoSave(); }});

// === UPDATE REPORT PREVIEW (30 HALAMAN PDF RENDERING) ===
const safeVal = id => document.getElementById(id)?.value.trim() || '-';
const getVal = id => document.getElementById(id)?.value || '';
const renderParaf = () => globalParaf ? `<div class="paraf-wrapper"><img src="${globalParaf}"></div>` : '';

function createResizableWrapper(imgSrc, key, tf) {
    let w = tf.w ? (typeof tf.w === 'number' ? tf.w + 'px' : tf.w) : '100%', h = tf.h ? (typeof tf.h === 'number' ? tf.h + 'px' : tf.h) : '100%', ox = tf.ox || 0, oy = tf.oy || 0;
    return `<div class="resizable-wrapper group mx-auto my-auto relative no-print-outline" style="width: ${w}; height: ${h}; display: block; position: relative; transform: translate(${ox}px, ${oy}px);" data-key="${key}"><img src="${imgSrc}" class="w-full h-full pointer-events-none" style="object-fit: fill; display: block;"><div class="drag-area absolute inset-0 cursor-grab z-10 no-print"></div><div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-n-resize z-20 no-print" style="top:-5px; left:0; right:0; height:10px;" data-dir="n"></div><div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-s-resize z-20 no-print" style="bottom:-5px; left:0; right:0; height:10px;" data-dir="s"></div><div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-e-resize z-20 no-print" style="top:0; bottom:0; right:-5px; width:10px;" data-dir="e"></div><div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-w-resize z-20 no-print" style="top:0; bottom:0; left:-5px; width:10px;" data-dir="w"></div><div class="res-handle absolute bg-white border border-blue-500 cursor-nw-resize z-30 no-print opacity-0 group-hover:opacity-100" style="top:-5px; left:-5px; width:10px; height:10px; border-radius:50%;" data-dir="nw"></div><div class="res-handle absolute bg-white border border-blue-500 cursor-ne-resize z-30 no-print opacity-0 group-hover:opacity-100" style="top:-5px; right:-5px; width:10px; height:10px; border-radius:50%;" data-dir="ne"></div><div class="res-handle absolute bg-white border border-blue-500 cursor-sw-resize z-30 no-print opacity-0 group-hover:opacity-100" style="bottom:-5px; left:-5px; width:10px; height:10px; border-radius:50%;" data-dir="sw"></div><div class="res-handle absolute bg-white border border-blue-500 cursor-se-resize z-30 no-print opacity-0 group-hover:opacity-100" style="bottom:-5px; right:-5px; width:10px; height:10px; border-radius:50%;" data-dir="se"></div><div class="absolute inset-0 pointer-events-none border border-transparent group-hover:border-blue-400 z-10 no-print"></div></div>`;
}

function getSingleImg(pId, key) { const img = document.getElementById(pId); if(img && !img.classList.contains('hidden') && img.src && !img.src.endsWith('index.html')) return createResizableWrapper(img.src, key, imageTransforms[key] || defaultTf); return ''; }

function updateReport() {
    let gD = { proyek: safeVal('inp-proyek'), kontrak: safeVal('inp-kontrak'), sp: safeVal('inp-sp'), district: safeVal('inp-district'), lokasi: safeVal('inp-lokasi'), pelaksana: safeVal('inp-pelaksana') };
    const kH = (t) => `<div class="flex justify-between items-center mb-6 shrink-0"><img src="${logoKiriUrl}" class="h-[30px] object-contain"><h2 class="text-xl font-bold uppercase text-center flex-1 mx-4">${t}</h2><img src="${logoKananUrl}" class="h-[30px] object-contain"></div><div class="border-t-[3px] border-black mb-[2px]"></div><div class="border-t-[1px] border-black mb-4"></div>`;
    const gT = `<div class="text-[12px] font-bold leading-relaxed mb-8 uppercase shrink-0"><div class="flex"><div class="w-36">PROYEK</div><div class="w-4">:</div><div class="flex-1">${gD.proyek}</div></div><div class="flex"><div class="w-36">KONTRAK</div><div class="w-4">:</div><div class="flex-1">${gD.kontrak}</div></div><div class="flex"><div class="w-36">SURAT PESANAN</div><div class="w-4">:</div><div class="flex-1">${gD.sp}</div></div><div class="flex"><div class="w-36">DISTRICT</div><div class="w-4">:</div><div class="flex-1">${gD.district}</div></div><div class="flex"><div class="w-36">LOKASI</div><div class="w-4">:</div><div class="flex-1">${gD.lokasi}</div></div><div class="flex"><div class="w-36">PELAKSANA</div><div class="w-4">:</div><div class="flex-1">${gD.pelaksana}</div></div></div>`;
    const eHI = `<div class="text-[11px] font-bold leading-tight w-full mb-3 uppercase shrink-0"><div class="flex mb-1"><div class="w-[150px]">PROYEK</div><div class="w-4 text-center">:</div><div class="flex-1">${gD.proyek}</div></div><div class="flex mb-1"><div class="w-[150px]">NO. KONTRAK</div><div class="w-4 text-center">:</div><div class="flex-1">${gD.kontrak}</div></div><div class="flex mb-1"><div class="w-[150px]">NO. SP</div><div class="w-4 text-center">:</div><div class="flex-1">${gD.sp}</div></div><div class="flex mb-1"><div class="w-[150px]">DISTRICT</div><div class="w-4 text-center">:</div><div class="flex-1">${gD.district}</div></div><div class="flex mb-1"><div class="w-[150px]">LOKASI</div><div class="w-4 text-center">:</div><div class="flex-1">${gD.lokasi}</div></div><div class="flex mb-1"><div class="w-[150px]">PELAKSANA</div><div class="w-4 text-center">:</div><div class="flex-1">${gD.pelaksana}</div></div></div><div class="border-t-[3px] border-black mb-2"></div>`;
    const eH = (t) => `<div class="flex justify-between items-center mb-4 shrink-0"><img src="${logoKiriUrl}" class="h-[30px]"><h2 class="text-lg font-bold uppercase text-center flex-1 mx-4">${t}</h2><img src="${logoKananUrl}" class="h-[30px]"></div><div class="border-t-[3px] border-black mb-[2px]"></div><div class="border-t-[1px] border-black mb-4"></div>` + eHI;

    const p1 = document.getElementById('preview-page-1'); if(p1) p1.innerHTML = `<div class="flex justify-between items-start mb-6 shrink-0"><img src="${logoKiriUrl}" class="h-[30px]"><img src="${logoKananUrl}" class="h-[30px]"></div><h2 class="text-2xl font-bold uppercase text-center mb-4 shrink-0">LAPORAN COMMISSIONING TEST (LACT)</h2><div class="border-t-[2px] border-black mb-[2px]"></div><div class="border-t-[1px] border-black mb-6"></div>${gT}<div class="w-full flex justify-center mt-20 mb-16 shrink-0"><img src="${logoTengahUrl}" class="w-[320px]"></div><div class="w-full text-center text-[16px] font-bold space-y-6 shrink-0"><p>ANTARA</p><p>PT. TELKOM INFRASTRUKTUR INDONESIA, Tbk.</p><p>DENGAN</p><p>PT. TELKOM AKSES</p></div>`;
    let lH=''; document.querySelectorAll('#container-daftar-isi input').forEach((i, x) => { if(i.value.trim() !== '') lH += `<div class="flex gap-3 uppercase font-bold text-[14px] mb-4"><span>${x+1}.</span><span>${i.value}</span></div>`; }); const p2 = document.getElementById('preview-page-2'); if(p2) p2.innerHTML = `<div class="flex justify-between items-center mb-16 mt-4 shrink-0"><img src="${logoKiriUrl}" class="h-[30px]"><img src="${logoKananUrl}" class="h-[30px]"></div><h1 class="text-xl font-bold text-center mb-16 shrink-0">DAFTAR ISI<br>DOKUMEN LAPORAN COMMISIONING TEST</h1><div class="px-8">${lH}</div>`;
    
    function rH3(sx="") { const dt=safeVal('inp-tgl-3'+sx); return `${kH('LAPORAN COMMISSIONING TEST')}${gT}<p class="text-[12px] mb-4">Pada hari ini <span class="font-bold uppercase">${dt!=='-'?spellDate(dt):'......'}</span>, bertanda tangan di bawah ini:</p><div class="text-[12px] ml-4 mb-4"><div class="flex"><div class="w-6">1.</div><div class="w-24">Nama</div><div class="w-4">:</div><div class="font-bold uppercase">${safeVal('inp-nama-3'+sx)}</div></div><div class="flex"><div class="w-6"></div><div class="w-24">NIK</div><div class="w-4">:</div><div class="uppercase">${safeVal('inp-nik-3'+sx)}</div></div><div class="flex mt-2"><div class="w-6"></div><div class="w-24">Jabatan</div><div class="w-4">:</div><div class="uppercase">${safeVal('inp-jabatan-3'+sx)}</div></div></div><p class="text-[12px] mb-4">Menerangkan telah melaksanakan Commisioning Test fisik di <span class="font-bold uppercase">${gD.lokasi}</span>:</p><div class="text-[12px] ml-4 mb-4 space-y-3"><div class="flex"><div class="w-6">1.</div><div>Pelaksanaan pekerjaan <b>telah / belum</b> diselesaikan.</div></div><div class="flex"><div class="w-6">2.</div><div>Hasil Pekerjaan <b>dapat / tidak dapat</b> diterima.</div></div></div><div class="w-full flex justify-end mt-4 text-[12px] font-bold text-center"><div class="w-64"><p class="uppercase">${safeVal('inp-tempat-ttd-p4'+sx)}, ${dt!=='-'?formatTanggal(dt):'.......'}</p><p class="uppercase mt-1">${safeVal('inp-jabatan-3'+sx)}</p><div class="h-20 w-full">${globalTTD?`<img src="${globalTTD}" class="h-20 mx-auto">`:''}</div><p class="underline uppercase">${safeVal('inp-nama-3'+sx)}</p><p class="uppercase">NIK. ${safeVal('inp-nik-3'+sx)}</p></div></div>`; }
    const p3 = document.getElementById('preview-page-3'); if(p3) p3.innerHTML = rH3();

    function rH4(sx="") { let bi=getSingleImg('prev-boq'+sx, 'boq'+sx); return `${kH('BOQ COMMISSIONING TEST')}${gT}<div class="w-full mb-4 shrink-0">${bi?`<div class="w-full overflow-hidden flex items-center justify-center" style="max-height:400px;">${bi}</div>`:'(Tabel BOQ Belum Diupload)'}</div><div class="w-full flex justify-end text-[12px] font-bold text-center"><div class="w-64"><p class="uppercase">${safeVal('inp-tempat-ttd-p4'+sx)}, ${safeVal('inp-tgl-ttd-p4'+sx)}</p><p class="uppercase mt-1">${safeVal('inp-jabatan-ttd-p4'+sx)}</p><div class="h-16 w-full">${globalTTD?`<img src="${globalTTD}" class="h-16 mx-auto">`:''}</div><p class="underline uppercase">${safeVal('inp-nama-ttd-p4'+sx)}</p><p class="uppercase">NIK. ${safeVal('inp-nik-ttd-p4'+sx)}</p></div></div>`; }
    const p4 = document.getElementById('preview-page-4'); if(p4) p4.innerHTML = rH4();

    const pT = { 5:{t:'EVIDENCE PROGRES',p:'ev',c:'evidence-grid'},8:{t:'EVIDENCE HASIL UKUR OPM',p:'opm',c:'opm-grid'},9:{t:'EVIDENCE HASIL UKUR OPM',p:'opm2',c:'opm-grid-3'},10:{t:'EVIDENCE HASIL UKUR OPM',p:'opm3',c:'opm-grid'},11:{t:'EVIDENCE HASIL UKUR OPM',p:'opm4',c:'opm-grid-3'},12:{t:'EVIDENCE OS-SM',p:'evossm',c:'evidence-grid'},13:{t:'LABEL KABEL',p:'lk'},14:{t:'EVIDENCE PATCHCORD',p:'pc',c:'opm-grid-3'},15:{t:'EVIDENCE PS-1-4 ODC',p:'evps',c:'opm-grid-3'},16:{t:'EVIDENCE DD-HDPE & BC-TR',p:'evdd',c:'opm-grid-3'},17:{t:'EVIDENCE RISE PIPE',p:'evrp',c:'opm-grid-3'},18:{t:'EVIDENCE AKSESORIS HL 1',p:'evhl1',c:'opm-grid'},19:{t:'EVIDENCE AKSESORIS HL LANJUTAN',p:'evhl2',c:'opm-grid-3'},20:{t:'EVIDENCE AKSESORIS PU-AS DE',p:'evde1',c:'opm-grid'},21:{t:'EVIDENCE AKSESORIS PU-AS DE',p:'evde2',c:'opm-grid'},22:{t:'EVIDENCE AKSESORIS PU-AS DE',p:'evde3',c:'opm-grid'},23:{t:'EVIDENCE AKSESORIS SC 1',p:'evsc',c:'opm-grid'},24:{t:'EVIDENCE AKSESORIS SC LANJUTAN',p:'evsc2',c:'evidence-grid'},25:{t:'EVIDEN PU-S7.0-400NM',p:'evpu',c:'opm-grid'} };

    function rGrid(sx, id) {
        const c=pT[id]; if(!c) return''; const pr=sx?c.p+sx:c.p;
        if(c.type==='lk') { let a=getArrayByPrefix(pr)||[], s0=a[0]?.preview?createResizableWrapper(a[0].preview,pr+'_0',imageTransforms[pr+'_0']||defaultTf):'', s1=a[1]?.preview?createResizableWrapper(a[1].preview,pr+'_1',imageTransforms[pr+'_1']||defaultTf):''; return `${eH(c.t)}<div class="opm-grid-3 w-full mt-2"><div class="photo-item"><div class="opm-img-wrapper">${s0}</div><div class="photo-caption">${a[0]?.caption||''}</div></div><div class="photo-item"><div class="opm-img-wrapper">${s1}</div><div class="photo-caption">${a[1]?.caption||''}</div></div><div class="photo-item flex flex-col justify-between"><div class="flex-1 flex items-center justify-center p-4 text-center font-bold text-[13px]" style="min-height: 170px;">${safeVal('inp-label-kabel-text'+sx)}</div><div class="photo-caption border-t-2 border-black">PANJANG KABEL</div></div></div>${globalParaf?`<div class="paraf-wrapper"><img src="${globalParaf}"></div>`:''}`; }
        let h=`<div class="${c.c} w-full mt-2">`; (getArrayByPrefix(pr)||[]).forEach((i,x)=>{ if(!i)return; let k=pr+'_'+x; h+=`<div class="photo-item"><div class="opm-img-wrapper">${i.preview?createResizableWrapper(i.preview,k,imageTransforms[k]||defaultTf):''}</div><div class="photo-caption">${i.caption||'&nbsp;'}</div></div>`; }); h+='</div>'; return eH(c.t)+h+(globalParaf?`<div class="paraf-wrapper"><img src="${globalParaf}"></div>`:'');
    }

    [5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].forEach(id=>{ const d=document.getElementById('preview-page-'+id); if(d) d.innerHTML=rGrid('',id); });

    function rLscpTbl(sx, h7) {
        let bI=h7?'7':'6', im=getSingleImg(`prev-tb${bI}${sx}`,`tb${bI}${sx}`), jd=safeVal(`inp-judul-p${bI}${sx}`);
        return `<div class="flex justify-between items-center mb-4"><img src="${logoKiriUrl}" class="h-[30px]"><h2 class="text-base font-bold uppercase text-center flex-1 mx-4 leading-tight">${jd}<br>PROJECT OUTSIDE PLANT FIBER OPTIC</h2><img src="${logoKananUrl}" class="h-[30px]"></div><div class="border-t-[1.5px] border-black mb-[2px]"></div><div class="border-t-[1.5px] border-black mb-3"></div><div class="font-bold leading-tight w-full mb-4 uppercase text-[11px]"><div class="flex mb-1"><div class="w-[180px] italic">OPERATION WAVE LENGTH</div><div class="w-4">:</div><div class="flex-1 italic">${safeVal('inp-wave-'+bI+sx)}</div></div><div class="flex mb-1"><div class="w-[180px]">PROJECT</div><div class="w-4">:</div><div class="flex-1">${gD.proyek}</div></div><div class="flex mb-1"><div class="w-[180px]">SURAT PESANAN</div><div class="w-4">:</div><div class="flex-1">${gD.sp}</div></div><div class="flex mb-1"><div class="w-[180px]">TIPE KABEL</div><div class="w-4">:</div><div class="flex-1">${safeVal('inp-tipe-kabel-'+bI+sx)}</div></div><div class="flex mb-1"><div class="w-[180px]">JUMLAH CORE</div><div class="w-4">:</div><div class="flex-1">${safeVal('inp-jml-core-'+bI+sx)}</div></div><div class="flex mb-1"><div class="w-[180px]">NAMA LOKASI</div><div class="w-4">:</div><div class="flex-1">${gD.lokasi}</div></div><div class="flex mb-1"><div class="w-[180px]">CATUAN</div><div class="w-4">:</div><div class="flex-1">${safeVal('inp-catuan-'+bI+sx)}</div></div></div><div class="border-t border-black mb-4"></div><div class="w-full mb-4">${im?`<div class="w-full flex justify-center" style="max-height:350px;">${im}</div>`:'(Tabel Kosong)'}</div><div class="w-full flex justify-end text-[12px] font-bold text-center mt-4"><div class="w-64"><p class="uppercase">${safeVal(`inp-tempat-ttd-p${bI}${sx}`)}, ${safeVal(`inp-tgl-ttd-p${bI}${sx}`)}</p><p class="uppercase mt-1">${safeVal(`inp-jabatan-ttd-p${bI}${sx}`)}</p><div class="h-16 w-full">${globalTTD?`<img src="${globalTTD}" class="h-16 mx-auto">`:''}</div><p class="underline uppercase">${safeVal(`inp-nama-ttd-p${bI}${sx}`)}</p><p class="uppercase">NIK. ${safeVal(`inp-nik-ttd-p${bI}${sx}`)}</p></div></div>`;
    }
    const p6=document.getElementById('preview-page-6'); if(p6) p6.innerHTML=rLscpTbl();
    const p7=document.getElementById('preview-page-7'); if(p7) p7.innerHTML=rLscpTbl('',true);

    function rOTDR(sx, pv, ti, sT) {
        let i=getSingleImg(pv+sx, pv.replace('prev-','')+sx), bT=getVal(sT+sx);
        return `<div class="flex justify-between items-center mb-4"><img src="${logoKiriUrl}" class="h-[30px]"><h2 class="text-lg font-bold uppercase text-center flex-1 mx-4">${getVal(ti+sx)||'REPORT OTDR'}</h2><img src="${logoKananUrl}" class="h-[30px]"></div><div class="border-t-[3px] border-black mb-[2px]"></div><div class="border-t-[1px] border-black mb-4"></div>${eHI}${bT?`<h3 class="text-center font-bold text-[14px] mt-1 mb-2">${bT}</h3>`:''}<div class="w-full flex-1 min-h-0 flex flex-col justify-start pb-2">${i?`<div class="resize-wrapper w-full h-full">${i}</div>`:'(OTDR Belum Upload)'}</div>${globalParaf?`<div class="paraf-wrapper"><img src="${globalParaf}"></div>`:''}`;
    }
    const p26=document.getElementById('preview-page-26'); if(p26) p26.innerHTML=rOTDR("","prev-otdr","inp-otdr-title","inp-otdr-subtitle");
    const p27=document.getElementById('preview-page-27'); if(p27) p27.innerHTML=rOTDR("","prev-otdr2","inp-otdr2-title","inp-otdr2-subtitle");
    const p28=document.getElementById('preview-page-28'); if(p28) p28.innerHTML=rOTDR("","prev-otdr3","inp-otdr3-title","inp-otdr3-subtitle");

    function rLscpImg(sx, tl, pv) { let i=getSingleImg(pv+sx, pv.replace('prev-','')+sx); return `${eH(tl)}<div class="w-full flex-1 min-h-0 flex flex-col justify-center pb-4">${i?`<div class="resize-wrapper w-full h-full">${i}</div>`:'(Gambar Belum Upload)'}</div>${globalParaf?`<div class="paraf-wrapper"><img src="${globalParaf}"></div>`:''}`; }
    const p29=document.getElementById('preview-page-29'); if(p29) p29.innerHTML=rLscpImg("","LAMPIRAN KML","prev-kml");
    const p30=document.getElementById('preview-page-30'); if(p30) p30.innerHTML=rLscpImg("","LAMPIRAN MANCORE","prev-mancore");

    dynamicPagesConfig.forEach(c => {
        let sx = "_dup"+c.id, d = document.getElementById('preview-page-'+c.id); if(!d) return;
        if(c.sourceId===1) d.innerHTML=p1.innerHTML; else if(c.sourceId===2) d.innerHTML=p2.innerHTML; else if(c.sourceId===3) d.innerHTML=rH3(sx); else if(c.sourceId===4) d.innerHTML=rH4(sx); else if([5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].includes(c.sourceId)) d.innerHTML=rGrid(sx, c.sourceId); else if(c.sourceId===6) d.innerHTML=rLscpTbl(sx, false); else if(c.sourceId===7) d.innerHTML=rLscpTbl(sx, true); else if(c.sourceId===26) d.innerHTML=rOTDR(sx, "prev-otdr", "inp-otdr-title", "inp-otdr-subtitle"); else if(c.sourceId===27) d.innerHTML=rOTDR(sx, "prev-otdr2", "inp-otdr2-title", "inp-otdr2-subtitle"); else if(c.sourceId===28) d.innerHTML=rOTDR(sx, "prev-otdr3", "inp-otdr3-title", "inp-otdr3-subtitle"); else if(c.sourceId===29) d.innerHTML=rLscpImg(sx, "LAMPIRAN KML", "prev-kml"); else if(c.sourceId===30) d.innerHTML=rLscpImg(sx, "LAMPIRAN MANCORE", "prev-mancore");
    });
}

function cetakNative() {
    document.getElementById('modal-export').classList.add('hidden'); let errors = [];
    const checkTxt = (id, pg, name) => { const el = document.getElementById(id); if (pageOrder.includes(pg) && (!el || !el.value.trim() || el.value.trim() === '-')) errors.push({msg: `Hal ${pg}: "${name}" kosong!`, page: pg}); };
    const checkImg = (key, pg, name) => { if (pageOrder.includes(pg) && !singleFilesStatus[key]) errors.push({msg: `Hal ${pg}: "${name}" belum diupload!`, page: pg}); };
    const checkGrid = (prefix, pg, name) => { if (pageOrder.includes(pg)) { let arr = getArrayByPrefix(prefix) || []; if (!arr.some(item => item && item.preview)) errors.push({msg: `Hal ${pg}: "${name}" minimal 1 foto!`, page: pg}); } };

    if (!globalTTD) errors.push({msg: "GLOBAL: Tanda Tangan Utama belum dibuat di menu Kelola TTD!", page: 3}); if (!globalParaf) errors.push({msg: "GLOBAL: Paraf Inisial belum dibuat di menu Kelola TTD!", page: 5});

    checkTxt('inp-proyek', 1, 'Nama Proyek'); checkTxt('inp-kontrak', 1, 'Nomor Kontrak'); checkTxt('inp-sp', 1, 'Surat Pesanan'); checkTxt('inp-district', 1, 'District'); checkTxt('inp-lokasi', 1, 'Lokasi'); checkTxt('inp-pelaksana', 1, 'Pelaksana');
    checkTxt('inp-tgl-3', 3, 'Tanggal Laporan'); checkTxt('inp-nama-3', 3, 'Nama Petugas'); checkTxt('inp-nik-3', 3, 'NIK Petugas'); checkTxt('inp-jabatan-3', 3, 'Jabatan Petugas');
    checkImg('boq', 4, 'Tabel BOQ'); checkTxt('inp-tempat-ttd-p4', 4, 'Tempat & Tanggal (TTD)');
    
    ['6', '7'].forEach(p => { let pageNum = parseInt(p); checkTxt(`inp-wave-${p}`, pageNum, 'Wave Length'); checkTxt(`inp-tipe-kabel-${p}`, pageNum, 'Tipe Kabel'); checkTxt(`inp-jml-core-${p}`, pageNum, 'Jumlah Core'); checkTxt(`inp-catuan-${p}`, pageNum, 'Catuan'); });
    checkImg('tb6', 6, 'Tabel Parameter OPM'); checkImg('tb7', 7, 'Tabel Data OPM');

    checkGrid('ev', 5, 'Evidence Progres'); checkGrid('opm', 8, 'Evidence OPM ODP 1'); checkGrid('opm2', 9, 'Evidence OPM Lanjutan ODP 1'); checkGrid('opm3', 10, 'Evidence OPM ODP 2'); checkGrid('opm4', 11, 'Evidence OPM Lanjutan ODP 2');
    checkGrid('evossm', 12, 'Evidence OS-SM'); checkTxt('inp-label-kabel-text', 13, 'Keterangan Panjang Label Kabel'); checkGrid('lk', 13, 'Evidence Label Kabel'); checkGrid('pc', 14, 'Evidence Patchcord'); checkGrid('evps', 15, 'Evidence PS ODC'); checkGrid('evdd', 16, 'Evidence DD-HDPE & BC-TR'); checkGrid('evrp', 17, 'Evidence Rise Pipe'); checkGrid('evhl1', 18, 'Evidence Aksesoris HL 1'); checkGrid('evhl2', 19, 'Evidence Aksesoris HL Lanjutan'); checkGrid('evde1', 20, 'Evidence Aksesoris DE 1'); checkGrid('evde2', 21, 'Evidence Aksesoris DE 2'); checkGrid('evde3', 22, 'Evidence Aksesoris DE 3'); checkGrid('evsc', 23, 'Evidence Aksesoris SC 1'); checkGrid('evsc2', 24, 'Evidence Aksesoris SC Lanjutan'); checkGrid('evpu', 25, 'EVIDEN PU-S7.0-400NM');
    checkTxt('inp-otdr-title', 26, 'Judul Report OTDR 1'); checkImg('otdr1', 26, 'Report OTDR 1'); checkTxt('inp-otdr2-title', 27, 'Judul Report OTDR 2'); checkImg('otdr2', 27, 'Report OTDR 2'); checkTxt('inp-otdr3-title', 28, 'Judul Report OTDR Catuan'); checkImg('otdr3', 28, 'Report OTDR Catuan'); checkImg('kml', 29, 'Lampiran Maps/KML'); checkImg('mancore', 30, 'Lampiran Mancore');

    dynamicPagesConfig.forEach(cfg => {
        const pageNum = cfg.id; const suffix = `_dup${cfg.id}`; if (!pageOrder.includes(pageNum)) return;
        if (cfg.sourceId === 3) { checkTxt('inp-tgl-3'+suffix, pageNum, 'Tanggal Laporan (Duplikat)'); checkTxt('inp-nama-3'+suffix, pageNum, 'Nama Petugas (Duplikat)'); }
        if (cfg.sourceId === 4 && !singleFilesBase64['boq'+suffix]) errors.push({msg: `Hal ${pageNum}: Gambar Tabel BOQ (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 6 || cfg.sourceId === 7) { let baseId = cfg.sourceId; if(!singleFilesBase64[`tb${baseId}${suffix}`]) errors.push({msg: `Hal ${pageNum}: Gambar Tabel (Duplikat) belum diupload!`, page: pageNum}); checkTxt(`inp-wave-${baseId}${suffix}`, pageNum, 'Wave Length (Duplikat)'); }
        if (cfg.sourceId === 26 && !singleFilesBase64['otdr1'+suffix]) errors.push({msg: `Hal ${pageNum}: Report OTDR 1 (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 27 && !singleFilesBase64['otdr2'+suffix]) errors.push({msg: `Hal ${pageNum}: Report OTDR 2 (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 28 && !singleFilesBase64['otdr3'+suffix]) errors.push({msg: `Hal ${pageNum}: Report OTDR Catuan (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 29 && !singleFilesBase64['kml'+suffix]) errors.push({msg: `Hal ${pageNum}: Lampiran KML (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 30 && !singleFilesBase64['mancore'+suffix]) errors.push({msg: `Hal ${pageNum}: Lampiran Mancore (Duplikat) belum diupload!`, page: pageNum});
        const gSP = { 5:'ev', 8:'opm', 9:'opm2', 10:'opm3', 11:'opm4', 12:'evossm', 13:'lk', 14:'pc', 15:'evps', 16:'evdd', 17:'evrp', 18:'evhl1', 19:'evhl2', 20:'evde1', 21:'evde2', 22:'evde3', 23:'evsc', 24:'evsc2', 25:'evpu' }; if (gSP[cfg.sourceId]) checkGrid(gSP[cfg.sourceId] + suffix, pageNum, cfg.customTitle);
    });

    if(errors.length > 0) {
        const list = document.getElementById('warning-list'); list.innerHTML = '';
        errors.slice(0, 10).forEach(e => { list.innerHTML += `<li class="cursor-pointer hover:text-red-600 hover:bg-red-100 py-2 px-2 rounded font-semibold text-sm border-b border-red-100 flex items-start gap-2" onclick="goToErrorPage(${e.page})"><span class="mt-0.5">⚠️</span><span>${e.msg}</span></li>`; });
        if (errors.length > 10) list.innerHTML += `<li class="py-2 px-2 text-center font-bold text-red-600 italic">...dan ${errors.length - 10} data error lainnya.</li>`;
        document.getElementById('modal-warning').classList.remove('hidden'); showToast(`⚠️ Gagal cetak! Ditemukan ${errors.length} data yang belum lengkap.`, 'error'); return;
    }
    window.print();
}
function forcePrint() { document.getElementById('modal-warning').classList.add('hidden'); showToast("Mencetak paksa (Bypass)."); window.print(); }
function goToErrorPage(pageId) { document.getElementById('modal-warning').classList.add('hidden'); if (!isSplitScreenActive) switchTab('form-tab'); switchForm(pageId); showToast(`📍 Halaman ${pageId}`); }