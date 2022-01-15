var products = [
  { id: 1, name: "Samsung S8", price: 3000 },
  { id: 2, name: "Xiaomi", price: 5000 },
  { id: 3, name: "Iphone", price: 4000 },
];
let added = true;

function addProduct(product, callback) {
    
    if (added) {
         setTimeout(() => {
           products.push(product);
           callback(null, product);
         }, 2000);
    } else {
        callback("Hata", null);
    }
 
}

function getProducts() {
  setTimeout(() => {
    products.forEach((p) => console.log(p.name));
  }, 1000);
}

// addProduct({ id: 4, name: "Alcatel", price: 1000 },getProducts);
addProduct({ id: 4, name: "Alcatel", price: 1000 },function(err,data) {
    if (err) {
        console.log("Hata " + err);
    } else {
        console.log(data);
    }
});
// getProducts();