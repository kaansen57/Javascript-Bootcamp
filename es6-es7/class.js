
//es5

function Customer(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
   
}
Customer.prototype.calcYearOfBirth = function () {
    return 2022 - this.age;
}
var customer1 = new Customer("kaan","şen",24);
console.log(customer1);
console.log(customer1.calcYearOfBirth());

//es6

class CustomerES6{
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    calcYearOfBirth() {
        return 2022 - this.age;
    }
}

var customeres6 = new CustomerES6("kaanes6", "şen", 24);
console.log(customeres6.calcYearOfBirth());
