// 1. CONFIG FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBxtJ_qZdFKcLKj3dMI71areMcFip8_vAw",
    authDomain: "lact-176f5.firebaseapp.com",
    projectId: "lact-176f5",
    storageBucket: "lact-176f5.appspot.com", 
    messagingSenderId: "387130197169",
    appId: "1:387130197169:web:65485f3846e56436454e90"
};

// Nyalakan Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 2. FUNGSI TOAST UI
function showToast(message, type = 'normal') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    let borderColor = type === 'error' ? 'border-red-500' : (type === 'success' ? 'border-green-500' : (type === 'loading' ? 'border-blue-500' : 'border-orange-500'));
    toast.className = `bg-slate-800 text-white px-5 py-3 rounded-lg shadow-xl text-sm opacity-0 transform translate-y-2 transition-all duration-300 flex items-center border-l-4 ${borderColor}`;
    toast.innerText = message;
    toastContainer.appendChild(toast);
    requestAnimationFrame(() => { toast.classList.remove('opacity-0', 'translate-y-2'); });
    setTimeout(() => { toast.classList.add('opacity-0', 'translate-y-2'); setTimeout(() => toast.remove(), 300); }, 4000);
}

// 3. FUNGSI MATA PASSWORD
window.togglePassword = function(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />`;
    } else {
        input.type = 'password';
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // TAB UI
    const btnUser = document.getElementById('btn-tab-user');
    const btnAdmin = document.getElementById('btn-tab-admin');
    const formUser = document.getElementById('form-user');
    const formAdmin = document.getElementById('form-admin');

    btnUser.addEventListener('click', () => {
        btnUser.classList.add('bg-red-600', 'text-white', 'shadow-md'); btnUser.classList.remove('text-gray-400');
        btnAdmin.classList.remove('bg-red-600', 'text-white', 'shadow-md'); btnAdmin.classList.add('text-gray-400');
        formUser.classList.remove('hidden'); formAdmin.classList.add('hidden');
    });

    btnAdmin.addEventListener('click', () => {
        btnAdmin.classList.add('bg-red-600', 'text-white', 'shadow-md'); btnAdmin.classList.remove('text-gray-400');
        btnUser.classList.remove('bg-red-600', 'text-white', 'shadow-md'); btnUser.classList.add('text-gray-400');
        formAdmin.classList.remove('hidden'); formUser.classList.add('hidden');
    });

    // MODAL STATUS (FIREBASE)
    const btnCheckStatus = document.getElementById('btn-check-status');
    const modalStatus = document.getElementById('modal-status');
    btnCheckStatus.addEventListener('click', (e) => { e.preventDefault(); modalStatus.classList.remove('hidden'); });
    document.getElementById('btn-close-status').addEventListener('click', () => { modalStatus.classList.add('hidden'); });

    document.getElementById('form-status').addEventListener('submit', (e) => {
        e.preventDefault();
        const cEmail = document.getElementById('check-email').value.trim().toLowerCase();
        const statusResult = document.getElementById('status-result');
        statusResult.className = 'mt-6 p-4 rounded-xl border text-sm font-bold block animate-fade-in';
        statusResult.innerHTML = `⏳ Mengecek ke server...`;

        db.collection("users").doc(cEmail).get().then((doc) => {
            if (!doc.exists) {
                statusResult.innerHTML = `Akun tidak ditemukan. Silakan daftar.`;
                statusResult.classList.add('bg-gray-100', 'text-gray-800');
            } else {
                const status = doc.data().status;
                if (status === 'pending') {
                    statusResult.innerHTML = `⏳ Akun Sedang Di-Review Admin.`;
                    statusResult.classList.add('bg-yellow-100', 'text-yellow-800');
                } else if (status === 'rejected') {
                    statusResult.innerHTML = `❌ Akses Anda Ditolak Admin.`;
                    statusResult.classList.add('bg-red-100', 'text-red-800');
                } else if (status === 'approved') {
                    statusResult.innerHTML = `✅ Akun Aktif! Silakan Login.`;
                    statusResult.classList.add('bg-green-100', 'text-green-800');
                } else if (status === 'reset_pending') {
                    statusResult.innerHTML = `🔄 Menunggu persetujuan Ganti Sandi.`;
                    statusResult.classList.add('bg-blue-100', 'text-blue-800');
                }
            }
        }).catch(err => { statusResult.innerHTML = `Error Koneksi.`; });
    });

    // MODAL LUPA SANDI (FIREBASE)
    const btnForgot = document.getElementById('btn-forgot-pass');
    const modalForgot = document.getElementById('modal-forgot');
    btnForgot.addEventListener('click', (e) => { e.preventDefault(); modalForgot.classList.remove('hidden'); });
    document.getElementById('btn-close-forgot').addEventListener('click', () => { modalForgot.classList.add('hidden'); });

    document.getElementById('form-forgot').addEventListener('submit', (e) => {
        e.preventDefault();
        const fEmail = document.getElementById('forgot-email').value.trim().toLowerCase();
        const fPass = document.getElementById('forgot-password').value.trim();
        showToast("⏳ Sedang memproses ke server...", "loading");

        const userRef = db.collection("users").doc(fEmail);
        userRef.get().then((doc) => {
            if (!doc.exists) {
                showToast("❌ Email belum terdaftar!", "error");
            } else {
                userRef.update({ status: 'reset_pending', tempPassword: fPass }).then(() => {
                    modalForgot.classList.add('hidden');
                    showToast("✅ Reset sandi diajukan! Tunggu ACC Admin.", "success");
                    setTimeout(() => window.location.href = `mailto:ayaxgunsperm@gmail.com?subject=RESET PASSWORD&body=Halo Admin, tolong acc sandi baru email ${fEmail}`, 1500);
                });
            }
        });
    });

    // LOGIN & REGISTER (FIREBASE)
    formUser.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const email = document.getElementById('user-email').value.trim().toLowerCase();
        const password = document.getElementById('user-password').value.trim();

        if (!email.endsWith('@gmail.com')) { showToast("❌ Wajib pakai @gmail.com!", "error"); return; }
        showToast("⏳ Menyambung ke Firebase...", "loading");

        const userRef = db.collection("users").doc(email);
        userRef.get().then((doc) => {
            if (!doc.exists) {
                // DAFTAR BARU
                userRef.set({
                    password: password,
                    status: 'pending',
                    tanggal_daftar: new Date().toISOString()
                }).then(() => {
                    showToast(`📩 Akun didaftarkan! Status: PENDING.`, "success");
                    setTimeout(() => window.location.href = `mailto:ayaxgunsperm@gmail.com?subject=AKSES BARU LACT&body=Halo Admin, tolong acc akses web untuk email ${email}`, 1500);
                });
            } else {
                // LOGIN LAMA
                const user = doc.data();
                if (user.status === 'pending') showToast("⏳ Akun belum di-Approve Admin.", "error");
                else if (user.status === 'rejected') showToast("❌ Akses DITOLAK Admin.", "error");
                else if (user.status === 'reset_pending') showToast("🔄 Akun dalam verifikasi ganti sandi.", "error");
                else if (user.status === 'approved') {
                    if (user.password === password) {
                        showToast("✅ Login Berhasil!", "success");
                        sessionStorage.setItem('isLoggedIn', 'true');
                        sessionStorage.setItem('userRole', 'user');
                        setTimeout(() => window.location.href = 'index.html', 800);
                    } else showToast("❌ Password salah!", "error");
                }
            }
        });
    });

    // LOGIN ADMIN
    formAdmin.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('admin-email').value;
        const pass = document.getElementById('admin-password').value;

        if (email === 'ayaxgunsperm@gmail.com' && pass === 'Mataram123_') {
            showToast("✅ Welcome Admin!", "success");
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userRole', 'admin');
            setTimeout(() => window.location.href = 'admin.html', 800);
        } else showToast("❌ Password Admin Salah!", "error");
    });
});