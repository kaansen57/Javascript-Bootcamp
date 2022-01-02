let models = [
  {
    title: "araba 1",
    image: "img/1.jpg",
    link: "#araba1",
  },
  {
    title: "araba 2",
    image: "img/2.jpg",
    link: "#araba2",
  },
  {
    title: "araba 3",
    image: "img/3.jpg",
    link: "#araba3",
  },
];

var settings = {
  random: false,
  duration: 1000,
};

let index = 0;
let play = true;
var interval;

const img = document.querySelector(".card-img-top");
const link = document.querySelector(".link");
const carName = document.querySelector(".card-title");
const cardFooter = document.querySelector(".card-footer");
const nextCar = document.querySelector(".next");
const prevCar = document.querySelector(".prev");

created();
otoPlay();

prevCar.addEventListener("click", () => {
  index--;
  cardItems(index);
});

nextCar.addEventListener("click", () => {
  index++;
  cardItems(index);
});

cardFooter.addEventListener("mouseenter", () => {
  clearInterval(interval);
});

cardFooter.addEventListener("mouseleave", () => {
     otoPlay();
});

function created() {
  cardItems(index);
}

function cardItems(getIndex) {
    index = getIndex;
     if (index < 0) {
       index = models.length - 1;
    }
     else if (index > models.length - 1) {
       index = 0;
     }
  carName.textContent = models[index].title;
  link.setAttribute("href", models[index].link);
  img.setAttribute("src", models[index].image);
}

function otoPlay() {
  var prev;
  if (settings.random) {
    interval = setInterval(() => {
      do {
        var randomNumber = Math.floor(Math.random() * models.length);
      } while (prev == randomNumber);

      prev = randomNumber;
        cardItems(prev);
    }, settings.duration);
      
   
  } else {
    interval = setInterval(() => {
        index++;
        cardItems(index);
    }, settings.duration);
    
  }
}
