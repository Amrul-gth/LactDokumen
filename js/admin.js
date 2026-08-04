// 1. CONFIG FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBxtJ_qZdFKcLKj3dMI71areMcFip8_vAw",
    authDomain: "lact-176f5.firebaseapp.com",
    projectId: "lact-176f5",
    storageBucket: "lact-176f5.appspot.com",
    messagingSenderId: "387130197169",
    appId: "1:387130197169:web:65485f3846e56436454e90"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 2. PROTEKSI KEAMANAN ADMIN
if (sessionStorage.getItem('userRole') !== 'admin') {
    alert("❌ Anda bukan Admin! Akses Ditolak.");
    window.location.href = 'login.html';
}

window.logoutAdmin = function() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    window.location.href = 'login.html';
};

// 3. TARIK DATA DARI FIREBASE REAL-TIME
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('admin-user-list');

    db.collection("users").onSnapshot((querySnapshot) => {
        tbody.innerHTML = ''; 
        if (querySnapshot.empty) {
            tbody.innerHTML = '<tr><td colspan="3" class="text-center p-8 text-gray-500 italic">Belum ada user yang mendaftar.</td></tr>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const email = doc.id;
            const user = doc.data();
            
            let statusBadge = '';
            let actionButtons = '';

            // Tampilan Status & Tombol (Berdasarkan Status di Database)
            if (user.status === 'pending') {
                statusBadge = '<span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">⏳ Menunggu</span>';
                actionButtons = `
                    <button onclick="setStatus('${email}', 'approved')" class="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow mr-1">Terima</button>
                    <button onclick="setStatus('${email}', 'rejected')" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow">Tolak</button>
                `;
            } else if (user.status === 'reset_pending') {
                statusBadge = '<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold animate-pulse">🔄 Reset Sandi</span>';
                actionButtons = `
                    <button onclick="approveReset('${email}')" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow mr-1">Setujui Sandi</button>
                    <button onclick="rejectReset('${email}')" class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow">Tolak</button>
                `;
            } else if (user.status === 'approved') {
                statusBadge = '<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">✅ Diizinkan</span>';
                actionButtons = `<button onclick="setStatus('${email}', 'rejected')" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg text-xs font-bold">Cabut Akses</button>`;
            } else if (user.status === 'rejected') {
                statusBadge = '<span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">❌ Ditolak</span>';
                actionButtons = `<button onclick="setStatus('${email}', 'approved')" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg text-xs font-bold">Pulihkan Izin</button>`;
            }

            // Suntik ke dalam Tabel
            tbody.innerHTML += `
                <tr class="border-b border-gray-100 hover:bg-gray-50 transition">
                    <td class="p-4 font-semibold text-gray-800">${email}</td>
                    <td class="p-4 text-center">${statusBadge}</td>
                    <td class="p-4 text-center flex items-center justify-center gap-2">
                        ${actionButtons}
                        <button onclick="deleteUser('${email}')" class="text-red-400 hover:text-red-700 font-bold text-xl ml-2" title="Hapus Akun">&times;</button>
                    </td>
                </tr>
            `;
        });
    });
});

// 4. FUNGSI UBAH DATABASE
window.setStatus = function(email, newStatus) {
    db.collection("users").doc(email).update({ status: newStatus }).catch(e => alert("Error: " + e.message));
};

window.approveReset = function(email) {
    const userRef = db.collection("users").doc(email);
    userRef.get().then((doc) => {
        if (doc.exists) {
            userRef.update({
                password: doc.data().tempPassword, // Pindahkan sandi baru
                status: 'approved',
                tempPassword: firebase.firestore.FieldValue.delete() // Hapus jejak sandi temp
            }).catch(e => alert("Error: " + e.message));
        }
    });
};

window.rejectReset = function(email) {
    db.collection("users").doc(email).update({
        status: 'approved',
        tempPassword: firebase.firestore.FieldValue.delete()
    }).catch(e => alert("Error: " + e.message));
};

window.deleteUser = function(email) {
    if(confirm(`Yakin ingin hapus permanen akun ${email} dari sistem?`)) {
        db.collection("users").doc(email).delete().catch(e => alert("Error: " + e.message));
    }
};