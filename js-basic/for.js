

// for (let index = 0; index < 10; index++) {

//     if (index === 3) {
//         console.log("3");
//         continue; //bu satırdan sonra artık o anki indeks sayısıyla başka işlem yapmaz yani for kaldığı yerden başa döner (örnek için index:4)
//     }

//     if (index === 6) {
//         console.log("6");
//         break;//bulunduğu for scopundan çıkar
//     }
//     console.log(index);
// }


// var stop = true;
// let rndNumber = Math.floor(1 + Math.random() * 10);
// console.log(rndNumber);
// let puan = 100;
// const puanKontrol = (puan) => {
//     if (puan <= 0)
//     {
//           console.log("oyun bitti kaybettin");
//           stop = false;
//       }
// }
//     while (stop) {
//       let sayi = parseInt(prompt("sayı gir"));
//       console.log(sayi);
//       if (sayi === rndNumber) stop = false;
//       else if (sayi > rndNumber) {
//         console.log("küçült");
//           puan -= 10;
//           puanKontrol(puan);
//       } else {
//         console.log("büyüt");
//           puan -= 10;
//          puanKontrol(puan);
//       }
//     }

// console.log("oyun bitti puan  : " + puan);


let arr = [1, 2, 3, 4, 51];


const a = arr.map((x,i,arr) => {
    return x+i;
})

console.log(a);
console.log(arr);