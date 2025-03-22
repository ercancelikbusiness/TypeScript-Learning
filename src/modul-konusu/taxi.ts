import { Point } from "./point";                            //gerekli import işlemlerini tamamladık
import { Vehicle } from "./vehicle";

export class Taxi implements Vehicle {   //export diyerek taxi class'ını dışarıya  kullanılmak üzere açtık

    
 
    private _location: Point; 
    
      
     constructor(_location:Point ) {
         
         this._location=_location;
         
         
     }
    
 
 
     travelTo(point: Point):void {
         console.log(`Taxi X: ${this._location.x} Y: ${this._location.y} dan ${point.x} ${point.y} konumuna gidiyor`);
        
     }            
     
 
     //aşağıda yeni get set kullanımı
 
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