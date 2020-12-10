import displayMessage from '../components/common/displayMessage.js';
import { renderProducts } from './renderProducts.js';

export function searchProducts(products) {

    const search = document.querySelector(".search");
    
    search.onkeyup = function(event) {
        
        const searchValue = event.target.value.trim().toLowerCase();
    
        const filteredProducts = products.filter(function (product) {
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

        console.log("tsss", filteredProducts.length);
        renderProducts(filteredProducts);
        if (filteredProducts.length === 0) {
            displayMessage("warning", "No matches for your search result..", ".message-container")
        } else {
            document.querySelector(".message-container").innerHTML = "";
        };
    };
}