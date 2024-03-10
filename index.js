// ASK PLAYER'S NAME
var userName = require('readline-sync').question("Please enter your name: ")
let playerWins = 0
let computerWins = 0
module.exports = function rps(){
    if (userName) {
        console.log("OK")
        initGame()
    } else {
        console.log("You didn't enter your name.")
    }
}
function initGame() {
    console.log("Let's play rock, paper, or scissors!")
    playGame()
}
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice()
        if (!playerChoice) {
            decidedNotToPlay()
            break
        }
        playerChoice = evaluatePlayerChoice(playerChoice)
        if (!playerChoice) {
            invalidChoice()
            continue
        }
        const computerChoice = getComputerChoice()
        const result = determineWinner(playerChoice, computerChoice)
        displayResults(result)
        if (!askToPlayAgain()) {
            thanksForPlaying()
            break
        }
    }
}
const getPlayerChoice = () => {
    const readlineSync = require('readline-sync')
    return readlineSync.question("Please enter 'rock', 'paper', or 'scissors' (or press Ctrl+C to quit): ")
}
const invalidChoice = () => {
    console.log("You didn't enter 'rock', 'paper', or 'scissors'")
}
const decidedNotToPlay = () => {
    console.log("I guess you've changed your mind. Maybe next time.")
}
const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === 'r'){
        return "rock"
    }else if (playerChoice === 'p'){
        return "paper"
    }else if (playerChoice === 's'){
        return "scissors"
    }else{
        return ['rock','paper','scissors'].includes(playerChoice) ? playerChoice : null
    }
}
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    const rpsArray = ["rock", "paper", "scissors"]
    return rpsArray[randomNumber]
}
const determineWinner = (player, computer) => {
    let winner
    if (computer === "rock" && player === "paper"){
        playerWins++
        winner = `${userName}: ${player}  &&  Computer: ${computer} \n\n  ${userName} Wins!  ${playerWins}\n`
    }else if (computer === "paper" && player === "scissors") {
        playerWins++
        winner = `${userName}: ${player}  &&  Computer: ${computer} \n\n  ${userName} Wins!  ${playerWins}\n`
    }else if (computer === "scissors" && player === "rock"){
        playerWins++
        winner = `${userName}: ${player}  &&  Computer: ${computer} \n\n  ${userName} Wins!  ${playerWins}\n`
    }else if (player === computer){
        winner = `${userName}: ${player}  &&  Computer: ${computer} \n\n  Tie Game\n`
    }else{
        computerWins++
        winner = `${userName}: ${player}  &&  Computer: ${computer} \n\n  Computer Wins!  ${computerWins}\n`
    }
    return winner
}
const displayResults = (result) => {
    console.log(result)
}
const askToPlayAgain = () => {
    const readlineSync = require('readline-sync')
    return readlineSync.keyInYNStrict("Play again?")
}
const thanksForPlaying = () => {
    console.log("OK, thanks for playing.")
}