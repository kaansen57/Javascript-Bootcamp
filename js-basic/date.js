

var dt = new Date('5/1/2022');

console.log(dt.getDay());
// console.log(dt.getFullYear()-1998);
console.log(dt.getMonth()+1);


while (dt.getDay() != 0) {
    dt.setDate(dt.getDay()+1)
}

dt.setDate(dt.getDate() + 7);
console.log(dt.getDate());