let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("computer-score");
let scoreBoardDiv = document.querySelector(".score-board");
let resultP = document.querySelector(".result > p");
let rockDiv = document.getElementById("r");
let paperDiv = document.getElementById("p");
let scissorDiv = document.getElementById("s");

function getComputerChoice() {
  let choices = ["r", "p", "s"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}
// console.log(getComputerChoice());
// getComputerChoice();
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice) {
  //   console.log("win");
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = computerScore;
  //   console.log(user);
  //   console.log(computer);
  resultP.innerHTML = `${convertToWord(
    userChoice
  )} (user) beats ${convertToWord(computerChoice)} (comp) You win!`;
}

function lose(userChoice, computerChoice) {
  // console.log("lose");
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = computerScore;
  //   console.log(user);
  //   console.log(computer);
  resultP.innerHTML = `${convertToWord(
    userChoice
  )} (user) loses ${convertToWord(computerChoice)} (comp) You lost!`;
}

function draw(userChoice, computerChoice) {
  // console.log("draw");
  //   console.log(user);
  //   console.log(computer);
  resultP.innerHTML = `${convertToWord(
    userChoice
  )} (user) equals ${convertToWord(computerChoice)} (comp) It's a draw!`;
}

function game(userChoice) {
  //   game();
  //   console.log("devXsunny " + userChoice);
  let computerChoice = getComputerChoice();
  // console.log(computerChoice);
  // console.log("devXsunny" + userChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    //   break;
    case "pr":
    //   break;
    case "sp":
      //   console.log("User Wins !");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      //   console.log("User lose !");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      //   console.log("It's a draw !");
      draw(userChoice, computerChoice);
      break;

    default:
      break;
  }
}

function main() {
  rockDiv.addEventListener("click", function () {
    //   console.log("hey you clicked rock btn");
    game("r");
  });

  paperDiv.addEventListener("click", function () {
    //   console.log("hey you clicked paper btn");
    game("p");
  });

  scissorDiv.addEventListener("click", function () {
    //   console.log("hey you clicked scissor btn");
    game("s");
  });
}

main();
