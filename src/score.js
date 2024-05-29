let displayScore = document.getElementById("score");
let score = 0;

export function addScore(type) {
    console.log(type);
    score = ((score) + (type * 5));
    displayScore.innerHTML = score;
}