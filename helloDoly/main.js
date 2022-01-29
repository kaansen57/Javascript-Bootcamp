const message = document.querySelector("#hello-message");
const time = document.querySelector("#time");
let user = prompt("Lütfen adınızı giriniz");
const day = new Date().getDay();
let dayName = "";

message.innerHTML = `Merhaba , ${user.toUpperCase()} Sisteme Hoşgeldin`;

setInterval(() => {
  time.innerHTML = "";
  time.innerHTML = `
  Tarih : 
     ${new Date().getHours()}
  : ${new Date().getMinutes()} 
  : ${new Date().getSeconds()} ${dayFinder(day)} `;
}, 1000);


function dayFinder(day) {
    switch (day) {
      case 0:
        dayName = "Pazar";
        break;
      case 1:
        dayName = "Pazartesi";
        break;
      case 2:
        dayName = "Salı";
        break;
      case 3:
        dayName = "Çarşamba";
        break;
      case 4:
        dayName = "Perşembe";
        break;
      case 5:
        dayName = "Cuma";
        break;
      case 6:
        dayName = "Cumartesi";
        break;
    }
    return dayName;
}