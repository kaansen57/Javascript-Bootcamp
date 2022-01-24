//storage controller
const StorageController = function () {};

//product controller
const ProductController = (function () {
  //private area

  let exchange = 3;
  let tlPrice = 0;

  const Product = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  const data = {
    products: [
      { id: 1, name: "Monitör", price: 100 },
      { id: 2, name: "Ram", price: 200 },
      { id: 3, name: "Klavye", price: 300 },
      { id: 4, name: "Laptop", price: 400 },
    ],
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
      console.log(productId);
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
      return selectedProduct;
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

//ui controller

const UIController = (function () {
  const Selectors = {
    productList: "#item-list",
    productLists: "#item-list tr",
    add: "#add",
    delete: "#delete",
    save: "#save",
    cancel: "#cancel",
    edit: "#edit",
    name: "#name",
    price: "#price",
    productListCard: "#productListCard",
    tlPrice: "#tlPrice",
    dolarPrice: "#dolarPrice",
  };

  return {
    createProductList: function (products) {
      let html = ``;
      products.forEach((prd) => {
        html += `
                    <tr> 
                        <td> ${prd.id} </td>
                        <td> ${prd.name} </td>
                        <td> ${prd.price} $ </td>
                        <td><button class="btn btn-warning" id="edit"> Edit </button></td>
                    </tr>
                    `;
      });
      document.querySelector(Selectors.productList).innerHTML = html;
    },
    editSaveProduct: function (product) {
      let editItem = null;
      let items = document.querySelectorAll(Selectors.productLists);
      items.forEach((row) => {
        if (row.classList.contains("bg-warning")) {
          row.children[1].textContent = product.name;
          row.children[2].textContent = product.price + "$";
          editItem = row;
        }
      });
      return editItem;
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
    clearInputData: function () {
      document.querySelector(Selectors.name).value = "";
      document.querySelector(Selectors.price).value = "";
    },
    pricesAdd: function (prices) {
      document.querySelector(
        Selectors.dolarPrice
      ).innerHTML = `Total <b> ${prices.dolarPrice} $ </b>`;

      document.querySelector(
        Selectors.tlPrice
      ).innerHTML = `Total <b> ${prices.tlPrice} ₺ </b>`;
    },
    editProductInputFill: function () {
      const selectedProduct = ProductController.getCurrentProduct();
      if (selectedProduct) {
        document.querySelector(Selectors.name).value = selectedProduct.name;
        document.querySelector(Selectors.price).value = selectedProduct.price;
      }
    },
    clearWarningsClass: function () {
      const items = document.querySelectorAll(Selectors.productLists);
      items.forEach(function (item) {
        if (item.classList.contains("bg-warning")) {
          item.classList.remove("bg-warning");
        }
      });
    },
    addButtonState: function () {
      UIController.clearWarningsClass();
      UIController.clearInputData();
      document.querySelector(Selectors.add).style.display = "inline";
      document.querySelector(Selectors.save).style.display = "none";
      document.querySelector(Selectors.delete).style.display = "none";
      document.querySelector(Selectors.cancel).style.display = "none";
    },
    editButtonState: function (selectedRow) {
      // const parent = selectedRow.parentNode; //tbody seçtirdim

      // for (let i = 0; i < parent.children.length; i++) {
      //   parent.children[i].classList.remove("bg-warning");
      // }

      selectedRow.classList.add("bg-warning");
      document.querySelector(Selectors.add).style.display = "none";
      document.querySelector(Selectors.save).style.display = "inline";
      document.querySelector(Selectors.delete).style.display = "inline";
      document.querySelector(Selectors.cancel).style.display = "inline";
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

    document
      .querySelector(UISelectors.productList)
      .addEventListener("click", editProduct);

    document
      .querySelector(UISelectors.save)
      .addEventListener("click", editSaveProduct);

    document
      .querySelector(UISelectors.cancel)
      .addEventListener("click", cancelUpdate);
  };

  const productAdd = function (e) {
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
