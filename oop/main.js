//object literals

// let obj = {
//     name: 'kaan',
//     yearOfBirth:2010,
//     job:'student'
// }

//es5 constructor
// function Person(name,yearOfBirth,job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     // console.log(this);
// }
// Person.prototype.calculateAge = function () {
//         return new Date().getFullYear() - this.yearOfBirth;
// }

// Person("kaan", 1998, "student");
// // new Person("kaan", 11, 1);
// let person1 = new Person("kaan", 1998, "student");
// let person2 = new Person("çisem", 2007, "student");
// let person3 = new Person("recep", 1954, "worker");

// console.log(person1);
// console.log(person1.calculateAge());

// //prototype kavramı (inheritance)

// Person.prototype.lastName = "ŞEN";

// console.log(person1.lastName);
// console.log(person2.calculateAge());

//*--------------------------------------------

function Employee(name, salary) {
  if (!this instanceof Employee) {
    return new Employee(name, salary);
  }
  this.name = name;
  this.salary = salary;
}

Employee.prototype.taxCalculate = function () {
  let totalSalary = this.salary * 12;
  let sumTax = 0;
  if (this.salary < 20000) {
    sumTax = totalSalary * 0.2;
    console.log("Salary " + totalSalary);
    console.log("Tax " + sumTax);
    console.log("Net Salary " + (totalSalary - sumTax));
  } else if (this.salary >= 20000 && this.salary < 30000) {
    sumTax = totalSalary * 0.25;
    console.log("Salary " + totalSalary);
    console.log("Tax " + sumTax);
    console.log("Net Salary " + (totalSalary - sumTax));
  } else {
    sumTax = totalSalary * 0.27;
    console.log("Salary " + totalSalary);
    console.log("Tax " + sumTax);
    console.log("Net Salary " + (totalSalary - sumTax));
    }
    
    return {
        totalSalary: totalSalary,
        sumTax: sumTax,
        netSalary : totalSalary - sumTax
    }
};

let employee1 = new Employee("kaan", 25000);
let employee2 = new Employee("recep", 15000);
let employee3 = new Employee("fatma", 35000);

console.log(employee1.taxCalculate());;
