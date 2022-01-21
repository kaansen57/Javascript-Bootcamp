function getAverage(a: number, b: number, c?: number) {
    /* c? soru işareti ile son parametrenin isteğe göre gönderileceğini belirlemiş olduk. */

    if (typeof c !== "undefined") {
         let sum = a + b + c;
        console.log(sum);
    } else {
        console.log("C undefined");
    }
}

getAverage(1, 2, 3);
getAverage(1, 2);

function voidFonk(): void {
}

function returnFonk(): string {
    return "kaan";
}
function returnFonk2(...numbers: number[]): number[]{
    let sum = 0;
    let count = returnFonk3(numbers);
    console.log(count);
    return numbers.map((number) => sum + number);
}
 const returnFonk3 = (numbers: number[]): number => {
    return numbers.length;
}

console.log(returnFonk2(1, 2, 3, 4, 5));