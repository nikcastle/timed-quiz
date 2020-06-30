// There should be a start button, which then starts the timer 
// Once user clicks start, start button should disappear and first question should appear. 

// When first question if answered:
// If it's correct, goes to next question. If it's wrong, time is subtracted from the timer. 

// Assignment code
var secondsLeft = 60
var startQuiz = document.querySelector("#start");
console.log("start quiz", startQuiz);
var questions = [
    {question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markdown Language", "Hardy Tools Markup Language"],
    correct: "Hypertext Markup Language",},

    {question: "In JavaScript, what element is used to store and manipulate text?",
    answerA: "Recorders",
    answerB: "Variables",
    answerC: "Arrays",
    answerD: "Strings",
    correct: "Strings",},

    {question: "CSS stands for _______ Style Sheets",
    answerA: "Cascading",
    answerB: "Combined",
    answerC: "Concept",
    answerD: "Charlie's",
    correct: "Cascading",},

    {question: "In JavaScript, what is a block of code called that is used to perform a specfic task?",
    answerA: "Conditional Statement",
    answerB: "Variable",
    answerC: "Declaration",
    answerD: "Function",
    correct: "Function",},

    {question: "Which tag is used to define a container for an external app or plug-in in HTML?",
    answerA: "<code>",
    answerB: "<embed>",
    answerC: "<!DOCTYPE>",
    answerD: "<caption>",
    correct: "<embed>",},
]; 
var score = 0; //score should be stored in local storage. High scores will need ot be retrieved from local storage (don't forget JSON.stringify and JSON.parse). // * Score is amount of time left, not 1 point for each question answered correctly
var j = 0;
var interval;

function renderQuestion(){
    document.querySelector(".questions").innerHTML = "";
    startQuiz.setAttribute("style", "display: none");
    document.querySelector(".quiz").setAttribute("style", "display: block");
    var q = questions[j].question;
    var questionEl = document.createElement("h2");
    var ans = questions[j].answers;
    questionEl.textContent = q;
    document.querySelector(".questions").appendChild(questionEl)

   for (var i = 0; i < ans.length; i++) {
    var ansBtn = document.createElement("button");
    ansBtn.textContent = ans[i];
    document.querySelector(".questions").appendChild(ansBtn);
    ansBtn.addEventListener("click", checkAnswer);
   }

}

function checkAnswer (event) {
    console.log("check");
    if (questions[j].correct !== event.target.textContent) {
        console.log("correct");
        secondsLeft -=5;
    }
    if (j < questions.length-1) {j++;
        renderQuestion();
    }
    else endGame();

function endGame () {

}

// for timer, use setInterval. When timer = 0 , use clearInterval
function counter () {
    interval = setInterval(function() {
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(interval);
            // When timer get to zero, or when all questions have been answered, which ever comes first
                // timer stops counting down and either displays 00:00 or disappears
                // card will appear showing the user's score and time used

        }
    }, 1000);
}

//commit scores to local storage so they can be pulled later
function storeScores () {
    localStorage.setItem()
}

//call scores from local storage to retrieve high scores


// Add event listener to start button
startQuiz.addEventListener("click",renderQuestion)
startQuiz.addEventListener("click", counter)
