// ==========================================
// 1. CONFIG FIREBASE (Wajib Paling Atas)
// ==========================================
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

// ==========================================
// PROTEKSI HALAMAN ADMIN
// ==========================================
if (sessionStorage.getItem('userRole') !== 'admin') {
    alert("❌ Anda bukan Admin! Akses Ditolak.");
    window.location.href = 'login.html';
}

window.logoutAdmin = function() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    window.location.href = 'login.html';
};

// ==========================================
// LOGIKA RENDER TABEL USER (FIREBASE REAL-TIME)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderAdminTable();
});

function renderAdminTable() {
    const tbody = document.getElementById('admin-user-list');
    tbody.innerHTML = '<tr><td colspan="3" class="p-8 text-center text-gray-400 italic">⏳ Mengambil data dari server...</td></tr>';

    // onSnapshot membuat tabel ini akan otomatis ter-update setiap ada data baru masuk/diubah
    db.collection("users").onSnapshot((querySnapshot) => {
        tbody.innerHTML = ''; // Kosongkan tabel sebelum merender ulang

        if (querySnapshot.empty) {
            tbody.innerHTML = `<tr><td colspan="3" class="p-8 text-center text-gray-400 italic">Belum ada user yang mendaftar di sistem ini.</td></tr>`;
            return;
        }

        querySnapshot.forEach((doc) => {
            const email = doc.id;
            const user = doc.data();
            
            let statusBadge = '';
            let actionButtons = '';

            if (user.status === 'pending') {
                statusBadge = '<span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">⏳ Menunggu</span>';
                actionButtons = `
                    <button onclick="setStatus('${email}', 'approved')" class="bg-green-600 text-white hover:bg-green-700 px-4 py-1.5 rounded-lg text-xs font-bold shadow transition">Terima</button>
                    <button onclick="setStatus('${email}', 'rejected')" class="bg-red-600 text-white hover:bg-red-700 px-4 py-1.5 rounded-lg text-xs font-bold shadow transition">Tolak</button>
                `;
            } else if (user.status === 'reset_pending') {
                statusBadge = '<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm animate-pulse">🔄 Reset Sandi</span>';
                actionButtons = `
                    <button onclick="approveReset('${email}')" class="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow transition">Setujui Sandi</button>
                    <button onclick="rejectReset('${email}')" class="bg-orange-500 text-white hover:bg-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold shadow transition">Tolak Sandi</button>
                `;
            } else if (user.status === 'approved') {
                statusBadge = '<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">✅ Diizinkan</span>';
                actionButtons = `<button onclick="setStatus('${email}', 'rejected')" class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-1 text-xs font-bold rounded-lg transition">Cabut Akses</button>`;
            } else if (user.status === 'rejected') {
                statusBadge = '<span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">❌ Ditolak</span>';
                actionButtons = `<button onclick="setStatus('${email}', 'approved')" class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-1 text-xs font-bold rounded-lg transition">Pulihkan Izin</button>`;
            }

            tbody.innerHTML += `
                <tr class="hover:bg-gray-50 transition border-b border-gray-100 last:border-0">
                    <td class="p-4 font-semibold text-gray-800">${email}</td>
                    <td class="p-4 text-center">${statusBadge}</td>
                    <td class="p-4 text-center flex justify-center gap-2">
                        ${actionButtons}
                        <button onclick="deleteUser('${email}')" class="text-red-400 hover:text-red-700 px-2 font-bold text-xl" title="Hapus Akun Permanen">&times;</button>
                    </td>
                </tr>
            `;
        });
    });
}

// ==========================================
// FUNGSI UPDATE KE FIREBASE
// ==========================================

window.setStatus = function(email, newStatus) {
    db.collection("users").doc(email).update({
        status: newStatus
    }).catch((error) => {
        alert("❌ Gagal mengupdate status: " + error.message);
    });
};

// Persetujuan Reset Password
window.approveReset = function(email) {
    const userRef = db.collection("users").doc(email);
    userRef.get().then((doc) => {
        if (doc.exists) {
            const user = doc.data();
            // Timpa password lama dengan sandi baru, hapus kolom tempPassword, ubah status ke approved
            userRef.update({
                password: user.tempPassword,
                status: 'approved',
                tempPassword: firebase.firestore.FieldValue.delete()
            }).catch((error) => alert("❌ Gagal menyetujui reset: " + error.message));
        }
    });
};

// Penolakan Reset Password
window.rejectReset = function(email) {
    // Kembalikan ke approved dan buang sandi sementaranya
    db.collection("users").doc(email).update({
        status: 'approved',
        tempPassword: firebase.firestore.FieldValue.delete()
    }).catch((error) => alert("❌ Gagal menolak reset: " + error.message));
};

// Hapus User Permanen
window.deleteUser = function(email) {
    if(confirm(`Yakin ingin menghapus secara permanen akun ${email}?`)) {
        db.collection("users").doc(email).delete()
        .then(() => alert(`✅ Akun ${email} berhasil dihapus dari server.`))
        .catch((error) => alert("❌ Gagal menghapus akun: " + error.message));
    }
};