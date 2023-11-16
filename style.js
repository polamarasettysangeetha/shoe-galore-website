document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const item = this.closest(".men-box, .women-box");
            const itemName = item.querySelector("h2").innerText;
            const itemImage = item.querySelector("img").src;

            const cartItemsList = document.getElementById("cart-items");

            const cartItem = document.createElement("li");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <img src="${itemImage}" alt="${itemName}">
                <span>${itemName}</span>
            `;

            cartItemsList.appendChild(cartItem);
        });
    });
});
