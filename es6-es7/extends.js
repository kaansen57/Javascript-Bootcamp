//es5

function Customer5(name,lastname) {
    this.name = name;
    this.lastname = lastname;
}

Customer5.prototype.sayHi = function () {
    return `Hello I'm ${this.name} ${this.lastname}`;
}

function Person5(name, lastname, phone, username) {
    Customer5.call(this, name, lastname);
    this.phone = phone;
    this.username = username;
}

Person5.prototype = Object.create(Customer5.prototype);

let person1 = new Person5("kaan", "şen", "123123", "kaansen57");
let customer1 = new Customer5();
console.log(person1.sayHi());


class Customer{
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

      sayHello() {
        return `Hello ${this.name} ${this.lastname}`;
    }
}


class Person extends Customer{
    constructor(name, lastname, phone, username) {
        super(name, lastname);
        this.phone = phone;
        this.username = username;
    }
}


let personES6 = new Person("xxx", "zzzz", "123123", "zzxx");
console.log(personES6.sayHello());

