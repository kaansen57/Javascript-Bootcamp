function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

const sendResult = document.querySelector(".enter");
const questionNumber = document.querySelector(".question-number");
const inputGroup = document.querySelector(".input-group");
const question = document.querySelector("#question");
const answer = document.querySelectorAll(".answer");

//question prototype

Question.prototype.checkAnswer = function (answer) {
    console.log(typeof answer);
    console.log(typeof this.answer);
  console.log(this.answer === answer);
  return this.answer === answer;
};

//quiz contructor

function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionsIndex = 0;
}

//quiz prototype

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionsIndex];
};

Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionsIndex;
};

Quiz.prototype.guess = function (answer) {
  let nextQuestion = false;
  var question = this.getQuestion();
  if (question.checkAnswer(answer)) {
    this.score += 1;
    nextQuestion = true;
  }
  this.questionsIndex++;
  return nextQuestion;
};

var q1 = new Question(
  "CSS'in açılımı nedir ?",
  [
    "Cascading Style Sheet",
    "Cascas Sheet Sheet",
    "Canvas Style Sheet",
    "Color Style Stil",
  ],
  "Cascading Style Sheet"
);
var q2 = new Question(
  "Javascript kaç yılında ortaya çıkmıştır ?",
  [1998, 1996, 1995, 2004],
  "1996"
);
var q3 = new Question(
  "Hangisi yazı rengini değiştirir ? ",
  ["color:red;", "font-color:red;", "background-color:red;", "colour:red;"],
  "color:red;"
);

var questions = [q1, q2, q3];
var result;
var quiz = new Quiz(questions);

getQuiz();

sendResult.addEventListener("click", function () {
  if (result) {
    quiz.guess(result);
    getQuiz();
    result = "";
  }
});

function getQuiz() {
  if (!quiz.isFinish()) {
    question.innerHTML = quiz.getQuestion().text;
    questionNumber.innerHTML = `QUESTION ${quiz.questionsIndex + 1} OF ${
      quiz.questions.length
    }`;
    answerButtonCreate();
  } else {
    question.innerHTML = `Quiz The End - Score : <b> ${quiz.score}</b>`;
  }
}

function answerButtonCreate() {
  inputGroup.innerHTML = "";
  quiz.getQuestion().choices.forEach((x) => {
    inputGroup.innerHTML += `<button class="answer" onclick="isResult(event)"> 
  ${x}
  </button>`;
  });
}
function isResult(e) {
  result = e.target.outerText;
  return result;
}
