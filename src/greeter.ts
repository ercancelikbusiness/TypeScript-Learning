export{};
//burda temel mantığı anlamaya çalıştık 
//öncelikle her dosya aynı global scope'da çalıştığı için her konu için ayrı ts uzantılı dosya açtığında her dosyadaki değişkenler
//birbirinden farklı olmak zorunda çünkü çakışma yapcak bunun çözümü için her dosya başına export{} diyebilrsin 
//bu dosyayı modül yapar ve global olmaktan çıkarır boş bile olsa bunu yapabilirsin..yada yada tsconfig dosyasına gerekli birkaç
//kod yazarsan bunu otomatik çözebilirsin.
//ts kodunu otomatik js uzantılı dosyaya yani js tabanına çevrilmesi için(derlenme)  terminale tsc  greeter.ts yazdık
//otomatik ts dosyasının js ye derlenmiş halini oluşturur 
//fakat projeme sonradan src klasörü açıp ts dosyalarımı içine attığım için  tsc  src/greeter.ts yazarız otomatik  js olanları derler
//ama tsconfig dosyamda outdir kısmında belirttiğim üzere terminalke tsc yazdıgımızda otomatik tüm ts(typescript) dosyalarını js olarak
//dist klasörüne derler
//js derlenmeden çıktıyı görmek için ts-node src/...ts yazarak o dosyanın çıktısına dogrudan erişebiliriz
//js dosyası oluştuysa node dist/greeter.js yazarsakda (node js derleyicisi yada tarayıcının yaptığı) çıktımız çıkar..
//typescript ile  js kodu çalıştırılabilir yani ts js yi kapsar sorun  çıkmaz 
//fakat ts uzantılı dsoyada  örneğin tip hatalı bir değişken oluşturursak ts uzantılıda hata verir örneğini diğer dosyalarda yaptık


//bundan sonraki js uzantılı dosyaların içinde ts de yazdıklarının aynısı ama js versiyonu çıkacak
//yorum satırları aynen aktarılacağı için yorum satırlarını sadece ts lerde oku

function greeter(name:string){
console.log('Hello ' + name);
}

let user = 'ercan';
greeter(user);
