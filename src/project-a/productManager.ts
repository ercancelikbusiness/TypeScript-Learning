import { Product } from "./product";
import { ProductService } from "./productService";
import { SimpleDataSource } from "./simpleDataSource";

export class ProductManager implements ProductService{   // ProductManager üzerine tıklayıp lbalonu görünce implement edelip otomatik kodlar gelir.
    

    private dataSource: SimpleDataSource;
    private products: Array <Product>;

    constructor(){
        this.dataSource=new SimpleDataSource();   // ne demiştik SDS databasemiz ve bura newlenince constructor aracılıgla productslar oluşuyordu
        this.products=new Array<Product>();    // boş bir array
        // aşağıda yazacağım this i açıklıyayım  this.dataSource=new SimpleDataSource(); ile dataSource  SDS nin nesnesi oldu ve
        //products ları tutuyor aynı zamandada  SDS nin nesnesi. yani  SDS nin metodlarınıda görebilir. fakat biz
        //SDS deki productsları getProducts metoduyla almak istediğimizide unutma 
        this.dataSource.getProducts().forEach(p=> this.products.push(p));
        
        //getProducts() metodundan gelen ürünler foreach e girsin
        /*.forEach(p => this.products.push(p));

        forEach() fonksiyonu, dizi içindeki her eleman için bir işlem yapmamızı sağlar.
        p burada dizideki her bir Product nesnesini temsil eder.
        this.products.push(p) ile, her p elemanını ProductManager sınıfının products dizisine ekleriz.
        bu kodun açık alternatif halini  sayfa altına yazacağım*/
        



    }

    getById(id: number): Product {
        return this.products.filter(p=>p.id===id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id ==0 || product.id==null){
            product.id=this.generateId();
            this.products.push(product);
        }
        else{
            let index=this.products.indexOf(product);
            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let index=this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
        }
    }

    private generateId():number{
        let key=1;

        while(this.getById(key) !=null){
            key++;
        }
        return key;
    }




}



/* this.dataSource.getProducts().forEach(p=> this.products.push(p)); kodun açık hali aşağıda

let dataProducts = this.dataSource.getProducts(); // getProducts() ile ürünleri al
for (let p of dataProducts) {  // Her bir ürünü tek tek dolaş
    this.products.push(p);  // products dizisine ekle
}
*/