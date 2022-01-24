import { ProductController } from "./product.js";
import { UIController } from "./ui.js";
//app controller

const App = (function (ProductCtrl, UICtrl) {
  const UISelectors = UICtrl.getSelectors();
  //load event listeners

  const loadEventListener = function () {
    document
      .querySelector(UISelectors.add)
      .addEventListener("click", productAdd);

    document
      .querySelector(UISelectors.productList)
      .addEventListener("click", editProduct);

    document
      .querySelector(UISelectors.save)
      .addEventListener("click", editSaveProduct);

    document
      .querySelector(UISelectors.cancel)
      .addEventListener("click", cancelUpdate);
    
     document
       .querySelector(UISelectors.delete)
       .addEventListener("click", deleteProduct);
  };

 

  const productAdd = function (e) {
    /* Product added methods */
    //add product
    const productName = document.querySelector(UISelectors.name).value;
    const productPrice = document.querySelector(UISelectors.price).value;

    if (productName && productPrice && !isNaN(productPrice)) {
      ProductCtrl.addProduct(productName, parseInt(productPrice));

      //product list card show
      UICtrl.toggleProductListCard(true);

      //prices add
      const prices = ProductCtrl.priceCalculate();
      UICtrl.pricesAdd(prices);

      //clear input values
      UICtrl.clearInputData();
    }
    e.preventDefault();
  };

  const editProduct = function (e) {
    /* Product row edit button methods  */
    const targetElement = e.target;
    if (targetElement.id === "edit") {
      UICtrl.editButtonState(e.target.parentNode.parentNode);

      const id =
        targetElement.parentNode.previousElementSibling.previousElementSibling
          .previousElementSibling.textContent;
      const product = ProductCtrl.getProduct(id);

      ProductCtrl.setCurrentProduct(product); //seçili ürünü kaydet
      UICtrl.editProductInputFill(); // seçili ürünü inputlara yaz
    }
    e.preventDefault();
  };

  const editSaveProduct = function (e) {
    /* save changes button methods */
    const productName = document.querySelector(UISelectors.name).value;
    const productPrice = document.querySelector(UISelectors.price).value;

    if (productName && productPrice && !isNaN(productPrice)) {
      const editedProduct = ProductCtrl.editSaveProduct(
        productName,
        productPrice
      );

      UICtrl.editSaveProduct(editedProduct);
      const prices = ProductCtrl.priceCalculate();
      UICtrl.pricesAdd(prices);
      UICtrl.addButtonState();
    }
    e.preventDefault();
  };

  const cancelUpdate = function (e) {
    UICtrl.addButtonState();
    e.preventDefault();
  };

  const deleteProduct = function (e) {
    ProductCtrl.deleteProduct();
    UICtrl.addButtonState();
    const prices = ProductCtrl.priceCalculate();
    UICtrl.pricesAdd(prices);
    
    const products = ProductCtrl.getProducts();
    products.length == 0 ? UICtrl.toggleProductListCard(false) : null;
    e.preventDefault();
  }
  return {
    init: function () {
      const products = ProductCtrl.getProducts();
      UICtrl.addButtonState();
      //prices added
      const prices = ProductCtrl.priceCalculate();
      UICtrl.pricesAdd(prices);

      //products card list show/hide
      products.length > 0
        ? UICtrl.createProductList(products)
        : UICtrl.toggleProductListCard(false);

      //load event listener
      loadEventListener();
    },
  };
})(ProductController, UIController);

App.init();
