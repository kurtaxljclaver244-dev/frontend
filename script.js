// Product catalog, cart logic, routing, login, and contact handling
// Images use picsum.photos placeholders. Replace with your own URLs anytime.

/* --------------------------- Product Data (20+) --------------------------- */
const products = [
	{ id: 1,  name: "Laptop Pro 14",        price: 1299.0, desc: "Powerful 14-inch laptop",        img: "https://imgs.search.brave.com/7GnlBBKOCdtZMqip_rhJHPcwE78GOjN8Pq3hm-z-Omw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2lzL2lt/YWdlL0RlbGxDb250/ZW50L2NvbnRlbnQv/ZGFtL3NzMi9wcm9k/dWN0LWltYWdlcy9k/ZWxsLWNsaWVudC1w/cm9kdWN0cy9ub3Rl/Ym9va3MvZGVsbC1w/cm8vcGMxNDI1NS9t/ZWRpYS1nYWxsZXJ5/L2JsYWNrL2hkLWZo/ZC9ub3RlYm9vay1k/ZWxsLXByby1wYzE0/MjU1LWhkLWZoZC1i/ay1nYWxsZXJ5LTIu/cHNkP2ZtdD1wbmct/YWxwaGEmcHNjYW49/YXV0byZzY2w9MSZo/ZWk9ODA0JndpZD0x/MzI4JnFsdD0xMDAs/MSZyZXNNb2RlPXNo/YXJwMiZzaXplPTEz/MjgsODA0JmNocnNz/PWZ1bGw" },
	{ id: 2,  name: "Noise Headphones",     price: 199.99, desc: "Active noise cancelling",        img: "https://imgs.search.brave.com/CwqzbGKf5z7YNaRKE7oqLnyuYloC4cLpKMdFubNBa3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/MTAwLzI0OC9zbWFs/bC93aGl0ZS13aXJl/bGVzcy1ibHVldG9v/dGgtaGVhZHBob25l/cy1vbi1ibGFjay1i/YWNrZ3JvdW5kLXRo/ZS1oaWdobGlnaHQt/b2Ytd2lyZWxlc3Mt/Ymx1ZXRvb3RoLWhl/YWRwaG9uZXMtaXMt/bm8tY29ubmVjdG9y/LXRoZXJlLWlzLW5v/LWNvbm5lY3Rpbmct/Y2FibGUtYmV0d2Vl/bi10aGUtbGVmdC1h/bmQtcmlnaHQtaGVh/ZHBob25lcy1waG90/by5qcGc" },
	{ id: 3,  name: "Smartphone X",         price: 899.0,  desc: "Flagship performance",           img: "https://imgs.search.brave.com/aqnLnMskOdE8J02DerIhAuGGbFCmiAecL1Wcy1S5cfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eWFua29kZXNpZ24u/Y29tL2ltYWdlcy9k/ZXNpZ25fbmV3cy8y/MDI0LzAxL2RyYWZ0/LXgtcGhvbmUvb2Jq/ZWN0X3hfc21hcnRw/aG9uZV80LmpwZw" },
	{ id: 4,  name: "4K Monitor 27\"",      price: 349.0,  desc: "Crisp 4K IPS panel",             img: "https://imgs.search.brave.com/g8MOQ4Qx8nLAaAbLmhPAsCal40qbkbql9WW2fafFDeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9p/bWFnZXMvcHJvZHVj/dHMvMGVkOWZhNmEt/YTU4MS00Y2ZhLThj/MzEtMjdhZThjZDgz/YWQ1LmpwZzttYXhI/ZWlnaHQ9NDI3O21h/eFdpZHRoPTY0MD9m/b3JtYXQ9d2VicA" },
	{ id: 5,  name: "Mechanical Keyboard",  price: 119.0,  desc: "Tactile switches",               img: "https://imgs.search.brave.com/nmJseAgMmNTnr5GZRXMDdiiMR9ZsSbkF8Q3NSTS8gBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy9vUllBQU9TdzdW/UmpmajBFL3MtbDQw/MC53ZWJw" },
	{ id: 6,  name: "Wireless Mouse",       price: 49.99,  desc: "Ergonomic design",               img: "https://imgs.search.brave.com/GgggKUg2bfT5w2wVWJpuKXUqHBMDbPD86WJLWv8wpjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzI5Lzc1LzQ4/LzM2MF9GXzE1Mjk3/NTQ4ODFfcjJzYVpI/ejh0WXN5dHdoeVgx/OUtRNWtxNHcwS2I3/bEsuanBn" },
	{ id: 7,  name: "Webcam 1080p",         price: 69.99,  desc: "Crystal clear calls",            img: "https://imgs.search.brave.com/VfBfWUx_imC5od1vBpGluHXLTnNLj1P8nggPhmXSdwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF6UnpSMWotOEwu/anBn" },
	{ id: 8,  name: "USB-C Hub",            price: 39.0,   desc: "7-in-1 expansion",               img: "https://imgs.search.brave.com/WR6UOq8nOnqJy1VPE0JhE9RxG8ywAFYwOTATCF0nGLE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFIa1JURWNISkwu/anBn" },
	{ id: 9,  name: "Portable SSD 1TB",     price: 129.0,  desc: "Blazing fast storage",           img: "https://imgs.search.brave.com/a-BmI14YMXKqw8hMRGVFmVQj4LfIfjg6IDnbhyvouB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF1WFJhNzJRd0wu/anBn" },
	{ id: 10, name: "Action Camera",        price: 229.0,  desc: "Stabilized 4K video",            img: "https://imgs.search.brave.com/-0g2hoaI3T4bv8MZrVistOjL0FlukgCl9SJ-foAyqu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/NzgzOTEwNy9waG90/by9hY3Rpb24tc3Bv/cnRzLWNhbWVyYXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTNDRm5pUjNUVkVw/ZV92N1BqT05TUWM2/LWgyT3lna1puWGxf/WkVtOFRyT0k9" },
	{ id: 11, name: "Smartwatch S",         price: 249.0,  desc: "Fitness + notifications",        img: "https://imgs.search.brave.com/Yxn8GWX1S1dWwfeQ5S88nYR2qIpYBNcCI3G_IsF2XSM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8x/MC8wNy8xNC8yNC9z/bWFydHdhdGNoLTgz/MDAyMzhfNjQwLmpw/Zw" },
	{ id: 12, name: "Bluetooth Speaker",    price: 89.0,   desc: "Rich portable sound",            img: "https://imgs.search.brave.com/PZfHNcSZVYk5HYUfzdGetBNggtv-b_vG_kyzubhKrYQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/MDg5Lzc5My9zbWFs/bC9jb21wYWN0LXBv/cnRhYmxlLWJsdWV0/b290aC1zcGVha2Vy/LWluLWEtY296eS1p/bmRvb3Itc2V0dGlu/Zy1kdXJpbmctZXZl/bmluZy1mcmVlLXBo/b3RvLmpwZWc" },
	{ id: 13, name: "Drone Mini",           price: 349.0,  desc: "Compact aerial shots",           img: "https://imgs.search.brave.com/0OtXwOZR4Wcg3cNmcf-uyKCII-ZUXwb9_OSJccyzAPU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbWF0/ZXVycGhvdG9ncmFw/aGVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNy8y/MDIzLzA2L0RKSS1N/aW5pLTMtd2l0aC1E/SkktUkMuanBn" },
	{ id: 14, name: "Gaming Controller",    price: 59.0,   desc: "Low-latency wireless",           img: "https://imgs.search.brave.com/39xHkkBA-qvKvm71DoHN2J-Fwh6sajCrFLFC6ZFg1UY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxaEpxU2lXMEFM/LmpwZw" },
	{ id: 15, name: "VR Headset",           price: 499.0,  desc: "Immersive experiences",          img: "https://imgs.search.brave.com/c7vl5qfAluVzoH7925mUZtSLi65NI3nZMp64ZQIKsSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvc21hcnQtZ2xh/c3MvYy9vL28vYzEz/Ni0zZC12ci1nbGFz/c2VzLWdpYW50LXNj/cmVlbi1oZWFkc2V0/LWJsdWV0b290aC1y/ZW1vdGUtYmVzdC1v/cmlnaW5hbC1pbWFo/MzNyZnd0YzZyejJi/LmpwZWc_cT03MA" },
	{ id: 16, name: "Desk Lamp LED",        price: 29.0,   desc: "Adjustable brightness",          img: "https://imgs.search.brave.com/PcI1BSSfMBhMrdqT1QADXQOAMIZg0zIV-brhp8ZVRAo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxczdSR1J3U29M/LmpwZw" },
	{ id: 17, name: "Smart Home Plug",      price: 19.0,   desc: "App + voice control",            img: "https://imgs.search.brave.com/doo83OieK-JTpVCy_vzHrqi19QtK8qQVs9vKEFjIRmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFYdStjVy1iV0wu/anBn" },
	{ id: 18, name: "E-reader 7\"",         price: 149.0,  desc: "Glare-free display",             img: "https://imgs.search.brave.com/h1_ODzXSiLZQ4oCOJlqU6ZI9O2Z4qBmoMCaK4mgySUg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/Ym9vay1yZWFkZXIt/cGluay1iYWNrZ3Jv/dW5kXzU4NzAyLTY1/MTcuanBnP3NlbXQ9/YWlzX2luY29taW5n/Jnc9NzQwJnE9ODA" },
	{ id: 19, name: "Office Chair",         price: 179.0,  desc: "Ergonomic support",              img: "https://imgs.search.brave.com/7md1PnubZEMCvmkLkPfKH_4GEsBTTAzsxl7kLY68pl4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzI1LzkxLzY1/LzM2MF9GXzIyNTkx/NjU0NF9NdXVpcmRV/VXgxZTZEMWhKS1JJ/Q1BYM3JoM2RnTVA3/WS5qcGc" },
	{ id: 20, name: "Travel Backpack",      price: 89.0,   desc: "Carry-on friendly",              img: "https://imgs.search.brave.com/yA-D_fwW-gwHDp2x09fLut5IynFuCt7DR96LMdamnSE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/L3VuZGVyc2NvcmVk/LWNvb3dvei1iYWNr/cGFjay1jb293b3ot/bGFyZ2UtdHJhdmVs/LWJhY2twYWNrLmpw/Zz9jPTE2eDkmcT1o/XzcyMCx3XzEyODAs/Y19maWxs" },
	{ id: 21, name: "Coffee Maker",         price: 79.0,   desc: "Programmable drip",              img: "https://imgs.search.brave.com/yA-D_fwW-gwHDp2x09fLut5IynFuCt7DR96LMdamnSE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/L3VuZGVyc2NvcmVk/LWNvb3dvei1iYWNr/cGFjay1jb293b3ot/bGFyZ2UtdHJhdmVs/LWJhY2twYWNrLmpw/Zz9jPTE2eDkmcT1o/XzcyMCx3XzEyODAs/Y19maWxs" },
	{ id: 22, name: "Air Purifier",         price: 139.0,  desc: "HEPA filtration",                img: "https://imgs.search.brave.com/lf2XZAUeqhXsQizatXp5yfPQ7D6AyVbb6ioYqxtlWlo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/NzUxNjkwOS9waG90/by9nZW5lcmljLWFp/ci1wdXJpZmllci1j/bGVhbmluZy12aXJ1/c2VzLWFuZC1iYWN0/ZXJpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MG1vSjc4/OXp5U01rWXI5YUdR/eGF1c2E3emZid0tD/ZERWLWkzaURCbS1j/cz0"}
];

