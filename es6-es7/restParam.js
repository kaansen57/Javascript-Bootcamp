//es5
function sum() {
  let arr = Array.prototype.slice.call(arguments);
  arr.forEach((x) => console.log(x));
}

function sum2(...numbers) {
  numbers.forEach((x) => console.log(x));
}

sum(10, 20, 30);
sum2(10, 20, 30);

function information(firstname, age, ...numbers) {
  //rest parametersinden önce parametreler olabilir ama sonrasında olamaz , en son rest params olmalı!
  console.log(firstname);
  console.log(age);
  numbers.forEach((x) => console.log(x));
}

information("kaan", 23, 1, 2, 3, 4, 5, 6);
