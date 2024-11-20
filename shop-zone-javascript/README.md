# E-commerce Cart & Favorites Management Application

## Overview
This JavaScript application allows users to manage an e-commerce cart and a list of favorite items. The cart functionality includes adding, removing, and updating item quantities, while the favorites feature lets users save and remove items from a favorites list. Both cart and favorites data are stored in `localStorage` to maintain state across sessions.

## Features
1. **Add Items to Cart**
   - Users can add products to their cart, with quantity management for each item.
   - Items are retrieved from `localStorage` and displayed dynamically on the page.

2. **Cart Management**
   - Update item quantities directly within the cart view.
   - Remove items from the cart.
   - Calculate and display the total cost of items in the cart.
   - Proceed to checkout, which clears the cart.

3. **Favorites Management**
   - Add items to the favorites list.
   - View, remove, and add favorite items directly to the cart.
   - Store favorites in `localStorage` for persistence.

## Code Structure

### `cart.js` (Main Cart Functionality)
- **`displayCartItems()`**: Displays all items in the cart, calculates total amount, and allows quantity management.
- **`fetchProductById(productId)`**: Helper function to retrieve product details by ID.
- **`updateQuantity(productId, change)`**: Updates the quantity of a specific item in the cart.
- **`removeFromCart(productId)`**: Removes an item from the cart by ID.
- **`checkout()`**: Clears the cart and prompts a checkout alert.

### `products.js` (Product Display and Cart Integration)
- **`displayProducts()`**: Displays products dynamically on the page.
- **`addToCart(product)`**: Adds a product to the cart and updates the cart count.
- **`updateCartCount()`**: Updates the display count of items in the cart.

### `favorites.js` (Favorites Management)
- **`getFavorites()`**: Retrieves the list of favorites from `localStorage`.
- **`saveFavorites(favorites)`**: Saves the favorites list to `localStorage`.
- **`displayFavorites()`**: Displays favorite items and allows removal and addition to the cart.
- **`addToCart(productId)`**: Adds a favorite item to the cart.
- **`removeFromFavorites(productId)`**: Removes an item from the favorites list.

## Data Structure

### Local Storage
- **`cart`**: Stores an array of cart items, each with:
  - `id`: Unique identifier for the product
  - `price`: Product price
  - `quantity`: Quantity in the cart

- **`favorites`**: Stores an array of favorite items, each with:
  - `id`: Unique identifier for the product
  - `name`: Product name
  - `price`: Product price
  - `image`: Product image URL

### Product Example Format in `localStorage`
```json
{
    "id": 1,
    "name": "Product Name",
    "price": 10.99,
    "quantity": 2
}
