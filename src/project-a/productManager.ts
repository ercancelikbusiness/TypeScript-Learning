//uygulamamız için 3. sırada manager  dosyamızı oluşturduk.
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
        //yukardaki kodu sayfanın en altında daha detaylı açıkladım kesinlike oku !
        
        //getProducts() metodundan gelen ürünler foreach e girsin
        /*.forEach(p => this.products.push(p));

        forEach() fonksiyonu, dizi içindeki her eleman için bir işlem yapmamızı sağlar.
        p burada dizideki her bir Product nesnesini temsil eder.
        this.products.push(p) ile, her p elemanını ProductManager sınıfının products dizisine ekleriz.
        bu kodun açık alternatif halini  sayfa altına yazacağım*/
        



    }

    getById(id: number): Product {
        return this.products.filter(p=>p.id===id)[0]; //burdaki 0  filter dizi formatından geliyor araştır.  aslında burda filter yerine find
                                                      // metodu kullanılmalı o zaman [0] kullanmaya gerek kalmazdı
        
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void { 
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        } 
        else {  //  id çakışıyorsa güncelleme yapılacak demektir
            let index = this.products.findIndex(p => p.id === product.id);
            //indexOf() veya findIndex() gibi metotlar kullanıldığında, bulunan elemanın dizideki indeksini döndürür. 
            // Eğer eleman bulunamazsa, bu metotlar -1 döndürür. eğer -1 değlise o id dizide bulunmuştur aşağıda o indexi yenisiyle değiştir
            // yani products[0] ilk dizi elemanıdır index = 0 ile temsil edilir mesela { id: 1, name: "Samsung S10", category: "Telefon", price: 1000 }
            if (index !== -1) { //
                this.products[index] = product;
            }
        }
    }
    
    deleteProduct(product: Product): void {
        let index = this.products.findIndex(p => p.id === product.id);
        if (index >= 0) {  // yada index !== -1 da diyebilirdik
            this.products.splice(index, 1); //index silinecek index 1 ise silinecek eleman sayısı
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


/*
this.products = this.dataSource.getProducts(); yaparak   this.dataSource.getProducts().forEach(p=> this.products.push(p));
daki aynısını yapamazmıydık ?
aynı işlevi görürdü ama birisi bağımsız kopyalama diğeri bağımlı kopyalamadır kod yazarken bağımsız kopyalama yapmalıyız!
this.products = this.dataSource.getProducts(); bu kod ile;

this.products, SimpleDataSource içindeki products dizisini birebir referans olarak tutar.
Yani this.products üzerinde yapılan her değişiklik SimpleDataSource içindeki diziyi de etkiler.
Eğer dışarıdan biri this.products.push(new Product(...)) derse, SimpleDataSource'daki products dizisi de değişmiş olur.
Eğer ProductManager içinde products dizisini bağımsız olarak yönetmek istiyorsan (SimpleDataSource'u değiştirmeden ürün ekleyip 
çıkarmak istiyorsan), forEach ile kopyalamak daha güvenlidir.
Eğer SimpleDataSource ile tamamen aynı veriyi paylaşmak istiyorsan ve her değişikliğin ana diziyi de etkilemesini istiyorsan, doğrudan 
atama (=) daha kısa ve yeterlidir.

*/


/* forEach konu anlatımı:
this.dataSource.getProducts().forEach(p => this.products.push(p));
Bu şu demek:

this.dataSource.getProducts() bir dizi döndürür (içinde Product nesneleri olan).
forEach(p => this.products.push(p)):
Dizinin her elemanını tek tek p olarak alır. her saatırda dizi elemanı değişir  ve pushlar
this.products.push(p) ile bu elemanı this.products dizisine ekler.
Bunu daha basit bir örnekle açıklayalım:

let urunler = ["Telefon", "Bilgisayar", "Tablet"];
let yeniListe: string[] = [];

urunler.forEach(urun => {
    yeniListe.push(urun);
});

console.log(yeniListe); çıktı: ["Telefon", "Bilgisayar", "Tablet"]




*/
