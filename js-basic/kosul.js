

var trafigeCikis = new Date("4/20/2021");
// trafigeCikis.setHours(0, 0, 0, 0);

var trafikteMs = Date.now() - trafigeCikis.getTime();

var trafikteGun = Math.floor(trafikteMs / (1000 * 60 * 60 * 24));
console.log(trafikteGun);


if (trafikteGun < 365) {
  console.log("daha bakım yok");
} else if (trafikteGun >= 365 && trafikteGun < 730) {
  console.log("1.yıl bakımı");
} else if (trafikteGun >= 730 && trafikteGun < 1095) {
  console.log("2.yıl bakımı");
} 