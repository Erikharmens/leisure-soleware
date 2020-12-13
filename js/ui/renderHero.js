import { baseUrl } from '../settings/api.js';

const heroUrl = baseUrl + "home/";

(async function renderHero() {
    const container = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();

        container.innerHTML = "";
        container.innerHTML = `<img class="heroImage" src="${json.url}">`;
    } catch (error) {
        console.log(error);
    }
})();