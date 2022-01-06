

var num = {
    min: 0,
    max: 100,
    numericRange: function(value){
        if (typeof value !== "number") {
          return false;
        } else {
          return value >= this.min && value <= this.max;
        }
    }
};

console.log(num.numericRange(20));
console.log(num.numericRange(-20));


var num1 = { min: 37, max: 57 };

console.log(num.numericRange.call(num1,40));

console.log(num.numericRange.apply(num1, [54]));

const applyNumericCheck = num.numericRange.bind(num1);

console.log(applyNumericCheck(58));