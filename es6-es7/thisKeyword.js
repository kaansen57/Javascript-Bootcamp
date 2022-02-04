var name = "kaans";
//arrow functionlar kendi içerisinde scope oluşturmaz
//normal functionlar ise scope olarak windows objesini baz alır.
var obj = {
  name: "arrowes6",
  arr: [1, 2, 3, 4, 5],
  call: function () {
    this.arr.forEach((x) => {
      console.log(this.name);
      console.log(x);
    });
  },
};
obj.call();

var obj = {
  name: "es5",
  arr: [1, 2, 3, 4, 5],
  call: function () {
    var self = this; //this = obj nesnesinin scopu
    this.arr.forEach(function (x) {
      console.log(this.name); //this = window
      console.log(self.name); // self.name = obj.name
      console.log(x);
    });
  },
};
obj.call();

// const data = function() {
//     var a = 5;
//     console.log(this);
// }

// data();
