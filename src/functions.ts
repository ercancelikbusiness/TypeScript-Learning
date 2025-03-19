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
let count=0; // aslında count' a gerek yok en son ortalama kısmında toplam/a.length yapabilirsin...

for(let i =0; i<a.length; i++){
    toplam=toplam+ a[i];
    count++;
}
const ortalama=toplam/count;
return 'ortalama : ' +ortalama;
}

//not: let getAverage3 = ():string =>{}  -fonksiyon illa paremetre almasına gerek yok yani herşey normal fonk. kuralları ile aynı aslında

console.log(getAverage3(10,20));
console.log(getAverage3(10,20,30));
console.log(getAverage3(10,20,30,60));









