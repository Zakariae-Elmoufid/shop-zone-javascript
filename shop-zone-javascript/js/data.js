async function fetchProducts() {
    const response = await fetch('data/products.json');
    return await response.json();
}


async function fetchCategortyByID(id) {
    const response = await fetch('data/category.json?id='+id);
    return await response.json();
}