setInterval(() => {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
        clearInterval(i)
    }
}, 1000)

const shrinkBlock = document.querySelector(".shrink-block")
shrinkBlock.style.width = "100px"
shrinkBlock.style.height = "100px"

setInterval(() => {
    shrinkBlock.style.width = (Math.random() * (1000 - 100) + 100) + "px";
    shrinkBlock.style.height = (Math.random() * (1000 - 100) + 100) + "px";
}, 10000);

const gameArea = document.getElementById("gamearea");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let timeLeft = 15;
let target;

function createTarget() {
    if (target) target.remove();
    target = document.createElement("div");
    target.classList.add("target");

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;
    const maxX = areaWidth - 5;
    const maxY = areaHeight - 5;

    target.style.left = Math.floor(Math.random() * maxX) + "px";
    target.style.top = Math.floor(Math.random() * maxY) + "px";

    target.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        createTarget();
    });

    gameArea.appendChild(target);
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = "0";
    timeLeft = 15;
    timeDisplay.textContent = timeLeft;

    createTarget();

    const timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startBtn.addEventListener("click", startGame);

let a = Number(prompt('Скільки секунд'))
console.log(a)
const timer = document.querySelector(".timer")
const stopTimer = document.querySelector(".stop-timer")
const timerId = setInterval(() => {
    12
    a -= 1
    if (a >- 0) {1
        timer.innerHTML = a
    }
    else {
        alert("хахахахахаха ви тепер це не закриєте")
        clearInterval(timer)
    }
}, 1000)