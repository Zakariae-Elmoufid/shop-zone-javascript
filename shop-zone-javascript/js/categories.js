let categories = ['Electronics', 'Home', 'Fashion'];

function addCategory() {
    const newCategory = document.getElementById('new-category').value;
    if (newCategory && !categories.includes(newCategory)) {
        categories.push(newCategory);
        displayCategories();
    }
}

function displayCategories() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
    categories.forEach(category => {
        categoryList.innerHTML += `<div>${category}</div>`;
    });
}

displayCategories();
