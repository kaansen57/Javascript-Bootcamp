function getTotal(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
console.log(getTotal(1, 2, 3));

//es5
console.log(getTotal.apply(null, numbers));

//es6
console.log(getTotal(...numbers));

let arr1 = ["2", "3"];
let arr2 = ["4", "5"];
let arr3 = ["1", ...arr1, ...arr2];

console.log(arr3);

arr1.push(...arr2);
console.log(arr1);

arr1.unshift(...arr2);
console.log(arr1);

let h1 = document.querySelector("h1");
let divs = document.querySelectorAll("div");

const tags = [h1, ...divs];
console.log(tags);
tags.forEach((tag) => (tag.style.color = "red"));
