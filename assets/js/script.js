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

    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            player1.choice = icons[index];
            playerChoice.innerHTML = player1.choice;

            const rndInt = Math.floor(Math.random() * 4);
            computer.choice = icons[rndInt];
            computerChoice.innerHTML = computer.choice;


            if (player1.choice === "✊" && computer.choice === "✌️" || player1.choice === "✊" && computer.choice === "🤏") {
                player1.score++;
            } else if (player1.choice === "✋" && computer.choice === "✊" || player1.choice === "✋" && computer.choice === "🖖") {
                player1.score++;
            } else if (player1.choice === "✌️" && computer.choice === "✋" || player1.choice === "✌️" && computer.choice === "🤏") {
                player1.score++;
            } else if (player1.choice === "🤏" && computer.choice === "🖖" || player1.choice === "🤏" && computer.choice === "✋") {
                player1.score++;
            } else if (player1.choice === "🖖" && computer.choice === "✌️" || player1.choice === "🖖" && computer.choice === "✊") {
                player1.score++;
            } else {
                computer.score++;
            }

            playerScore.innerHTML = player1.score;
            computerScore.innerHTML = computer.score;

        });
    }
});