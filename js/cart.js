import { getExistingCart } from './utils/cartFunctions.js';
import createMenu from './components/common/createMenu.js';

createMenu();

const cartProducts = getExistingCart();
console.log(cartProducts);

const productContainer = document.querySelector(".product-container");

const totalPriceContainer = document.querySelector(".total-price-container");
let totalPrice = 0;

cartProducts.forEach((cartProduct) => {
    totalPrice += parseFloat(cartProduct.price);
});

totalPriceContainer.innerHTML = `<p class="cart-text">Total price is: ${totalPrice} NOK</p>`;



if (cartProducts.length === 0) {
    productContainer.innerHTML = "No items in cart.. View our shop and add products to your cart.";
} else {
    cartProducts.forEach((cartProduct) => {
        productContainer.innerHTML += `<div class="product">
        <img class="productImage" src="${cartProduct.image}">
        <a href="detail.html?id=${cartProduct.id}"><h4 class="product-title">${cartProduct.name}</h4></a>
        <p class="product-price">${cartProduct.price} NOK</p>
        <a href="detail.html?id=${cartProduct.id}"><button class="detail-button">View</button></a>
        </div>`;
    });
}

const clearCartButton = document.querySelector(".removeProducts");

clearCartButton.onclick = function deleteProducts() {
    if ( cartProducts.length == 0) {
        productContainer.innerHTML = "No items in cart.. View our shop and add products to your cart.";
    } else {
        localStorage.removeItem("cartProducts");
        productContainer.innerHTML = "Shopping cart cleared.";
    }
    createMenu();
};

