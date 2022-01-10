function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

const sendResult = document.querySelector(".next");
const questionNumber = document.querySelector(".question-number");
const inputGroup = document.querySelector(".input-group");
const questionsContainer = document.querySelector(".questions");
const question = document.querySelector("#question");
const answer = document.querySelectorAll(".answer");
const results = document.querySelector(".results");
const time = document.querySelector(".question-time");
const retry = document.querySelector(".retry");

timesRemaining();
//question prototype

Question.prototype.checkAnswer = function (answer) {
  return this.answer.toLowerCase() === answer.toLowerCase();
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

//questions objects

var q1 = new Question(
  "CSS'in açılımı nedir ?",
  [
    "Cascading Style Sheet",
    "Cascas Sheet Sheet",
    "Canvas Style Sheet",
    "Color Style Stil",
  ],
  "A"
);
var q2 = new Question(
  "Javascript kaç yılında ortaya çıkmıştır ?",
  [1998, 1996, 1995, 2004],
  "C"
);
var q3 = new Question(
  "Hangisi yazı rengini değiştirir ? ",
  ["color:red;", "font-color:red;", "background-color:red;", "colour:red;"],
  "A"
);

var q4 = new Question(
  "Hangisi bir frontend kütüphanesi / framework'ü değildir ? ",
  ["Angular", "Vue", "React", "Svelte", "KnockoutJs"],
  "E"
);

var questions = [q1, q2, q3, q4];
var result; //question choice 
var quiz = new Quiz(questions);
var interval; //times remaining interval object

//first question load
getQuiz();

// events

//next question
sendResult.addEventListener("click", function () {
  if (result) {
    quiz.guess(result);
    getQuiz();
    result = "";
  }
});

retry.addEventListener("click", function () {
  window.location.reload();
});



//functions

//get new question
function getQuiz() {
  if (!quiz.isFinish()) {
    question.innerHTML = quiz.getQuestion().text;
    questionNumber.innerHTML = `QUESTION ${quiz.questionsIndex + 1} OF ${
      quiz.questions.length
    }`;
    answerButtonCreate();
  } else {
    quizFinishScreen();
  }
}

function quizFinishScreen() {
  results.innerHTML = "";
  questionsContainer.className = "questions question-animation";
  question.innerHTML = `Quiz The End <br>  Score : <b > ${quiz.score}</b>
    <br>
     `;
  retry.className = "retry";
  clearInterval(interval);
}

function answerButtonCreate() {
  inputGroup.innerHTML = "";
  let buttonChoices = ["A", "B", "C", "D", "E"];
  quiz.getQuestion().choices.forEach((x, i) => {
    inputGroup.innerHTML += `<button class="btn" onclick="isResult(event)"> 
  <div class="choices">${buttonChoices[i]}</div> ${x}
  </button>`;
  });
}
function isResult(e) {
  document.querySelectorAll(".btn").forEach((target) => {
    if (nodeNameCheck(target.nodeName)) {
      target.className = "btn";
    }
  });

  if (nodeNameCheck(e.target.nodeName)) {
    e.target.className = "answer";
    result = e.target.outerText[0];
    e.target.className = "btn active";
  }
  return result;
}

function nodeNameCheck(target) {
  return target == "BUTTON";
}

function timesRemaining() {
  let minutes = Math.floor(300 / 60);
  let seconds = 0;

  interval = setInterval(() => {
    if (seconds > 0) {
      seconds -= 1;
      time.innerHTML = `Times Remaining : <span> ${minutes} : ${seconds}</span>`;
    } else {
      if (minutes > 0) {
        seconds = 60;
        minutes--;
      } else {
        quizFinishScreen();
      }
    }
  }, 1000);
}
