// Assignment code
var secondsLeft = 60
var startQuiz = document.querySelector("#start");
var questions = [
    {question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markdown Language", "Hardy Tools Markup Language"],
    correct: "Hypertext Markup Language",},

    {question: "In JavaScript, what element is used to store and manipulate text?",
    answers: ["Recorders", "Variables", "Arrays", "Strings"], 
    correct: "Strings",},

    {question: "CSS stands for _______ Style Sheets",
    answers: ["Cascading", "Combined", "Concept", "Charlie's"],
    correct: "Cascading",},

    {question: "In JavaScript, what is a block of code called that is used to perform a specfic task?",
    answers: ["Conditional Statement", "Variable", "Declaration", "Function"],
    correct: "Function",},

    {question: "Which tag is used to define a container for an external app or plug-in in HTML?",
    answers: ["<code>", "<embed>", "<!DOCTYPE>", "<caption>"],
    correct: "<embed>",}
]; 
var score = 0; 
var input = document.getElementById("initials")
var j = 0;
var interval;
var rankings = document.querySelector("#hiScores");
var submitForm = document.querySelector("#submit");


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
        secondsLeft -=9;
    } else {
        console.log("correct!")
    }

    if (j < questions.length-1) {
        j++;
        renderQuestion();
    } else endGame();
}


function endGame () {
    console.log("endgame");
    clearInterval(interval);
    score = secondsLeft;
    document.querySelector("#initials").setAttribute("style", "display:block");
    document.querySelector(".quiz").setAttribute("style", "display: none");
    // localStorage.getItem();
    document.querySelector("#highscore").textContent = "Your final score is " + score;
}

// quiz timer
function counter () {
   var timer = document.querySelector("#timer")
    interval = setInterval(function() { 
        timer
        secondsLeft--;
        timer.textContent = secondsLeft
        if(secondsLeft === 0) {
            clearInterval(interval);
            // When timer get to zero, or when all questions have been answered, which ever comes first
        }
        else return secondsLeft;
        
    }, 1000);
}

//commit scores to local storage so they can be pulled later

//save player initials
function saveScores (event) {
    event.preventDefault();
   var userName = document.querySelector("#username").value.trim();
   var finalScore = {
       score: score,
       name: userName
   };
   
    var highScores = JSON.parse(window.localStorage.getItem("High-Scores")) || [];
    highScores.push(finalScore);
   window.localStorage.setItem("High-Scores", JSON.stringify(highScores));

   input.setAttribute("style", "display: block");
    // returnHighScores(player);
}

// display high scores from local storage
function returnHighScores () {
    var highScores = JSON.parse(window.localStorage.getItem("High-Scores")) || [];
    document.querySelector(".results").setAttribute("style", "display: block");
    highScores.forEach(function(score) {
        var pTag = document.createElement("p");
        pTag.textContent = score.name + " " + score.score;

        document.querySelector(".results").appendChild(pTag);
    });
}
    
 



//call scores from local storage to retrieve high scores


// Add event listener to start button
startQuiz.addEventListener("click",renderQuestion)
startQuiz.addEventListener("click", counter)
submitForm.addEventListener("submit", saveScores)
rankings.addEventListener("click", returnHighScores)
