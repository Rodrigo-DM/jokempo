const optionPlayer1 = document.getElementsByName('option');
const optionPlayer2 = ['rock', 'paper', 'scissors'];
const player2Select = document.getElementsByClassName('player2__option--select');

const choose = document.getElementById('choose');

const game = document.getElementById('game');
let span = document.createElement('span')

choose.addEventListener('click', function() {
    let player1 = '';
    let player2 = optionPlayer2[getRandomInt()];

    for (let i = 0; i < optionPlayer1.length; i++) {
        if (optionPlayer1[i].checked) {
            player1 = optionPlayer1[i].value;
        }
    }
    span.innerHTML = '';
    if (player1 !== '') {
        
        player2Select[0].style.backgroundColor = 'yellow';
        player2Select[1].style.backgroundColor = 'yellow';
        player2Select[2].style.backgroundColor = 'yellow';
        if (player2 === 'rock') {
            player2Select[0].style.backgroundColor = 'green';
        } else if (player2 === 'paper') {
            player2Select[1].style.backgroundColor = 'green';
        }  else if (player2 === 'scissors') {
            player2Select[2].style.backgroundColor = 'green';
        }

        if (player1 === player2) {
            span.innerText = 'EMPATE';
        } else if (
            player1 === 'rock' && player2 === 'scissors' ||
            player1 === 'paper' && player2 === 'rock' ||
            player1 === 'scissors' && player2 === 'paper') {
                span.innerText = 'VOCÊ VENCEU!'
        } else if (
            player2 === 'rock' && player1 === 'scissors' ||
            player2 === 'paper' && player1 === 'rock' ||
            player2 === 'scissors' && player1 === 'paper') {
                span.innerText = 'VOCÊ PERDEU!';
        }

    } else {
        span.innerText = 'Escolha uma opção'
    }
    game.appendChild(span);
});

const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
}

const chooseOptionPlayer2 = () => {
    for (let i = 0; i < player2Select.length; i++) {

    }
}
