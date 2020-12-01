import { getExistingFavs } from '../utils/favFunctions.js';

const favourites = getExistingFavs();

export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        let cssClass = "far";
        const doesObjectExist = favourites.find(function (fav) {
            console.log(fav);

            return parseInt(fav.id) === product.id;
        });

        if (doesObjectExist) {
            cssClass = "fa";
        }

        productContainer.innerHTML += `<a class="product" >
                                            <h4>${product.title}</h4>
                                            <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.title}" data-description="${product.description}" data-price="${product.price}" data-brand="${product.brand}"></i>
                                            <p>${product.price}</p>
                                            <p>${product.brand}</p>
                                            <p>${product.description}</p>
                                            <a href="detail.html?id=${product.id}"><button class="detail-button">View</button></a>
                                            <a href="edit.html?id=${product.id}"><button class="edit-button">Edit</button></a>
                                        </a>`;
    });
}