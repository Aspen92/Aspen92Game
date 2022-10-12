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

    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            playerChoice.innerHTML = icons[index];

            const rndInt = Math.floor(Math.random() * 4);
            computerChoice.innerHTML = icons[rndInt];
        });
    }
});