var a = 5;
var b = "kaan";
var c = true;
var d = "kaan";
var e = [1, 2, 3, 4];
var f = [1, 2, 3];
var g = [1, "a", true];
//tuple ileparametrelerin sırasıyla hangi tipler olabileceğini belirleriz
var tuple = ["a", 5, false];
d = 15;
console.log(d);
var creditPayment = 0;
var havalaPaymen = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
console.log(Payment);
var kredi = Payment.kredi;
var havale = Payment.havale;
var eft = Payment.eft;
var Payment2;
(function (Payment2) {
    Payment2[Payment2["kredi"] = 0] = "kredi";
    Payment2[Payment2["havale"] = 1] = "havale";
    Payment2[Payment2["eft"] = 2] = "eft";
})(Payment2 || (Payment2 = {}));
var kredi2 = Payment2.kredi;
var havale2 = Payment2.havale;
var eft2 = Payment2.eft;
console.log(Payment2);
