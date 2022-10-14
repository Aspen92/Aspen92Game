const player1 = {
    score: 0,
    choice: null,
};

const computer = {
    score: 0,
    choice: null,
};

const icons = ["✊", "✋", "✌️", "🤏", "🖖"];



document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.getElementsByClassName("selection");
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById('computer-choice');
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    const winner = document.getElementById('winner');
    const intro = document.getElementById('intro');

    function setPlayerChoice(event) {
        const index = event.target.dataset.index;
        player1.choice = icons[index];
        playerChoice.innerHTML = player1.choice;
    }

    function setComputerChoice() {
        const rndInt = Math.floor(Math.random() * 4);
        computer.choice = icons[rndInt];
        computerChoice.innerHTML = computer.choice;
    }

    function hideIntroText() {
        intro.style.opacity = 0;
    };

    document.getElementById("restart-btn").addEventListener('click', function () {
        window.location.reload();
        return false;
    });



    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            setPlayerChoice(event);
            setComputerChoice();
            hideIntroText();



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
                winner.textContent = 'Draw!'
            } else {
                computer.score++;
                winner.textContent = 'You Lost!';
            }

            playerScore.innerHTML = player1.score;
            computerScore.innerHTML = computer.score;

        });
    }
});