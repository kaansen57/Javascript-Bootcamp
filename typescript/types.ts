let a: number = 5;
let b: string = "kaan";
let c: boolean = true;
let d: any = "kaan";
let e: number[] = [1, 2, 3, 4];
let f: Array<number> = [1, 2, 3];
let g: any[] = [1, "a", true];
//tuple ile parametrelerin sırasıyla hangi tipler olabileceğini belirleriz
let tuple: [string, number, boolean] = ["a", 5, false];

d = 15;
console.log(d);

const creditPayment = 0;
const havalaPaymen = 1;
const eftPayment = 2;

enum Payment {
  kredi,
  havale,
  eft,
}

console.log(Payment);
let kredi = Payment.kredi;
let havale = Payment.havale;
let eft = Payment.eft;

enum Payment2 { // defaul değerler verebiliriz
  kredi = 0,
  havale = 1,
  eft = 2,
}

let kredi2 = Payment2.kredi;
let havale2 = Payment2.havale;
let eft2 = Payment2.eft;
console.log(Payment2);