/* ------------------------- DOM References & State ------------------------- */
const productListEl = document.getElementById("product-list");
const featuredListEl = document.getElementById("featured-list");
const cartListEl = document.getElementById("cart");
const totalEl = document.getElementById("total");
const cartCountEl = document.getElementById("cart-count");
const checkoutFormEl = document.getElementById("checkout-form");
const confirmCheckoutBtn = document.getElementById("confirm-checkout");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const greetingEl = document.getElementById("greeting");

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
// Migrate old name-based login to email if present
let userEmail = localStorage.getItem("userEmail") || "";
if (!userEmail) {
	const legacyName = localStorage.getItem("username") || "";
	if (legacyName) {
		// Best effort: fabricate an email from legacy name
		const fabricated = legacyName.replace(/\s+/g, ".").toLowerCase() + "@example.com";
		userEmail = fabricated;
		localStorage.setItem("userEmail", userEmail);
		localStorage.removeItem("username");
	}
}

/* --------------------------------- Render -------------------------------- */
function renderProducts(targetEl, list) {
	targetEl.innerHTML = "";
	list.forEach((p) => {
		const col = document.createElement("div");
		col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
		col.innerHTML = `
			<div class="card h-100 product-card shadow-sm">
				<img src="${p.img}" class="card-img-top" alt="${p.name}" />
				<div class="card-body d-flex flex-column">
					<h6 class="card-title">${p.name}</h6>
					<p class="card-text small text-muted flex-grow-1">${p.desc}</p>
					<div class="d-flex justify-content-between align-items-center">
						<strong>$${p.price.toFixed(2)}</strong>
						<button class="btn btn-primary btn-sm" data-id="${p.id}">Add to cart</button>
					</div>
				</div>
			</div>
		`;
		targetEl.appendChild(col);
	});
	// attach handler
	targetEl.querySelectorAll("button[data-id]").forEach((btn) => {
		btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
	});
}

