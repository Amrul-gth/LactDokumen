// ==============================================================================
// SISTEM LOGIN (GITHUB PAGES ROUTING)
// ==============================================================================
if (!sessionStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    window.location.href = 'login.html';
}

// ==============================================================================
// PENGATURAN LOGO GLOBAL
// ==============================================================================
let logoKiriUrl = 'assets/images/infra1.png';    
let logoTengahUrl = 'assets/images/infra1.png'; 
let logoKananUrl = 'assets/images/telkomlogo.png';        

// ==============================================================================
// ARRAY DATA GAMBAR UNTUK SEMUA HALAMAN (STATE ASLI)
// ==============================================================================
let evidenceData = [{ file: null, preview: '', caption: 'PROGRES MATERIAL DELIVERY' },{ file: null, preview: '', caption: 'PROGRES TERMINASI' },{ file: null, preview: '', caption: 'PROGRES OTDR' },{ file: null, preview: '', caption: 'PROGRES PENARIKAN' },{ file: null, preview: '', caption: 'PROGRES INSTAL AKSESORIS' },{ file: null, preview: '', caption: 'PROGRES SURVEY CORE ODC' }];
let opmData = [{ file: null, preview: '', caption: 'P-OUT SPL-1.04 ODC' },{ file: null, preview: '', caption: 'DMP-FAH 63' },{ file: null, preview: '', caption: 'AKSESORIS ODP' },{ file: null, preview: '', caption: 'PORT 1' },{ file: null, preview: '', caption: 'PORT 2' },{ file: null, preview: '', caption: 'PORT 3' },{ file: null, preview: '', caption: 'PORT 4' },{ file: null, preview: '', caption: 'PORT 5' },{ file: null, preview: '', caption: 'PORT 6' }];
let opm2Data = [{ file: null, preview: '', caption: 'PORT 7' },{ file: null, preview: '', caption: 'PORT 8' },{ file: null, preview: '', caption: '' }];
let opm3Data = [{ file: null, preview: '', caption: 'P-OUT SPL-1.04 ODC' },{ file: null, preview: '', caption: 'DMP-FAH 64' },{ file: null, preview: '', caption: 'AKSESORIS ODP' },{ file: null, preview: '', caption: 'PORT 1' },{ file: null, preview: '', caption: 'PORT 2' },{ file: null, preview: '', caption: 'PORT 3' },{ file: null, preview: '', caption: 'PORT 4' },{ file: null, preview: '', caption: 'PORT 5' },{ file: null, preview: '', caption: 'PORT 6' }];
let opm4Data = [{ file: null, preview: '', caption: 'PORT 7' },{ file: null, preview: '', caption: 'PORT 8' },{ file: null, preview: '', caption: '' }];
let lkData = [{ file: null, preview: '', caption: 'LABEL KABEL - A' },{ file: null, preview: '', caption: 'LABEL KABEL - B' }];
let pcData = [{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];
let evpsData = [{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];
let evhl1Data = [{ file: null, preview: '', caption: 'PU-AS-HL 1-2' },{ file: null, preview: '', caption: 'PU-AS-HL 3-4' },{ file: null, preview: '', caption: 'PU-AS-HL 5-6' },{ file: null, preview: '', caption: 'PU-AS-HL 7-8' },{ file: null, preview: '', caption: 'PU-AS-HL 9-10' },{ file: null, preview: '', caption: 'PU-AS-HL 11-12' },{ file: null, preview: '', caption: 'PU-AS-HL 13-14' },{ file: null, preview: '', caption: 'PU-AS-HL 15-16' },{ file: null, preview: '', caption: 'PU-AS-HL 17' }];
let evhl2Data = [{ file: null, preview: '', caption: 'PU-AS-HL 18' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];
let evscData = [{ file: null, preview: '', caption: 'PU-AS-SC 1' },{ file: null, preview: '', caption: 'PU-AS-SC 2' },{ file: null, preview: '', caption: 'PU-AS-SC 3' },{ file: null, preview: '', caption: 'PU-AS-SC 4' },{ file: null, preview: '', caption: 'PU-AS-SC 5' },{ file: null, preview: '', caption: 'PU-AS-SC 6' },{ file: null, preview: '', caption: 'PU-AS-SC 7' },{ file: null, preview: '', caption: 'PU-AS-SC 8' },{ file: null, preview: '', caption: 'PU-AS-SC 9' }];
let evsc2Data = [{ file: null, preview: '', caption: 'PU-AS-SC 10' },{ file: null, preview: '', caption: 'PU-AS-SC 11' },{ file: null, preview: '', caption: 'PU-AS-SC 12' },{ file: null, preview: '', caption: 'PU-AS-SC 13' },{ file: null, preview: '', caption: '' },{ file: null, preview: '', caption: '' }];

let singleFilesStatus = { boq: false, tb6: false, tb7: false, otdr1: false, otdr2: false, otdr3: false, kml: false, mancore: false };
let singleFilesBase64 = { boq: '', tb6: '', tb7: '', otdr1: '', otdr2: '', otdr3: '', kml: '', mancore: '' }; 

// GLOBAL TTD & PARAF STATE
let globalTTD = '';
let globalParaf = '';

// IMAGE TRANSFORMS STATE (UNTUK RESIZE LEBAR/TINGGI & GESER POSISI)
let imageTransforms = {}; 
const defaultTf = { w: '100%', h: '100%', ox: 0, oy: 0 }; 

// ARRAY DINAMIS
let dynamicArrays = {};

// STATE SISTEM PENGURUTAN HALAMAN
let totalPages = 23;
let pageOrder = Array.from({length: 23}, (_, i) => i + 1); 
let dynamicPagesConfig = []; 
let duplicateCounts = {}; 

let isSplitScreenActive = false;

const pageTitles = [
    "Global", "Daftar Isi", "Laporan", "BOQ", "Ev Prog", "Tb OPM 1 (Lscp)", "Tb OPM 2 (Lscp)", 
    "OPM 1", "Ljt 1", "OPM 2", "Ljt 2", "Lbl Kbl", "Patchcord", "PS ODC", 
    "Aks HL", "Ljt HL", "Aks SC", "Ljt SC", "OTDR 1", "OTDR 2", "OTDR 3", "KML (Lscp)", "Mancore (Lscp)"
];

const gridConfigs = {
    'ev': { id: 'evidence-inputs-container', limit: 6 },
    'opm': { id: 'opm-inputs-container', limit: 9 },
    'opm2': { id: 'opm2-inputs-container', limit: 3 },
    'opm3': { id: 'opm3-inputs-container', limit: 9 },
    'opm4': { id: 'opm4-inputs-container', limit: 3 },
    'lk': { id: 'lk-inputs-container', limit: 2 },
    'pc': { id: 'pc-inputs-container', limit: 3 },
    'evps': { id: 'evps-inputs-container', limit: 3 },
    'evhl1': { id: 'evhl1-inputs-container', limit: 9 },
    'evhl2': { id: 'evhl2-inputs-container', limit: 3 },
    'evsc': { id: 'evsc-inputs-container', limit: 9 },
    'evsc2': { id: 'evsc2-inputs-container', limit: 6 }
};

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();

    buildNavigasiForm();
    buildNavigasiPreview();
    
    buildEvidenceFormInputs(); buildOpmFormInputs(); buildOpm2FormInputs(); buildOpm3FormInputs(); buildOpm4FormInputs();
    buildLkFormInputs(); buildPcFormInputs(); buildEvpsFormInputs(); buildEvhl1FormInputs(); buildEvhl2FormInputs();
    buildEvscFormInputs(); buildEvsc2FormInputs(); 
    generateTerbilang(); 
    updateReport();
    initSignature();

    const handleScrollSpy = function() {
        if(!isSplitScreenActive && document.getElementById('report-tab').classList.contains('hidden')) return;
        
        let current = pageOrder[0];
        const scrollPos = this.scrollTop + 200; 
        for(let i=0; i<pageOrder.length; i++) { 
            const pageId = pageOrder[i];
            const page = document.getElementById('preview-page-' + pageId);
            if(page && page.offsetTop <= scrollPos) current = pageId;
        }
        const selectEl = document.getElementById('preview-page-select');
        if(selectEl && selectEl.value != current) selectEl.value = current;
    };

    const mainContent = document.getElementById('main-content-scroll');
    if(mainContent) mainContent.addEventListener('scroll', handleScrollSpy);

    const reportTab = document.getElementById('report-tab');
    if(reportTab) reportTab.addEventListener('scroll', handleScrollSpy);
});

// ==========================================
// TOAST NOTIFICATION DENGAN TEMA WARNA
// ==========================================
function showToast(message, type = 'normal') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    let borderColor = type === 'error' ? 'border-red-500' : (type === 'success' ? 'border-green-500' : 'border-orange-500');
    
    toast.className = `bg-slate-800 text-white px-4 py-3 rounded-lg shadow-xl text-sm opacity-0 transform translate-y-2 transition-all duration-300 z-50 flex items-center border-l-4 ${borderColor}`;
    toast.innerText = message;
    toastContainer.appendChild(toast);
    
    requestAnimationFrame(() => { toast.classList.remove('opacity-0', 'translate-y-2'); });
    setTimeout(() => { toast.classList.add('opacity-0', 'translate-y-2'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ==========================================
// CLEAR SIDEBAR ACTIVE STATES
// ==========================================
function clearActiveMenu() {
    const buttons = document.querySelectorAll('aside nav .nav-btn');
    buttons.forEach(btn => { 
        btn.classList.remove('bg-gradient-to-r', 'from-red-600', 'to-orange-500', 'text-white', 'shadow-md'); 
        btn.classList.add('text-gray-300'); 
    });
}

// ==========================================
// FITUR 4: SPLIT SCREEN MODE
// ==========================================
function toggleSplitScreen() {
    isSplitScreenActive = !isSplitScreenActive;
    const mainScroll = document.getElementById('main-content-scroll');
    const formTab = document.getElementById('form-tab');
    const reportTab = document.getElementById('report-tab');
    const dashboardTab = document.getElementById('dashboard-tab');
    const btn = document.getElementById('btn-split-screen');

    if(isSplitScreenActive) {
        clearActiveMenu();
        btn.innerHTML = `<span class="text-lg">🪟</span> Matikan Split Screen`;
        btn.classList.add('bg-indigo-600', 'text-white');
        
        mainScroll.classList.add('split-mode-active');
        formTab.classList.remove('hidden', 'max-w-6xl', 'mx-auto');
        reportTab.classList.remove('hidden');
        dashboardTab.classList.add('hidden');
        
        showToast("🪟 Split Screen Kiri-Kanan Aktif!");

        const activeForm = document.querySelector('.form-page-section:not(.hidden)');
        if(activeForm) {
            const activeId = activeForm.id.replace('form-page-', '');
            scrollToPage(activeId);
        }
    } else {
        btn.innerHTML = `<span class="text-lg">🪟</span> Split Screen Mode`;
        btn.classList.remove('bg-indigo-600', 'text-white');
        
        mainScroll.classList.remove('split-mode-active');
        formTab.classList.add('max-w-6xl', 'mx-auto');
        reportTab.classList.add('hidden');
        
        switchTab('form-tab');
        showToast("Tampilan normal diaktifkan.");
    }
    updateReport();
}

// ==========================================
// FITUR 3: DIGITAL SIGNATURE & PARAF PAD
// ==========================================
let ctxTtd, ctxParaf;

function initCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if(!canvas) return null;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';

    const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        if(e.touches) { return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top }; }
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    let isDrawing = false;
    const startDraw = (e) => { e.preventDefault(); isDrawing = true; const pos = getPos(e); ctx.beginPath(); ctx.moveTo(pos.x, pos.y); };
    const draw = (e) => { e.preventDefault(); if(!isDrawing) return; const pos = getPos(e); ctx.lineTo(pos.x, pos.y); ctx.stroke(); };
    const endDraw = () => { isDrawing = false; ctx.closePath(); };

    canvas.addEventListener('mousedown', startDraw); canvas.addEventListener('mousemove', draw); canvas.addEventListener('mouseup', endDraw); canvas.addEventListener('mouseout', endDraw);
    canvas.addEventListener('touchstart', startDraw, {passive:false}); canvas.addEventListener('touchmove', draw, {passive:false}); canvas.addEventListener('touchend', endDraw);
    
    return ctx;
}

function initSignature() {
    ctxTtd = initCanvas('sig-canvas-ttd');
    ctxParaf = initCanvas('sig-canvas-paraf');
}

function openModalSignature() { 
    clearActiveMenu(); 
    document.getElementById('modal-signature').classList.remove('hidden'); 
    
    if(globalTTD) renderImgToCanvas('sig-canvas-ttd', globalTTD);
    if(globalParaf) renderImgToCanvas('sig-canvas-paraf', globalParaf);
}

function closeModalSignature() { 
    document.getElementById('modal-signature').classList.add('hidden'); 
    if (!isSplitScreenActive) {
        if (!document.getElementById('form-tab').classList.contains('hidden')) switchTab('form-tab');
        else if (!document.getElementById('report-tab').classList.contains('hidden')) switchTab('report-tab');
        else switchTab('dashboard-tab');
    }
}

function clearCanvas(canvasId) { 
    const cvs = document.getElementById(canvasId);
    if(!cvs) return;
    const context = cvs.getContext('2d');
    context.clearRect(0, 0, cvs.width, cvs.height); 
    
    if(canvasId === 'sig-canvas-ttd') globalTTD = '';
    if(canvasId === 'sig-canvas-paraf') globalParaf = '';
}

// Magic Eraser (Menghapus Background Putih/Terang menjadi transparan)
function renderImgToCanvas(canvasId, base64Url) {
    const cvs = document.getElementById(canvasId);
    if(!cvs) return;
    const ctx = cvs.getContext('2d');
    const img = new Image();
    img.onload = () => {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        const hRatio = cvs.width / img.width;
        const vRatio = cvs.height / img.height;
        const ratio  = Math.min(hRatio, vRatio);
        const centerShift_x = (cvs.width - img.width*ratio) / 2;
        const centerShift_y = (cvs.height - img.height*ratio) / 2;  
        
        ctx.drawImage(img, 0,0, img.width, img.height, centerShift_x, centerShift_y, img.width*ratio, img.height*ratio);  

        // MAGIC ERASER logic (Threshold putih)
        const imageData = ctx.getImageData(0, 0, cvs.width, cvs.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i] > 200 && data[i+1] > 200 && data[i+2] > 200) {
                data[i+3] = 0; 
            }
        }
        ctx.putImageData(imageData, 0, 0);

        if(canvasId === 'sig-canvas-ttd') globalTTD = cvs.toDataURL('image/png');
        if(canvasId === 'sig-canvas-paraf') globalParaf = cvs.toDataURL('image/png');
    };
    img.src = base64Url;
}

