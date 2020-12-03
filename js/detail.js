import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';

createMenu();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "index.html";
}

const productUrl = baseUrl + "products/" + id;

(async function() {

    try {
        const response = await fetch(productUrl);
        const details = await response.json();
    
        document.title = details.title;
    
        const container = document.querySelector(".detail-container");
    
        container.innerHTML = `<h1>${details.title}</h1>
        <button class="detailButton" data-id="${details.id}" data-name="${details.title}" data-description="${details.description}" data-price="${details.price}" data-brand="${details.brand}" data-image_url="${details.image_url}">Add to cart</button>
                                <img class="productImage" src="${details.image_url}">
                                <p>Price: ${details.price}</p>
                                <p>${details.description}</p>
        `;
    
        console.log(details);
    } catch(error) {
        displayMessage("error", error, ".detail-container");
    }
})();
