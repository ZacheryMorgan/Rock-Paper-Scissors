const rockBtn = document.querySelector('#r')
const paperBtn = document.querySelector('#p')
const scissorsBtn = document.querySelector('#s')
const outcomeText = document.querySelector('#outcome-text')
const outcomeTextFlavor = document.querySelector('#outcome-text-flavor')
const playerSelection = document.querySelector('#player-img')
const computerSelection = document.querySelector('#computer-img')
const selectionArr = ["./img/hand-rock-regular.svg", "./img/hand-paper-regular.svg", "./img/hand-scissors-regular.svg"]
const r = selectionArr[0];
const p = selectionArr[1];
const s = selectionArr[2];
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');


function getComputerChoice(max) {
    const choices = ['r', 'p', 's']
    let n = Math.floor(Math.random() * max);
    return choices[n]

}

function game(userChoice) {
    //console.log(userChoice);
    const computerChoice = getComputerChoice(3);
    // console.log(computerChoice);
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            playerSelection.src = eval(userChoice);
            computerSelection.src = eval(computerChoice);
            playerScore.textContent++;
            outcomeText.textContent = 'WINNER!'
            outcomeTextFlavor.textContent = "everyone gets lucky sometimes"
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            playerSelection.src = eval(userChoice);
            computerSelection.src = eval(computerChoice);
            computerScore.textContent++;
            outcomeText.textContent = "LOSER!"
            outcomeTextFlavor.textContent = 'you never had a chance'
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            playerSelection.src = eval(userChoice);
            computerSelection.src = eval(computerChoice);
            outcomeText.textContent = "TIE!"
            outcomeTextFlavor.textContent = "how dare you try and match my power"
            break;
    }

}



function playerInput() {
    paperBtn.addEventListener('click', (e) => {
        game('p')
    })
    rockBtn.addEventListener('click', (e) => {
        game('r')
    })
    scissorsBtn.addEventListener('click', (e) => {
        game('s')
    })
}

playerInput();


/* 
rockBtn.addEventListener('click', (e) => {
    console.log('i clicked the rock button');
    playerSelection.src = "./img/hand-rock-regular.svg"
    computerSelection.src = selectionArr[getRandomInt(3)]
    if (computerSelection.src.match(testRegexPaper)) {
        setTimeout(function () { alert('YOU LOSE!'); }, 20);
    } else if (computerSelection.src.match(testRegexRock)) {
        setTimeout(function () { alert("IT'S A TIE!"); }, 20);
    } else {
        setTimeout(function () { alert('YOU WIN!'); }, 20);
    }
})






paperBtn.addEventListener('click', (e) => {
    console.log('i clicked the paper button');
    playerSelection.src = "./img/hand-paper-regular.svg"
    computerSelection.src = selectionArr[getRandomInt(3)]
    if (computerSelection.src.match(testRegexPaper)) {
        setTimeout(function () { alert("IT'S A TIE!"); }, 20);
    } else if (computerSelection.src.match(testRegexRock)) {
        setTimeout(function () { alert('YOU WIN!'); }, 20);
    } else {
        setTimeout(function () { alert('YOU LOSE!'); }, 20);
    }
})






scissorsBtn.addEventListener('click', (e) => {
    console.log('i clicked the scissors button');
    playerSelection.src = "./img/hand-scissors-regular.svg";
    computerSelection.src = selectionArr[getRandomInt(3)];
    if (computerSelection.src.match(testRegexPaper)) {
        setTimeout(function () { alert('YOU WIN!'); }, 20);
    } else if (computerSelection.src.match(testRegexRock)) {
        setTimeout(function () { alert('YOU LOSE!'); }, 20);
    } else {
        setTimeout(function () { alert("IT'S A TIE!"); }, 20);
    }
}) */

/* let testRegexPaper = /paper/;
let testRegexRock = /rock/;
let testRegexScissors = /scissors/; */