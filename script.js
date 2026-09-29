// ================= CART =================

let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart! 🍰");
}


function updateCart() {

    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty 🍰
            </p>
        `;

        cartTotal.textContent = "₹0";

        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})">
                    ×
                </button>

            </div>
        `;

    });

    cartTotal.textContent = "₹" + total;

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("show");

}


function closeCart(event) {

    if (!event || event.target.id === "cartOverlay") {

        document
            .getElementById("cartOverlay")
            .classList.remove("show");

    }

}


function checkout() {

    if (cart.length === 0) {

        alert("Please add a cake to your cart first! 🍰");

        return;
    }

    let total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    alert(
        "Thank you for your order! 🎂\n\n" +
        "Total Amount: ₹" + total +
        "\n\nWe will contact you shortly."
    );

}


// ================= FILTER =================

function filterCakes(category, button) {

    const cakes =
        document.querySelectorAll(".cake-card");

    const filters =
        document.querySelectorAll(".filter");

    filters.forEach(filter => {
        filter.classList.remove("active");
    });

    button.classList.add("active");

    cakes.forEach(cake => {

        if (
            category === "all" ||
            cake.dataset.category === category
        ) {

            cake.style.display = "block";

        } else {

            cake.style.display = "none";

        }

    });

}


// ================= FAVORITE =================

function favoriteCake(button) {

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {

        button.textContent = "♥";

    } else {

        button.textContent = "♡";

    }

}


// ================= MOBILE MENU =================

function toggleMenu() {

    document
        .getElementById("navbar")
        .classList.toggle("show");

}


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! 🎂\n\n" +
        "Your enquiry has been received."
    );

    event.target.reset();

}


// ================= SCROLL NAV =================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navbar")
            .classList.remove("show");

    });

});