// no helper needed; each product now has a category-matched image URL

function renderCart() {
	cartListEl.innerHTML = "";
	let total = 0;
	cart.forEach((item) => {
		total += item.price * item.qty;
		const li = document.createElement("li");
		li.className = "list-group-item d-flex justify-content-between align-items-center";
		li.innerHTML = `
			<div class="me-3">
				<strong>${item.name}</strong><br>
				<span class="text-muted">$${item.price.toFixed(2)} × ${item.qty}</span>
			</div>
			<div class="btn-group btn-group-sm" role="group" aria-label="qty">
				<button class="btn btn-outline-secondary" data-action="dec" data-id="${item.id}">-</button>
				<button class="btn btn-outline-secondary" disabled>${item.qty}</button>
				<button class="btn btn-outline-secondary" data-action="inc" data-id="${item.id}">+</button>
				<button class="btn btn-outline-danger" data-action="rem" data-id="${item.id}">Remove</button>
			</div>
		`;
		cartListEl.appendChild(li);
	});
	totalEl.innerText = total.toFixed(2);
	cartCountEl.innerText = cart.reduce((s, i) => s + i.qty, 0);

	// attach qty handlers
	cartListEl.querySelectorAll("button[data-action]").forEach((btn) => {
		const id = Number(btn.dataset.id);
		if (btn.dataset.action === "dec") btn.addEventListener("click", () => updateQty(id, -1));
		if (btn.dataset.action === "inc") btn.addEventListener("click", () => updateQty(id, +1));
		if (btn.dataset.action === "rem") btn.addEventListener("click", () => removeFromCart(id));
	});
}

