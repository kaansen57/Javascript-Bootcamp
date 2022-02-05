//Collection - Unique Value

let val;

var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); //bir değerden sadece bir tane olur (unique);
mySet.add({ a: 1, b: 2 });
var obj = { a: 1, b: 2 };
mySet.add(obj); // referans değerleri farklı olduğundan eklenebildi.

val = mySet.has(2);
val = mySet.has(obj);
val = mySet.size;
val = mySet.delete(1);

console.log(val);
console.log(mySet);          


console.log(Array.from(mySet).filter(value => value.a == 1));

console.log([...mySet].map(x => x * 2));


var set1 = new Set([1, 2, 3, 4]);
var set2 = new Set([1, 8, 6, 4]);

var intersect = new Set(Array.from(set1).filter(val => set2.has(val)));
var difference = new Set(Array.from(set1).filter((val) => !set2.has(val)));
console.log(intersect);
console.log(difference);