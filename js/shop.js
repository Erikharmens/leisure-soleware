import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import handleClick from './utils/handleClick.js';
import { renderProducts } from './ui/renderProducts.js';
import { searchProducts } from './ui/searchProducts.js';
//import { getExistingCart } from './utils/cartFunctions.js';

const productsUrl = baseUrl + "products";

createMenu();

async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        // console.log(json);

        renderProducts(json);
        searchProducts(json);
        console.log("json: ", json);

        const favButtons = document.querySelectorAll(".product i");

        favButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });
    } catch(error) {
        displayMessage("error", error, ".product-container")
    }
}

getProducts();

