import { Point } from "./point";  // kullanılan ifade {} içinde  Point interface old için büyükle başladı fromdan sonra .ts dosyasıdır


export interface Vehicle {  

  // interface ve class lar büyük harfle başlar PascalCase kullanılır
  //.ts gibi uzantılı dosya isimlerinde genelde kebab-case kullanılır yani hepsi küçük aralarında - olur

    travelTo(point: Point):void;                          
   
}