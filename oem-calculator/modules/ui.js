import { ProductController } from "./product.js";
import { StorageController } from "./storage.js";
//ui controller

export const UIController = (function () {
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
    deleteProduct: function () {
      
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
      UIController.clearWarningsClass();
      selectedRow.classList.add("bg-warning");
      document.querySelector(Selectors.add).style.display = "none";
      document.querySelector(Selectors.save).style.display = "inline";
      document.querySelector(Selectors.delete).style.display = "inline";
      document.querySelector(Selectors.cancel).style.display = "inline";
    },
  };
})();
