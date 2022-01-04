let val;

function clbckFunc(a, b, c, callback) {
  let arr = [];
  if (callback && typeof callback === "function") {
    for (let i = 0; i < arguments.length - 1; i++) {
      arr.push(callback(arguments[i]));
    }
  }
  return arr;
}

function addOne(n) {
  return n + 1;
}

// val = clbckFunc(10, 20, 30);

// for (let index = 0; index < val.length; index++) {
//    val[index] = addOne(val[index]);
// }

val = clbckFunc(10, 20, 30, addOne);
val = clbckFunc(10, 20, 30, function (n) {
    return n + 1;
});

console.log(val);
