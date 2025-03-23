//bu konuda tüm interface veya sınıfları ayrı ayrı modülüze ederek import export ederek kullanmayı öğreneceğiz...

import { Taxi } from "./taxi";     // export olan class'ımızı buraya import ettik ./ aynı dizindeki anlamına gelir



let taxi_1 = new Taxi({x:5,y:4});  // artık taxi'ye  import ettiğimiz içiin ulaştık
taxi_1.travelTo({x:1,y:3});

