// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById("game-screen") ;
const startGameButton = document.getElementById("start-game-button");
const userName = document.getElementById("username");
const userSelection = document.getElementById("user-selection");
const goButton =  document.getElementById("go-button");
const scoreParagraph = document.getElementById("score");
const gameHistoryParagraph = document.getElementById("game-history") ;
const resetGameButton = document.getElementById("reset-game-button")

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerText = `${game.username}:  ${game.score.user} v CPU: ${game.score.cpu}`
}

// updateGameHistoryUI
function updateGameHistoryUI(){

  gameHistoryParagraph.innerText = game.gameHistoryLog.join("\n")

}

function resetGame(){
  gameScreen.classList.add(`d-none`);
  welcomeScreen.classList.remove(`d-none`);
  updateScoreTallyUI()
  updateGameHistoryUI()
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault()
  game = new RockPaperScissors(userName.value);
  welcomeScreen.classList.add("d-none")
  gameScreen.classList.remove("d-none")
  updateGameHistoryUI()
  updateScoreTallyUI()
});

// go-button EventListener
goButton.addEventListener(`click`, function (e) {
  e.preventDefault()
  const choice = userSelection.options[userSelection.selectedIndex].text;
  game.play(choice)
  updateScoreTallyUI()
  updateGameHistoryUI()
  
});

 resetGameButton.addEventListener(`click`, function(e) { 

  resetGame()

  e.preventDefault()
  
 });