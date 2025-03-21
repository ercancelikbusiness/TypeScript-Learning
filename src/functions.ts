function getAverage(a:number,b:number,c:number,d?:number){ // ? koyarsan o değişken opsiyonel demek kullanılmasada olur
    
    let toplam= a+b+c;
    let count=3;

    if(typeof d !== 'undefined'){ //d nin tipi undefined değilse buna gir demek
        toplam = toplam+d;
        count++;
    }
    
    
    const result = toplam/count;
    return 'cevap : ' +result;

}
let a= getAverage(1,2,3);
let b = getAverage(1,2,3,6)
console.log(`a nin cevabi ${a} b nin cevabi ${b}`);

//----------------------------------------------------------------------//
//ne kadar değişken olacagını yani ne kadar veri geleceğini bilmiyorsak şöylede yapabiliriz...

// ...a: Bu yazım, fonksiyona kaç parametre geçerse geçsin hepsini bir dizi olarak almanıza olanak tanır. buna rest paremetre denir
//: dan sonraki herşey typescript ile alakalıdır js de : ve sonrası yoktur burda bu dizi number dizisi olacak diyoruz türüne...
//fonksiyonun paremetre sonuna  :string gibi tür yazabiliriz bu o fonk. return edeceği türü söyler...
//eğer fonksiyon birşey döndürmüyorsa :void diyebilirdik 

function getAverage2(...a:number[]):string{  
let toplam=0;
let count=0;

for(let i =0; i<a.length; i++){
    toplam=toplam+ a[i];
    count++;
}
const ortalama=toplam/count;
return 'ortalama : ' +ortalama;

}
console.log(getAverage2(10,20));
console.log(getAverage2(10,20,30));
console.log(getAverage2(10,20,30,60));

//-------------------------------------------------------------------------///
// aşağıda yukardaki örneğin arrow function halini yapalım çok birşey değişmeyecek

let getAverage3 = (...a:number[]):string => {  
    let toplam=0;
//let count=0; // aslında count' a gerek yok en son ortalama kısmında toplam/a.length yapabilirsin...

for(let i =0; i<a.length; i++){
    toplam=toplam+ a[i];
   // count++;
}
//const ortalama=toplam/count;
const ortalama = toplam/a.length;
return 'ortalama : ' +ortalama;
}

//not: let getAverage3 = ():string =>{}  -fonksiyon illa paremetre almasına gerek yok yani herşey normal fonk. kuralları ile aynı aslında

console.log(getAverage3(10,20));
console.log(getAverage3(10,20,30));
console.log(getAverage3(10,20,30,60));

/*//--------------------------------------------------------------------------------------//
//aşağıda javascript  fonksiyonu mevcuttur paremetrede tür belirtilmediği için  obje gönderilmesi için
// örnek bir kod yazdık ama Ts de bu sorun olmaz çünkü paremetre zaten object olarak belirlenir.

function greetUser(user) {
    if (typeof user !== "object" || user === null) {
        throw new Error("Fonksiyon sadece bir obje kabul eder!");
    }
    
    console.log(`Merhaba, ${user.name}! Senin yaşın ${user.age} ve mesleğin ${user.job}.`);
}

greetUser({ name: "Ahmet", age: 30, job: "Mühendis" });
*/

//-----------------------aşağıda TypeScript formu mevcut Ts de türleri vb belirtmen gerek ---------------------

function greetUser(user: { name: string, age: number, job: string }) {
    console.log(`Merhaba, ${user.name}! Senin yaşın ${user.age} ve mesleğin ${user.job}.`);
}

greetUser({ name: "Ayşe", age: 28, job: "Doktor" });
// greetUser("Ayşe"); // TypeScript derleme hatası verecektir



//----------------------------? kullanımı ve diğer operatörler------------------------///

