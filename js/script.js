const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

document.addEventListener('DOMContentLoaded', () => {
const timeLeftDisplay = document.querySelector('#time-left')
let timeLeft = 200

function countDown(){
    setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }, 1000)
    }

    startButton.addEventListener('click', countDown)
})

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log('started')
startButton.classList.add('hide')
shuffledQuestions = question.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



const question = [
    {
        question: 'Who is Itachis sidekick/teammate?',
        answers: [
            {text: 'Kisame', correct: true },
            {text: 'Orochimaru', correct: false }
        ]
    },
{
    question: 'Who killed the 3rd Hokage?',
    answers: [
        {text: 'Gaara', correct: false },
        {text: 'Orochimaru', correct: true }
    ]
},

{
    question: 'Who likes Naruto?',
    answers: [
        {text: 'Sakura', correct: false },
        {text: 'Hinata', correct: true }
    ]
},

{
    question: 'Who are the 3 people who could use the Sharingan?',
    answers: [
        {text: 'Itachi, Sasuke, and Kakashi', correct: true },
        {text: 'Neji, Hinata, and Kakashi', correct: false },
    ]
},
{
    question: 'Why does Sasuke want to kill his brother?',
    answers: [
        {text: 'Because he wants to test his abilities on his brother', correct: false },
        {text: 'Because his brother killed the Uchiha clan except for him', correct: true }
    ]
},
{
    question: 'Who are the members of Team 10?',
    answers: [
        {text: 'Ino, Chouji, Shikamaru, and Asuma', correct: true },
        {text: 'Neji, Lee, Tenten, and Guy', correct: false }
    ]
},
]