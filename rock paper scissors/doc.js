let choice = 0;

// Utilisez const pour déclarer une variable immuable pour le choix du PC
const PCchoice = Math.floor(Math.random() * 3);

// Utilisez let pour déclarer des variables modifiables
let gain = 0;
let loss = 0;

// Ajoutez une fonction pour afficher le choix du PC
function displayPCChoice() {
    alert("The PC has chosen: " + PCchoice);
}

// Ajoutez un gestionnaire d'événements pour chaque bouton
var rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    choice = 0;
    displayPCChoice();
    whoIsTheWinner(choice, PCchoice);
    updateScore();
});

var paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    choice = 1;
    displayPCChoice();
    whoIsTheWinner(choice, PCchoice);
    updateScore();
});

var scissors = document.getElementById('scissors'); // Il semble que 'scissors' ait été utilisé comme ID ici
scissors.addEventListener('click', function() {
    choice = 2;
    displayPCChoice();
    whoIsTheWinner(choice, PCchoice);
    updateScore();
});
var Reset=document.getElementById("Reset");
Reset.addEventListener('click',function(){
    gain=0;
    loss=0;
    updateScore();
}
);


// Modifiez le nom de la fonction pour respecter la casse conventionnelle
function whoIsTheWinner(playerChoice, computerChoice) {
    if (playerChoice === 0 && computerChoice === 1) {
        alert("Loss");
        loss += 1;
    } 
    if (computerChoice === 0 && playerChoice === 1) {
        alert("Gain");
        gain += 1;
    } 
    if (playerChoice === 1 && computerChoice === 2) {
        alert("Loss");
        loss += 1;
    }
    if (computerChoice === 1 && playerChoice === 2) {
        alert("Gain");
        gain += 1;
    }
    if (playerChoice === 2 && computerChoice === 0) {
        alert("Loss");
        loss += 1;
    }
    if (computerChoice === 0 && playerChoice === 2) {
        alert("Gain");
        gain += 1;
    }
    if (computerChoice === playerChoice) {
        alert("Draw");
    }
    document.getElementById('gain-value').textContent = gain;
    document.getElementById('loss-value').textContent = loss;
}

function updateScore() {
    // Update the HTML elements showing gain and loss values
    document.getElementById('gain-value').textContent = gain;
    document.getElementById('loss-value').textContent = loss;
}