function handleGlobalUpload(input, canvasId) {
    if(input.files && input.files[0]) {
        const file = input.files[0];
        if(!file.type.startsWith('image/')) { showToast("❌ Harus format gambar!", 'error'); return; }
        const reader = new FileReader();
        reader.onload = (e) => {
            renderImgToCanvas(canvasId, e.target.result);
            showToast("✅ Gambar dimuat & Background putih otomatis dihapus!", 'success');
        };
        reader.readAsDataURL(file);
    }
}

function applySignature() {
    const cvsTtd = document.getElementById('sig-canvas-ttd');
    const cvsParaf = document.getElementById('sig-canvas-paraf');
    
    const blankTtd = document.createElement('canvas'); blankTtd.width = cvsTtd.width; blankTtd.height = cvsTtd.height;
    const blankParaf = document.createElement('canvas'); blankParaf.width = cvsParaf.width; blankParaf.height = cvsParaf.height;
    
    const dataTtd = cvsTtd.toDataURL('image/png');
    const dataParaf = cvsParaf.toDataURL('image/png');
    
    if(dataTtd !== blankTtd.toDataURL()) { globalTTD = dataTtd; }
    if(dataParaf !== blankParaf.toDataURL()) { globalParaf = dataParaf; }

    closeModalSignature();
    updateReport();
    updateDashboard();
    triggerAutoSave();
    showToast("✅ Tanda Tangan & Paraf berhasil diterapkan ke semua form!", 'success');
}

// ==========================================
// FITUR: HAPUS GAMBAR SATUAN KHUSUS (TOMBOL X)
// ==========================================
function removeSingleImg(e, inputId, prevId, txtId, btnRmId, stateKey) {
    e.stopPropagation(); 
    
    document.getElementById(prevId).src = '';
    document.getElementById(prevId).classList.add('hidden');
    document.getElementById(txtId).classList.remove('hidden');
    document.getElementById(inputId).value = '';
    document.getElementById(btnRmId).classList.add('hidden');

    if (singleFilesStatus[stateKey] !== undefined) singleFilesStatus[stateKey] = false;
    if (singleFilesBase64[stateKey] !== undefined) singleFilesBase64[stateKey] = '';

    updateReport();
    updateDashboard();
    triggerAutoSave();
    showToast("🗑️ Gambar berhasil dihapus");
}

