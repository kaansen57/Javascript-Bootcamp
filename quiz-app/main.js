
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  console.log("kaan");
}


const enter = document.querySelector('.enter');
const question = document.querySelector("#question");

const answer = document.querySelectorAll(".answer");

//question prototype

Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

var q1 = new Question("SORU 1", [1, 2, 3, 4], 1);
var q2 = new Question("SORU 2", [1, 2, 3, 4], 1);
var q3 = new Question("SORU 3", [1, 2, 3, 4], 1);

console.log(q1.checkAnswer(2));
console.log(q2.checkAnswer(1));
console.log(q3.checkAnswer(3));

function tikla(x) {
    console.log(x);
}

// answer.forEach((x,i) => {
//     x.addEventListener('click', tikla(x));
// })

enter.addEventListener('click', function () {
    console.log("kaan");
})