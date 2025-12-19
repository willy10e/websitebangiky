let cart = [];
let total = 0;

function checkoutWA() {
    let user = localStorage.getItem("currentUser");
    if (!user) {
        alert("Silakan login terlebih dahulu!");
        return;
    }

    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    let phoneNumber = "+6283134749029"; // GANTI nomor WA toko (pakai 62)

    let message = `Halo Bang Iky 👋%0A%0A`;
    message += `Saya *${user}* ingin memesan:%0A`;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.product} - Rp ${item.price.toLocaleString("id-ID")}%0A`;
    });

    message += `%0A*Total: Rp ${total.toLocaleString("id-ID")}*%0A`;
    message += `%0ATerima kasih 🙏`;

    let waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waUrl, "_blank");
}


function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total.toLocaleString("id-ID");

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - Rp ${item.price.toLocaleString("id-ID")}`;
        cartItems.appendChild(li);
    });
}
