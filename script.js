const clickButton = document.getElementById('click-button');
const timerDisplay = document.getElementById('timer');
const clickCountDisplay = document.getElementById('click-count');
const resultDisplay = document.getElementById('result');
const finalScoreDisplay = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

const userInfoForm = document.getElementById('user-info-form');
const startGameButton = document.getElementById('start-game-button');
const gameSection = document.getElementById('game-section');

let clickCount = 0;
let timeLeft = 5;
let timer;

function startGame() {
    // Retrieve age and gender
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Validate the input fields
    if (!age || !gender) {
        alert("Please enter both age and gender to start the game.");
        return;
    }

    console.log(`User Info - Age: ${age}, Gender: ${gender}`); // Log data (could be sent to a server)
    
    // Hide the form and show the game section
    userInfoForm.classList.add('hidden');
    gameSection.classList.remove('hidden');

    // Reset game variables
    clickCount = 0;
    timeLeft = 5;
    clickCountDisplay.textContent = `Clicks: ${clickCount}`;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    resultDisplay.classList.add('hidden');
    clickButton.disabled = false;

    // Start the timer
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    clickButton.disabled = true;
    finalScoreDisplay.textContent = clickCount;
    resultDisplay.classList.remove('hidden');
}

clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = `Clicks: ${clickCount}`;
});

// Button to restart the game
restartButton.addEventListener('click', () => {
    userInfoForm.classList.remove('hidden');
    gameSection.classList.add('hidden');
});

// Start the game when the user clicks "Start Game"
startGameButton.addEventListener('click', startGame);
