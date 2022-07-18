// Asign element Id to variables
var startButton = document.getElementById('start')
var questionElement = document.getElementById('board')
var questionElementSelect = document.getElementById('question')
var answerElement = document.getElementById('answer')
var answerA = document.getElementById('A')
var answerB = document.getElementById('B')
var answerC = document.getElementById('C')
var answerD = document.getElementById('D')
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
let time = 60;
var timerEl = document.getElementById('time');

setInterval(countDown, 1000);

function countDown(){
    timerEl.innerHTML = time;
    time--;

}
}
//Show and Check Answers
answerA.addEventListener('click', checkAnswerA)

function checkAnswerA(){
    if (questions[randomQuestion].answers[0].correct == true){
       answerElement.innerText = 'Correct'; 
    }
    else  {
        answerElement.innerText = 'False';
        console.log(answerElement.innerText)
    }
}
answerB.addEventListener('click', checkAnswerB)

function checkAnswerB(){
    if (questions[randomQuestion].answers[1].correct == true){
       answerElement.innerText = 'Correct'; 
    }
    else  {
        answerElement.innerText = 'False';
        console.log(answerElement.innerText)
    }
}
answerC.addEventListener('click', checkAnswerC)

function checkAnswerC(){
    if (questions[randomQuestion].answers[2].correct == true){
       answerElement.innerText = 'Correct'; 
    }
    else  {
        answerElement.innerText = 'False';
        console.log(answerElement.innerText)
    }
}
answerD.addEventListener('click', checkAnswerD)

function checkAnswerD(){
    if (questions[randomQuestion].answers[3].correct == true){
       answerElement.innerText = 'Correct'; 
    }
    else  {
        answerElement.innerText = 'False';
        console.log(answerElement.innerText)
    }
}
console.log(questionElementSelect)

function answerQuestion(){

}