function greetUser2(user: { name: string, age?: number, job?: string }) {

    //console.log(`Merhaba, ${user.name}! ${user.age ? `Yaşın ${user.age}` : ""} ${user.job ? `ve mesleğin ${user.job}.` : ""}`);

    //age ve jobopsiyonel olduğu için console.log içinde bunu sorgulamalıyız
    //${user.job ? ` ${user.job} ` : "" => bu user job varsa user job u yazdır  eğer yoksa "" boşluk yazdır demektir
    //yani ? varsa  : yoksa demek gibi düşün fakat ? dan sonra `` koymayı unutma 
    //ama aşağıdaki format daha mantıklı

    console.log("Merhaba " + user.name + (user.age ? " yaşın " + (user.age) : " yaşın yok") );
    


}

greetUser2({ name: "Burak"}); // 
greetUser2({name:"Ercan" , age:22});

// operatör örnekleri devam ///

let age = 20;
console.log(age >= 18 ? 'Yetişkin' : 'Çocuk');
// Çıktı: Yetişkin

//yani ? varsa yada doğruysa gibi anlamlara gelir

// --------------------?? operatörü ----------------------------//

//let result = value ?? defaultValue;
/*
Eğer value null veya undefined ise, defaultValue döndürülür.
Eğer value geçerli (yani null veya undefined değilse), o zaman value döndürülür.
*/

let userAge = undefined;
console.log(userAge ?? 25);
// Çıktı: 25

let userAge2 = 20;
console.log(userAge2 ?? 25);
// Çıktı: 20

// ----------------|| operatörü kullanım----------------//

/*
|| (Logical OR) Operatörü:
Amaç: || operatörü, "truthy" ve "falsy" değerlere göre çalışır. Yani, falsy değerlere (örneğin false, 0, "", null, undefined, NaN) karşı sağlanan
 alternatif değeri döndürür.
Kullanım: a || b
Eğer a değeri falsy bir değer (yani false, 0, "", null, undefined, NaN) ise, b döndürülür.
Eğer a değeri truthy bir değer (yani geçerli bir değer) ise, a döndürülür.*/


let userName = null;
let defaultName = "Misafir";

console.log(userName || defaultName);  // "Misafir"

let userName2 = "";
let defaultName2 = "Misafir";

console.log(userName2 || defaultName2);  // "Misafir"

let userName3 = "Burak";
let defaultName3 = "Misafir";

console.log(userName3 || defaultName3);  // "Burak"
//Burada, userName geçerli bir değere (yani "Burak") sahip olduğu için || operatörü userName'i döndürür.


// ------------------------&& örnekleri-----------------------------
/*&& operatörü, iki değerin de "truthy" (geçerli, geçerli değer) olup olmadığını kontrol eder ve ilk "falsy" değeri bulana
 kadar çalışmaya devam eder. Eğer her iki değer de truthy ise, sonuncusunu döndürür. Yani:

Eğer iki değer de truthy ise, sonuncu değeri döndürür.
Eğer bir değer falsy ise, ilk falsy değeri döndürür.*/

console.log("------------------------------------------")

let d = false;
let c = "Misafir";
let result = d && c;  
console.log(result); // false

let e = "burak";
let f = "Misafir";
let result2 = e && f;  
console.log(result2); // Misafir

console.log("---------------------------")
let e1 = "asd";
let e2 = "Misafir1";
let e3 = "Misafir2";
let e4 = false;
let e5 = "Misafir4";

let result3 = e1 && e2 &&e3&&e4&&e5;  
console.log(result3);  //e4 deki  false oldugu için çıktı false'dir

//yukarıdaki örnekte e4 de misafir 3 olsaydı o zamn çıktımız misafir 4 yani en sonuncu truthly değer olurdu..

/*&& (AND) operatörü, tüm operandlar truthy olduğu sürece en sonuncusunu döndürür. Ancak, bir falsy değerle karşılaştığında, 
ilk falsy değeri döndürür ve işlem sonlanır. false, null, undefined, 0, NaN, ve boş string ("") gibi değerler falsy olarak kabul edilir.
*/


// aşağıda result4 de j de işlem && ilşe durduğu için k ya falseyi atayamadık j true olsaydı k ya falseyi atardık.
let j = false;
let k = true;
let result4 = j && (k = false);  // k = false olmaz, çünkü j false olduğunda işlem durmuştu
console.log(k);  // true, çünkü b'nin değeri değişmedi

// bu operatörlerde java ve javascript  benzer mantıktadır.