/* ------------------------------ Cart Actions ------------------------------ */
function saveCart() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
	const p = products.find((x) => x.id === id);
	if (!p) return;
	const existing = cart.find((x) => x.id === id);
	if (existing) existing.qty += 1;
	else cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
	saveCart();
	renderCart();
}

function updateQty(id, delta) {
	const item = cart.find((x) => x.id === id);
	if (!item) return;
	item.qty += delta;
	if (item.qty <= 0) {
		removeFromCart(id);
	} else {
		saveCart();
		renderCart();
	}
}

function removeFromCart(id) {
	cart = cart.filter((x) => x.id !== id);
	saveCart();
	renderCart();
}

/* --------------------------------- Login --------------------------------- */
let loginModal;
document.addEventListener("DOMContentLoaded", () => {
	const modalEl = document.getElementById("loginModal");
	if (modalEl) loginModal = new bootstrap.Modal(modalEl);
	updateAuthUI();
});

function updateAuthUI() {
	if (userEmail) {
		const name = deriveNameFromEmail(userEmail);
		greetingEl.textContent = `Hi, ${name}!`;
		loginBtn.classList.add("d-none");
		logoutBtn.classList.remove("d-none");
	} else {
		greetingEl.textContent = "";
		loginBtn.classList.remove("d-none");
		logoutBtn.classList.add("d-none");
	}
}

