import displayMessage from '../components/common/displayMessage.js';
import { renderProducts } from './renderProducts.js';

export function searchProducts (products) {

    const search = document.querySelector(".search");


    search.onkeyup = function(event) {

        const searchValue = event.target.value.trim().toLowerCase();
        
    
        const filteredProducts = products.filter(function (product) {
            // console.log("product", product);
            if (product.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
            if (product.description.toLowerCase().startsWith(searchValue)) {
                return true;
            }
            if (product.price <= searchValue) {
                return true;
            }

        });
    
        renderProducts(filteredProducts);
    };
}