let fav = "Avatar";
let guess = String(prompt("Guess the name of the movie:- "));

while((guess != fav) && (guess != 'quit')){
    guess = String(prompt("Nop! wrong guess \n try to guess again:- "));
}
if(guess == fav){
    console.log("Congrats!! Entered movie name matched.");
}

