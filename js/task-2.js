class Storage {
  #items;
  constructor(item) {
    this.#items = item;
  }
  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    return this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    let newArr = [];
    this.#items.forEach(element => {
      if (element !== itemToRemove) {
        newArr.push(element)
      }
    });
    this.#items = newArr;
  }  
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
