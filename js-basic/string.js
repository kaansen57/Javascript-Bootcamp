
var sentence = "    lorem-aksdıajsıdja asduahsduhasd ahsduahsda asudha sduh asduhaa asd.  ";
var url = "kaaasdasdasdanhttp://kaansen.com";
var url2 = "http://kaansen.com/Kaan şen ayancık";

console.log(sentence.length);

let word = sentence.split(' ');
console.log(word.length);

// console.log(sentence.toLowerCase());

console.log(sentence.trim());

console.log(sentence.replace('-', ' '));

let str = "http://"
console.log(
   url.substring(url.indexOf(str), url.indexOf(str) + str.length)
);
let htp = url.substring(url.indexOf(str), url.indexOf(str) + str.length);
console.log(url.replace(htp, ''));


console.log(url.includes("http"))
console.log(url.includes("https"))

console.log(url2.startsWith("http"))
console.log(url2.startsWith("https"))

console.log(url.includes(".com"));
console.log(url.indexOf(".com"));


console.log(url2.toLowerCase()
    .replace(/ /g, '-')    
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
);


let val = `kaan şen  ${(2021 - 1998) >= 18 ? '18den büyük' : 'küçük'}`;
console.log(val);