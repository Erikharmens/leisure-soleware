import { getExistingCart } from './utils/cartFunctions.js';
import createMenu from './components/common/createMenu.js';

createMenu();

const cartProducts = getExistingCart();
console.log(cartProducts);

const productContainer = document.querySelector(".product-container");

if (cartProducts.length === 0) {
    productContainer.innerHTML = "No items in cart..";
} else {
    cartProducts.forEach((cartProduct) => {
        productContainer.innerHTML += `<div class="product">
        <img class="productImage" src="${cartProduct.image}">
        <h4>${cartProduct.name}</h4>
        <h4>${cartProduct.price} NOK</h4>
        <a href="detail.html?id=${cartProduct.id}"><button class="detail-button">View</button></a>
        <i class="fa fa-heart"></i>
        </div>`;
    });
}

const clearFavButton = document.querySelector(".removeProducts");

clearFavButton.onclick = function deleteProducts() {
    if ( cartProducts.length == 0) {
        productContainer.innerHTML = "OOPSIE";
    } else {
        localStorage.removeItem("cartProducts");
        productContainer.innerHTML = "Shopping cart cleared!";
    }
};

