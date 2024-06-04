let displayScore = document.getElementById("score");
let score = 0;

export function addScore(type) {
    console.log(score);
    score = ((score) + (type * 5));
    displayScore.innerHTML = score;
}

export function resetScore() {
    score = 0;
    displayScore.innerHTML = score;
}