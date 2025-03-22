
//erişim belirteçleri
export {};

interface Point {
    x: number,
    y:number
}



interface Vehicle {

  
    travelTo(point: Point):void;                           //bu dönüşsüz metod ( imzadan ibaret gövdesi yok)
   

    
}

class Taxi implements Vehicle {


   //private location: Point;
    //private renk: string;
     
    constructor( private location:Point ,private renk?:string) {
        
        //this.location=location;
        this.renk=renk??"renk verilmedi" ;
    }
   


    travelTo(point: Point):void {
        console.log(`Taxi X: ${this.location.x} Y: ${this.location.y} dan ${point.x} ${point.y} konumuna gidiyor`);
        console.log(`Taxi'nin rengi: ${this.renk}`); // renk verilmezse (const'da) renk verilmedi yazar.
    }            
    

    getLocation(){
        return this.location;  //location'ın cons paremetresinde tanımlanıp halledilmişti..!
    }

    
    setLocation(value:Point){
        if(value.x< 0 || value.y<0)
        {
            //throw new Error("kordinat bilgileri negatif olamaz"); //bu kod çalışırsa  if dışındaki kodlar çalışmadan fonksiyondan çıkar !
                                                                  //ekstra işlemler yine if içinde yapılmalı onlar çalışır
                                                                  //ancak  eğer mainde try-catch yapmazsan hata gösterilip programda
                                                                  //çalışmayı durdurur main'deki diğer kodlarında çalışmaz
                                                                  //yada throw yerine console.error kullan ve return; kullan
                                                                  //return; if ve fonksiyondan direk çıkarır..!
                
         console.error("Hata: Koordinat bilgileri negatif olamaz.");     
         return;                                             
        }


        this.location=value;  
    }

   
}

let taxi_1 = new Taxi({x:5,y:4});

console.log("şuanki konumunuz ", taxi_1.getLocation());

  taxi_1.setLocation({x:-1 , y:-3})
 console.log("yeni konum: ",taxi_1.getLocation());

 //not: console.log içinde + ve , kullanılabilir... + operatörü, operatörün iki tarafını string'e dönüştürür ve ardından birleştirir.
//, ile birden fazla argüman gönderdiğinizde, console.log her argümanı ayrı ayrı işleyerek boşlukla ayırarak yazdırır.
//burda  console.log("yeni konum: " + taxi_1.getLocation()); yapsak yeni konum: [object] [object] şeklinde çıkardı !!!!
taxi_1.setLocation({x:1 , y:2})
console.log("yeni konum: ",taxi_1.getLocation());

 











