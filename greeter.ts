//burda temel mantığı anlamaya çalıştık tam olarak ts kodları yazmadık.
//ts kodunu otomatik js uzantılı dosyaya yani js tabanına çevrilmesi için(derlenme)  terminale tsc  greeter.ts yazdık
//node greeter.js yazarsakda (node js derleyicisi yada tarayıcının yaptığı) çıktımız çıkar..
//typescript ile  js kodu çalıştırılabilir yani ts js yi kapsar sorun  çıkmaz 
//fakat ts uzantılı dsoyada  örneğin tip hatalı bir değişken oluşturursak ts uzantılıda hata verir örneğini diğer dosyalarda yaptık

function greeter(name){
console.log('Hello ' + name);
}

let user = 'ercan';
greeter(user);
