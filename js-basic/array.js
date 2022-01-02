
let arr = ["kaan","kübra","fatma"]


arr.push("reno");

console.log(arr);

arr.unshift("ford")
 
console.log(arr);

arr.splice(arr.indexOf("reno"), 1);

// arr.splice(arr.find("ford"), 1);
 ;
arr.splice(arr.filter(x => x === "ford"), 1)
console.log(arr);
 

arr.reverse();

console.log(arr);

arr.sort();

console.log(arr);


var str = "chev,dacia"

var car = str.split(',');

console.log(car);

var dizi = arr.concat(car);
console.log(dizi);
// dizi.splice(dizi.length-2,2);

dizi.pop();
dizi.pop();

console.log(dizi);