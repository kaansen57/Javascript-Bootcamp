"use strict";
exports.__esModule = true;
var ProductService_1 = require("./ProductService");
var produtc_1 = require("./produtc");
var _productService = new ProductService_1.ProductService();
var products = _productService.getProducts();
console.log(products);
console.log();
var newProduct = new produtc_1.Product(5, "acer", "bilgisayar", 10000);
var deleteProduct = new produtc_1.Product(4, "Samsung S8", "Telefon", 4000);
var updateProduct = new produtc_1.Product(4, "Samsung S8", "Telxefon", 5000);
_productService.saveProduct(newProduct);
// _productService.saveProduct(updateProduct);
console.log(products);
console.log("--------------------------");
_productService.deleteProduct(_productService.getById(2));
console.log(products);
