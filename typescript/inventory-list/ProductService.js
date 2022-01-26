"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.idGenerator();
            this.products.push(product);
        }
        else {
            var index_1;
            this.products.forEach(function (p, i) {
                if (p.id === product.id) {
                    index_1 = i;
                }
            });
            this.products.splice(index_1, 1, product);
            //aynı eleman varsa indexini bulduk ve onun yerine yeni product nesnesini koyduk
            //güncelleme işlemini de böyle yapmış olduk.
        }
        console.log("Saved Product");
    };
    ProductService.prototype.deleteProduct = function (product) {
        // this.products.filter((p, i) => {
        //   if (p.id === product.id) {
        //     this.products.splice(i, 1);
        //     console.log(product.name + "deleted");
        //   }
        // });
        var index = this.products.indexOf(product);
        if (index > 0)
            this.products.splice(index, 1);
    };
    ProductService.prototype.idGenerator = function () {
        var key = 1;
        while (this.getById(key)) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
