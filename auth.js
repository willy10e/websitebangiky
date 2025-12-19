function register() {
    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;

    if (username === "" || password === "") {
        alert("Data tidak boleh kosong!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Pendaftaran berhasil!");
    window.location.href = "login.html";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah!");
    }
}
