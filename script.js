function Product(name, price) {
  this.name = name;
  this.price = price;

  this.displayDetails = function() {
    console.log("Product: " + this.name + ", Price: $" + this.price);
  };
}

const createProductButton = document.getElementById('create-product-button');

createProductButton.addEventListener('click', function() {
  const newProduct = new Product("T-Shirt", 19.99);
  newProduct.displayDetails(); // Output: Product: T-Shirt, Price: $19.99
});
