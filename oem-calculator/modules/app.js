//storage controller
const StorageController = function () {};

//product controller
const ProductController = (function () {
  //private area
  const Product = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  const data = {
    products: [
      //   { id: 1, name: "Monitör", price: 100 },
      //   { id: 2, name: "Ram", price: 200 },
      //   { id: 3, name: "Klavye", price: 300 },
      //   { id: 4, name: "Laptop", price: 400 },
    ],
    selectedProduct: null,
    totalPrice: 0,
  };

  return {
    //public area
    getProducts: function () {
      return data.products;
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
    },
  };
})();

//ui controller

const UIController = (function () {
  const Selectors = {
    productList: "#item-list",
    add: "#add",
    delete: "#delete",
    save: "#save",
    cancel: "#cancel",
    name: "#name",
    price: "#price",
    productListCard: "#productListCard",
  };

  return {
    createProductList: function (products) {
      let html = ``;
      products.forEach((prd) => {
        html += `
                    <tr> 
                        <td> ${prd.id} </td>
                        <td> ${prd.name} </td>
                        <td> ${prd.price} </td>
                        <td><button class="btn btn-warning"> Edit </button></td>
                    </tr>
                    `;
      });
      document.querySelector(Selectors.productList).innerHTML = html;
    },
    getSelectors: function () {
      return Selectors;
    },
    toggleProductListCard: function (isDisplay) {
      isDisplay
        ? (document.querySelector(Selectors.productListCard).style.display =
            "block")
        : (document.querySelector(Selectors.productListCard).style.display =
            "none");
    },
  };
})();

//app controller

const App = (function (ProductCtrl, UICtrl) {
  const UISelectors = UICtrl.getSelectors();
  //load event listeners

  const loadEventListener = function () {
    document
      .querySelector(UISelectors.add)
      .addEventListener("click", productAdd);
  };

  const productAdd = function (e) {
    //add product
    const productName = document.querySelector(UISelectors.name).value;
    const productPrice = document.querySelector(UISelectors.price).value;

    if (productName && productPrice && !isNaN(productPrice)) {
        ProductCtrl.addProduct(productName, productPrice);
        UICtrl.toggleProductListCard(true);
    }
    e.preventDefault();
  };

  return {
    init: function () {
      const products = ProductCtrl.getProducts();

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