loginBtn.addEventListener("click", () => {
	const e = document.getElementById("login-email");
	const p = document.getElementById("login-password");
	if (e) e.value = "";
	if (p) p.value = "";
	loginModal?.show();
});

document.getElementById("login-submit").addEventListener("click", () => {
	const emailInput = document.getElementById("login-email");
	const pwdInput = document.getElementById("login-password");
	const email = (emailInput?.value || "").trim();
	const pwd = (pwdInput?.value || "").trim();
	// reset invalid states
	emailInput?.classList.remove("is-invalid");
	pwdInput?.classList.remove("is-invalid");

	let hasError = false;
	if (!email) { emailInput?.classList.add("is-invalid"); hasError = true; }
	const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	if (email && !emailOk) { emailInput?.classList.add("is-invalid"); hasError = true; }
	if (!pwd || pwd.length < 6) { pwdInput?.classList.add("is-invalid"); hasError = true; }
	if (hasError) { return; }
	userEmail = email;
	localStorage.setItem("userEmail", userEmail);
	updateAuthUI();
	loginModal?.hide();
});

logoutBtn.addEventListener("click", () => {
	userEmail = "";
	localStorage.removeItem("userEmail");
	updateAuthUI();
});

function deriveNameFromEmail(email) {
	const local = email.split("@")[0] || "";
	return local.split(/[.\-_]/).map(s => s ? s[0].toUpperCase() + s.slice(1) : s).join(" ");
}
/* ------------------------------ Contact Form ------------------------------ */
document.getElementById("contact-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const name = document.getElementById("contact-name").value.trim();
	const email = document.getElementById("contact-email").value.trim();
	const message = document.getElementById("contact-message").value.trim();
	if (!name || !email || !message) {
		alert("Please fill all contact fields.");
		return;
	}
	alert("Thanks! We'll get back to you shortly.");
	e.target.reset();
});

/* -------------------------------- Checkout -------------------------------- */
confirmCheckoutBtn.addEventListener("click", async () => {
	const name = document.getElementById("customer-name").value.trim();
	const email = document.getElementById("customer-email").value.trim();
	const address = document.getElementById("customer-address").value.trim();
	if (!name || !email || !address) {
		alert("Please fill in all checkout fields.");
		return;
	}
	if (!cart.length) {
		alert("Cart is empty.");
		return;
	}
	const order = {
		customer: { name, email, address },
		items: cart,
		total: Number(totalEl.innerText)
	};
	// Demo: just show a confirmation instead of actual backend call
	alert(`Order placed! Thank you, ${order.customer.name}.`);
	cart = [];
	saveCart();
	renderCart();
});

/* -------------------------------- Routing -------------------------------- */
const views = {
	home: document.getElementById("view-home"),
	products: document.getElementById("view-products"),
	cart: document.getElementById("view-cart"),
	about: document.getElementById("view-about"),
	contact: document.getElementById("view-contact")
};

function showView(name) {
	Object.entries(views).forEach(([key, el]) => {
		el.style.display = key === name ? "block" : "none";
	});
	document.querySelectorAll('[data-route]').forEach((a) => {
		if (a.classList.contains("nav-link")) {
			a.classList.toggle("active", a.getAttribute("data-route") === name);
		}
	});
	if (name === "products") window.scrollTo({ top: 0, behavior: "smooth" });
	// trigger reveal animation
	const el = views[name];
	if (el) {
		el.classList.remove("reveal");
		// force reflow to restart animation
		// eslint-disable-next-line no-unused-expressions
		el.offsetHeight;
		el.classList.add("reveal");
		setTimeout(() => el.classList.remove("reveal"), 600);
	}
}

document.querySelectorAll('[data-route]').forEach((el) => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		const route = el.getAttribute("data-route");
		if (!route) return;
		history.pushState({ route }, "", `#${route}`);
		showView(route);
	});
});

window.addEventListener("popstate", () => {
	const route = location.hash.replace("#", "") || "home";
	showView(route);
});

/* ------------------------------ Initial Render ---------------------------- */
renderProducts(productListEl, products);
renderProducts(featuredListEl, products.slice(0, 8));
renderCart();
showView((location.hash.replace("#", "") || "home"));

