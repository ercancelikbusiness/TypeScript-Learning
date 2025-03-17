/*
let number =5;
number='a';
//yukarıda  bize hata  uyarısı verir  number ı sayı değişkeni olarak atadık ve tipi sayı oldu sonra harf atamamız hata diye uyarır
//ama js ye çevirdiğimizde bir hata vermez 
let a;
a=5;
a='b';
a=true;
//yukarıda bir hata vermez çünkü 'a' değişkenini oluştururken any tipinde oluşturduk daha sonra verdiğimiz değerler
// değişkenin tipini değiştirmez istediğimizi atabiliriz

let b:number;
b=5;
b='a';
b=true;
//yukarıda b değişkenine tip ataması yaptık(number) artık harf ve true gibi number harici değerler hata kabul eder.
*/

//bu arada node types.ts yaparsak öncesinde tsc types.ts yapmadıgımız yani js ye çevirmeden çıktıyı göremeyiz
// çünkü node js ortamıdır. çıktıyı  doğrudan js çevirmeden typescript   çıktısını görmek için
//npm install -g ts-node indirdikten sonra ts-node types.ts yazarak çıktıyı görebiliriz böylelikle js dosyası oluşmadan çıktıya ulaşırız..!
//ama bunun iç,n uyumlu tsconfig.json ve package.json dosyalarına ihtiyacımız vardı onları yapay zeka yardımıyla oluşturduk şimdi
//direk  ts-node types.ts diyerek çıktımızı ts dosyamızı js ye çevirmeden görebiliriz

let c:number = 5;
let d:string = 'a';
let e:boolean=true;
let f:any;
let g:number[]=[1,2,3];
let h:Array<number> = [1,2,3,4];
let i:any[]=[1,2,'s',0.6,true];
console.log(i);

/*"Derlenmeden çalıştırılma" ifadesi, TypeScript kodunun JavaScript'e çevrilmeden (derlenmeden) doğrudan çalıştırılması anlamına gelir.
 TypeScript, JavaScript'ten farklı olarak tip denetimi, derleme gibi özelliklere sahip bir dil olduğu için normalde 
 bir TypeScript dosyası (.ts uzantılı) önce JavaScript'e (.js uzantılı) dönüştürülmelidir.*/

 //ben js derlicem ama js dosyasınının en üstüne /* koydum çünkü vscode dublucate değişken hatası veriyor yani aynı değişkenlerden
 //bir başka dosyadada var diyor  uyarı veriyor dikkatimi dağıtıyor o yüzden ts yi js ye derlesemde js deki dosyanın en üstüne
 // slash* ibaresi koyacağım maksat ts js ye çevrilirken neler değişiyor görmek  için js ye çevirmeye devam edicem..
 
 let j: [string,number,boolean]=['a',5,false]; // tipleri önceden belirliyorsun buna //tuple denir

 enum Payment {kredi=0,havale=3,kapidaodeme=2,eft=4}; // Paymentin objeleri ve atanan değerleri

 let kredi=Payment.kredi;
 let havale=Payment.havale;
 let kapidaodeme=Payment.kapidaodeme;
 let eft=Payment.eft;
 console.log(eft);
