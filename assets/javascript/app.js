
var panel = $("#quiz-area");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "With what country is France's longest land border?",
  answers: ["USA", "Brazil", "Mexico", "Netherlands"],
  correctAnswer: "Brazil",
  image: "assets/images/Frenchborder.jpg"
}, {
  question: "Where is the world's largest desert?",
  answers: ["Sahara", "Gobi", "Patagonia", "Antarctica"],
  correctAnswer: "Antarctica",
  image: "assets/images/largestdesert.jpg"
}, {
  question: "What is Paul McCartney's middle name?",
  answers: ["James", "John", "Paul", "Daniel"],
  correctAnswer: "Paul",
  image: "assets/images/paulmccartney.gif"
}, {
  question: "What company is the world's biggest distributer of toys?",
  answers: ["Hasbro", "Disney", "McDonalds", "Toys-R-Us"],
  correctAnswer: "McDonalds",
  image: "assets/images/happyMeal.gif"
}, {
  question: "What is the official language of the United States?",
  answers: ["None", "Spanish", "French", "English"],
  correctAnswer: "None",
  image: "assets/images/nolanguage.gif"
}, {
  question: "Where was the 1984 Olympics held at? ",
  answers: ["London", "Pyong Yang", "Los Angeles", "Venice"],
  correctAnswer: "Los Angeles",
  image: "assets/images/laOlympics.jpg"
}, {
  question: " What year did the US declare independence from England?",
  answers: ["1996", "1775", "1776", "1796"],
  correctAnswer: "1776",
  image: "assets/images/1776.gif"
}, {
  question: "Name of Artist who sang Gangsters' Paradise?",
  answers: ["Jay-z", "2Pac", "Nas", "Coolio"],
  correctAnswer: "Coolio",
  image: "assets/images/coolio.gif"
}];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    panel.html("<h2 class='currentQuestion'>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    panel.html("<h2 class='outOfTime'>Out of Time!</h2>");
    panel.append("<h3 class='correct'>CORRECT ANSWER IS: <span id='answer'>" + questions[this.currentQuestion].correctAnswer) + "</span> </h3>";
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    panel.html("<h2 class='correct'> QUIZ RESULTS: </h2>");

    $("#counter-number").text(game.counter);

    panel.append("<h3 class='results'>Correct Answers: " + game.correct + "</h3>");
    panel.append("<h3 class='results'>Incorrect Answers: " + game.incorrect + "</h3>");
    panel.append("<h3 class='results'>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    panel.html("<h2 class='correct'>WRONG!!</h2><br>");
    panel.append("<h3 class='correct'>CORRECT ANSWER IS: <span id='answer'>" + questions[game.currentQuestion].correctAnswer + "</span> </h3>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    panel.html("<h2 class='correct'>Correct!</h2> <br>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2 class='timeRemaining'>Time Remaining: <br> <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});
