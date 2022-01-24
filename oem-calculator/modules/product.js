import { StorageController } from "./storage.js";
import { UIController } from "./ui.js";

//product controller
export const ProductController = (function () {
  //private area
  let exchange = 3;
  let tlPrice = 0;

  const Product = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  const data = {
    products: JSON.parse(StorageController.getStorageProducts()),
    selectedProduct: null,
    totalPrice: 0,
  };

  return {
    //public area
    editProductId: null,
    getProducts: function () {
      return data.products;
    },
    getProduct: function (productId) {
      return data.products.filter((product) => product.id == productId)[0];
    },
    getData: function () {
      return data;
    },
    addProduct: function (productName, productPrice) {
      let id =
        data.products.length > 0
          ? data.products[data.products.length - 1].id + 1
          : 1;
      data.products.push({ id: id, name: productName, price: productPrice });
      UIController.createProductList(data.products);
      StorageController.addProduct(data.products);
    },
    editSaveProduct: function (productName, productPrice) {
      let selectedProduct = null;
      data.products.forEach((product) => {
        if (product.id == data.selectedProduct.id) {
          product.name = productName;
          product.price = parseInt(productPrice);
          selectedProduct = product;
        }
      });
      StorageController.updateProduct(data.products);
      return selectedProduct;
    },
    deleteProduct: function () {
        data.products.forEach((product,index) => {
        if (product === data.selectedProduct) {
          data.products.splice(index, 1);
        }
      });
      UIController.createProductList(data.products);
      StorageController.deleteProduct(data.products);
    },
    setCurrentProduct: function (product) {
      data.selectedProduct = product;
    },
    getCurrentProduct: function () {
      return data.selectedProduct;
    },
    priceCalculate: function () {
      data.totalPrice = 0;
      data.products.forEach((product) => {
        data.totalPrice += product.price;
      });

      const dolarPrice = data.totalPrice;
      tlPrice = data.totalPrice * exchange; // tl exchange

      return {
        dolarPrice,
        tlPrice,
      };
    },
  };
})();
