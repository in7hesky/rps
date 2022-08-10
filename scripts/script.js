console.log("hello")

document.querySelector(".start").addEventListener("click", game)

const TARGET_SCORE = 5

let playerScore = 0;
let computerScore = 0;

function game() {
    document.querySelector(".start").remove()

    const restartButton = document.querySelector(".restart")
    restartButton.style.display = "block";
    restartButton.addEventListener("click", restart)

    activatePlayerButtons()
}

function playRound(e) {
    deactivatePlayerButtons()
    const playerButton = e.target
    const playerChoice = +playerButton.getAttribute("value")
    const computerChoice = getComputerChoice()
    const computerButton = document
        .querySelector(`.computer-buttons > button[value="${computerChoice}"]`)


    computerButton.classList.add("ai-chosen")
    setTimeout(() => {
        incrementWinnerScore(playerChoice, computerChoice)
        updatePageScore()
        playerButton.blur()
        computerButton.classList.remove("ai-chosen")
    }, 1500)
}

function restart() {
    playerScore = computerScore = 0
    updatePageScore()
    document.querySelector(".computer-wins").style.visibility = "hidden";
    document.querySelector(".player-wins").style.visibility = "hidden";
    activatePlayerButtons()
}

function updatePageScore() {
    document.querySelector(".computer-result .score").textContent = computerScore.toString()
    document.querySelector(".player-result .score").textContent = playerScore.toString()
    if (playerScore !== TARGET_SCORE && computerScore !== TARGET_SCORE) {
        activatePlayerButtons()
        return
    }

    let winner = playerScore === TARGET_SCORE ? "player" : "computer"
    document.querySelector(`.${winner}-wins`).style.visibility = "visible"
}

function incrementWinnerScore(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) return

    if (computerChoice === 1 && playerChoice === 2 ||
        computerChoice === 2 && playerChoice === 3 ||
        computerChoice === 3 && playerChoice === 1) {
        playerScore++
    } else {
        computerScore++
    }
}

function activatePlayerButtons() {
    document.querySelectorAll(".player-buttons > button").forEach( btn => {
        btn.addEventListener("click", playRound)
    })
}

function deactivatePlayerButtons() {
    document.querySelectorAll(".player-buttons > button").forEach( btn => {
        btn.removeEventListener("click", playRound)
    })
}

function getComputerChoice() {
    return getRandomIntInclusive(1, 3)
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}