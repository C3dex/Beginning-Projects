const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); 
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput; 
  } else {
    console.log('Error'); 
  }; 
};


const getComputerChoice = () => {
  let numbie = Math.floor(Math.random() * 3);
  switch(numbie) {
    case 0:
      return 'rock'; 
      break;
    case 1: 
      return 'paper'; 
      break; 
    case 2: 
      return 'scissors'; 
      break; 
  };   
}; 

const draw = 'The match was a tie';

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        console.log(draw); 
    }; 

    if(userChoice === 'bomb') {
        console.log('The Player has a won with a mindBLOWING yet simple play!');
    }

    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            console.log('The computer won!');
        } else if (computerChoice === 'scissors') {
            console.log('You win!'); 
        };
    };

    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            console.log('The computer won!');
        } else if (computerChoice === 'rock') {
            console.log('You win!'); 
        };
    };

    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            console.log('The computer won!');
        } else if (computerChoice === 'paper') {
            console.log('You win!'); 
        };
    };
};

const playGame = () => {
    let userChoice = getUserChoice('rock');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice); 

    return determineWinner(userChoice, computerChoice); 
};
playGame();
