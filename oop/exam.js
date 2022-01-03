

let Person = function (name) {
    this.name = name;
}

Person.prototype.introduce = function () {
     return "hello my name is " + this.name;
}


let Student = function (name,number) {
    Person.call(this, name);
    this.number = number;
  
}
Student.prototype = Person.prototype;
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  return "study çalıştı ";
};

let Teacher = function (name, branch) {
  Person.call(this, name);
  this.branch = branch;
};
Teacher.prototype = Person.prototype;
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  console.log("branşı : " + this.branch);
};

let Headmaster = function (name,branch) {
    Teacher.call(this, name, branch);
   
}
Headmaster.prototype = Teacher.prototype;
Headmaster.prototype.constructor = Headmaster;
Headmaster.prototype.shareTask = function () {
  return "Share Task : " + this.branch;
};

let headmaster1 = new Headmaster("Fatma", "Tarih");

console.log(headmaster1);
console.log(headmaster1.shareTask());
console.log(headmaster1.teach());



// let teacher1 = new Teacher("recep", "fizik");
// console.log(teacher1.introduce());
// teacher1.teach();


// let student1 = new Student("kaan",88);
// console.log(student1.introduce());


// let student2 = new Student("kübra", 305);
// student2.study();


