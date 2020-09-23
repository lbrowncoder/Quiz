/*let highScoresList = document.querySelector('#highScoresList')
let highScores =JSON.parse(localStorage.getItem("highScores")) || []

const MaxHighScore = 13;

highScores.push(score)

highScores.sort(a,b) => b.score - a.score);

highScores.splice(5);{
}

localStorage.setItem()*/

const highScoresList = document.getElementById("highScoresList");
let highScores =JSON.parse(localStorage.getItem("highScores")) || []


const username = document.getElementById("Name");
const saveScoreButton = document.getElementById("saveScoreButton");
const mostRecentScore = localStorage.getItem("mostRecentScore");

localStorage.setItem("highScores", JSON.stringify[]));
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreButton.disabled = !username.value;
});

saveHigh Score = e => {
    console.log("clicked the save button");
    e.preventDefault();
};

const MaxHighScore = 13;

let score = {
    score: Math.floor(Math.random()* 100);
    name: username.value
};

highScores.push(score);

highScores.sort(a, b) => b.score - a.score);

highScores.splice(5);

localStorage.setItem('highScores')