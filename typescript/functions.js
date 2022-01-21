function getAverage(a, b, c) {
    /* c? soru işareti ile son parametrenin isteğe göre gönderileceğini belirlemiş olduk. */
    if (typeof c !== "undefined") {
        var sum = a + b + c;
        console.log(sum);
    }
    else {
        console.log("C undefined");
    }
}
getAverage(1, 2, 3);
getAverage(1, 2);
function voidFonk() {
}
function returnFonk() {
    return "kaan";
}
function returnFonk2() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    var count = returnFonk3(numbers);
    console.log(count);
    return numbers.map(function (number) { return sum + number; });
}
var returnFonk3 = function (numbers) {
    return numbers.length;
};
console.log(returnFonk2(1, 2, 3, 4, 5));
