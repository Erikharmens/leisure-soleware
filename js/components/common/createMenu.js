import { getUsername } from '../../utils/storage.js';
import { getExistingCart } from '../../utils/cartFunctions.js';

import logoutButton from './logoutButton.js';

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    const cartProducts = getExistingCart();


   

    let authLink = `<a id="login" href="login.html" class="${pathname === "/login.html" ? "active" : ""}">LOGIN</a>`;
    let authLinkFav = `<a href="cart.html" id="myCart" class="${pathname === "/cart.html" ? "active" : ""}">MY CART (${cartProducts.length})</a>`;

    if (username) {
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">ADD PRODUCT</a>
        <button id="logout">Logout ${username}</button>`;
    }
    container.innerHTML = `
            <div class="menu">
                <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">HOME</a>
                <a href="shop.html" class="${pathname === "/" || pathname === "/shop.html" ? "active" : ""}">SHOP</a>
                <i class="fa fa-search"></i>
                <input class="search" placeholder="Search..." />
                ${authLink} ${authLinkFav}
            </div>`;

            logoutButton();
}