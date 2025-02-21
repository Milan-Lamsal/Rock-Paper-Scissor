//  Tracking the user's score and computer's score
let userScore = 0;
let computerScore = 0;

//  Accessing the choices elements and message element
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");

//  Generate computer's choice
const genCompChoice = () => {
  //rock, paper, scissors
  const options = ["rock", "paper", "scissors"]; // array of choice 
  // Math.random(); => generate random number 0 to 1
  // since array we have 3 options, we multiply by 3, 0, 1, 2, 3 and it will give values between 0 to 1
  //  if we multiply Math.random() * 3 < 1, it will give us integer between 0 and 2
  // Math.floor() => gives the whole number less if it is 2.9 it will give us 2, if it is 2.1 it will give us 2
  const randomIndx = Math.floor(Math.random() * 3);// generate random index for options array 
  return options[randomIndx]; // return random choice from options array
};

//  Draw
const drawGame = () => {
//   console.log("game was draw");
  msg.innerText = "It's a draw!";
  msg.style.backgroundColor = "black";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("User wins!!!!!🥳🥳🥳🥳");
    msg.innerText = `You win!🥳🥳🥳🥳 Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScorePara.innerText = computerScore;
    // console.log("you lose🥲");
    msg.innerText = `you lose🥲${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
//User choice
const playGame = (userChoice) => {
//   console.log("User choice:", userChoice);
  const compChoice = genCompChoice(); // computer choice 
//   console.log("Computer choice:", compChoice);

  if (userChoice === compChoice) {
    //Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //paper, rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// add event listener to each choice
choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {// event listener for click event
    const userChoice = choice.getAttribute("id"); // choice id (rock, paper, scissors)
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice); // call the playGame function with user choice as argument
  });
});
