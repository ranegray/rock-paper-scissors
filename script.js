const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
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

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('.btn');

const playRound = (playerSelection, computerSelection) => {
    let playerSelectionFix = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return 'It\'s a tie';
    };

    if (playerSelectionFix === 'rock' && computerSelection === 'paper'){
        computerScore ++;
        return 'You lose.';
    } else if (playerSelectionFix === 'rock' && computerSelection === 'scissors'){
        playerScore ++;
        return 'You win.';
    };

    if (playerSelectionFix === 'paper' && computerSelection === 'rock'){
        playerScore ++;
        return 'You win.';
    } else if (playerSelectionFix === 'paper' && computerSelection === 'scissors'){
        computerScore ++
        return 'You lose.';
    };

    if (playerSelectionFix === 'scissors' && computerSelection === 'paper'){
        playerScore ++;
        return 'You win.';
    } else if (playerSelectionFix === 'scissors' && computerSelection === 'rock'){
        computerScore ++;
        return 'You lose.';
    };
};

buttons.forEach((button)=>{button.addEventListener('click',()=>{
    let playerSelection = button.id;
    const computerSelection = getComputerChoice();
    function playGame(){
        results.textContent = playRound(playerSelection, computerSelection);
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    
        if(playerScore === 5){
            score.textContent = 'You win the game!';
            playerScore = 0;
            computerScore = 0;
        };
    
        if(computerScore === 5){
            score.textContent = 'The computer wins the game!';
            playerScore = 0;
            computerScore = 0;
        };
    };

    playGame();

    });

});