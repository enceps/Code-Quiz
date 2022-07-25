// Asign element Id to variables
var startButton = document.getElementById('start')
var questionElement = document.getElementById('board')
var questionElementSelect = document.getElementById('question')
var answerElement = document.getElementById('answer')
var resultElement = document.getElementById('result')
var answerA = document.getElementById('A')
var answerB = document.getElementById('B')
var answerC = document.getElementById('C')
var answerD = document.getElementById('D')
var scoreElement = document.getElementById('score')
let time = 5;
var addTime = 5;
var timerEl = document.getElementById('time');
var pointCount = 0;
var highScoreElement = document.getElementById('submit-highscore')
var playerScoreElement = document.getElementById('player-score')
var formElement = document.querySelector('form');
//List of Questions
var questions = [

    {
        question: 'what is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '23', correct: false},
            {text: '6', correct: false},
            {text: '18', correct: false}

        ]
    },
    {
        question: 'Type A',
        answers: [
            {text: 'A', correct: true},
            {text: 'B', correct: false},
            {text: 'C', correct: false},
            {text: 'D', correct: false}

        ]
    },
    {
        question: 'what is 4 + 2',
        answers: [
            {text: '4', correct: false},
            {text: '23000', correct: false},
            {text: '6', correct: true},
            {text: '183', correct: false}

        ]
    }
]
//Randomize questions array
var randomQuestion = Math.floor(Math.random() * questions.length);
// Add event listener for startButton
startButton.addEventListener('click', startQuiz)

//Start Quiz and hide start button
function startQuiz() {
console.log('start')
startButton.classList.add('hidden');
questionElement.classList.remove('hidden');
//Display Score
scoreElement.innerHTML = pointCount;
//Display Question
questionElementSelect.innerText = questions[randomQuestion].question;
// Display Choices
answerA.innerText = questions[randomQuestion].answers[0].text;
answerB.innerText = questions[randomQuestion].answers[1].text;
answerC.innerText = questions[randomQuestion].answers[2].text;
answerD.innerText = questions[randomQuestion].answers[3].text;
console.log(questions[0].answers[0]);
console.log(questions[0].answers[1])


console.log(questionElementSelect)
//Start Timer


var counterTimer = setInterval(countDown, 1000);

function countDown(){
    timerEl.innerHTML = time;
    time--;
    //End Timer when reaches 0
    if (time == -1){
        questionElement.innerHTML = 'GAME OVER';
        clearInterval(counterTimer);
        highScoreElement.classList.remove('hidden');
        scoreElement.innerHTML = 'Score:' + pointCount;
        playerScoreElement.innerHTML = 'Score:' + pointCount;
    }

}
console.log(countDown);
}

function nextQuestion() {
       
    //Display Question
    randomQuestion = Math.floor(Math.random() * questions.length);
    questionElementSelect.innerText = questions[randomQuestion].question;
    // Display Choices
    answerA.innerText = questions[randomQuestion].answers[0].text;
    answerB.innerText = questions[randomQuestion].answers[1].text;
    answerC.innerText = questions[randomQuestion].answers[2].text;
    answerD.innerText = questions[randomQuestion].answers[3].text;
    console.log(questions[0].answers[0]);
    console.log(questions[0].answers[1])
    
    
    
    }




//Show and Check Answers
answerA.addEventListener('click', checkAnswerA)




function checkAnswerA(){
    if (questions[randomQuestion].answers[0].correct == true){
       resultElement.innerText = 'Correct'; 
       timerEl.innerHTML = time;
        time = 60;
        pointCount= pointCount + 1;
        scoreElement.innerHTML = pointCount;
 
            nextQuestion()
   
    }
    else  {
        resultElement.innerText = 'False';
        console.log(answerElement.innerText)

            nextQuestion()
    }
}
answerB.addEventListener('click', checkAnswerB)

function checkAnswerB(){
    if (questions[randomQuestion].answers[1].correct == true){
       resultElement.innerText = 'Correct'; 
       timerEl.innerHTML = time;
       time = 60;
       pointCount= pointCount + 1;
       scoreElement.innerHTML = pointCount;

        nextQuestion()
   
    }
    else  {
        resultElement.innerText = 'False';
        console.log(answerElement.innerText)


            nextQuestion()
    }
}
answerC.addEventListener('click', checkAnswerC)

function checkAnswerC(){
    if (questions[randomQuestion].answers[2].correct == true){
       resultElement.innerText = 'Correct'; 
       timerEl.innerHTML = time;
       time = 60;
       pointCount= pointCount + 1;
       scoreElement.innerHTML = pointCount;
    

        nextQuestion()
      
    }
    else  {
        resultElement.innerText = 'False';
        console.log(answerElement.innerText)
       

            nextQuestion()
    }
}
answerD.addEventListener('click', checkAnswerD)

function checkAnswerD(){
    if (questions[randomQuestion].answers[3].correct == true){
       resultElement.innerText = 'Correct'; 
       timerEl.innerHTML = time;
       time = 60;
       pointCount= pointCount + 1;
       scoreElement.innerHTML = pointCount;
      

        nextQuestion()
    }
    else  {
        resultElement.innerText = 'False';
        console.log(answerElement.innerText)
       

            nextQuestion()
    }
}
console.log(questionElementSelect)

function timerEnd(){

}



formElement.addEventListener("submit", function(event){
event.preventDefault();

console.log(event)
var playerNameInput = document.querySelector("input[name='player-name']");

// console.dir(playerNameInput);
// var scoresArray = {
//     name: value,
//     score: pointCount,
//   }
//   console.log(scoresArray)

  var listScoreElement = document.createElement("div");
listScoreElement.className = "user-score";
listScoreElement.innerHTML = playerNameInput.value + ' : ' + pointCount;
formElement.appendChild(listScoreElement);
localStorage.setItem( "Scores", JSON.stringify(playerNameInput.value + " : " + pointCount));

});


