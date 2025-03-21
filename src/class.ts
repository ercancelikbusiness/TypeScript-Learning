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

