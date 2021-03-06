import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import handleClick from './utils/handleClick.js';

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "index.html";
}

const productUrl = baseUrl + "products/" + id;

async function getProduct() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        document.title = details.title;

        const container = document.querySelector(".detail-container");

        container.innerHTML = "";

        container.innerHTML = `
                                <img class="detail-image" src="${details.image_url}">
                                <div class="detail-content">
                                    <a href="/"><button class="detail-back-btn">Back</button></a>
                                    <h1 class="detail-product-title">${details.title}</h1>
                                    <p class="detail-text-price">${details.price} NOK</p>
                                    <p class="detail-text">${details.description}</p>
                                    <button class="cart-button" data-id="${details.id}" data-name="${details.title}" data-description="${details.description}" data-price="${details.price}" data-brand="${details.brand}" data-image_url="${details.image_url}"><i class="fa fa-shopping-cart"></i>Add to cart</button>
                                </div>
                                `;

        const addToCartButtons = document.querySelectorAll(".cart-button");

        addToCartButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });

    } catch (error) {
        displayMessage("error", error, ".detail-container")
    }
}

getProduct();


