import { baseUrl } from './settings/api.js';
import displayMessage from './components/common/displayMessage.js';
import createMenu from './components/common/createMenu.js';
import { renderProducts } from './ui/renderProducts.js';
import { searchProducts } from './ui/searchProducts.js';
import { getExistingFavs } from './utils/favFunctions.js';

const productsUrl = baseUrl + "products";

createMenu();

async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        // console.log(json);

        renderProducts(json);
        searchProducts(json);
        console.log("json: ", json);

        const favButtons = document.querySelectorAll(".product i");

        favButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });
    } catch(error) {
        displayMessage("error", error, ".product-container")
    }
}

getProducts();

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");
 
    const id = this.dataset.id;
    const name = this.dataset.name;
    const description = this.dataset.description;
    const price = this.dataset.price;
    const brand = this.dataset.brand;
    const image = this.dataset.image_url;

  
    const currentFavs = getExistingFavs();
  
    const productExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });
  
    if (productExists === undefined) {
      const product = { id: id, name: name, description: description, price: price, brand: brand, image: image };
      currentFavs.push(product);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}















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



