const person = {
  firstName: "",
  lastName: "",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    let data = value.split(" ");
    this.firstName = data[0];
    this.lastName = data[1];
  },
};

// Object.defineProperty(person, "fullName", {
//   get function() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set function(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// });

Object.defineProperty(person, "age", {
  value: 50,
  writable: true,
});

person.age = 55;

person.fullName = "Kaan ŞEN";
console.log(person.age);
console.log(person.fullName);
console.log(person);
