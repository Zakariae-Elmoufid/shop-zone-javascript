
// Retrieve cart from localStorage or initialize an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

// Function to display cart items and calculate the total amount
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';  // Clear existing items

    let total = 0;

    cart.forEach(item => {
    
        const itemTotal = parseFloat(item.price) * item.count;
        total += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item ';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: <br>
                <button class="button-mois" >-</button>
                ${item.count} 
                <button class="button-plus" >+</button>
            </p>
            <p>Item Total: $${itemTotal.toFixed(2)}</p>
            <button  onclick="removeFromCart(${item.id})">Remove</button>
        `;

        cartItemElement.querySelector('.button-mois').addEventListener('click', () => updateQuantity(item.id, -1 ));
        cartItemElement.querySelector('.button-plus').addEventListener('click', () => updateQuantity(item.id, 1 ));

        cartItemsContainer.appendChild(cartItemElement);

        
    });

    // Update total price
    cartTotalElement.textContent = parseFloat(total.toFixed(2));
    
}



// Function to update item quantity in the cart
function updateQuantity(productId, change) {

    for(let i=0;i<cart.length;i++){
        if(cart[i].id === productId){
            cart[i].count = Math.max(1,cart[i].count + change);
            localStorage.setItem('cart', JSON.stringify(cart)); 
            displayCartItems();
        }
    }

    
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);  // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart
    displayCartItems();  // Refresh cart display
}




// Checkout function (basic example - can be expanded)
function checkout() {
    if (cart.length > 0) {
        alert("Proceeding to checkout");
        // Clear the cart after checkout
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    } else {
        alert("Your cart is empty!");
    }
}

// Display cart items on page load

    displayCartItems();
    