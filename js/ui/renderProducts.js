import { getExistingCart } from '../utils/cartFunctions.js';

const cartProducts = getExistingCart();

export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        let cssClass = "far";
        const doesObjectExist = cartProducts.find(function (cart) {

            return parseInt(cart.id) === product.id;
        });

        if (doesObjectExist) {
            cssClass = "fa";
        }

        productContainer.innerHTML += `<div class="product">
                                            <div class="single-product">
                                                <div class="column">
                                                <a href="detail.html?id=${product.id}"><img class="productImage" src="${product.image_url}"></a>
                                                </div>
                                                <div class="column">
                                                <a href="detail.html?id=${product.id}"><h4 class="product-title">${product.title}</h4></a><hr>
                                                    <p class="product-price">${product.price} NOK</p>
                                                    <button class="cart-button" data-id="${product.id}" data-name="${product.title}" data-description="${product.description}" data-price="${product.price}" data-brand="${product.brand}" data-image_url="${product.image_url}"><i class="${cssClass} fa fa-shopping-cart"></i>Add to cart</button>
                                                    <a href="detail.html?id=${product.id}"><button class="detail-button">View</button></a>
                                                    <a href="edit.html?id=${product.id}"><button class="edit-button">Edit</button></a>
                                                </div>
                                            </div>
                                        </div>`;
    });
}