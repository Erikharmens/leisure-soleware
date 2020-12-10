import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import handleClick from './utils/handleClick.js';
import { renderFeaturedProducts } from './ui/renderFeaturedProducts.js';
import { searchProducts } from './ui/searchProducts.js';
//import { getExistingCart } from './utils/cartFunctions.js';

const productsUrl = baseUrl + "products";

createMenu();

async function getFeaturedProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        // console.log(json);

        renderFeaturedProducts(json);
        searchProducts(json);
        console.log("json: ", json);

        const addToCartButtons = document.querySelectorAll(".product .cart-button");

        addToCartButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });


    } catch(error) {
        displayMessage("error", error, ".product-container")
    }
}

/* TESTING CHANGING BUTTON */

getFeaturedProducts();







