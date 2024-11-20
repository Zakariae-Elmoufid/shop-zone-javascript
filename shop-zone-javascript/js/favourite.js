// favorites.js
// Retrieve cart from localStorage or initialize an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);
// Retrieve favorites from Local Storage
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Save favorites to Local Storage
function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Display favorite items
function displayFavorites() {
    const favorites = getFavorites();
    const favoriteItemsContainer = document.getElementById('favorite-items');
    favoriteItemsContainer.innerHTML = ''; // Clear existing items

    favorites.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'favorite-items';
        itemElement.innerHTML = `
            <div class="favorite_item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button class="add-cart" >Add to Cart</button>
            <button class="remove-cart" >Remove</button>
            <div>

        `;

          itemElement.querySelector('.add-cart').addEventListener('click',()=> addToCart(item));
          itemElement.querySelector('.remove-cart').addEventListener('click',()=> removeFromFavorites(item.id));

        favoriteItemsContainer.appendChild(itemElement);
    });

    // If no items in favorites, display a message
    if (favorites.length === 0) {
        favoriteItemsContainer.innerHTML = '<p>No favorite items added yet.</p>';
    }
}

// Add item to cart
function addToCart(products) {
    const favorites = getFavorites();
    const item = favorites.find(product => product.id === products.id);
    const found = cart.find(product => product.id === products.id);
    if (item) {
        if(found){
            alert(`${item.name} is already in the cart.`);
        }else{
            cart.push({...products , count : 1}); // Add to cart array
            alert(`${item.name} has been added to your cart.`);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
 
    }
}

// Remove item from favorites
function removeFromFavorites(productId) {
    let favorites = getFavorites();
    favorites = favorites.filter(item => item.id !== productId);
    saveFavorites(favorites);
    displayFavorites(); // Refresh the display
    alert('Item removed from favorites.');
}

// Initial display of favorites
displayFavorites();
