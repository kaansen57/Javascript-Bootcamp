import { IProductService } from "./IProductService";
import { Product } from "./produtc";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {
  private dataSource: SimpleDataSource;
  private products: Array<Product>;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getProducts().forEach((p) => this.products.push(p));
  }
  getById(id: number): Product {
    return this.products.filter((p) => p.id === id)[0];
  }
  getProducts(): Product[] {
    return this.products;
  }
  saveProduct(product: Product): void {
    if (product.id == 0 || product.id == null) {
      product.id = this.idGenerator();
      this.products.push(product);
    } else {
      let index;

      this.products.forEach((p, i) => {
        if (p.id === product.id) {
          index = i;
        }
      });
      this.products.splice(index, 1, product);
      //aynı eleman varsa indexini bulduk ve onun yerine yeni product nesnesini koyduk
      //güncelleme işlemini de böyle yapmış olduk.
    }
    console.log("Saved Product");
  }
  deleteProduct(product: Product): void {
    // this.products.filter((p, i) => {
    //   if (p.id === product.id) {
    //     this.products.splice(i, 1);
    //     console.log(product.name + "deleted");
    //   }
    // });
    let index = this.products.indexOf(product);
    if (index > 0) this.products.splice(index, 1);
  }
  private idGenerator(): number {
    let key = 1;
    while (this.getById(key)) {
      key++;
    }
    return key;
  }
}
