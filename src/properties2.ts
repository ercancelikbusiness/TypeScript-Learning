
export {};

//*********************************************************************************************************** */
/*JavaScript/TypeScript'teki getter ve setter metodları, bir nesne özelliği gibi davranan özel metodlardır. 
Bu yüzden yalnızca getter ve setter'lar, doğrudan özellik gibi kullanılabilir. Diğer fonksiyonlar, her zaman normal 
fonksiyon çağrıları olarak kullanılırlar ve fonksiyon çağrısı yapmak için parantez kullanmanız gerekir. aşağıdaki dersimizde önceki properties
dersinin  farklı hali mevcut
- Ayrıca private değişkenlere yani getter setter kullanılacağı zaman özel değişkenlere  _ (alt tire) ile başlanması daha doğrudur
-birde burda renk değişkenini iptal ederek yaptım onu artık öğrendik zaten*/


interface Point {
    x: number,
    y:number
}



interface Vehicle {

  
    travelTo(point: Point):void;                          
   

    
}

class Taxi implements Vehicle {

   /* özel değişken propertylerimize _ uyguladık */

   //private _location: Point; 
    //private _renk: string;
     
    constructor( private _location:Point ,private _renk?:string) {
        
        //this._location=_location;
        
        this._renk=_renk??"renk verilmedi" ;
    }
   


    travelTo(point: Point):void {
        console.log(`Taxi X: ${this._location.x} Y: ${this._location.y} dan ${point.x} ${point.y} konumuna gidiyor`);
        console.log(`Taxi'nin rengi: ${this._renk}`); 
    }            
    

    //aşağıda yeni get set kullanımı isimlendirmeye camelCase formatı uygulandı metod gibi küçük harfle başla

    get location(){
        return this._location;  
    }

    
    set location(value:Point){
        if(value.x< 0 || value.y<0)
        {
           
                
         console.error("Hata: Koordinat bilgileri negatif olamaz.");     
         return;                                             
        }


        this._location=value;  
    }

   
}

let taxi_1 = new Taxi({x:5,y:4});

//console.log("şuanki konumunuz ", taxi_1.getLocation());
console.log("şuanki konumumuz :", taxi_1.location) //setlemezsen get olanı çağırdıgını anlar ! () e de gerek yok fonksiyon gibi düşünme

 // taxi_1.setLocation({x:-1 , y:-3})
 taxi_1.location= {x:-1,y:-3}; // setlemede artık fonksiyon gibi değil değişken gibi yapılabilir bu get set e özel bir kullanımdır !
 
 console.log("yeni konum: ",taxi_1.location); // görüldüğü gibi get ve () kaldırıldı 

 
//taxi_1.setLocation({x:1 , y:2})
taxi_1.location={x:1,y:2};
console.log("yeni konum: ",taxi_1.location);

 












 











