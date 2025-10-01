document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    const cart = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const foodItem = this.closest(".food-item");
            const name = foodItem.getAttribute("data-name");
            const price = parseInt(foodItem.getAttribute("data-price"));
            const quantity = parseInt(foodItem.querySelector(".quantity").value);

            cart.push({ name, price, quantity });
            cartCount.textContent = cart.length;
            alert(name + " added to cart!");
        });
    });
});

function searchFood() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".food-item").forEach(item => {
        const name = item.getAttribute("data-name").toLowerCase();
        item.style.display = name.includes(searchValue) ? "block" : "none";
    });
}
