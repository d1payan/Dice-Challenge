// Player Names
var player1 = 'Player1';
var player2 = 'Player2';

// Function to change player names
function changeNames() {
	player1 = prompt('Change Player1 name:');
	player2 = prompt('Change Player2 name:');
	document.querySelector('p.player1').innerHTML = player1;
	document.querySelector('p.player2').innerHTML = player2;
}

// Function to roll the dice
function rollDice() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	document
		.querySelector('img.img1')
		.setAttribute('src', 'images/dice' + randomNumber1 + '.png');

	document
		.querySelector('img.img2')
		.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

	if (randomNumber1 === randomNumber2) {
		document.querySelector('h1').textContent = "It's a Draw!";
	}

	if (randomNumber1 > randomNumber2) {
		document.querySelector('h1').textContent = '🚩' + player1 + ' wins!';
	}

	if (randomNumber1 < randomNumber2) {
		document.querySelector('h1').textContent = player2 + ' wins!🚩';
	}
}
