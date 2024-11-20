async function displayProducts() {
    const products = await fetchProducts();
    const productList = document.getElementById('product-list');
    
  

  // Parcourt les produits pour les afficher
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = "border border-dark rounded text-center";

    // Contenu HTML du produit
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <h5>${product.price}$</h5>
      <p>${product.category}</p>
      <div>
        <button class="add-cart">🛒</button>
        <button  class="add-favourite" >Fav</button>
      </div>
    `;

  
    productDiv.querySelector('.add-cart').addEventListener('click', () => addToCart(product));
    productDiv.querySelector('.add-favourite').addEventListener('click',() =>addToFavorites(product) )

    productList.appendChild(productDiv);
  });
}



// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(product) {

  let found = cart.find(function(item){
    return item.id === product.id;
  });
  if (found) {
    found.count += 1; 
  } else {
    cart.push({ ...product, count: 1 }); 
  }

  localStorage.setItem('cart', JSON.stringify(cart));

   
    updateCartCount();  
}

// Function to update cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce(function(total, item){
      return total + item.count},0); // Somme des quantités
    
}


let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function addToFavorites(item) {
  
  let found  = favorites.find(fav => fav.id === item.id);
  
  if(!found){
    favorites.push(item);
  }
  
  localStorage.setItem('favorites',JSON.stringify(favorites));
  
}
// Display products and update cart count on page load

displayProducts();
updateCartCount();