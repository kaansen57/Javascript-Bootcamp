var firstName = "kaan";
var lastName = "şen";

function log(message) {
  console.log(message);
  console.log(__dirname);
  console.log(__filename);
}

// module.exports.name = name;

module.exports = {
  //   name: name,
  //   log: log,
  firstName,
  log,
};


/* Aslında yukarıda yapılan exports module ve diğer require gibi kavramlar bize IIEF methodlarla aşağıdaki gibi parametre olarak geliyor
    arka planda bu çıktıya dönüşüyor
*/
// (function (modules,exports,require,__filename,__dirname) {
//   var name = "kaan şen";

//   const log = function (message) {
//     console.log(message);
//   };

//   return {
//     name,
//     log,
//   };
// })();
