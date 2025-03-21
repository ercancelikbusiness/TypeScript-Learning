export{};

// bir deüişkeni tür gibi gösteremeyiz bunun için  type  veya interface kullanmalıyız

//örneğin aşağıda a değişkenini  deneme fonksiyonunun paremetresinde tür olarak kullanmak istedik hata verdi.

/*
let a={x:"ercan",y:25};

let deneme = (degisken:a) =>{}
*/

// aşağıda type kullandık ve deneme1 fonk paremetresindeki değişkene tür olarak atayabildik
//çünkü TS yukarda a yı değişken kabul ediyor aşağıda abc yi ise tür kabul ediyor bu TS ile alakalı

/*
type abc= {x:string,y:number};

let deneme1 = (degisken:abc) =>{}
*/

//aslında a yı  typeof ile türleştirebiliriz örn:

/*
type AType = typeof a;
*/ 
// diyip AType ' ı paremetrede tür olarak kullanabiliriz a yı temsil eder...

//------------------------------------------------------------------------------
//---------------------yada interface kullanabiliriz ---------------------------
//interface içinde sadece fonksiyonların (metod) imzaları olur gövdesini kullanmayız
//genel bilgi: objeler , ile ayırabiliriz yada herbiri sonuna ; koyarız genelde ; kullanılır


interface Point {
    x: number,
    y:number
}

interface Passenger{
      name:string;
      phone:string;
}

interface Vehicle {

    currentLocation:Point;                                   // bu bir değişkendir türü Point
    travelTo(point: Point):void;                            //bu dönüşsüz metod ( imzadan ibaret gövdesi yok)
    getDistance(pointA: Point, pointB:Point):number;      // bu number döndüren bir metod ( imzadan ibaret gövdesi yok)
    addPassenger(passenger:Passenger):void
    removePassenger(passenger:Passenger):void;

    
}












/*
let travelTo = (point:Point) =>{
//..
}

let getDistance = (pointA:Point, pointB:Point)=>{
    //...
}

travelTo({
    x:2,
    y:3
});
*/

