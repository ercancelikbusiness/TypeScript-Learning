// bu dosyayı veritabanı (database) simüle ettiğimiz bir yapı olarak düşünelim 
/*   aşağıda array oluşturmak için 2 farklı yöntem oldupunu gösterelim
this.products = new Array<Product>(); // Boş bir Product dizisi
this.products = []; // Boş bir dizi
//aşağıdaki örnek bu sınıfta yaptığımız dizi örneğine alternatifitir biz <> li olanla yapacağız
this.products = [
    new Product(1, "Samsung S10", "Telefon", 1000),
 ]; 

 // */
 //// bu sınıf new lendiğinde  new SimpleDataSource(); bu sınıfın constructoru  çalışır ve private products içine ürünler geçer. 
// // burada database simüle ettiğimiz için böyle yaptık


import { Product } from "./product"

export class SimpleDataSource{

    private products:Array<Product>;

    constructor() {  
        this.products = new Array<Product>(
            new Product(1,"Samsung S10", "Telefon",1000),   // Product sınıfı new lenerek nesne oluşturuluyor ve constructor çağrılıyor
            new Product(2,"Samsung S9", "Telefon",900),    
            new Product(3,"Samsung S8", "Telefon",800),
            new Product(4,"Samsung S7", "Telefon",700),
        );
    }


    //aşağıdaki // metodun döndürdüğü tür Product[] dır. yani arraydir. constructorda oluşan productsları bu metodla dışardan alalım.
                               
    getProducts():Product[] {   
        return this.products;
    }
    
}