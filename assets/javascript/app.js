var rightAnswer = 0;
var wrongAnswer = 0;
var unAnswered;
var timer = 120;
var answers = ["D", "C", "D", "D", "C", "B", "B", "B"];

//create quiz questions and answers and get ID and input questions in HTML

function quiz() {
    $("#question0").append("<h2> Where was the 1984 Olympics held at? <h2>");
    $("#question0").append("<input type='radio' name='question0' value='A'>Tokyo <input type='radio' name='question0' value='B'>Rio <input type ='radio' name='question0' value='C'>Paris <input type='radio' name='question0' value='D'>Los Angeles");

    $("#question1").append("<h2> What year did man land on the moon?? <h2>");
    $("#question1").append("<input type='radio' name='question1' value='A'>1990 <input type='radio' name='question1' value='B'>Never <input type ='radio' name='question1' value='C'>1969 <input type='radio' name='question1' value='D'>1880");

    $("#question2").append("<h2> What year did WWII end on? <h2>");
    $("#question2").append("<input type='radio' name='question2' value='A'>1990 <input type='radio' name='question2' value='B'>1935 <input type ='radio' name='question2' value='C'> 1942 <input type='radio' name='question2' value='D'>1945");

    $("#question3").append("<h2> What is the Capital of Zimbabwe? <h2>");
    $("#question3").append("<input type='radio' name='question3' value='A'>Hooyee <input type='radio' name='question3' value='B'>Zim City <input type ='radio' name='question3' value='C'>Hubabe <input type='radio' name='question3' value='D'>Harare");

    $("#question4").append("<h2> What along with heart disease and cancer accounts for 64% of deaths in US? <h2>");
    $("#question4").append("<input type='radio' name='question4' value='A'>Stroke <input type='radio' name='question4' value='B'>Arthritis <input type ='radio' name='question4' value='C'>Diabetes <input type='radio' name='question4' value='D'>kidney stones");

    $("#question5").append("<h2> What is most malleable metal? <h2>");
    $("#question5").append("<input type='radio' name='question5' value='A'>Silver <input type='radio' name='question5' value='B'>Gold <input type ='radio' name='question5' value='C'>Aluminum <input type='radio' name='question5' value='D'>Mercury");

    $("#question6").append("<h2> How many planets are in the solar system? <h2>");
    $("#question6").append("<input type='radio' name='question6' value='A'>9 <input type='radio' name='question6' value='B'>8 <input type ='radio' name='question6' value='C'>6 <input type='radio' name='question6' value='D'>4");

    $("#question7").append("<h2> What year did the US declare independence from England? <h2>");
    $("#question7").append("<input type='radio' name='question7' value='A'>1886 <input type='radio' name='question7' value='B'>1776 <input type ='radio' name='question7' value='C'>1766 <input type='radio' name='question7' value='D'>1890");

    $("#done").append("<button> Done </button>")
};

function counter() {
    timer--;
    $("#timer").html("<h2>" + timer + "<h2>");
    if (timer <= 0) {
        console.log("YOU ARE THE WORST!!");
        checkAnswer();
    }
}

function start() {
    time = setInterval(counter, 1000);
    $("#start").remove();
    $("#timer").append("<h2> About 120 seconds Left</h2>");
    quiz();
}


//HOW CAN I GET THE checked value of question 0 and compare it with the answer in the array??? 
function checkAnswer() {
//I SWEAR I had this working .... WTF....................................
    var answerChoice0 = $("input[name='question0']:checked").val();
    console.log(answerChoice0);
    if (answerChoice0 == answers[0]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };
    console.log(answerChoice0);
    console.log(answers[0]);

    var answerChoice1 = $("input[name='question1']:checked").val();
    if(answerChoice1 == answers[1]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };

    var answerChoice2 = $("input[name='question2']:checked").val();
    if(answerChoice2 == answers[2]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };

    var answerChoice3 = $("input[name='question3']:checked").val();
    if(answerChoice3 == answers[3]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };

    var answerChoice4 = $("input[name='question4']:checked").val();
    if(answerChoice4 == answers[4]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };

    var answerChoice5 = $("input[name='question5']:checked").val();
    if(answerChoice5 == answers[5]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };

    var answerChoice6 = $("input[name='question6']:checked").val();
    if(answerChoice6 == answers[6]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };

    var answerChoice7 = $("input[name='question7']:checked").val();
    if(answerChoice7 == answers[7]) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    };
}

function done() {
    $("button").on("click", function () {
        clearInterval(time);
        $("#quizBox").html("<h2> Correct : " + rightAnswer + "</h2>");
        $("#quizBox").append("<h2> Incorrect : " + wrongAnswer + "</h2>");
    })
}







//Main Process- click start and set functions to run in order 
$("#start").on("click", function () {

    start();
    checkAnswer();
    done();

});