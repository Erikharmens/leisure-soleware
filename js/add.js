import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import { getToken } from './utils/storage.js';
import { baseUrl } from './settings/api.js';

const token = getToken();

if (!token) {
    location.href = "/";
}

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");
const image = document.querySelector("#image");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();

    let featuredValue = false;
    if (document.querySelector("#featured").checked) {
        featuredValue = true;
    } else {
        featuredValue = false;
    }

    if (titleValue.length === null || priceValue.length === null || isNaN(priceValue) || descriptionValue.length === null || imageValue === null) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue, imageValue, featuredValue);
}

async function addProduct(title, price, description, image_url, featured) {
    const url = baseUrl + "products";
    const data = JSON.stringify({ title: title, price: price, description: description, image_url: image_url, featured: featured });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

    } catch (error) {
        displayMessage("error", "An error occured", ".message-container");
    }
};

