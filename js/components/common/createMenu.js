import { getUsername } from '../../utils/storage.js';
import logoutButton from './logoutButton.js';

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">LOGIN</a>`;
    let authLinkFav = `<a href="cart.html" id="myCart" class="${pathname === "/cart.html" ? "active" : ""}">MY CART</a>`;

    if (username) {
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">ADD PRODUCT</a>
        <button id="logout">Logout ${username}</button>`;
    }
    container.innerHTML = `
            <div class="menu">
                <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">HOME</a>
                <a href="shop.html" class="${pathname === "/" || pathname === "/shop.html" ? "active" : ""}">SHOP</a>
                ${authLink} ${authLinkFav}
            </div>`;

            logoutButton();
}