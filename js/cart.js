import { getExistingFavs } from './utils/favFunctions.js';
import createMenu from './components/common/createMenu.js';

createMenu();

const favourites = getExistingFavs();
console.log(favourites);

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
    productContainer.innerHTML = "No items in cart..";
} else {
    favourites.forEach((favourite) => {
        productContainer.innerHTML += `<div class="product">
        <h4>${favourite.name}</h4>
        <h4>${favourite.id}</h4>
        <h4>${favourite.price}</h4>
        <h4>${favourite.brand}</h4>
        <h4>${favourite.description}</h4>
        <i class="fa fa-heart"></i>
        </div>`;
    });
}

const clearFavButton = document.querySelector(".removeProducts");

clearFavButton.onclick = function deleteProducts() {
    if ( favourites.length == 0) {
        productContainer.innerHTML = "OOPSIE";
    } else {
        localStorage.removeItem("favourites");
        productContainer.innerHTML = "POOOF";
    }
};

console.log(favourites);