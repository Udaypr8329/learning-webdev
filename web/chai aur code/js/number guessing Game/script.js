sysGuess = Math.floor(Math.random() * 100 + 1);
userinput = document.querySelector("#guessField");
submit = document.querySelector("#subt");
guessSlot = document.querySelector(".guesses");
remaining = document.querySelector(".lastResult");
lowOrHi = document.querySelector(".lowOrHi");
StartOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevGuess = [];
let numCount = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let userGuess = parseInt(userinput.value);
        validateGuess(userGuess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 0 ");
    } else if (guess > 100) {
        alert("Please enter a number less than 101");
    } else {
        prevGuess.push(guess);
        if (numCount === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${sysGuess}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === sysGuess) {
        displayMessage('You guessed it right');
        endGame();
    } else if (guess < sysGuess) {
        displayMessage('Number is TOOO low');
    } else if (guess > sysGuess) {
        displayMessage('Number is TOOO High');
    }
}

function displayGuess(guess) {
    userinput.value = '';
    guessSlot.textContent += `${guess} `;
    numCount++;
    remaining.textContent = `${11 - numCount}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2 style = "color : red">${message}</h2>`;
}

function endGame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    StartOver.append(p);
    playGame = false;
    newGame();
}

function newGame() {
    let newGameBtn = document.querySelector('#newGame');
    newGameBtn.style.backgroundColor = "#1c1b1b";
    newGameBtn.style.margin = "auto"
    newGameBtn.style.width = "200px"
    newGameBtn.style.cursor = "pointer";
    newGameBtn.style.border = "2px solid";
    newGameBtn.style.borderRadius = "6px";
    newGameBtn.addEventListener('click', (e) => {
        sysGuess = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numCount = 1;
        guessSlot.innerText = '';
        remaining.innerText = `${11 - numCount}`;
        userinput.removeAttribute('disabled');
        p.remove();
    });
}