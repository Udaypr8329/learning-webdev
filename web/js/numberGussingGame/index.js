let systemGuess = Math.floor(Math.random()*100)+1;
let userGuess;
do{
userGuess= Number(prompt(`Guess the number : `));

if (userGuess < systemGuess) {
        console.log("Too low! Try again.");
    } else if (userGuess > systemGuess) {
        console.log("Too high! Try again.");
    } else {
        console.log("🎉 Correct! You guessed it!");
    }
}while(systemGuess!==userGuess);

