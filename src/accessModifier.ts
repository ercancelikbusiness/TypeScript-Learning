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


     
    constructor(private location:Point ,private renk?:string)  // erişilmemesi için private kullanırsak 
                                                               //hem vehiclede  bu değerleri silebilirsin hemde property  olarak bunları
                                                                //yazmaya gerek kalmaz hemde this ile consda yazmaya gerek kalmaz.
    {
        this.renk=renk??"renk verilmedi" ;
    }
   


    travelTo(point: Point):void {
        console.log(`Taxi X: ${this.location.x} Y: ${this.location.y} dan ${point.x} ${point.y} konumuna gidiyor`);
        console.log(`Taxi'nin rengi: ${this.renk}`); // renk verilmezse (const'da) renk verilmedi yazar.
    }                  
   
}

let taxi_1 = new Taxi({x:5,y:4});
taxi_1.travelTo({x:22,y:32})











