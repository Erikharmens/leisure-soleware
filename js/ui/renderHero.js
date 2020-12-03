import { baseUrl } from '../settings/api.js';

const heroUrl = baseUrl + "home/";

(async function renderHero() {
    const container = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();

        // console.log("json", json);
        // console.log("json deeper : ", json.hero_banner.formats.large.url);

        container.innerHTML = "";

        container.innerHTML = `<img class="heroImage" src="${json.url}">`;
    } catch (error) {
        console.log(error);
    }
})();