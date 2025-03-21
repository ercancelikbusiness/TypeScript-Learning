export {};

interface Point {
    x: number,
    y:number
}



interface Vehicle {

    currentLocation:Point;                                   // bu bir değişkendir türü Point
    travelTo(point: Point):void;                           //bu dönüşsüz metod ( imzadan ibaret gövdesi yok)
   

    
}

class Taxi implements Vehicle {

    currentLocation:Point = {x:0 , y:0}  ; // başlangıç değeri atandı       
    
   

    travelTo(point: Point):void {
        console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna gidiyor`);
    }                           
   
}

class Bus implements Vehicle {

    currentLocation:Point  = {x:0 , y:0}  ; // başlangıç değeri atandı                                    
    travelTo(point: Point):void{
    console.log(`Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor`); 
    }         
}

let taxi_1 : Taxi = new Taxi();  //taxi_1 i nesneleştirmeden kullanamayız..
let bus_1: Bus = new Bus(); 

bus_1.travelTo({x:2,y:3});

taxi_1.travelTo({x:1,y:2});

let taxi_2 = new Taxi(); // TypeScript, taxi_2'nin tipini otomatik olarak Taxi olarak belirler
taxi_2.travelTo({x:11,y:12});


/*
console.log(taxi_1.currentLocation.x) //0
taxi_1.currentLocation = {x:5,y:4};
console.log(taxi_1.currentLocation.x) // 5
*/