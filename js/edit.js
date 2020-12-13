import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import { getToken } from './utils/storage.js';
import deleteButton from './components/products/deleteButton.js';

const token = getToken();

if (!token) {
    location.href = "/";
}

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "index.html";
}

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");
const image = document.querySelector("#image");

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

        deleteButton(details.id);

    } catch (error) {
        console.log(error);
    }
    finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;
    const imageValue = image.value.trim();

    let featuredValue = false;
    if (document.querySelector("#featured").checked) {
        featuredValue = true;
    } else {
        featuredValue = false;
    }

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        displayMessage("warning", "Please supply proper values", ".message-container");
    }
    updateProduct(titleValue, priceValue, descriptionValue, idValue, imageValue, featuredValue);
}

async function updateProduct(title, price, description, id, image_url, featured) {
    const url = baseUrl + "products/" + id;
    const data = JSON.stringify({ title: title, price: price, description: description, image_url: image_url, featured: featured });

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

    } catch (error) {
        console.log(error);
    }
}
