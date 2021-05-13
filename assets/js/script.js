const optionPlayer1 = document.getElementsByName('option');
const optionPlayer2 = ['rock', 'paper', 'scissors'];

const player1Select = document.getElementsByClassName('player1__select');
const player2Select = document.getElementsByClassName('player2__select');

const choose = document.getElementById('choose');
const reset = document.getElementById('reset');

const game = document.getElementById('game');
let result = document.createElement('span')
let notInitial = document.createElement('span')

const boxScorePlayer1 = document.getElementById('score-player1');
const boxScorePlayer2 = document.getElementById('score-player2');

let scorePlayer1 = 0;
let scorePlayer2 = 0;

boxScorePlayer1.innerText = scorePlayer1;
boxScorePlayer2.innerText = scorePlayer2;


// Botão desafiar
choose.addEventListener('click', function() {
    let player1 = checkPlayer1();
    let player2 = optionPlayer2[getRandomInt()];

    result.innerHTML = '';
    notInitial.innerHTML = '';
    
    if (player1 === '') {
        notInitial.innerText = 'Faça sua escolha';
        game.appendChild(notInitial);
    } else {
        const boxPlayer2 = document.getElementById('player2');
        boxPlayer2.classList.add('anima');
       
        setTimeout(() => {
            boxPlayer2.classList.remove('anima');

            visualPlayer2(player2);

            setTimeout(() => {
                checkResult(player1, player2);
        
                game.appendChild(result);
            }, 500);
        }, 2000);
    } 
});
// Botão desafiar

// Quando escolher uma opção
player1Select[0].addEventListener('click', function() {
    result.innerText = 'Preparado?';
    game.appendChild(result);
    notInitial.innerText = '';
    resetVisualPlayer2();
});
player1Select[1].addEventListener('click', function() {
    result.innerText = 'Preparado?';
    game.appendChild(result);
    notInitial.innerText = '';
    resetVisualPlayer2();
});
player1Select[2].addEventListener('click', function() {
    result.innerText = 'Preparado?';
    game.appendChild(result);
    notInitial.innerText = '';
    resetVisualPlayer2();
});
// Quando escolher uma opção

// Botão reiniciar
reset.addEventListener('click', function() {
    result.innerText = '';
    notInitial.innerText = '';

    scorePlayer1 = 0;
    scorePlayer2 = 0;

    boxScorePlayer1.innerText = scorePlayer1;
    boxScorePlayer2.innerText = scorePlayer2;

    resetVisualPlayer1();

    resetVisualPlayer2();
});
// Botão reiniciar

const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
}

const checkPlayer1 = () => {
    let player1 = '';

    for (let i = 0; i < optionPlayer1.length; i++) {
        if (optionPlayer1[i].checked) {
            player1 = optionPlayer1[i].value;
        }
    }

    return player1;
}

const resetVisualPlayer1 = () => {
    optionPlayer1[0].checked = false;
    optionPlayer1[1].checked = false;
    optionPlayer1[2].checked = false;
}

const resetVisualPlayer2 = () => {
    player2Select[0].style.backgroundColor = '#DBCD12';
    player2Select[1].style.backgroundColor = '#DBCD12';
    player2Select[2].style.backgroundColor = '#DBCD12';
}

const visualPlayer2 = (player2) => {
    resetVisualPlayer2();

    if (player2 === 'rock') {
        player2Select[0].style.backgroundColor = '#138F22';
    } else if (player2 === 'paper') {
        player2Select[1].style.backgroundColor = '#138F22';
    }  else if (player2 === 'scissors') {
        player2Select[2].style.backgroundColor = '#138F22';
    }
}

const checkResult = (player1, player2) => {
    if (player1 === player2) {
        result.innerText = 'EMPATE';
    } else if (
        player1 === 'rock' && player2 === 'scissors' ||
        player1 === 'paper' && player2 === 'rock' ||
        player1 === 'scissors' && player2 === 'paper'
        ) {
            result.innerText = 'VOCÊ VENCEU!'
            scorePlayer1 += 1;
            boxScorePlayer1.innerText = scorePlayer1;
    } else if (
        player2 === 'rock' && player1 === 'scissors' ||
        player2 === 'paper' && player1 === 'rock' ||
        player2 === 'scissors' && player1 === 'paper'
        ) {
            result.innerText = 'VOCÊ PERDEU!';
            scorePlayer2 += 1;
            boxScorePlayer2.innerText = scorePlayer2;
    }
}