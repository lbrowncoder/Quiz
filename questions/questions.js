const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Eastenders began broadcasting On the BBC in which year?",
        choice1: "1985",
        choice2: "1986",
        choice3: "1987",
        choice4: "1988",
        answer: 1,
    },
    {
        question: "What does GIF stand for?",
        choice1: "Graphic Interchange Family",
        choice2: "Graphic Interchange Format",
        choice3: "Graphic Interchange Formula",
        choice4: "Graphic Interchange Fumes",
        answer: 2,
    },
    {
        question: "How many rooms are the Place of Versailles?",
        choice1: "1800",
        choice2: "2000",
        choice3: "2,100",
        choice4: "2,300",
        answer: 4,
    },
    {
        question: "Which country was the first to give women the right to vote?",
        choice1: "England",
        choice2: "New Zealand",
        choice3: "France",
        choice4: "USA",
        answer: 2,
    },
    {
        question: "How many people are on a British Jury?",
        choice1: "9",
        choice2: "10",
        choice3: "12",
        choice4: "14",
        answer: 3,
    },
    {
        question: "Who was the first African American woman to win five Grammy Awards in one year?",
        choice1: "Little Kim",
        choice2: "Lauryn Hill",
        choice3: "Nikki Ninaj",
        choice4: "Da Brat",
        answer: 2,
    },
    {
        question: "Who wrote-I know why the cage bird sings?",
        choice1: "Terry McMillan",
        choice2: "Angie Thomas",
        choice3: "Toni Morrison",
        choice4: "Maya Angelou",
        answer: 4,
    },
    {
        question: "Name the longest river in the UK?",
        choice1: "River Severn",
        choice2: "River Thames",
        choice3: "River Trent",
        choice4: "River Nene",
        answer: 1,
    },
    {
        question: " How many breeds of elephant are there?",
        choice1: "6",
        choice2: "3",
        choice3: "8",
        choice4: "2",
        answer: 2,
    },
    {
        question: "What is James St. Patrick's nickname on the show Power? ",
        choice1: "Blue",
        choice2: "Tommy",
        choice3: "Ghost",
        choice4: "Spirit",
        answer: 3,
    },
    {
        question: "What year did Britain first pass an act officially outlawing the institution of slavery?",
        choice1: "1772",
        choice2: "1883",
        choice3: "1938",
        choice4: "1807",
        answer: 4,
    },
    {
        question: "How any NBA championship has Kobe Bryant won?",
        choice1: "2",
        choice2: "3",
        choice3: "5",
        choice4: "7",
        answer: 3,
    },
    {
        question: "Which country was the first to impose a national lockdown?",
        choice1: "Italy",
        choice2: "China",
        choice3: "France",
        choice4: "Spain",
        answer: 1,
    },
]
const SCORE_POINTS = 1
const MAX_QUESTIONS = 13

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('../end/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()