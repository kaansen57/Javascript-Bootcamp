//storage controller
export const StorageController = (function () {
    return {
      getStorageProducts: function () {
        return localStorage.getItem("products");
      },
      addProduct: function (products) {
        localStorage.clear();
        localStorage.setItem("products", JSON.stringify(products));
      },
      updateProduct: function (products) {
        localStorage.clear();
        localStorage.setItem("products", JSON.stringify(products));
      },
      deleteProduct: function (products) {
        localStorage.clear();
        localStorage.setItem("products", JSON.stringify(products));
      },
    };
})();

