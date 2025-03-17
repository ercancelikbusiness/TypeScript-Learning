//ts kodunu otomatik js uzantılı dosyaya yani js tabanına çevrilmesi için  terminale tsc  greeter.ts yazdık
//bundan sonraki js uzantılı dosyaların içinde ts de yazdıklarının aynısı ama js versiyonu çıkacak
//yorum satırları aynen aktarılacağı için yorum satırlarını sadece ts lerde oku
function greeter(name) {
    console.log('Hello ' + name);
}
var user = 'ercan';
greeter(user);
