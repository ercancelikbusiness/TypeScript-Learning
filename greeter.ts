export{};
//burda temel mantığı anlamaya çalıştık tam olarak ts kodları yazmadık.
//öncelikle her dosya aynı global scope'da çalıştığı için her konu için ayrı ts uzantılı dosya açtığında her dosyadaki değişkenler
//birbirinden farklı olmak zorunda çünkü çakışma yapcak bunun çözümü için her dosya başına export{} diyebilrsin 
//bu dosyayı modül yapar ve global olmaktan çıkarır boş bile olsa bunu yapabilirsin..yada yada tsconfig dosyasına gerekli birkaç
//kod yazarsan bunu otomatik çözebilirsin.
//ts kodunu otomatik js uzantılı dosyaya yani js tabanına çevrilmesi için(derlenme)  terminale tsc  greeter.ts yazdık
//node greeter.js yazarsakda (node js derleyicisi yada tarayıcının yaptığı) çıktımız çıkar..
//typescript ile  js kodu çalıştırılabilir yani ts js yi kapsar sorun  çıkmaz 
//fakat ts uzantılı dsoyada  örneğin tip hatalı bir değişken oluşturursak ts uzantılıda hata verir örneğini diğer dosyalarda yaptık

function greeter(name){
console.log('Hello ' + name);
}

let user = 'ercan';
greeter(user);
