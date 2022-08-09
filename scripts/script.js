console.log("hello")

const POSSIBLE_CHOICES = ["Rock", "Paper", "Scissors"]

game()

function game() {
    let playerScore = 0
    
    for (let i = 0; i < 5; i++) {
        let result = playRound(getComputerChoice(), getPlayerInput())
        alert(result)
        if (result.includes("win")) playerScore++
    }
    
    alert(`Game finished! Total score ${playerScore} out of 5`)
}

function playRound(computerChoice, playerChoice) {
    let failMessage = `You lose! Your ${playerChoice} vs. ${computerChoice}`
    let winMessage = `You win! Your ${playerChoice} vs. ${computerChoice}`
    
    if (computerChoice === playerChoice) return `Draw! 2x ${playerChoice}`
    
    if (computerChoice === POSSIBLE_CHOICES[0] ) {
        if (playerChoice === POSSIBLE_CHOICES[1]) {
            return winMessage
        } else {
            return failMessage
        }
    } else if (computerChoice === POSSIBLE_CHOICES[1]) {
        if (playerChoice === POSSIBLE_CHOICES[2]) {
            return winMessage
        } else {
            return failMessage
        }
    } else {
        if (playerChoice === POSSIBLE_CHOICES[0]) {
            return winMessage
        } else {
            return failMessage
        }
    }
}

function getPlayerInput() {
    while (true) {
        let input = capitalizeFirstChar(prompt("Make your choice:").trim())
        if (POSSIBLE_CHOICES.indexOf(input) > -1) return input
        alert("Wrong choice format! Rock, paper, scissors allowed.")
    }
}


function getComputerChoice() {
    let choiceNum = getRandomIntInclusive(0, 2)
    return POSSIBLE_CHOICES[choiceNum]
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function capitalizeFirstChar(target) {
    return target.charAt(0).toUpperCase() + target.slice(1).toLowerCase();
} 