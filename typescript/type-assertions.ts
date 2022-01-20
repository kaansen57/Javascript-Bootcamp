let firstName = "kaan"; //default değer atayarak string olduğunuda atamış olduk

let count = firstName.length;

let arr = firstName.split("");

console.log(arr);

let value; // tipini vermediğimiz için default olarak any olacak ve ona göre any gibi işlemler yapılabilecek
value = [1, 2, 3, 4];
value = 5;
value = "kaan";

let message;
message = "kaan";
let leng = (<string>message).length; // veri tiplerine özel methodları kullabimek için data <string> ile cast işlemi yaptık ama değişken halen any
let length = (message as string).length; // diğer bir cast işlemi as keywordu ile
console.log(leng);


let num;
num = 5;
let toFix = (num as number).toFixed(2);
console.log(toFix);
console.log("-------------------");


let arr2;
arr2 = ['kaan', 5];
(arr2 as Array<any>).forEach(x => console.log(x));


