var products = [
  { id: 1, name: "Samsung S8", price: 3000 },
  { id: 2, name: "Xiaomi", price: 5000 },
  { id: 3, name: "Iphone", price: 4000 },
];
let added = true;

function addProduct(product) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      products.push(product);
      let added = true;
      if (added) resolve();
      else reject("Hata");
    }, 2000);
  });
}

function getProducts() {
  setTimeout(() => {
    products.forEach((p) => console.log(p.name));
  }, 1000);
}

// addProduct({ id: 4, name: "Alcatel", price: 1000 },getProducts);
addProduct({ id: 4, name: "Alcatel", price: 1000 })
    .then(getProducts)
    .catch(function (err,i) {
        console.log(err);
    });
// getProducts();
