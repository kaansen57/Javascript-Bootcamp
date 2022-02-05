let val;

let numbers = new Map();

numbers.set(1, "1");
numbers.set(2, "2");
numbers.set("3", "3");
numbers.set(4, "4");
numbers.set(4, "5"); // aynı keyden 1den fazla olursa kayıt yapmaz

console.log(numbers);

val = numbers.get(1);
val = numbers.has(1); // varmı yok mu
// val = numbers.delete(4);
console.log(numbers);

val = numbers.size;
console.log(val);


for (var [key, value] of numbers) {
    console.log( key + " = " + value);
}

for (var [key, value] of numbers.entries()) {
    console.log( key + " = " + value);
}

for (var key of numbers.keys()) {
    console.log(key);
}

for (var value of numbers.values()) {
  console.log(value);
}

numbers.forEach((key, value) => {
    console.log(key +" =  " +value);
})

var first = new Map(
    [
        [1, 'kaan'],
        [2, 'john'],
        [3,"emily"]
    ]
)

var second = new Map(
    [
         [4, 'brenden'],
        [5, 'doly'],
    ]
)

var merged = new Map([...first, ...second]);

console.log(merged);