const firebaseConfig = {
    apiKey: "AIzaSyBxtJ_qZdFKcLKj3dMI71areMcFip8_vAw",
    authDomain: "lact-176f5.firebaseapp.com",
    projectId: "lact-176f5",
    storageBucket: "lact-176f5.appspot.com",
    messagingSenderId: "387130197169",
    appId: "1:387130197169:web:65485f3846e56436454e90"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

if (sessionStorage.getItem('userRole') !== 'admin') {
    alert("❌ Anda bukan Admin! Akses Ditolak.");
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('admin-user-list');
    
    db.collection("users").onSnapshot((querySnapshot) => {
        tbody.innerHTML = '';
        if (querySnapshot.empty) {
            tbody.innerHTML = `<tr><td colspan="3" class="p-8 text-center text-gray-400 italic">Belum ada user yang mendaftar di sistem ini.</td></tr>`;
            return;
        }

        querySnapshot.forEach((doc) => {
            const email = doc.id;
            const user = doc.data();
            
            let statusBadge = user.status === 'pending' ? '<span style="background:orange; padding:2px 8px; border-radius:10px;">Pending</span>' :
                              user.status === 'approved' ? '<span style="background:green; padding:2px 8px; border-radius:10px; color:white;">Approved</span>' :
                              '<span style="background:red; padding:2px 8px; border-radius:10px; color:white;">Rejected</span>';

            let buttons = user.status === 'pending' ? `
                <button onclick="setStatus('${email}', 'approved')" style="background:green; color:white; padding:5px; margin:2px;">Terima</button>
                <button onclick="setStatus('${email}', 'rejected')" style="background:red; color:white; padding:5px; margin:2px;">Tolak</button>
            ` : `<button onclick="setStatus('${email}', 'pending')" style="background:gray; color:white; padding:5px;">Reset ke Pending</button>`;

            tbody.innerHTML += `<tr><td class="p-4">${email}</td><td class="p-4 text-center">${statusBadge}</td><td class="p-4 text-center">${buttons}</td></tr>`;
        });
    });
});

window.setStatus = function(email, newStatus) {
    db.collection("users").doc(email).update({ status: newStatus }).catch(err => alert("Error: " + err));
};

window.logoutAdmin = function() {
    sessionStorage.removeItem('isLoggedIn'); sessionStorage.removeItem('userRole'); window.location.href = 'login.html';
};