const optionPlayer1 = document.getElementsByName('option');
const optionPlayer2 = ['rock', 'paper', 'scissors'];
const choose = document.getElementById('choose');

choose.addEventListener('click', function() {
    let player1 = '';
    let player2 = optionPlayer2[getRandomInt()];

    for (let i = 0; i < optionPlayer1.length; i++) {
        if (optionPlayer1[i].checked) {
            player1 = optionPlayer1[i].value;
        }
    }

    if (player1 !== '') {
        console.log(player1);
        console.log(player2);

        if (player1 === player2) {
            console.log('Empate');
        } else if (
            player1 === 'rock' && player2 === 'scissors' ||
            player1 === 'paper' && player2 === 'rock' ||
            player1 === 'scissors' && player2 === 'paper') {
                console.log('Você Venceu!');
        } else if (
            player2 === 'rock' && player1 === 'scissors' ||
            player2 === 'paper' && player1 === 'rock' ||
            player2 === 'scissors' && player1 === 'paper') {
                console.log('Você perdeu!');
        }

    } else {
        console.log('Escolha uma opção')
    }

});

const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
}
