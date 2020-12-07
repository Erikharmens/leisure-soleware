
import { getExistingCart } from './cartFunctions.js';

export default function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");
 
    const id = this.dataset.id;
    const name = this.dataset.name;
    const description = this.dataset.description;
    const price = this.dataset.price;
    const brand = this.dataset.brand;
    const image = this.dataset.image_url;

  
    const currentCart = getExistingCart();
  
    const productExists = currentCart.find(function (cart) {
      return cart.id === id;
    });
  
    if (productExists === undefined) {
      const product = { id: id, name: name, description: description, price: price, brand: brand, image: image };
      currentCart.push(product);
      saveCart(currentCart);
    } else {
      const newFavs = currentCart.filter((cart) => cart.id !== id);
      saveCart(newFavs);
    }
  }

function saveCart(cart) {
    localStorage.setItem("cartProducts", JSON.stringify(cart));
}