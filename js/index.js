import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import handleClick from './utils/handleClick.js';
import { renderFeaturedProducts } from './ui/renderFeaturedProducts.js';
import { searchProducts } from './ui/searchProducts.js';

const productsUrl = baseUrl + "products";

createMenu();

async function getFeaturedProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        renderFeaturedProducts(json);
        searchProducts(json);

        const addToCartButtons = document.querySelectorAll(".product .cart-button");

        addToCartButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });
    } catch (error) {
        displayMessage("error", error, ".product-container")
    }
}

getFeaturedProducts();







