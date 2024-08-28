const selections = ['rock', 'paper', 'scissors'];
const roundResult = document.querySelector('.round-result')
let npcSelection;
let playerSelection;
let cScore = 0;
let pScore = 0;
const playerScore = document.querySelector('.p-result')
const computerScore = document.querySelector('.n-result')

const getNpcSelection = function () {
  let randomNumber = Math.floor(Math.random() * selections.length);
  npcSelection = selections[randomNumber];
  return npcSelection;
}

const selectionButtons = document.querySelectorAll('[data-selection]');
  selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const selectionName = selectionButton.dataset.selection;
      playRound(selectionName);
    })});

const playRound = function (playerSelection) {
  npcSelection = getNpcSelection();

  switch (playerSelection + npcSelection) {
  //player wins
    case 'rockscissors' :
    case 'paperrock' :
    case 'scissorspaper' :
      roundResult.innerText = `Computer chose ${npcSelection} YOU'VE WON this round! keep playing!`;
      roundResult.style.color = 'green';
      pScore += 1;
      playerScore.innerText = `${pScore}`
    break;
  //computer wins
    case 'scissorsrock' :
    case 'rockpaper' :
    case 'paperscissors' :
      roundResult.innerText = `Computer chose ${npcSelection} YOU'VE LOST this round! keep playing!`
      roundResult.style.color = 'red';
      cScore += 1;
      computerScore.innerText = `${cScore}`
    break;
  //Tie
    case 'rockrock' : 
    case 'scissorsscissors' :
    case 'paperpaper' :
      roundResult.innerText = `Computer chose ${npcSelection} IT'S A TIE! keep playing!`
      roundResult.style.color = 'yellow';
    break;
  } winCondition();
}
const resetGame = function () {
  pScore = 0;
  cScore = 0;
  computerScore.innerText = '0'
  playerScore.innerText = '0'
}

const winCondition = function () {
  if (pScore + cScore === 5) {
    if (pScore > cScore) {
      resetGame();
      roundResult.innerText = "Victory!! let's play again";
    } else {
      resetGame();
      roundResult.innerText = "Defeat!! let's play again";
    }}};