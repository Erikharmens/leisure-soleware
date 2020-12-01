export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<a class="product" >
                                            <h4>${product.title}</h4>
                                            <p>${product.price}</p>
                                            <p>${product.brand}</p>
                                            <p>${product.description}</p>
                                            <a href="detail.html?id=${product.id}"><button class="detail-button">View</button></a>
                                            <a href="edit.html?id=${product.id}"><button class="edit-button">Edit</button></a>
                                            <button class="cart-button"><i class="far fa-heart"></i>Add to cart</i></button>
                                        </a>`;
    });
}