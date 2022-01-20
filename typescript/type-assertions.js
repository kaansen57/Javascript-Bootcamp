var firstName = "kaan"; //default değer atayarak string olduğunuda atamış olduk
var count = firstName.length;
var arr = firstName.split("");
console.log(arr);
var value; // tipini vermediğimiz için default olarak any olacak ve ona göre any gibi işlemler yapılabilecek
value = [1, 2, 3, 4];
value = 5;
value = "kaan";
var message;
message = "kaan";
var leng = message.length; // veri tiplerine özel methodları kullabimek için data <string> ile cast işlemi yaptık ama değişken halen any
var length = message.length; // diğer bir cast işlemi as keywordu ile
console.log(leng);
var num;
num = 5;
var toFix = num.toFixed(2);
console.log(toFix);
console.log("-------------------");
var arr2;
arr2 = ['kaan', 5];
arr2.forEach(function (x) { return console.log(x); });
