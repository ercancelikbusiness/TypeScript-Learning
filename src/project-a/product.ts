// uygulamamız için önce product.ts  oluşturduk.
//örnek bir proje yapıcağız yalnız sınıf interface yada dosya isimleri içeriklerinin isimleri büyük küçük harflere dikkat et öğren
//dosyalar küçük harfle içeriklerindeki class interfaceler PascalCase oldugunu unutma import ederken yada implement ederken vb  lazım olur
//biz kebab-case çok kullanmadık mesela productService dosyası product-service.ts olsa daha iyi olurdu gibi..! hem içindeki class ismi
//ile dosya karışmaz importlarda daha az karışırdı


export class Product {

    //field olarak id:number; şeklinde tanımlayıp consturctorda paremetresini  oluşturup içine this. şeklinde atamak yerine paremetrede
    //yapalım thislerdende kurtuluruz.. private  yaparsak dışardan sınıfın nesnesi . diyerek ulaşamıyorduk public dersek ulaşabiliriz.
    //private yapınca   consta paremetre olarak girildiyse sadece cons'a atama yaparken dışardan direkt ulaşabiliriz onun harici
    //get set ler aracılığıyla ulaşabiliyorduk..

    constructor(public id?:number,public name?:string, public category?:string, public price?:number){

    }

}