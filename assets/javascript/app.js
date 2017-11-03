var rightAnswer;
var wrongAnswer;
var unAnswered; 
var timer = 120;
var answers = ["D", "C", "D", "D", "C", "B", "B", "B"];

//create quiz questions and answers and get ID and input questions in HTML

function quiz(){
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
};

function counter () {
    timer--;
    $("#timer").html("<h2>"+timer+"<h2>");
    if(timer <= 0){
        alert("YOU ARE THE WORST!!");
        done();
    }
}

function start() {
    time = setInterval(counter, 1000);
    $("#start").remove();
    $("#timer").append("<h2> About 120 seconds Left</h2>");
    quiz();
}

// function done() {
//     if()
// }





//Main Process- click start and set functions to run in order 
$("#start").on("click", function(){
    
    start();

    done();

});