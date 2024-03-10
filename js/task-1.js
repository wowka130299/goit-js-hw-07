const categories = document.querySelector('#categories');
const categoriesItems = Array.from(categories.children);
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(element => {
    const categoriesTitle = element.firstElementChild.textContent;
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${Array.from(element.lastElementChild.children).length}`);
});
