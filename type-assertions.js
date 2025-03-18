"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message;
//yukardaki tanımlama message değişkenini any kabul eder  daha sonra  içine birşey atsanda artık any dir
message = 'ercann';
var count = message.length;
//yukardaki message. dedikten sonra  intellisense bize mesela length gibi bir fonksyion vb   önermedi çünkü message'yi any kabul ediyor.
//oysaki messageyi ilk tanımlarken let message='ercan'; deseydik message. dediğimizde intellisense string fonksiyonlarını önerirdi
//çünkü messageyi string bir değişken göstermiş olurduk ve intellisense bize string ile ilgili fonksiyonları gösterebilirdi...
/*alttaki örnekte sıkıntı yok  derleyici a.le diyince öneriyor.!
let a:string;
a='ercan';
ilk tanımlamadan sonra a='ercan'; yazmasaydık bile coun1 içinde a. dedikten sonra yine tüm string fonks.larını öneriyor...!
let count1=a.length;
console.log(count1);
*/
/* yada aşağıda farklı bir yöntem göstereceğim* bu şekilde yaparsakda istediğimiz türün fonksiyonlarını görürüz*/
var abc;
abc = 'ercan';
var ca = abc.length;
console.log(ca);
/*
IntelliSense, bir kod editöründe (örneğin, Visual Studio Code’da) kullanılan bir özelliktir ve geliştiricilere
akıllı kod tamamlama, hata tespiti ve kod önerileri sunar*/
