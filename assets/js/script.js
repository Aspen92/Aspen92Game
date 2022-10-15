// Global varibles
const player1 = {
    score: 0,
    choice: null,
};

const computer = {
    score: 0,
    choice: null,
};

// Array of the icons
const icons = ["✊", "✋", "✌️", "🤏", "🖖"];


// Eventlistener to make the HTML load before JS 
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.getElementsByClassName("selection");
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById('computer-choice');
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    const winner = document.getElementById('winner');
    const intro = document.getElementById('intro');

    // This function sets the player choice
    function setPlayerChoice(event) {
        const index = event.target.dataset.index;
        player1.choice = icons[index];
        playerChoice.innerHTML = player1.choice;
    }

    // This function sets the computer choice
    function setComputerChoice() {
        const rndInt = Math.floor(Math.random() * 5);
        computer.choice = icons[rndInt];
        computerChoice.innerHTML = computer.choice;
    }

    // This function hides the intro text
    function hideIntroText() {
        intro.style.opacity = 0;
    }

    // This function reloads the page when clicking the restart button
    document.getElementById("restart-btn").addEventListener('click', function () {
        window.location.reload();
        return false;
    });

    // Varibles for the rules/modal button
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("rules-btn");
    var span = document.getElementsByClassName("close")[0];

    // This event listener runs a function that opens the modal
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // This event listener is for the close button(x) on the rules page
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // This function makes the rules window close when clicking outside the block
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
    };


    // This for loop iterate over the buttons and adds an eventlistener for each button
    // Each click event sets the player choice and randomize the computer choice
    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            setPlayerChoice(event);
            setComputerChoice();
            hideIntroText();


            // These if/else if statements compare the player choice and the computer choice
            // And add scores to either the player or the computer and displays the result
            if (player1.choice === "✊" && computer.choice === "✌️" || player1.choice === "✊" && computer.choice === "🤏") {
                player1.score++;
                winner.textContent = 'You Won!';
            } else if (player1.choice === "✋" && computer.choice === "✊" || player1.choice === "✋" && computer.choice === "🖖") {
                player1.score++;
                winner.textContent = 'You Won!';
            } else if (player1.choice === "✌️" && computer.choice === "✋" || player1.choice === "✌️" && computer.choice === "🤏") {
                player1.score++;
                winner.textContent = 'You Won!';
            } else if (player1.choice === "🤏" && computer.choice === "🖖" || player1.choice === "🤏" && computer.choice === "✋") {
                player1.score++;
                winner.textContent = 'You Won!';
            } else if (player1.choice === "🖖" && computer.choice === "✌️" || player1.choice === "🖖" && computer.choice === "✊") {
                player1.score++;
                winner.textContent = 'You Won!';
            } else if (player1.choice === computer.choice) {
                winner.textContent = "It's a Draw!"
            } else {
                computer.score++;
                winner.textContent = 'You Lost!';
            }

            playerScore.innerHTML = player1.score;
            computerScore.innerHTML = computer.score;

        });
    }

});