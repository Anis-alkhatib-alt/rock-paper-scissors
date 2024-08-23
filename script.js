//variables
const selection = ["rock","paper","scissors"];
let computerChoice;
let userChoice;
let pScore = 0;
let cScore = 0;
//computer choice
const getComputerChoice = function() {
  computerChoice = selection.at(Math.floor(Math.random() * selection.length));
  return computerChoice;
}
//user choice
const getUserChoice = function() {
  userChoice = prompt("Type Rock, Paper, or Scissors!").toLowerCase();
  return userChoice;
}
//play a round
const playRound = function (computerChoice, userChoice) {
  computerChoice = getComputerChoice();
  userChoice = getUserChoice();
  if (userChoice !== "rock" && "paper" && "scissors") {
    alert("You can only choose rock, paper, or scissors");
  } else {
      switch (computerChoice + userChoice) {
        //computer win condition
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
          cScore++;
          console.log(`YOU LOSE! Player Score: ${pScore} Computer Score: ${cScore}`)
          break;
        //user win condition
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
          pScore++;
          console.log(`YOU WIN! Player Score: ${pScore} Computer Score: ${cScore}`)
          break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
          console.log(`It's a Tie! Player Score: ${pScore} Computer Score: ${cScore}`)
      }
    }
}
//Play the game
const game = function() {
  while (pScore + cScore < 5) {
    playRound();
  }
    if (pScore > cScore) {
      console.log('Game over you WIN!!! Refresh page to play again')
    } else {
      console.log('Game over you Lose!! Refresh page to play again')
    }
}
console.log(game());
