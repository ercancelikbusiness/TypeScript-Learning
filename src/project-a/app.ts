import { Product } from "./product";
import { ProductManager } from "./productManager";


let _productManager =new ProductManager;

let result;

result = _productManager.getProducts();
result=_productManager.getById(2);

let p = new Product();
p.name="Iphone 6";
p.price=4000;
p.category="Telefon";

_productManager.saveProduct(p);
console.log(_productManager.getProducts());


let result1 = _productManager.getById(2);
_productManager.deleteProduct(result1);  // 2 numaralı ürün silinmiş oldu
result = _productManager.getProducts();  // result içine tekrar güncel ürünleri getirmiş olduk

console.log(result);