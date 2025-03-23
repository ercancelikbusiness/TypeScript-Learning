//dosya ismimi product-service.ts olsa daha iyi olabilirdi  genel kanı bu yönde
// interfacelerde c# toplulugu genelde  dosya isimlerini I ile başlatsada yazmaya gerek yoktur.

import { Product } from "./product";

export interface ProductService{
    getById(id:number):Product;
    getProducts(): Array<Product>;
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void;
}