import { ProductService } from "./ProductService";
import { Product } from "./produtc";
let _productService = new ProductService();

let products: Product[] = _productService.getProducts();
console.log(products);

console.log();

let newProduct = new Product(5, "acer", "bilgisayar", 10000);
let deleteProduct = new  Product(4, "Samsung S8", "Telefon", 4000);
let updateProduct = new  Product(4, "Samsung S8", "Telxefon", 5000);
_productService.saveProduct(newProduct);
// _productService.saveProduct(updateProduct);

console.log(products);
console.log("--------------------------");

_productService.deleteProduct(_productService.getById(2));
console.log(products);
