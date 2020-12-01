import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import { renderProducts } from './ui/renderProducts.js';
import { searchProducts } from './ui/searchProducts.js';

const productsUrl = baseUrl + "products";

createMenu();

async function getProducts() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();


        console.log(json);

        renderProducts(json);
        searchProducts(json);

    } catch(error) {
        displayMessage("error", "Error", ".product-container")
    }


}

getProducts();

const cartButtons = document.querySelectorAll(".product i");
console.log(cartButtons);



















/* show Strapi products html

(async function () {

    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        container.innerHTML = "";


        json.forEach(function (product) {
            container.innerHTML += `<a class="product" href="edit.html?id=${product.id}">
                                        <h4>${product.title}</h4>
                                        <p>Price: ${product.price}</p>
                                        <p>${product.description}</p>
                                    </a>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();
*/



