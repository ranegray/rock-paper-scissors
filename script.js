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

const playRound = (playerSelection, computerSelection) => {
    let playerSelectionFix = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return 'It\'s a tie';
    };

    if (playerSelectionFix === 'rock' && computerSelection === 'paper'){
        return 'You lose.';
    } else if (playerSelectionFix === 'rock' && computerSelection === 'scissors'){
        return 'You win.';
    };

    if (playerSelectionFix === 'paper' && computerSelection === 'rock'){
        return 'You win.';
    } else if (playerSelectionFix === 'paper' && computerSelection === 'scissors'){
        return 'You lose.';
    };

    if (playerSelectionFix === 'scissors' && computerSelection === 'paper'){
        return 'You win.';
    } else if (playerSelectionFix === 'scissors' && computerSelection === 'rock'){
        return 'You lose.';
    };
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection));
        
    };
}

// const playerSelection = "rock";
// const playerSelection = prompt('Make a guess (rock, paper, or scissors: ');
const computerSelection = getComputerChoice();
// game();

console.log(playRound(playerSelection, computerSelection));