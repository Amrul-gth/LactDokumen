// ==========================================
// PROTEKSI HALAMAN ADMIN
// ==========================================
if (sessionStorage.getItem('userRole') !== 'admin') {
    alert("❌ Anda bukan Admin! Akses Ditolak.");
    window.location.href = 'login.html';
}

function logoutAdmin() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    window.location.href = 'login.html';
}

// ==========================================
// LOGIK RENDER TABEL USER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderAdminTable();
});

function renderAdminTable() {
    const tbody = document.getElementById('admin-user-list');
    let usersDB = JSON.parse(localStorage.getItem('revpro_users_db')) || {};
    tbody.innerHTML = '';

    const emails = Object.keys(usersDB);

    if (emails.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" class="p-8 text-center text-gray-400 italic">Belum ada user yang mendaftar di sistem ini.</td></tr>`;
        return;
    }

    emails.forEach(email => {
        const user = usersDB[email];
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
}

function setStatus(email, newStatus) {
    let usersDB = JSON.parse(localStorage.getItem('revpro_users_db')) || {};
    if (usersDB[email]) {
        usersDB[email].status = newStatus;
        localStorage.setItem('revpro_users_db', JSON.stringify(usersDB));
        renderAdminTable(); 
    }
}

// Persetujuan Reset Password (Ubah password utama menjadi password sementara yang baru)
function approveReset(email) {
    let usersDB = JSON.parse(localStorage.getItem('revpro_users_db')) || {};
    if(usersDB[email]) {
        usersDB[email].password = usersDB[email].tempPassword; // Timpa dengan sandi baru
        delete usersDB[email].tempPassword; // Bersihkan memori temp
        usersDB[email].status = 'approved'; // Kembalikan status jadi hijau
        localStorage.setItem('revpro_users_db', JSON.stringify(usersDB));
        renderAdminTable();
    }
}

// Penolakan Reset Password (Tetap pakai password lama)
function rejectReset(email) {
    let usersDB = JSON.parse(localStorage.getItem('revpro_users_db')) || {};
    if(usersDB[email]) {
        delete usersDB[email].tempPassword; // Buang sandi barunya
        usersDB[email].status = 'approved'; // Tetap boleh masuk, tapi harus ingat sandi lama
        localStorage.setItem('revpro_users_db', JSON.stringify(usersDB));
        renderAdminTable();
    }
}

function deleteUser(email) {
    if(confirm(`Yakin ingin menghapus secara permanen akun ${email}?`)) {
        let usersDB = JSON.parse(localStorage.getItem('revpro_users_db')) || {};
        delete usersDB[email];
        localStorage.setItem('revpro_users_db', JSON.stringify(usersDB));
        renderAdminTable();
    }
}