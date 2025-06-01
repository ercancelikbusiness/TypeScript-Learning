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
    //normalde yukardakiler açık olmalı ve connsturctorda this 'li yapı olmalı ama constructor paremetresinde  özetsel halletcez!
     
    constructor(private location:Point ,private renk?:string){  // paremetrede  private kullanırsak 
                                                               //hem vehiclede  bu değerleri silebilirsin hemde bu sınıfta property  olarak 
                                                                //yazmaya gerek kalmaz!  hemde this ile consda yazmaya gerek kalmaz.
                                                                //yani paremetre kısmında bunu  halledebiliriz kod sadeleşir
    
        //this.location=location;
        this.renk=renk??"renk verilmedi" ; // ? olmasa bu satırada gerek kalmazdı
    }
   


    travelTo(point: Point):void {
        console.log(`Taxi X: ${this.location.x} Y: ${this.location.y} dan ${point.x} ${point.y} konumuna gidiyor`);
        console.log(`Taxi'nin rengi: ${this.renk}`); // renk verilmezse (const'da) renk verilmedi yazar.
    }                  
   
}

let taxi_1 = new Taxi({x:5,y:4}); //consturctordaki location belirtiliyor
taxi_1.travelTo({x:22,y:32})// yukarda location belirlenmişti bu travelTo nun point adresi unutma! yani 5,4 den 22,32 ye gidiyor şekli,nde











