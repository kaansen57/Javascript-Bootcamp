function Person(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // console.log(this);
}
Person.prototype.calculateAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
}


let person1 = new Person("kaan", 1998, "student");
let person2 = new Person("çisem", 2007, "student");
let person3 = new Person("recep", 1954, "worker");

let Teacher = function (name, yearOfBirth,profession) {
    Person.call(this,name, yearOfBirth, "teacher");
    this.profession = profession;
};




Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    return "hello my name is " + this.name;
}

let t1 = new Teacher("kaan", 1998, "Mathmatics");
console.log(t1);



