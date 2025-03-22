
export{};
/*
let a = 10;
let b = 20;
*/

// Eşitlik (== ve ===)
/*
if (a == "10") { 
    console.log("a, '10' ile eşit (==) ama türüne bakmaz!");
}
if (a === 10) { 
    console.log("a, tam olarak 10'a eşit (===) ve türü de number!");
}

// Eşit değil (!= ve !==)
if (a != b) {
    console.log("a, b'ye eşit değil (!=).");
}
if (a !== "10") {
    console.log("a, '10' ile tam olarak eşit değil (!==) çünkü türü farklı.");
}

// Büyük / Küçük karşılaştırmaları
if (a < b) {
    console.log("a, b'den küçük.");
}
if (b > a) {
    console.log("b, a'dan büyük.");
}
if (a <= 10) {
    console.log("a, 10'a eşit veya daha küçük.");
}
if (b >= 15) {
    console.log("b, 15'e eşit veya daha büyük.");
}
    */

let x = 5;
let y = 15;
let isActive = true;

// AND (&&) - İki koşul da doğru olmalı
if (x < 10 && y > 10) {
    console.log("Hem x 10'dan küçük, hem y 10'dan büyük.");
}

// OR (||) - En az bir koşul doğru olmalı
if (x === 5 || y === 20) {
    console.log("Ya x 5'tir ya da y 20'dir.");
}

// NOT (!) - Koşulu tersine çevirir
if (!isActive) {
    console.log("isActive false olduğu için bu çalışmaz.");
} else {
    console.log("isActive true olduğu için else çalışır.");
}


//**************************************************************************** */
let age = 25;
let hasID = true;

// Yaşı 18'den büyük VE kimliği varsa geçebilir
if (age > 18 && hasID) {
    console.log("Geçiş yapabilirsiniz."); // ikiside doğru oldugu için çalışır
}

// Yaşı 18'den küçük VEYA kimliği yoksa geçemez
if (age < 18 || !hasID) {
    console.log("Geçiş yapamazsınız."); // bu çalışmaz en az 1 i doğru olmalıydı
}



//*********************************************************************** */
let isMember = true;
let price = isMember ? 10 : 20; // Eğer üye var veya doğru ise  fiyat 10, değilse 20
console.log(`Ödenecek tutar: ${price} TL`); // 10




//********************************************************************************* */
let age1 = 20;
let canVote = age1 >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); // "Yes, you can vote"





//***************************************************************** */

//   | kullanım örneği //

let abc:string | number;  // bu abc değişkeni string veya number olabilir demektir
abc=12;
let abd : string | number = 12; // string veya number olabilir denmiş ve abd ye 12 atanmış
console.log(abc ,abd)



//************************************************** */
let name: string | null = null; // bu name değişkeni string veya null olabilir denmiş ve null değeri atanmış
let defaultName = name ?? "Default Name";        //name  null veya undefined ise  ?? in sağındaki döner burda sağdaki dönmüş

console.log(defaultName); // "Default Name"



//*********************************************************** */



function greet(name: string = "Guest") {
    console.log("Hello, " + name);
}

greet(); // "Hello, Guest"
greet("Ali"); // "Hello, Ali"

//Burada name parametresi isteğe bağlıdır. Eğer fonksiyon çağrılırken bir değer verilmezse, "Guest" değeri kullanılır.


/****************************************************************** */



let x1 = 11;
let y1 = 16;

if (x1 > 10 && y1 < 14) {
    console.log("İçeri girildi!");   
}

else{
    console.log("else çalıştı")  // bu çalışır çünkü 2. koşul yanlış
}


/************************************************************************ */

let isRaining = false;
let hasUmbrella = true;

if (isRaining || hasUmbrella) {
    console.log("İçeri girildi!");  // 2. koşul doğru o yüzden 1 i tutsa yeterli içeri girer
}

/******************************************************************************** */


let isLoggedIn = false;

if (!isLoggedIn) {  // ! operatörü terse çevirir yani true oldu o yüzden if içine girdik
    console.log("Giriş yapmalısınız!");
}


/******************************************************************************** */


let hasTicket = false;
let isVIP = true;
let isBanned = false;

if ((hasTicket || isVIP) && !isBanned) {
    console.log("İçeri girildi!");                    //isVIP sayesinden && nın solu  uygun şartlı oldu sağda uygun içeri girer.
}