// ==============================================================================
// FITUR 1: REVISION DETECTOR & ERROR CLICK JUMP (FULL VALIDASI)
// ==============================================================================
function cetakNative() {
    document.getElementById('modal-export').classList.add('hidden');
    
    let errors = [];

    const checkTxt = (id, pageNum, fieldName) => {
        const el = document.getElementById(id);
        if (pageOrder.includes(pageNum) && (!el || el.value.trim() === '' || el.value.trim() === '-')) {
            errors.push({msg: `Hal ${pageNum}: Input Teks "${fieldName}" masih kosong!`, page: pageNum});
        }
    };

    const checkImg = (stateKey, pageNum, fieldName) => {
        if (pageOrder.includes(pageNum) && !singleFilesStatus[stateKey]) {
            errors.push({msg: `Hal ${pageNum}: Gambar Screenshot "${fieldName}" belum diupload!`, page: pageNum});
        }
    };

    const checkGrid = (prefix, pageNum, fieldName) => {
        if (pageOrder.includes(pageNum)) {
            let arr = getArrayByPrefix(prefix) || [];
            let hasImg = arr.some(item => item && item.preview && item.preview !== '');
            if (!hasImg) {
                errors.push({msg: `Hal ${pageNum}: Evidence Foto "${fieldName}" masih kosong (Minimal isi 1 foto)!`, page: pageNum});
            }
        }
    };

    if (!globalTTD) errors.push({msg: "GLOBAL: Tanda Tangan Utama belum dibuat di menu Kelola TTD!", page: 3});
    if (!globalParaf) errors.push({msg: "GLOBAL: Paraf Inisial belum dibuat di menu Kelola TTD!", page: 5});

    checkTxt('inp-proyek', 1, 'Nama Proyek');
    checkTxt('inp-kontrak', 1, 'Nomor Kontrak');
    checkTxt('inp-sp', 1, 'Surat Pesanan');
    checkTxt('inp-district', 1, 'District');
    checkTxt('inp-lokasi', 1, 'Lokasi');
    checkTxt('inp-pelaksana', 1, 'Pelaksana');

    checkTxt('inp-tgl-3', 3, 'Tanggal Laporan');
    checkTxt('inp-nama-3', 3, 'Nama Petugas');
    checkTxt('inp-nik-3', 3, 'NIK Petugas');
    checkTxt('inp-jabatan-3', 3, 'Jabatan Petugas');

    checkImg('boq', 4, 'Tabel BOQ');
    checkTxt('inp-tempat-ttd-p4', 4, 'Tempat & Tanggal (TTD)');
    
    ['6', '7'].forEach(p => {
        let pageNum = parseInt(p);
        checkTxt(`inp-wave-${p}`, pageNum, 'Wave Length');
        checkTxt(`inp-tipe-kabel-${p}`, pageNum, 'Tipe Kabel');
        checkTxt(`inp-jml-core-${p}`, pageNum, 'Jumlah Core');
        checkTxt(`inp-catuan-${p}`, pageNum, 'Catuan');
    });
    checkImg('tb6', 6, 'Tabel Parameter OPM (Hal 6)');
    checkImg('tb7', 7, 'Tabel Data OPM (Hal 7)');

    checkGrid('ev', 5, 'Evidence Progres');
    checkGrid('opm', 8, 'Evidence OPM ODP 1');
    checkGrid('opm2', 9, 'Evidence OPM Lanjutan ODP 1');
    checkGrid('opm3', 10, 'Evidence OPM ODP 2');
    checkGrid('opm4', 11, 'Evidence OPM Lanjutan ODP 2');
    
    checkTxt('inp-label-kabel-text', 12, 'Keterangan Panjang Label Kabel');
    checkGrid('lk', 12, 'Evidence Label Kabel');
    
    checkGrid('pc', 13, 'Evidence Patchcord');
    checkGrid('evps', 14, 'Evidence PS ODC');
    checkGrid('evhl1', 15, 'Evidence Aksesoris HL 1');
    checkGrid('evhl2', 16, 'Evidence Aksesoris HL Lanjutan');
    checkGrid('evsc', 17, 'Evidence Aksesoris SC 1');
    checkGrid('evsc2', 18, 'Evidence Aksesoris SC Lanjutan');

    checkTxt('inp-otdr-title', 19, 'Judul Report OTDR 1');
    checkImg('otdr1', 19, 'Report OTDR 1');
    
    checkTxt('inp-otdr2-title', 20, 'Judul Report OTDR 2');
    checkImg('otdr2', 20, 'Report OTDR 2');
    
    checkTxt('inp-otdr3-title', 21, 'Judul Report OTDR Catuan');
    checkImg('otdr3', 21, 'Report OTDR Catuan');
    
    checkImg('kml', 22, 'Lampiran Maps/KML');
    checkImg('mancore', 23, 'Lampiran Mancore');

    dynamicPagesConfig.forEach(cfg => {
        const pageNum = cfg.id;
        const suffix = `_dup${cfg.id}`;
        if (!pageOrder.includes(pageNum)) return;

        if (cfg.sourceId === 3) {
            checkTxt('inp-tgl-3'+suffix, pageNum, 'Tanggal Laporan (Duplikat)');
            checkTxt('inp-nama-3'+suffix, pageNum, 'Nama Petugas (Duplikat)');
        }
        if (cfg.sourceId === 4 && !singleFilesBase64['boq'+suffix]) {
            errors.push({msg: `Hal ${pageNum}: Gambar Tabel BOQ (Duplikat) belum diupload!`, page: pageNum});
        }
        if (cfg.sourceId === 6 || cfg.sourceId === 7) {
            let baseId = cfg.sourceId;
            if(!singleFilesBase64[`tb${baseId}${suffix}`]) {
                errors.push({msg: `Hal ${pageNum}: Gambar Tabel (Duplikat) belum diupload!`, page: pageNum});
            }
            checkTxt(`inp-wave-${baseId}${suffix}`, pageNum, 'Wave Length (Duplikat)');
        }
        if (cfg.sourceId === 19 && !singleFilesBase64['otdr1'+suffix]) errors.push({msg: `Hal ${pageNum}: Report OTDR 1 (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 20 && !singleFilesBase64['otdr2'+suffix]) errors.push({msg: `Hal ${pageNum}: Report OTDR 2 (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 21 && !singleFilesBase64['otdr3'+suffix]) errors.push({msg: `Hal ${pageNum}: Report OTDR Catuan (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 22 && !singleFilesBase64['kml'+suffix]) errors.push({msg: `Hal ${pageNum}: Lampiran KML (Duplikat) belum diupload!`, page: pageNum});
        if (cfg.sourceId === 23 && !singleFilesBase64['mancore'+suffix]) errors.push({msg: `Hal ${pageNum}: Lampiran Mancore (Duplikat) belum diupload!`, page: pageNum});

        const gridSourcePrefixes = { 5:'ev', 8:'opm', 9:'opm2', 10:'opm3', 11:'opm4', 12:'lk', 13:'pc', 14:'evps', 15:'evhl1', 16:'evhl2', 17:'evsc', 18:'evsc2' };
        if (gridSourcePrefixes[cfg.sourceId]) {
            checkGrid(gridSourcePrefixes[cfg.sourceId] + suffix, pageNum, cfg.customTitle);
        }
    });

    if(errors.length > 0) {
        const list = document.getElementById('warning-list');
        list.innerHTML = '';
        
        const maxDisplay = 10;
        errors.slice(0, maxDisplay).forEach(e => { 
            list.innerHTML += `
                <li class="cursor-pointer hover:text-red-600 hover:bg-red-100 transition-all py-2 px-2 rounded font-semibold text-sm border-b border-red-100 last:border-0 flex items-start gap-2" onclick="goToErrorPage(${e.page})">
                    <span class="mt-0.5">⚠️</span> 
                    <span>${e.msg}</span>
                </li>`; 
        });

        if (errors.length > maxDisplay) {
            list.innerHTML += `
                <li class="py-2 px-2 text-center font-bold text-red-600 italic">
                    ...dan ${errors.length - maxDisplay} data error lainnya.
                </li>`;
        }

        document.getElementById('modal-warning').classList.remove('hidden');
        showToast(`⚠️ Gagal cetak! Ditemukan ${errors.length} data yang belum lengkap.`, 'error');
        return;
    }

    window.print();
}

function forcePrint() {
    document.getElementById('modal-warning').classList.add('hidden');
    showToast("Mencetak dengan paksa (Bypass Validator).");
    window.print();
}

function goToErrorPage(pageId) {
    document.getElementById('modal-warning').classList.add('hidden');
    if (!isSplitScreenActive) {
        switchTab('form-tab');
    }
    switchForm(pageId);
    showToast(`📍 Meluncur ke Halaman ${pageId}`);
}

// ==========================================
// FITUR: MODAL RESET PROJECT CUSTOM
// ==========================================
function openModalReset() {
    clearActiveMenu();
    document.getElementById('modal-reset').classList.remove('hidden');
}
function closeModalReset() {
    document.getElementById('modal-reset').classList.add('hidden');
    if (!isSplitScreenActive) {
        if (!document.getElementById('form-tab').classList.contains('hidden')) switchTab('form-tab');
        else if (!document.getElementById('report-tab').classList.contains('hidden')) switchTab('report-tab');
        else switchTab('dashboard-tab');
    }
}

function confirmResetProject() {
    closeModalReset();
    
    singleFilesStatus = { boq: false, tb6: false, tb7: false, otdr1: false, otdr2: false, otdr3: false, kml: false, mancore: false };
    singleFilesBase64 = { boq: '', tb6: '', tb7: '', otdr1: '', otdr2: '', otdr3: '', kml: '', mancore: '' }; 
    globalTTD = '';
    globalParaf = '';
    imageTransforms = {}; 

    const allArrays = [evidenceData, opmData, opm2Data, opm3Data, opm4Data, lkData, pcData, evpsData, evhl1Data, evhl2Data, evscData, evsc2Data];
    allArrays.forEach(arr => {
        arr.forEach(item => { item.file = null; item.preview = ''; });
    });

    dynamicPagesConfig.forEach(cfg => {
        const formEl = document.getElementById('form-page-' + cfg.id);
        const printEl = document.getElementById('preview-page-' + cfg.id);
        if(formEl) formEl.remove();
        if(printEl) printEl.remove();
    });
    dynamicPagesConfig = [];
    duplicateCounts = {};
    pageOrder = Array.from({length: 23}, (_, i) => i + 1);
    totalPages = 23;
    dynamicArrays = {};

    document.querySelectorAll('img[id^="prev-"]').forEach(img => {
        img.src = '';
        img.classList.add('hidden');
    });
    document.querySelectorAll('[id^="txt-"]').forEach(txt => {
        txt.classList.remove('hidden');
    });
    document.querySelectorAll('[id^="btn-rm-"]').forEach(btn => {
        btn.classList.add('hidden');
    });
    
    clearCanvas('sig-canvas-ttd');
    clearCanvas('sig-canvas-paraf');
    document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');

    refreshDOMOrder();
    buildNavigasiForm();
    buildNavigasiPreview();

    buildEvidenceFormInputs(); buildOpmFormInputs(); buildOpm2FormInputs(); buildOpm3FormInputs(); buildOpm4FormInputs();
    buildLkFormInputs(); buildPcFormInputs(); buildEvpsFormInputs(); buildEvhl1FormInputs(); buildEvhl2FormInputs();
    buildEvscFormInputs(); buildEvsc2FormInputs(); 

    switchForm(1);
    updateReport();
    updateDashboard();
    triggerAutoSave(); 
    
    showToast("🔄 Proyek berhasil di-reset ke 23 Halaman Awal!", 'success');
}

// ==========================================
// FITUR 2: AUTO-SAVE KE LOCAL STORAGE
// ==========================================
let autoSaveTimeout = null;

function triggerAutoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        try {
            const data = serializeProjectData();
            localStorage.setItem('revpro_save', JSON.stringify(data));
            console.log("Auto-Save berhasil.");
        } catch (e) {
            console.error(e);
            if(e.name === "QuotaExceededError") {
                showToast("⚠️ Kapasitas LocalStorage Penuh (Foto terlalu banyak).", 'error');
            }
        }
    }, 1500); 
}

function serializeProjectData() {
    let inputs = {};
    document.querySelectorAll('input:not([type="file"]), textarea, select').forEach(el => {
        if(el.id) inputs[el.id] = el.value;
    });

    return {
        inputs: inputs,
        singleFilesStatus: singleFilesStatus,
        singleFilesBase64: singleFilesBase64,
        globalTTD: globalTTD,
        globalParaf: globalParaf,
        imageTransforms: imageTransforms,
        totalPages: totalPages,
        pageOrder: pageOrder,
        dynamicPagesConfig: dynamicPagesConfig,
        duplicateCounts: duplicateCounts,
        arrays: {
            evidenceData, opmData, opm2Data, opm3Data, opm4Data, lkData, pcData, evpsData, evhl1Data, evhl2Data, evscData, evsc2Data
        },
        dynamicArrays: dynamicArrays
    };
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('revpro_save');
    if(saved) {
        try {
            restoreProjectData(JSON.parse(saved));
            console.log("State berhasil di-restore dari LocalStorage.");
        } catch(e) {
            console.error("Gagal load Auto-Save", e);
        }
    }
}

function restoreProjectData(data) {
    totalPages = data.totalPages || 23;
    pageOrder = data.pageOrder || Array.from({length: 23}, (_, i) => i + 1);
    dynamicPagesConfig = data.dynamicPagesConfig || [];
    duplicateCounts = data.duplicateCounts || {};

    document.querySelectorAll('.form-page-section').forEach(el => {
        let id = parseInt(el.id.replace('form-page-', ''));
        if(id > 23) el.remove();
    });
    document.querySelectorAll('#print-area > div').forEach(el => {
        let id = parseInt(el.id.replace('preview-page-', ''));
        if(id > 23) el.remove();
    });

    dynamicPagesConfig.forEach(cfg => {
        const sourceForm = document.getElementById('form-page-' + cfg.sourceId);
        let clonedFormHtml = sourceForm.innerHTML;
        clonedFormHtml = clonedFormHtml.replace(/id="([^"]+)"/g, `id="$1_dup${cfg.id}"`);
        clonedFormHtml = clonedFormHtml.replace(/onclick="document\.getElementById\('([^']+)'\)\.click\(\)"/g, `onclick="document.getElementById('$1_dup${cfg.id}').click()"`);
        clonedFormHtml = clonedFormHtml.replace(/handleTableUpload\(this,\s*'([^']+)',\s*'([^']+)'(?:,\s*'([^']+)')?\)/g, `handleTableUpload(this, '$1_dup${cfg.id}', '$2_dup${cfg.id}', '$3_dup${cfg.id}')`);
        clonedFormHtml = clonedFormHtml.replace(/id="btn-rm-([^"]+)"/g, `id="btn-rm-$1_dup${cfg.id}"`);
        clonedFormHtml = clonedFormHtml.replace(/removeSingleImg\(event,\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\)/g, `removeSingleImg(event, '$1_dup${cfg.id}', '$2_dup${cfg.id}', '$3_dup${cfg.id}', '$4_dup${cfg.id}', '$5_dup${cfg.id}')`);
        
        const prefixes = ['evhl1', 'evhl2', 'evsc2', 'evsc', 'evps', 'opm2', 'opm3', 'opm4', 'opm', 'ev', 'lk', 'pc'];
        prefixes.forEach(p => {
            let re = new RegExp(`'${p}'`, 'g');
            clonedFormHtml = clonedFormHtml.replace(re, `'${p}_dup${cfg.id}'`);
        });

        const formEl = document.createElement('div');
        formEl.id = `form-page-${cfg.id}`; 
        formEl.className = 'form-page-section hidden animate-fade-in';
        formEl.innerHTML = clonedFormHtml;

        const h3 = formEl.querySelector('h3');
        if(h3) h3.innerHTML = h3.innerHTML.replace(/\(HAL \d+\)/, '') + ` (HAL TAMBAHAN: ${cfg.customTitle.toUpperCase()})`;
        
        const hapusBtn = document.createElement('button');
        hapusBtn.type = 'button';
        hapusBtn.className = 'w-full mt-4 bg-red-100 text-red-600 border border-red-300 font-bold py-2 rounded-lg hover:bg-red-200 transition shadow-sm';
        hapusBtn.innerHTML = '🗑️ Hapus Halaman Tambahan Ini';
        hapusBtn.onclick = () => hapusHalamanDinamis(cfg.id);
        formEl.appendChild(hapusBtn);

        document.getElementById('form-pages-wrapper').appendChild(formEl);

        const isLandscape = [6,7,22,23].includes(cfg.sourceId);
        const printArea = document.getElementById('print-area');
        const newPreviewPage = document.createElement('div');
        newPreviewPage.id = `preview-page-${cfg.id}`;
        newPreviewPage.className = `paper-a4 flex flex-col bg-white ${isLandscape ? 'landscape' : ''}`;
        printArea.appendChild(newPreviewPage);
    });

    refreshDOMOrder();

    if(data.inputs) {
        for(let id in data.inputs) {
            let el = document.getElementById(id);
            if(el) {
                el.value = data.inputs[id];
                if(el.tagName === 'TEXTAREA') el.innerHTML = data.inputs[id];
            }
        }
    }

    singleFilesStatus = data.singleFilesStatus || singleFilesStatus;
    singleFilesBase64 = data.singleFilesBase64 || singleFilesBase64;
    globalTTD = data.globalTTD || '';
    globalParaf = data.globalParaf || '';
    imageTransforms = data.imageTransforms || {};

    for(let key in singleFilesBase64) {
        let b64 = singleFilesBase64[key];
        if(b64 && b64 !== '') {
            let imgId = 'prev-' + key; 
            let img = document.getElementById(imgId);
            let txt = document.getElementById(imgId.replace('prev-', 'txt-'));
            let btnRmId = 'btn-rm-' + key;
            let btnRm = document.getElementById(btnRmId);
            
            if(img) { img.src = b64; img.classList.remove('hidden'); }
            if(txt) txt.classList.add('hidden');
            if(btnRm) btnRm.classList.remove('hidden');
        }
    }

    if(data.arrays) {
        evidenceData = data.arrays.evidenceData || evidenceData; opmData = data.arrays.opmData || opmData;
        opm2Data = data.arrays.opm2Data || opm2Data; opm3Data = data.arrays.opm3Data || opm3Data;
        opm4Data = data.arrays.opm4Data || opm4Data; lkData = data.arrays.lkData || lkData;
        pcData = data.arrays.pcData || pcData; evpsData = data.arrays.evpsData || evpsData;
        evhl1Data = data.arrays.evhl1Data || evhl1Data; evhl2Data = data.arrays.evhl2Data || evhl2Data;
        evscData = data.arrays.evscData || evscData; evsc2Data = data.arrays.evsc2Data || evsc2Data;
    }
    if(data.dynamicArrays) {
        dynamicArrays = data.dynamicArrays;
    }

    buildNavigasiForm();
    buildNavigasiPreview();
    
    buildEvidenceFormInputs(); buildOpmFormInputs(); buildOpm2FormInputs(); buildOpm3FormInputs(); buildOpm4FormInputs();
    buildLkFormInputs(); buildPcFormInputs(); buildEvpsFormInputs(); buildEvhl1FormInputs(); buildEvhl2FormInputs();
    buildEvscFormInputs(); buildEvsc2FormInputs(); 
    
    dynamicPagesConfig.forEach(cfg => {
        const gridSourcePrefixes = { 5:'ev', 8:'opm', 9:'opm2', 10:'opm3', 11:'opm4', 12:'lk', 13:'pc', 14:'evps', 15:'evhl1', 16:'evhl2', 17:'evsc', 18:'evsc2' };
        if(gridSourcePrefixes[cfg.sourceId]) {
            rebuildFormByPrefix(`${gridSourcePrefixes[cfg.sourceId]}_dup${cfg.id}`);
        }
    });

    updateReport();
    updateDashboard();
}

document.addEventListener('input', (e) => {
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        triggerAutoSave();
    }
});

function refreshDOMOrder() {
    const formWrapper = document.getElementById('form-pages-wrapper');
    const printArea = document.getElementById('print-area');
    
    pageOrder.forEach(id => {
        const fPage = document.getElementById(`form-page-${id}`);
        if(fPage) formWrapper.appendChild(fPage);
        
        const pPage = document.getElementById(`preview-page-${id}`);
        if(pPage) printArea.appendChild(pPage);
    });
}

function buildNavigasiForm() {
    const navContainer = document.getElementById('nav-container');
    const btns = navContainer.querySelectorAll('.page-nav-btn');
    btns.forEach(b => b.remove()); 

    let navHtml = '';
    pageOrder.forEach((id, index) => {
        let title = "";
        if (id <= 23) { title = pageTitles[id-1]; } 
        else {
            let cfg = dynamicPagesConfig.find(p => p.id === id);
            title = cfg ? cfg.customTitle : `Hal Tambahan ${id}`;
        }
        let defaultClass = index === 0 ? 'bg-red-600 text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-slate-200';
        navHtml += `<button type="button" onclick="switchForm(${id})" id="btn-form-${id}" class="page-nav-btn shrink-0 px-4 py-2 rounded-lg font-bold text-xs transition-all ${defaultClass}">${index + 1}: ${title}</button>`;
    });
    navContainer.insertAdjacentHTML('afterbegin', navHtml);
}

function buildNavigasiPreview() {
    const selectEl = document.getElementById('preview-page-select');
    let opts = '';
    
    pageOrder.forEach((id, index) => {
        let title = "";
        if (id <= 23) { title = pageTitles[id-1]; } 
        else {
            let cfg = dynamicPagesConfig.find(p => p.id === id);
            title = cfg ? cfg.customTitle : `Custom`;
        }
        opts += `<option value="${id}">Hal ${index + 1} - ${title}</option>`;
    });
    selectEl.innerHTML = opts;
}

function openModalTambah() { document.getElementById('modal-tambah').classList.remove('hidden'); }
function closeModalTambah() { document.getElementById('modal-tambah').classList.add('hidden'); }

function tambahHalamanDinamis() {
    closeModalTambah();
    const sourceId = parseInt(document.getElementById('select-template-page').value);
    totalPages++; 
    const newId = totalPages;

    duplicateCounts[sourceId] = (duplicateCounts[sourceId] || 0) + 1;
    const dupNum = duplicateCounts[sourceId];
    
    const originalName = pageTitles[sourceId-1]; 
    const customTitle = `${originalName} Duplikat ${dupNum}`;

    const sourceForm = document.getElementById('form-page-' + sourceId);
    let clonedFormHtml = sourceForm.innerHTML;
    
    clonedFormHtml = clonedFormHtml.replace(/id="([^"]+)"/g, `id="$1_dup${newId}"`);
    clonedFormHtml = clonedFormHtml.replace(/onclick="document\.getElementById\('([^']+)'\)\.click\(\)"/g, `onclick="document.getElementById('$1_dup${newId}').click()"`);
    clonedFormHtml = clonedFormHtml.replace(/handleTableUpload\(this,\s*'([^']+)',\s*'([^']+)'(?:,\s*'([^']+)')?\)/g, `handleTableUpload(this, '$1_dup${newId}', '$2_dup${newId}', '$3_dup${newId}')`);
    clonedFormHtml = clonedFormHtml.replace(/id="btn-rm-([^"]+)"/g, `id="btn-rm-$1_dup${newId}"`);
    clonedFormHtml = clonedFormHtml.replace(/removeSingleImg\(event,\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\)/g, `removeSingleImg(event, '$1_dup${newId}', '$2_dup${newId}', '$3_dup${newId}', '$4_dup${newId}', '$5_dup${newId}')`);
    
    const prefixes = ['evhl1', 'evhl2', 'evsc2', 'evsc', 'evps', 'opm2', 'opm3', 'opm4', 'opm', 'ev', 'lk', 'pc'];
    prefixes.forEach(p => {
        let re = new RegExp(`'${p}'`, 'g');
        clonedFormHtml = clonedFormHtml.replace(re, `'${p}_dup${newId}'`);
    });

    const formEl = document.createElement('div');
    formEl.id = `form-page-${newId}`; 
    formEl.className = 'form-page-section hidden animate-fade-in';
    formEl.innerHTML = clonedFormHtml;

    const h3 = formEl.querySelector('h3');
    if(h3) h3.innerHTML = h3.innerHTML.replace(/\(HAL \d+\)/, '') + ` (HAL TAMBAHAN: ${customTitle.toUpperCase()})`;

    const originalInputs = sourceForm.querySelectorAll('input:not([type="file"]), select, textarea');
    const clonedInputs = formEl.querySelectorAll('input:not([type="file"]), select, textarea');
    
    originalInputs.forEach((orig, index) => {
        if(clonedInputs[index]) {
            clonedInputs[index].value = orig.value;
            clonedInputs[index].setAttribute('value', orig.value);
            if(orig.tagName.toLowerCase() === 'textarea') clonedInputs[index].innerHTML = orig.value;
        }
    });

    const titleInputs = formEl.querySelectorAll('input[id*="-title"], input[id*="-judul-"]');
    titleInputs.forEach(inp => {
        inp.value = inp.value + " DUPLIKAT " + dupNum;
        inp.setAttribute('value', inp.value);
    });

    const originalImgs = sourceForm.querySelectorAll('img[id^="prev-"]');
    const clonedImgs = formEl.querySelectorAll('img[id^="prev-"]');
    originalImgs.forEach((origImg, index) => {
        if(clonedImgs[index] && origImg.src && !origImg.classList.contains('hidden')) {
            clonedImgs[index].src = origImg.src;
            clonedImgs[index].classList.remove('hidden');
            let txtId = clonedImgs[index].id.replace('prev-', 'txt-');
            let txtEl = formEl.querySelector('#' + txtId);
            if(txtEl) txtEl.classList.add('hidden');
            
            let btnRmId = clonedImgs[index].id.replace('prev-', 'btn-rm-');
            let btnRmEl = formEl.querySelector('#' + btnRmId);
            if(btnRmEl) btnRmEl.classList.remove('hidden');
            
            let baseKey = origImg.id.replace('prev-', '') + `_dup${newId}`;
            singleFilesBase64[baseKey] = origImg.src;
        }
    });

    const hapusBtn = document.createElement('button');
    hapusBtn.type = 'button';
    hapusBtn.className = 'w-full mt-4 bg-red-100 text-red-600 border border-red-300 font-bold py-2 rounded-lg hover:bg-red-200 transition shadow-sm';
    hapusBtn.innerHTML = '🗑️ Hapus Halaman Tambahan Ini';
    hapusBtn.onclick = () => hapusHalamanDinamis(newId);
    formEl.appendChild(hapusBtn);

    document.getElementById('form-pages-wrapper').appendChild(formEl); 

    const isLandscape = [6,7,22,23].includes(sourceId);
    const printArea = document.getElementById('print-area');
    const newPreviewPage = document.createElement('div');
    newPreviewPage.id = `preview-page-${newId}`;
    newPreviewPage.className = `paper-a4 flex flex-col bg-white ${isLandscape ? 'landscape' : ''}`;
    printArea.appendChild(newPreviewPage);

    dynamicPagesConfig.push({ id: newId, sourceId: sourceId, customTitle: customTitle, dupNum: dupNum });
    
    const sourceIndex = pageOrder.indexOf(sourceId);
    pageOrder.splice(sourceIndex + 1, 0, newId); 
    
    refreshDOMOrder(); 

    const gridSourcePrefixes = { 5:'ev', 8:'opm', 9:'opm2', 10:'opm3', 11:'opm4', 12:'lk', 13:'pc', 14:'evps', 15:'evhl1', 16:'evhl2', 17:'evsc', 18:'evsc2' };
    if(gridSourcePrefixes[sourceId]) {
        rebuildFormByPrefix(`${gridSourcePrefixes[sourceId]}_dup${newId}`);
    }

    buildNavigasiForm();
    buildNavigasiPreview();
    switchForm(newId); 
    showToast(`✅ Halaman (${customTitle}) berhasil diduplikasi!`, 'success');
    updateReport();
    triggerAutoSave();
}

function hapusHalamanDinamis(pageId) {
    const formEl = document.getElementById('form-page-' + pageId);
    const printEl = document.getElementById('preview-page-' + pageId);
    if(formEl) formEl.remove();
    if(printEl) printEl.remove();
    
    dynamicPagesConfig = dynamicPagesConfig.filter(p => p.id !== pageId);
    pageOrder = pageOrder.filter(id => id !== pageId); 
    
    Object.keys(dynamicArrays).forEach(key => {
        if(key.includes(`_dup${pageId}`)) delete dynamicArrays[key];
    });
    
    Object.keys(singleFilesBase64).forEach(key => {
        if(key.includes(`_dup${pageId}`)) delete singleFilesBase64[key];
    });

    refreshDOMOrder();
    buildNavigasiForm();
    buildNavigasiPreview();
    switchForm(pageOrder[0]); 
    showToast(`🗑️ Halaman tambahan dihapus.`);
    updateReport();
    triggerAutoSave();
}

function getArrayByPrefix(prefix) {
    if(prefix === 'ev') return evidenceData;
    if(prefix === 'opm') return opmData;
    if(prefix === 'opm2') return opm2Data;
    if(prefix === 'opm3') return opm3Data;
    if(prefix === 'opm4') return opm4Data;
    if(prefix === 'lk') return lkData;
    if(prefix === 'pc') return pcData;
    if(prefix === 'evps') return evpsData;
    if(prefix === 'evhl1') return evhl1Data;
    if(prefix === 'evhl2') return evhl2Data;
    if(prefix === 'evsc') return evscData;
    if(prefix === 'evsc2') return evsc2Data;
    
    if(prefix.includes('_dup')) {
        if(!dynamicArrays[prefix]) {
            dynamicArrays[prefix] = [];
            let basePrefix = prefix.split('_dup')[0];
            let baseArray = getArrayByPrefix(basePrefix); 
            baseArray.forEach(item => {
                dynamicArrays[prefix].push({ file: item.file, preview: item.preview, caption: item.caption });
            });
        }
        return dynamicArrays[prefix];
    }
}

function rebuildFormByPrefix(prefix) {
    if(prefix === 'ev') return buildEvidenceFormInputs();
    if(prefix === 'opm') return buildOpmFormInputs();
    if(prefix === 'opm2') return buildOpm2FormInputs();
    if(prefix === 'opm3') return buildOpm3FormInputs();
    if(prefix === 'opm4') return buildOpm4FormInputs();
    if(prefix === 'lk') return buildLkFormInputs();
    if(prefix === 'pc') return buildPcFormInputs();
    if(prefix === 'evps') return buildEvpsFormInputs();
    if(prefix === 'evhl1') return buildEvhl1FormInputs();
    if(prefix === 'evhl2') return buildEvhl2FormInputs();
    if(prefix === 'evsc') return buildEvscFormInputs();
    if(prefix === 'evsc2') return buildEvsc2FormInputs();

    if(prefix.includes('_dup')) {
        let parts = prefix.split('_dup');
        let base = parts[0];
        let newId = parts[1];
        let cfg = gridConfigs[base];
        if(cfg) { generateFormInputs(getArrayByPrefix(prefix), `${cfg.id}_dup${newId}`, prefix, cfg.limit); }
    }
}

// Builders Default
function buildEvidenceFormInputs() { generateFormInputs(evidenceData, 'evidence-inputs-container', 'ev', 6); }
function buildOpmFormInputs() { generateFormInputs(opmData, 'opm-inputs-container', 'opm', 9); }
function buildOpm2FormInputs() { generateFormInputs(opm2Data, 'opm2-inputs-container', 'opm2', 3); }
function buildOpm3FormInputs() { generateFormInputs(opm3Data, 'opm3-inputs-container', 'opm3', 9); }
function buildOpm4FormInputs() { generateFormInputs(opm4Data, 'opm4-inputs-container', 'opm4', 3); }
function buildLkFormInputs() { generateFormInputs(lkData, 'lk-inputs-container', 'lk', 2); }
function buildPcFormInputs() { generateFormInputs(pcData, 'pc-inputs-container', 'pc', 3); }
function buildEvpsFormInputs() { generateFormInputs(evpsData, 'evps-inputs-container', 'evps', 3); }
function buildEvhl1FormInputs() { generateFormInputs(evhl1Data, 'evhl1-inputs-container', 'evhl1', 9); }
function buildEvhl2FormInputs() { generateFormInputs(evhl2Data, 'evhl2-inputs-container', 'evhl2', 3); }
function buildEvscFormInputs() { generateFormInputs(evscData, 'evsc-inputs-container', 'evsc', 9); }
function buildEvsc2FormInputs() { generateFormInputs(evsc2Data, 'evsc2-inputs-container', 'evsc2', 6); }

// ==========================================
// DRAG AND DROP SWAP (TUKAR POSISI GAMBAR)
// ==========================================
let dragSourcePrefix = null;
let dragSourceIndex = null;

window.handleDragStart = function(e, prefix, index) {
    dragSourcePrefix = prefix;
    dragSourceIndex = index;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
    setTimeout(() => {
        if(e.target) e.target.classList.add('opacity-40');
    }, 10);
};

window.handleDragEnd = function(e) {
    if(e.target) e.target.classList.remove('opacity-40');
    dragSourcePrefix = null;
    dragSourceIndex = null;
};

window.handleDragOver = function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const item = e.target.closest('.drop-zone-item');
    if (item) item.classList.add('ring-2', 'ring-red-500', 'ring-offset-2', 'scale-105');
};

window.handleDragLeaveItem = function(e) {
    const item = e.target.closest('.drop-zone-item');
    if (item) item.classList.remove('ring-2', 'ring-red-500', 'ring-offset-2', 'scale-105');
};

window.handleDrop = function(e, targetPrefix, targetIndex) {
    e.preventDefault();
    e.stopPropagation();

    const item = e.target.closest('.drop-zone-item');
    if (item) item.classList.remove('ring-2', 'ring-red-500', 'ring-offset-2', 'scale-105');

    // 1. Jika File Didrop dari komputer langsung ke Kotak Satuan (Grid)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if(file.type.startsWith('image/')) {
            const r = new FileReader();
            r.onload = function(evt) { 
                let targetArray = getArrayByPrefix(targetPrefix);
                targetArray[targetIndex].file = null; 
                targetArray[targetIndex].preview = evt.target.result; 
                rebuildFormByPrefix(targetPrefix); 
                updateReport(); 
                updateDashboard(); 
                triggerAutoSave();
                showToast("✅ Gambar ditarik ke dalam slot!", "success");
            }
            r.readAsDataURL(file);
        } else {
            showToast("❌ File harus berupa gambar!", "error");
        }
        dragSourcePrefix = null;
        dragSourceIndex = null;
        return;
    }

    // 2. Jika Swap/Tukar posisi antar foto
    if (dragSourcePrefix !== null && dragSourceIndex !== null) {
        let sourceArray = getArrayByPrefix(dragSourcePrefix);
        let targetArray = getArrayByPrefix(targetPrefix);
        
        let keySource = dragSourcePrefix + '_' + dragSourceIndex;
        let keyTarget = targetPrefix + '_' + targetIndex;

        // Tukar Data Gambarnya (Caption jangan ditukar)
        let tempPreview = sourceArray[dragSourceIndex].preview;
        let tempFile = sourceArray[dragSourceIndex].file;
        sourceArray[dragSourceIndex].preview = targetArray[targetIndex].preview;
        sourceArray[dragSourceIndex].file = targetArray[targetIndex].file;
        targetArray[targetIndex].preview = tempPreview;
        targetArray[targetIndex].file = tempFile;
        
        // Tukar Transform/Editan Potongannya
        let tempTf = imageTransforms[keySource];
        imageTransforms[keySource] = imageTransforms[keyTarget];
        imageTransforms[keyTarget] = tempTf;

        rebuildFormByPrefix(dragSourcePrefix);
        if (dragSourcePrefix !== targetPrefix) {
            rebuildFormByPrefix(targetPrefix);
        }

        updateReport();
        updateDashboard();
        triggerAutoSave();
        showToast("🔄 Posisi gambar ditukar!", "success");
    }
    
    dragSourcePrefix = null;
    dragSourceIndex = null;
};

// ==========================================
// GLOBAL EVENT LISTENER UNTUK DRAG & DROP KOTAK BESAR
// ==========================================
document.addEventListener('dragover', (e) => {
    const dropZone = e.target.closest('.border-dashed');
    const isItem = e.target.closest('.drop-zone-item');
    if (dropZone && !isItem) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        dropZone.classList.add('bg-red-200', 'border-red-500');
    }
});

document.addEventListener('dragleave', (e) => {
    const dropZone = e.target.closest('.border-dashed');
    const isItem = e.target.closest('.drop-zone-item');
    if (dropZone && !isItem) {
        e.preventDefault();
        dropZone.classList.remove('bg-red-200', 'border-red-500');
    }
});

document.addEventListener('drop', (e) => {
    const dropZone = e.target.closest('.border-dashed');
    const isItem = e.target.closest('.drop-zone-item');
    if (dropZone && !isItem) {
        e.preventDefault();
        dropZone.classList.remove('bg-red-200', 'border-red-500');
        
        if(e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const inputMultiple = dropZone.querySelector('input[type="file"][multiple]');
            const inputSingle = dropZone.querySelector('input[type="file"]:not([multiple])');
            
            // Drop untuk area yang nampung banyak foto (contoh: isi 9 foto sekaligus)
            if (inputMultiple) {
                const onchangeStr = inputMultiple.getAttribute('onchange');
                if(onchangeStr) {
                    const match = onchangeStr.match(/handleMultipleArray\(.*,\s*'([^']+)',\s*(\d+)\)/);
                    if(match) {
                        handleMultipleArray(e.dataTransfer.files, match[1], parseInt(match[2]));
                    }
                }
            } 
            // Drop untuk area foto single (seperti BOQ, Tabel 6/7, OTDR, KML)
            else if (inputSingle) {
                inputSingle.files = e.dataTransfer.files;
                const event = new Event('change', { bubbles: true });
                inputSingle.dispatchEvent(event);
            }
        }
    }
});

function handleTableUpload(input, previewId, textId, btnRmId = null) {
    if(input.files && input.files[0]) {
        const file = input.files[0];
        
        if(file.type === 'application/pdf') {
            showToast("⚠️ Format PDF digunakan. Preview mungkin berupa icon, namun tetap tercatat. Disarankan format Image (PNG/JPG) untuk TTD agar tercetak langsung.");
            const imgEl = document.getElementById(previewId);
            const txtEl = document.getElementById(textId);
            if(imgEl) { imgEl.src = 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg'; imgEl.classList.remove('hidden'); }
            if(txtEl) txtEl.classList.add('hidden');
            if(btnRmId) document.getElementById(btnRmId)?.classList.remove('hidden');
            updateReport(); updateDashboard();
            triggerAutoSave();
            return;
        }

        if(!file.type.startsWith('image/')) { showToast("❌ Gagal! Format file harus Gambar atau PDF.", "error"); input.value = ""; return; }
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgEl = document.getElementById(previewId);
            const txtEl = document.getElementById(textId);
            if(imgEl) { imgEl.src = e.target.result; imgEl.classList.remove('hidden'); }
            if(txtEl) txtEl.classList.add('hidden');
            if(btnRmId) document.getElementById(btnRmId)?.classList.remove('hidden');
            
            showToast("✅ File berhasil diupload!", "success");
            
            let stateKey = '';
            if(input.id === 'inp-file-boq') { singleFilesStatus.boq = true; stateKey = 'boq'; }
            if(input.id === 'inp-file-tabel-6') { singleFilesStatus.tb6 = true; stateKey = 'tb6'; }
            if(input.id === 'inp-file-tabel-7') { singleFilesStatus.tb7 = true; stateKey = 'tb7'; }
            if(input.id === 'inp-file-otdr') { singleFilesStatus.otdr1 = true; stateKey = 'otdr1'; }
            if(input.id === 'inp-file-otdr2') { singleFilesStatus.otdr2 = true; stateKey = 'otdr2'; }
            if(input.id === 'inp-file-otdr3') { singleFilesStatus.otdr3 = true; stateKey = 'otdr3'; }
            if(input.id === 'inp-file-kml') { singleFilesStatus.kml = true; stateKey = 'kml'; }
            if(input.id === 'inp-file-mancore') { singleFilesStatus.mancore = true; stateKey = 'mancore'; }
            
            if (!stateKey) {
                stateKey = previewId.replace('prev-', '');
            }

            if(stateKey) singleFilesBase64[stateKey] = e.target.result;
            
            updateReport(); updateDashboard();
            triggerAutoSave();
        };
        reader.readAsDataURL(file);
    }
}

// ANTI GEPENG INPUT FORM & SWAP RENDERER
function generateFormInputs(dataArray, containerId, prefix, limit) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = '';
    const renderLimit = (prefix === 'lk' || prefix.startsWith('lk_dup')) ? 2 : limit;
    
    for(let index = 0; index < renderLimit; index++) {
        const item = dataArray[index];
        const imgContent = item.preview 
            ? `<img src="${item.preview}" class="w-full h-full object-contain pointer-events-none rounded-lg">` 
            : `<span class="text-[10px] text-red-400 font-medium group-hover:scale-110 transition text-center leading-tight pointer-events-none">Klik / Drop<br>Gambar</span>`;
            
        container.innerHTML += `
        <div class="drop-zone-item border p-2 rounded-xl bg-white relative shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing border-dashed border-2 border-transparent hover:border-red-200" 
             draggable="true" 
             ondragstart="handleDragStart(event, '${prefix}', ${index})" 
             ondragend="handleDragEnd(event)"
             ondragover="handleDragOver(event)" 
             ondragleave="handleDragLeaveItem(event)"
             ondrop="handleDrop(event, '${prefix}', ${index})">
             
            <div onclick="document.getElementById('${prefix}-file-${index}').click()" 
                 class="h-28 bg-red-50/50 mb-2 cursor-pointer flex items-center justify-center relative group rounded-lg overflow-hidden border border-dashed border-red-200 hover:border-red-400 transition">
                 ${imgContent}
            </div>
            
            ${item.preview ? `<button onclick="removeImgArray('${prefix}', ${index})" type="button" class="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full text-xs font-bold leading-none shadow hover:bg-red-700 transition transform hover:scale-110 z-10">&times;</button>` : ''}
            
            <input type="text" oninput="updateCaptionArray('${prefix}', ${index}, this.value)" class="w-full text-[10px] sm:text-xs border-b border-transparent hover:border-red-200 p-1 text-center font-bold uppercase rounded outline-none focus:border-red-500 focus:bg-red-50 transition" value="${item.caption}">
            
            <input type="file" id="${prefix}-file-${index}" accept="image/*" class="hidden" onchange="handleSingleArray(this, '${prefix}', ${index})">
        </div>`;
    }
}

function handleSingleArray(input, prefix, index) {
    if(input.files && input.files[0]) {
        if(!input.files[0].type.startsWith('image/')) { showToast("❌ File gagal! Format harus gambar.", "error"); return; }
        const r = new FileReader();
        r.onload = function(e) { 
            let targetArray = getArrayByPrefix(prefix);
            targetArray[index].file = null; 
            targetArray[index].preview = e.target.result; 
            rebuildFormByPrefix(prefix); updateReport(); updateDashboard(); showToast("✅ 1 Gambar berhasil diupload!", "success");
            triggerAutoSave();
        }
        r.readAsDataURL(input.files[0]);
    }
}

function handleMultipleArray(files, prefix, maxFiles) {
    let targetArray = getArrayByPrefix(prefix);
    const fileArray = Array.from(files).filter(f => f.type.startsWith('image/')).slice(0, maxFiles); 
    if(fileArray.length === 0 && files.length > 0) { showToast("❌ Gagal! Format file tidak didukung.", "error"); return; }
    let fIndex = 0, uploadedCount = 0;
    
    for(let i=0; i<maxFiles; i++) {
        if(!targetArray[i].preview && fIndex < fileArray.length) {
            const f = fileArray[fIndex++]; const r = new FileReader(); let cI = i; 
            r.onload = function(e) { 
                targetArray[cI].file = null; 
                targetArray[cI].preview = e.target.result; 
                rebuildFormByPrefix(prefix); 
                updateReport(); 
                updateDashboard(); 
                triggerAutoSave(); 
            }
            r.readAsDataURL(f); uploadedCount++;
        }
    }
    if(uploadedCount > 0) showToast(`✅ ${uploadedCount} Gambar berhasil diupload!`, "success"); 
    else if (fileArray.length > 0) showToast("⚠️ Slot gambar sudah penuh!");
}

function removeImgArray(prefix, index) { 
    event.stopPropagation(); 
    let targetArray = getArrayByPrefix(prefix); 
    targetArray[index].file = null; 
    targetArray[index].preview = ''; 
    rebuildFormByPrefix(prefix); updateReport(); updateDashboard(); triggerAutoSave(); 
}
function updateCaptionArray(prefix, index, value) { let targetArray = getArrayByPrefix(prefix); targetArray[index].caption = value; updateReport(); }

// ==============================================================================
// MOUSE INTERACTION (BEBAS GESER GAMBAR + BINGKAI TABEL TERKUNCI KAKU)
// ==============================================================================
let isDraggingImgPreview = false;
let isResizingImg = false;
let activeTfKey = null;
let activeEl = null;
let startX, startY;
let startW, startH, startOx, startOy;
let resizeDir = '';

document.addEventListener('mousedown', (e) => { 
    if (e.target.classList.contains('res-handle') || e.target.classList.contains('drag-area')) { 
        activeEl = e.target.closest('.resizable-wrapper');
        if (!activeEl) return;
        activeTfKey = activeEl.dataset.key;
        
        // --- KUNCI KHUSUS TABEL DOKUMEN (Opsional) ---
        // Jika ini adalah tabel dokumen asli (BOQ/OPM 1/OPM 2), hentikan agar tidak bisa diklik
        if (activeTfKey && (activeTfKey.includes('boq') || activeTfKey.includes('tb6') || activeTfKey.includes('tb7'))) {
            return; 
        }

        // --- KUNCI RAHASIA: BEKUKAN KOTAK TABEL AGAR TIDAK MELAR ---
        const parent = activeEl.parentElement;
        if (parent) {
            // Ambil ukuran asli kotak saat ini sebelum gambar ditarik
            const rect = parent.getBoundingClientRect();
            
            // Paksakan kotaknya membeku di ukuran tersebut dan sembunyikan gambar yang meluber (overflow hidden)
            if (!parent.dataset.locked) {
                parent.style.width = rect.width + 'px';
                parent.style.height = rect.height + 'px';
                parent.style.maxWidth = rect.width + 'px';
                parent.style.maxHeight = rect.height + 'px';
                parent.style.overflow = 'hidden';
                parent.style.position = 'relative';
                parent.dataset.locked = 'true';
            }
            
            // Lepaskan batasan gambar agar bebas dibesarkan melampaui kotaknya
            activeEl.style.maxWidth = 'none';
            activeEl.style.maxHeight = 'none';
        }
        // -------------------------------------------------------------

        if (e.target.classList.contains('res-handle')) { 
            isResizingImg = true; 
            resizeDir = e.target.dataset.dir; 
            startW = activeEl.offsetWidth;
            startH = activeEl.offsetHeight;
            
            if (!imageTransforms[activeTfKey]) imageTransforms[activeTfKey] = { w: startW, h: startH, ox: 0, oy: 0 };
            
            if (typeof imageTransforms[activeTfKey].w === 'string' || !imageTransforms[activeTfKey].w) {
                imageTransforms[activeTfKey].w = startW;
                imageTransforms[activeTfKey].h = startH;
            } else {
                startW = imageTransforms[activeTfKey].w;
                startH = imageTransforms[activeTfKey].h;
            }
        } 
        else if (e.target.classList.contains('drag-area')) { 
            isDraggingImgPreview = true; 
            if(!imageTransforms[activeTfKey]) imageTransforms[activeTfKey] = { w: '100%', h: '100%', ox: 0, oy: 0 };
            startOx = imageTransforms[activeTfKey].ox || 0;
            startOy = imageTransforms[activeTfKey].oy || 0;
        }
        
        startX = e.clientX;
        startY = e.clientY;
        e.preventDefault(); 
    } 
});

document.addEventListener('mousemove', (e) => { 
    if (isResizingImg && activeEl) {
        let dx = e.clientX - startX; 
        let dy = e.clientY - startY; 
        
        let newW = startW;
        let newH = startH;

        if (resizeDir.includes('e')) newW = startW + (dx * 2);
        if (resizeDir.includes('w')) newW = startW - (dx * 2);
        if (resizeDir.includes('s')) newH = startH + (dy * 2);
        if (resizeDir.includes('n')) newH = startH - (dy * 2);

        if (newW < 20) newW = 20;
        if (newH < 20) newH = 20;

        imageTransforms[activeTfKey].w = newW;
        imageTransforms[activeTfKey].h = newH;
        
        activeEl.style.width = newW + 'px';
        activeEl.style.height = newH + 'px';
    } 
    else if (isDraggingImgPreview && activeEl) { 
        let dx = e.clientX - startX; 
        let dy = e.clientY - startY; 
        
        let newOx = startOx + dx;
        let newOy = startOy + dy;
        
        imageTransforms[activeTfKey].ox = newOx;
        imageTransforms[activeTfKey].oy = newOy;
        
        activeEl.style.transform = `translate(${newOx}px, ${newOy}px)`; 
    }
});

window.addEventListener('mouseup', () => { 
    if (isDraggingImgPreview || isResizingImg) { 
        isDraggingImgPreview = false; 
        isResizingImg = false;
        activeEl = null; 
        if (typeof triggerAutoSave === 'function') triggerAutoSave(); 
    }
});

// ==========================================
// LAINNYA
// ==========================================
function switchTab(tabId) {
    if(isSplitScreenActive && (tabId === 'form-tab' || tabId === 'report-tab')) {
        document.getElementById('dashboard-tab').classList.add('hidden');
        document.getElementById('form-tab').classList.remove('hidden');
        document.getElementById('report-tab').classList.remove('hidden');
    } else {
        document.getElementById('form-tab').classList.add('hidden'); document.getElementById('dashboard-tab').classList.add('hidden'); document.getElementById('report-tab').classList.add('hidden');
        const target = document.getElementById(tabId); target.classList.remove('hidden'); target.classList.remove('animate-fade-in'); void target.offsetWidth; target.classList.add('animate-fade-in');
    }

    const buttons = document.querySelectorAll('aside nav .nav-btn');
    buttons.forEach(btn => { btn.classList.remove('bg-gradient-to-r', 'from-red-600', 'to-orange-500', 'text-white', 'shadow-md'); btn.classList.add('text-gray-300'); });
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
    if(activeBtn) { activeBtn.classList.add('bg-gradient-to-r', 'from-red-600', 'to-orange-500', 'text-white', 'shadow-md'); activeBtn.classList.remove('text-gray-300'); }
    if(tabId === 'dashboard-tab') updateDashboard();
    if(tabId === 'report-tab') updateReport(); 
}

function switchForm(pageId) {
    document.querySelectorAll('.form-page-section').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.page-nav-btn').forEach(b => { b.classList.remove('bg-red-600', 'text-white', 'shadow-md'); b.classList.add('bg-transparent', 'text-slate-600'); });
    const activePage = document.getElementById('form-page-'+pageId); const activeBtn = document.getElementById('btn-form-'+pageId);
    if(activePage) { activePage.classList.remove('hidden'); activePage.classList.remove('animate-fade-in'); void activePage.offsetWidth; activePage.classList.add('animate-fade-in'); }
    if(activeBtn) { activeBtn.classList.remove('bg-transparent', 'text-slate-600'); activeBtn.classList.add('bg-red-600', 'text-white', 'shadow-md'); }

    if(isSplitScreenActive) {
        scrollToPage(pageId);
        const selectEl = document.getElementById('preview-page-select');
        if (selectEl) selectEl.value = pageId;
    }
}

function scrollToPage(pageNumber) {
    if(!pageNumber) return; 
    const targetPage = document.getElementById('preview-page-' + pageNumber); 
    if(!targetPage) return;

    const container = isSplitScreenActive ? document.getElementById('report-tab') : document.getElementById('main-content-scroll');
    const stickyNavHeight = 80;
    const topPos = targetPage.offsetTop;
    
    container.scrollTo({ top: topPos - stickyNavHeight, behavior: 'smooth' });
}

function tambahDaftarIsi() {
    const container = document.getElementById('container-daftar-isi'); const newDiv = document.createElement('div'); newDiv.className = 'flex gap-2 items-center';
    newDiv.innerHTML = `<input type="text" oninput="updateReport()" class="flex-1 border rounded-lg p-2 font-medium uppercase focus:ring-2 focus:ring-red-500 transition"><button type="button" onclick="hapusDaftarIsi(this)" class="bg-red-100 text-red-600 px-3 py-2 rounded-lg font-bold hover:bg-red-200">X</button>`;
    container.appendChild(newDiv); updateReport(); triggerAutoSave();
}
function hapusDaftarIsi(btn) { btn.parentElement.remove(); updateReport(); triggerAutoSave(); }

function formatTanggal(dateStr) {
    if (!dateStr || dateStr === '') return "......."; const d = new Date(dateStr); if (isNaN(d.getTime())) return ".......";
    const bln = ['JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'];
    return `${d.getDate()} ${bln[d.getMonth()]} ${d.getFullYear()}`;
}

function spellDate(dateStr) {
    if (!dateStr || dateStr === '') return "......., tanggal ......."; const d = new Date(dateStr); if (isNaN(d.getTime())) return "......., tanggal .......";
    const hari = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'][d.getDay()]; const bln = ['JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'][d.getMonth()];
    const angkaKeTeks = (n) => {
        const satuan = ["", "SATU", "DUA", "TIGA", "EMPAT", "LIMA", "ENAM", "TUJUH", "DELAPAN", "SEMBILAN", "SEPULUH", "SEBELAS"];
        if(n < 12) return satuan[n]; if(n < 20) return satuan[n-10] + " BELAS"; if(n < 100) return satuan[Math.floor(n/10)] + " PULUH " + satuan[n%10];
        if(n < 200) return "SERATUS " + angkaKeTeks(n-100); if(n < 1000) return satuan[Math.floor(n/100)] + " RATUS " + angkaKeTeks(n%100);
        if(n < 2000) return "SERIBU " + angkaKeTeks(n-1000); if(n < 10000) return satuan[Math.floor(n/1000)] + " RIBU " + angkaKeTeks(n%1000); return n;
    };
    return `${hari}, tanggal ${angkaKeTeks(d.getDate()).trim()} bulan ${bln} tahun ${angkaKeTeks(d.getFullYear()).trim()}`;
}
function generateTerbilang() { updateReport(); triggerAutoSave(); }

function updateDashboard() {
    let filledGrids = 0;
    const allArrays = [evidenceData, opmData, opm2Data, opm3Data, opm4Data, lkData, pcData, evpsData, evhl1Data, evhl2Data, evscData, evsc2Data];
    allArrays.forEach(arr => { filledGrids += arr.filter(item => item.preview !== '').length; });
    let singleCount = 0;
    if(singleFilesStatus.boq) singleCount++; if(singleFilesStatus.tb6) singleCount++; if(singleFilesStatus.tb7) singleCount++; if(singleFilesStatus.otdr1) singleCount++; if(singleFilesStatus.otdr2) singleCount++; if(singleFilesStatus.otdr3) singleCount++; if(singleFilesStatus.kml) singleCount++; if(singleFilesStatus.mancore) singleCount++;
    const totalSlots = 65 + 8; const totalFilled = filledGrids + singleCount;
    document.getElementById('dash-filled').innerText = totalFilled;
    let percentage = Math.round((totalFilled / totalSlots) * 100); if (percentage > 100) percentage = 100;
    document.getElementById('dash-percent').innerText = `${percentage}%`; document.getElementById('dash-progress-bar').style.width = `${percentage}%`;
}


// ==========================================
// CORE RENDER SYSTEM (PERMINTAAN RESIZE ALA MS WORD)
// ==========================================
const safeVal = (id) => { const el = document.getElementById(id); return (el && el.value.trim() !== '') ? el.value : '-'; };
const getVal = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };

const renderParaf = () => {
    return globalParaf ? `<div class="paraf-wrapper"><img src="${globalParaf}"></div>` : '';
};

// Fungsi Pembuat Bingkai Drag & Drop Edge & Corner ala Ms. Word
function createResizableWrapper(imgSrc, key, tf) {
    let w = tf.w ? (typeof tf.w === 'number' ? tf.w + 'px' : tf.w) : '100%';
    let h = tf.h ? (typeof tf.h === 'number' ? tf.h + 'px' : tf.h) : '100%';
    let ox = tf.ox || 0;
    let oy = tf.oy || 0;
    
    let styleStr = `width: ${w}; height: ${h}; display: block; position: relative; transform: translate(${ox}px, ${oy}px);`;
    
    return `
    <div class="resizable-wrapper group mx-auto my-auto relative no-print-outline" style="${styleStr}" data-key="${key}">
        <!-- The actual image, stretched to the wrapper's dimensions -->
        <img src="${imgSrc}" class="w-full h-full pointer-events-none" style="object-fit: fill; display: block;">
        
        <!-- Drag Area overlay (for panning/geser) -->
        <div class="drag-area absolute inset-0 cursor-grab active:cursor-grabbing z-10 no-print" title="Geser (Pan)"></div>
        
        <!-- 8 Resize Handles / Titik Potong Kanan Kiri Atas Bawah -->
        <div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-n-resize z-20 no-print" style="top: -5px; left: 0; right: 0; height: 10px;" data-dir="n"></div>
        <div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-s-resize z-20 no-print" style="bottom: -5px; left: 0; right: 0; height: 10px;" data-dir="s"></div>
        <div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-e-resize z-20 no-print" style="top: 0; bottom: 0; right: -5px; width: 10px;" data-dir="e"></div>
        <div class="res-handle absolute bg-transparent hover:bg-blue-500/50 cursor-w-resize z-20 no-print" style="top: 0; bottom: 0; left: -5px; width: 10px;" data-dir="w"></div>
        
        <div class="res-handle absolute bg-white border border-blue-500 shadow cursor-nw-resize z-30 no-print opacity-0 group-hover:opacity-100 transition-opacity" style="top: -5px; left: -5px; width: 10px; height: 10px; border-radius: 50%;" data-dir="nw"></div>
        <div class="res-handle absolute bg-white border border-blue-500 shadow cursor-ne-resize z-30 no-print opacity-0 group-hover:opacity-100 transition-opacity" style="top: -5px; right: -5px; width: 10px; height: 10px; border-radius: 50%;" data-dir="ne"></div>
        <div class="res-handle absolute bg-white border border-blue-500 shadow cursor-sw-resize z-30 no-print opacity-0 group-hover:opacity-100 transition-opacity" style="bottom: -5px; left: -5px; width: 10px; height: 10px; border-radius: 50%;" data-dir="sw"></div>
        <div class="res-handle absolute bg-white border border-blue-500 shadow cursor-se-resize z-30 no-print opacity-0 group-hover:opacity-100 transition-opacity" style="bottom: -5px; right: -5px; width: 10px; height: 10px; border-radius: 50%;" data-dir="se"></div>
        
        <!-- Hover Outline -->
        <div class="absolute inset-0 pointer-events-none border border-transparent group-hover:border-blue-400 z-10 no-print transition-colors"></div>
    </div>`;
}

const getSingleImg = (previewId, key) => {
    const img = document.getElementById(previewId);
    if(img && !img.classList.contains('hidden') && img.src && !img.src.endsWith('index.html')) {
        let tf = imageTransforms[key] || { w: '100%', h: '100%', ox: 0, oy: 0 };
        return createResizableWrapper(img.src, key, tf);
    }
    return '';
};

function updateReport() {
    let globalData = {
        proyek: safeVal('inp-proyek'), kontrak: safeVal('inp-kontrak'), sp: safeVal('inp-sp'),
        district: safeVal('inp-district'), lokasi: safeVal('inp-lokasi'), pelaksana: safeVal('inp-pelaksana')
    };
    const fallbackLogo = `onerror="this.src='https://placehold.co/150x55/ffffff/000000?text=Gambar'"`;
    const kopHeader = (title) => `<div class="flex justify-between items-center mb-6 shrink-0"><img src="${logoKiriUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Telkom"><h2 class="text-xl font-bold uppercase text-center flex-1 mx-4">${title}</h2><img src="${logoKananUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Infra"></div><div class="border-t-[3px] border-black mb-[2px] shrink-0"></div><div class="border-t-[1px] border-black mb-4 shrink-0"></div>`;
    const globalTabel = `<div class="text-[12px] font-bold leading-relaxed mb-8 uppercase shrink-0"><div class="flex"><div class="w-[140px] md:w-36">PROYEK</div><div class="w-4">:</div><div class="flex-1">${globalData.proyek}</div></div><div class="flex"><div class="w-[140px] md:w-36">KONTRAK</div><div class="w-4">:</div><div class="flex-1">${globalData.kontrak}</div></div><div class="flex"><div class="w-[140px] md:w-36">SURAT PESANAN</div><div class="w-4">:</div><div class="flex-1">${globalData.sp}</div></div><div class="flex"><div class="w-[140px] md:w-36">DISTRICT</div><div class="w-4">:</div><div class="flex-1">${globalData.district}</div></div><div class="flex"><div class="w-[140px] md:w-36">LOKASI</div><div class="w-4">:</div><div class="flex-1">${globalData.lokasi}</div></div><div class="flex"><div class="w-[140px] md:w-36">PELAKSANA</div><div class="w-4">:</div><div class="flex-1">${globalData.pelaksana}</div></div></div>`;
    
    const renderEvidentHeaderInfoOnly = () => `
        <div class="text-[11px] font-bold leading-tight w-full mb-3 uppercase shrink-0"><div class="flex mb-1"><div class="w-[150px]">PROYEK</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.proyek}</div></div><div class="flex mb-1"><div class="w-[150px]">NO. KONTRAK</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.kontrak}</div></div><div class="flex mb-1"><div class="w-[150px]">NO. SP</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.sp}</div></div><div class="flex mb-1"><div class="w-[150px]">DISTRICT</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.district}</div></div><div class="flex mb-1"><div class="w-[150px]">LOKASI</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.lokasi}</div></div><div class="flex mb-1"><div class="w-[150px]">PELAKSANA</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.pelaksana}</div></div></div><div class="border-t-[3px] border-black mb-2 shrink-0"></div>
    `;

    const renderEvidentHeader = (title) => `<div class="flex justify-between items-center mb-4 shrink-0"><img src="${logoKiriUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Telkom"><h2 class="text-lg font-bold uppercase text-center flex-1 mx-4">${title}</h2><img src="${logoKananUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Infra"></div><div class="border-t-[3px] border-black mb-[2px] shrink-0"></div><div class="border-t-[1px] border-black mb-4 shrink-0"></div>` + renderEvidentHeaderInfoOnly();

    // HAL 1
    const p1 = document.getElementById('preview-page-1');
    if(p1) p1.innerHTML = `<div class="flex justify-between items-start mb-6 shrink-0"><img src="${logoKiriUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Telkom"><img src="${logoKananUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Infra"></div><h2 class="text-2xl font-bold uppercase text-center mb-4 shrink-0">LAPORAN COMMISSIONING TEST (LACT)</h2><div class="border-t-[2px] border-black mb-[2px] shrink-0"></div><div class="border-t-[1px] border-black mb-6 shrink-0"></div>${globalTabel}<div class="w-full flex justify-center mt-20 mb-16 shrink-0"><img src="${logoTengahUrl}" ${fallbackLogo} class="w-[320px] object-contain" alt="Logo Tengah"></div><div class="w-full text-center text-[16px] font-bold space-y-6 shrink-0"><p>ANTARA</p><p>PT. TELKOM INFRASTRUKTUR INDONESIA, Tbk.</p><p>DENGAN</p><p>PT. TELKOM AKSES</p></div>`;

    // HAL 2
    const listInputs = document.querySelectorAll('#container-daftar-isi input'); let listHTML = '';
    listInputs.forEach((input, index) => { if(input.value.trim() !== '') listHTML += `<div class="flex gap-3 uppercase font-bold text-[14px] mb-4"><span>${index + 1}.</span><span>${input.value}</span></div>`; });
    const p2 = document.getElementById('preview-page-2');
    if(p2) p2.innerHTML = `<div class="flex justify-between items-center mb-16 mt-4 shrink-0"><img src="${logoKiriUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Telkom"><img src="${logoKananUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Infra"></div><h1 class="text-xl font-bold text-center mb-16 leading-relaxed shrink-0">DAFTAR ISI<br>DOKUMEN LAPORAN COMMISIONING TEST<br>(LACT)</h1><div class="px-8">${listHTML}</div>`;

    // HAL 3
    function renderHal3(suffix = "", dupNum = 0) {
        const titleKop = dupNum > 0 ? `LAPORAN COMMISSIONING TEST DUPLIKAT ${dupNum}` : 'LAPORAN COMMISSIONING TEST';
        const tglRaw = safeVal('inp-tgl-3'+suffix); const ejaTanggal = (tglRaw !== '-') ? spellDate(tglRaw) : "......, tanggal ...... bulan ...... tahun ......"; const formatTgl = (tglRaw !== '-') ? formatTanggal(tglRaw) : ".......";
        let ttdHtml = globalTTD ? `<div class="w-full flex justify-center my-1"><img src="${globalTTD}" class="h-20 object-contain" alt="TTD"></div>` : `<div class="h-20 w-full"></div>`;

        return `${kopHeader(titleKop)}${globalTabel}<p class="text-[12px] mb-4 shrink-0 leading-relaxed text-justify">Pada hari ini <span class="font-bold uppercase">${ejaTanggal}</span>, yang bertanda tangan dibawah ini :</p><div class="text-[12px] ml-4 mb-4 shrink-0"><div class="flex"><div class="w-6">1.</div><div class="w-24">Nama</div><div class="w-4">:</div><div class="font-bold uppercase">${safeVal('inp-nama-3'+suffix)}</div></div><div class="flex"><div class="w-6"></div><div class="w-24">NIK</div><div class="w-4">:</div><div class="uppercase">${safeVal('inp-nik-3'+suffix)}</div></div><div class="flex mt-2"><div class="w-6"></div><div class="w-24">Jabatan</div><div class="w-4">:</div><div class="uppercase">${safeVal('inp-jabatan-3'+suffix)}</div></div></div><p class="text-[12px] mb-4 shrink-0 leading-relaxed text-justify">Menerangkan bahwa telah melaksanakan pemeriksaan kesisteman (Commisioning Test) dan fisik pada lokasi <span class="font-bold uppercase">${globalData.lokasi}</span> sebagai berikut :</p><div class="text-[12px] ml-4 mb-4 space-y-3 shrink-0"><div class="flex"><div class="w-6">1.</div><div>Pelaksanaan pekerjaan <b>telah / belum</b> diselesaikan dengan spesifikasi teknis TELKOM.</div></div><div class="flex"><div class="w-6">2.</div><div>Hasil Pekerjaan <b>dapat / tidak dapat</b> diterima dan <b>layak / tidak layak</b> untuk diajukan Uji Terima (UT).</div></div></div><p class="text-[12px] mb-4 shrink-0">Demikian Laporan ini dibuat dengan sebenarnya dan dapat dipertanggung jawabkan.</p>
        <div class="w-full flex justify-end mt-4 text-[12px] font-bold text-center shrink-0">
            <div class="w-64"><p class="uppercase">${safeVal('inp-tempat-ttd-p4'+suffix) !== '-' ? safeVal('inp-tempat-ttd-p4'+suffix) : 'MATARAM'}, ${formatTgl}</p><p class="uppercase mt-1">${safeVal('inp-jabatan-3'+suffix)}</p>
            <div class="h-20 flex justify-center items-center overflow-hidden w-full">${ttdHtml}</div>
            <p class="underline uppercase">${safeVal('inp-nama-3'+suffix)}</p><p class="uppercase">NIK. ${safeVal('inp-nik-3'+suffix)}</p></div>
        </div>`;
    }
    const p3 = document.getElementById('preview-page-3'); if(p3) p3.innerHTML = renderHal3();

    // HAL 4
    function renderHal4(suffix = "", dupNum = 0) {
        const titleKop = dupNum > 0 ? `BOQ COMMISSIONING TEST DUPLIKAT ${dupNum}` : 'BOQ COMMISSIONING TEST';
        let boqImg = getSingleImg('prev-boq'+suffix, 'boq'+suffix);
        let ttdHtml = globalTTD ? `<div class="w-full flex justify-center my-1"><img src="${globalTTD}" class="h-16 object-contain" alt="TTD"></div>` : `<div class="h-16 w-full"></div>`;

        return `${kopHeader(titleKop)}${globalTabel}
        <div class="w-full mb-4 shrink-0">
            ${boqImg ? `<div class="w-full m-0 has-image overflow-hidden flex items-center justify-center" style="max-height:400px;">${boqImg}</div>` : '<div class="resize-wrapper w-full h-64 m-0 flex items-center justify-center text-slate-400 font-medium text-sm">(Tabel BOQ Belum Diupload)</div>'}
        </div>
        <div class="w-full flex justify-end text-[12px] font-bold text-center shrink-0 mt-4">
            <div class="w-64"><p class="uppercase">${safeVal('inp-tempat-ttd-p4'+suffix)}, ${safeVal('inp-tgl-ttd-p4'+suffix)}</p><p class="uppercase mt-1">${safeVal('inp-jabatan-ttd-p4'+suffix)}</p>
            <div class="h-16 flex justify-center items-center overflow-hidden w-full">${ttdHtml}</div>
            <p class="underline uppercase">${safeVal('inp-nama-ttd-p4'+suffix)}</p><p class="uppercase">NIK. ${safeVal('inp-nik-ttd-p4'+suffix)}</p></div>
        </div>`;
    }
    const p4 = document.getElementById('preview-page-4'); if(p4) p4.innerHTML = renderHal4();

    const pageTemplates = {
        5: { type: 'grid', title: 'EVIDENCE PROGRES', prefix: 'ev', gridClass: 'evidence-grid' },
        8: { type: 'grid', title: 'LAMPIRAN EVIDENT HASIL UKUR OPM', prefix: 'opm', gridClass: 'opm-grid' },
        9: { type: 'grid', title: 'LAMPIRAN EVIDENT HASIL UKUR OPM', prefix: 'opm2', gridClass: 'opm-grid-3' },
        10: { type: 'grid', title: 'LAMPIRAN EVIDENT HASIL UKUR OPM', prefix: 'opm3', gridClass: 'opm-grid' },
        11: { type: 'grid', title: 'LAMPIRAN EVIDENT HASIL UKUR OPM', prefix: 'opm4', gridClass: 'opm-grid-3' },
        12: { type: 'lk', title: 'EVIDENCE LABEL KABEL DISTRIBUSI (KU FO)', prefix: 'lk' },
        13: { type: 'grid', title: 'EVIDENCE PATCHCORD', prefix: 'pc', gridClass: 'opm-grid-3' },
        14: { type: 'grid', title: 'EVIDENCE PS-1-4 ODC', prefix: 'evps', gridClass: 'opm-grid-3' },
        15: { type: 'grid', title: 'EVIDENCE AKSESORIS PU-AS-HL', prefix: 'evhl1', gridClass: 'opm-grid' },
        16: { type: 'grid', title: 'EVIDENCE AKSESORIS PU-AS-HL', prefix: 'evhl2', gridClass: 'opm-grid-3' },
        17: { type: 'grid', title: 'EVIDENCE AKSESORIS PU-AS-SC', prefix: 'evsc', gridClass: 'opm-grid' },
        18: { type: 'grid', title: 'EVIDENCE AKSESORIS PU-AS-SC', prefix: 'evsc2', gridClass: 'opm-grid-3' },
    };

    function renderGridPage(suffix, sourceId, dupNum = 0) {
        const cfg = pageTemplates[sourceId];
        if(!cfg) return '';
        const prefix = suffix ? cfg.prefix + suffix : cfg.prefix;
        const printTitle = dupNum > 0 ? `${cfg.title} DUPLIKAT ${dupNum}` : cfg.title;
        
        if(cfg.type === 'lk') {
            const arr = getArrayByPrefix(prefix) || [];
            let gridLK = '<div class="opm-grid-3 w-full shrink-0 mt-2">';
            
            let key0 = prefix + '_0';
            let key1 = prefix + '_1';
            const src0 = arr[0] && arr[0].preview ? createResizableWrapper(arr[0].preview, key0, imageTransforms[key0] || defaultTf) : '';
            const src1 = arr[1] && arr[1].preview ? createResizableWrapper(arr[1].preview, key1, imageTransforms[key1] || defaultTf) : '';
            
            gridLK += `<div class="photo-item empty-slot"><div class="opm-img-wrapper">${src0}</div><div class="photo-caption">${arr[0] ? arr[0].caption : ''}</div></div>`;
            gridLK += `<div class="photo-item empty-slot"><div class="opm-img-wrapper">${src1}</div><div class="photo-caption">${arr[1] ? arr[1].caption : ''}</div></div>`;
            gridLK += `<div class="photo-item flex flex-col justify-between empty-slot"><div class="flex-1 flex items-center justify-center p-4 text-center font-bold text-[13px] leading-snug break-words" style="min-height: 170px;">${safeVal('inp-label-kabel-text'+suffix)}</div><div class="photo-caption border-t-2 border-black">PANJANG KABEL</div></div></div>`;
            return renderEvidentHeader(printTitle) + gridLK + renderParaf();
        }

        const arrayData = getArrayByPrefix(prefix) || [];
        let gridHTML = `<div class="${cfg.gridClass} w-full shrink-0 mt-2">`;
        arrayData.forEach((item, idx) => {
            if (!item) return;
            let key = prefix + '_' + idx;
            const src = item.preview ? createResizableWrapper(item.preview, key, imageTransforms[key] || defaultTf) : '';
            gridHTML += `<div class="photo-item empty-slot"><div class="opm-img-wrapper">${src}</div><div class="photo-caption">${item.caption || '&nbsp;'}</div></div>`;
        });
        gridHTML += '</div>';
        return renderEvidentHeader(printTitle) + gridHTML + renderParaf();
    }

    for(let id of [5,8,9,10,11,12,13,14,15,16,17,18]) {
        let pDOM = document.getElementById('preview-page-'+id);
        if(pDOM) pDOM.innerHTML = renderGridPage('', id);
    }

    function renderHalTabelLandscape(suffix = "", isHal7 = false) {
        let baseId = isHal7 ? '7' : '6';
        let tbImg = getSingleImg(`prev-tb${baseId}${suffix}`, `tb${baseId}${suffix}`);
        const judul = safeVal(`inp-judul-p${baseId}${suffix}`);
        const dataP6 = `
            <div class="font-bold leading-tight w-full mb-4 uppercase text-[11px] shrink-0">
                <div class="flex mb-1"><div class="w-[180px] italic">OPERATION WAVE LENGTH</div><div class="w-4 text-center">:</div><div class="flex-1 italic">${safeVal('inp-wave-'+baseId+suffix)}</div></div>
                <div class="flex mb-1"><div class="w-[180px]">PROJECT</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.proyek}</div></div>
                <div class="flex mb-1"><div class="w-[180px]">SURAT PESANAN</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.sp}</div></div>
                <div class="flex mb-1"><div class="w-[180px]">TIPE KABEL</div><div class="w-4 text-center">:</div><div class="flex-1">${safeVal('inp-tipe-kabel-'+baseId+suffix)}</div></div>
                <div class="flex mb-1"><div class="w-[180px]">JUMLAH CORE</div><div class="w-4 text-center">:</div><div class="flex-1">${safeVal('inp-jml-core-'+baseId+suffix)}</div></div>
                <div class="flex mb-1"><div class="w-[180px]">NAMA LOKASI</div><div class="w-4 text-center">:</div><div class="flex-1">${globalData.lokasi}</div></div>
                <div class="flex mb-1"><div class="w-[180px]">CATUAN</div><div class="w-4 text-center">:</div><div class="flex-1">${safeVal('inp-catuan-'+baseId+suffix)}</div></div>
            </div>
            <div class="border-t border-black mb-4 shrink-0"></div>
        `;

        let ttdHtml = globalTTD ? `<div class="w-full flex justify-center my-1"><img src="${globalTTD}" class="h-16 object-contain" alt="TTD"></div>` : `<div class="h-16 w-full"></div>`;

        return `
            <div class="flex justify-between items-center mb-4 shrink-0"><img src="${logoKiriUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Telkom"><h2 class="text-base font-bold uppercase text-center flex-1 mx-4 leading-tight">${judul}<br>PROJECT OUTSIDE PLANT FIBER OPTIC</h2><img src="${logoKananUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Infra"></div>
            <div class="border-t-[1.5px] border-black mb-[2px] shrink-0"></div><div class="border-t-[1.5px] border-black mb-3 shrink-0"></div>
            ${dataP6}
            <div class="w-full mb-4 shrink-0">
                ${tbImg ? `<div class="w-full m-0 overflow-hidden flex items-center justify-center" style="max-height:350px;">${tbImg}</div>` : '<div class="resize-wrapper w-full h-64 m-0 flex items-center justify-center text-slate-400 font-medium text-sm">(Tabel Belum Diupload)</div>'}
            </div>
            <div class="w-full flex justify-end text-[12px] font-bold text-center mt-4 shrink-0">
                <div class="w-64"><p class="uppercase">${safeVal(`inp-tempat-ttd-p${baseId}${suffix}`)}, ${safeVal(`inp-tgl-ttd-p${baseId}${suffix}`)}</p><p class="uppercase mt-1">${safeVal(`inp-jabatan-ttd-p${baseId}${suffix}`)}</p>
                <div class="h-16 flex justify-center items-center overflow-hidden w-full">${ttdHtml}</div>
                <p class="underline uppercase">${safeVal(`inp-nama-ttd-p${baseId}${suffix}`)}</p><p class="uppercase">NIK. ${safeVal(`inp-nik-ttd-p${baseId}${suffix}`)}</p></div>
            </div>
        `;
    }
    const p6 = document.getElementById('preview-page-6'); if(p6) p6.innerHTML = renderHalTabelLandscape();
    const p7 = document.getElementById('preview-page-7'); if(p7) p7.innerHTML = renderHalTabelLandscape('', true);

    function renderHal19(suffix = "", customPrevId = "prev-otdr", customTitleId = "inp-otdr-title", customSubTitleId = "inp-otdr-subtitle") {
        let otdrImg = getSingleImg(customPrevId+suffix, customPrevId.replace('prev-', '')+suffix);
        let subTitle = getVal(customSubTitleId+suffix);
        let subTitleHtml = subTitle.trim() !== '' ? `<h3 class="text-center font-bold text-[14px] mt-1 mb-2">${subTitle}</h3>` : '';
        
        return `
            <div class="flex justify-between items-center mb-4 shrink-0"><img src="${logoKiriUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Telkom"><h2 class="text-lg font-bold uppercase text-center flex-1 mx-4">${getVal(customTitleId+suffix) || 'REPORT HASIL UKUR OTDR'}</h2><img src="${logoKananUrl}" ${fallbackLogo} class="h-[30px] object-contain" alt="Infra"></div><div class="border-t-[3px] border-black mb-[2px] shrink-0"></div><div class="border-t-[1px] border-black mb-4 shrink-0"></div>
            ${renderEvidentHeaderInfoOnly()}
            ${subTitleHtml}
            <div class="w-full flex-1 min-h-0 flex flex-col justify-start pb-2">
                ${otdrImg ? `<div class="resize-wrapper has-image w-full h-full m-0 flex items-center justify-center overflow-hidden">${otdrImg}</div>` : '<div class="resize-wrapper w-full h-full m-0 flex items-center justify-center text-[10px] text-slate-400 py-4">(Gambar Screenshot Full OTDR Belum Diupload)</div>'}
            </div>
            ${renderParaf()}
        `;
    }
    const p19 = document.getElementById('preview-page-19'); if(p19) p19.innerHTML = renderHal19();
    const p20 = document.getElementById('preview-page-20'); if(p20) p20.innerHTML = renderHal19("", "prev-otdr2", "inp-otdr2-title", "inp-otdr2-subtitle");
    const p21 = document.getElementById('preview-page-21'); if(p21) p21.innerHTML = renderHal19("", "prev-otdr3", "inp-otdr3-title", "inp-otdr3-subtitle");

    function renderHalGambarLandscape(suffix = "", title = "LAMPIRAN KML", previewId = "prev-kml", dupNum = 0) {
        const printTitle = dupNum > 0 ? `${title} DUPLIKAT ${dupNum}` : title;
        let img = getSingleImg(previewId+suffix, previewId.replace('prev-', '')+suffix);
        return `${renderEvidentHeader(printTitle)}
        <div class="w-full flex-1 min-h-0 flex flex-col justify-center pb-4">
            ${img ? `<div class="resize-wrapper has-image w-full h-full m-0 flex items-center justify-center overflow-hidden">${img}</div>` : '<div class="resize-wrapper w-full h-full m-0 flex items-center justify-center text-slate-400 py-4">(Gambar Belum Diupload)</div>'}
        </div>${renderParaf()}`;
    }
    const p22 = document.getElementById('preview-page-22'); if(p22) p22.innerHTML = renderHalGambarLandscape();
    const p23 = document.getElementById('preview-page-23'); if(p23) p23.innerHTML = renderHalGambarLandscape("", "LAMPIRAN MANCORE", "prev-mancore");

    dynamicPagesConfig.forEach(page => {
        const idSuffix = "_dup" + page.id;
        const pageDOM = document.getElementById('preview-page-' + page.id);
        if(!pageDOM) return;
        
        if(page.sourceId === 1) pageDOM.innerHTML = p1.innerHTML; 
        else if(page.sourceId === 2) pageDOM.innerHTML = p2.innerHTML; 
        else if(page.sourceId === 3) pageDOM.innerHTML = renderHal3(idSuffix, page.dupNum);
        else if(page.sourceId === 4) pageDOM.innerHTML = renderHal4(idSuffix, page.dupNum);
        else if([5,8,9,10,11,12,13,14,15,16,17,18].includes(page.sourceId)) pageDOM.innerHTML = renderGridPage(idSuffix, page.sourceId, page.dupNum);
        else if(page.sourceId === 6) pageDOM.innerHTML = renderHalTabelLandscape(idSuffix, false);
        else if(page.sourceId === 7) pageDOM.innerHTML = renderHalTabelLandscape(idSuffix, true);
        else if(page.sourceId === 19) pageDOM.innerHTML = renderHal19(idSuffix);
        else if(page.sourceId === 20) pageDOM.innerHTML = renderHal19(idSuffix, "prev-otdr2", "inp-otdr2-title", "inp-otdr2-subtitle");
        else if(page.sourceId === 21) pageDOM.innerHTML = renderHal19(idSuffix, "prev-otdr3", "inp-otdr3-title", "inp-otdr3-subtitle");
        else if(page.sourceId === 22) pageDOM.innerHTML = renderHalGambarLandscape(idSuffix, "LAMPIRAN KML", "prev-kml", page.dupNum);
        else if(page.sourceId === 23) pageDOM.innerHTML = renderHalGambarLandscape(idSuffix, "LAMPIRAN MANCORE", "prev-mancore", page.dupNum);
    });
}