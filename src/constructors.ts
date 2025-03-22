export{};

interface Point {
    x: number,
    y:number
}



interface Vehicle {

    currentLocation:Point;                                   // bu bir değişkendir türü Point
    travelTo(point: Point):void;                           //bu dönüşsüz metod ( imzadan ibaret gövdesi yok)
   

    
}

class Taxi implements Vehicle {

    
    //currentLocation:Point = {x:0 , y:0}  ; // başlangıç değeri atandı   ama bunu constructor ile yapacağız   
    
    // önemli not: interface içindeki değişkenler veya metodlar  başka bir sınıfa interface  implemente edilsede this. ile ulaşılamaz 
    // o sınıf içinde ayrı olarak tanımlanmalıdır  this ile  ulaşmak için sınıfta
    //ayrıca property(özellik) olarak tanımlanmaları gerekir fakat onun haricinde ulaşabiliriz paremetreye tür olarakda geçebiliriz
   
    currentLocation: Point; //  implemente edilen vehicle içindeki currentlocationu propery olarak tanımladık
    color?:string;

     
    constructor(location:Point ,renk?:string) 
    {
        this.currentLocation=location;
        this.color=renk;
       // this.color = renk ?? "değer atanmadı";  // color opsiyonel oldugu için bunu yapmalıyız yoksa hata veriyor
        //yada propery kısmında   color?:string; yapabiliriz  eğer propery  color:string; ise yukarıyı açıp    this.color=renk; bunu kapat
    }
   


    travelTo(point: Point):void {
        console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna gidiyor`);
    }                  
   
}

let taxi_1 = new Taxi({x:5,y:4} , 'Red');
console.log(taxi_1.currentLocation);  //{ x: 5, y: 4 }
console.log(taxi_1.color);
//aşağıda cons'un 2. paremetresi opsiyonel(?) olduğu için tanımlanmadan new lenmiş halini görelim
let taxi_2 = new Taxi({x:3,y:6});  







