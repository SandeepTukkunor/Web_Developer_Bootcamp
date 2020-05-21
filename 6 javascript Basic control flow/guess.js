//secrete number 
var secreteNumber = 4;

//ask for the guess 
var guess =  Number(prompt("guess the number "));


// check the guess

if (guess=== secreteNumber){
    alert("yey!!! your guess is right ");
}

else  if (guess > secreteNumber){
    alert("Guess is too high !");
}

else {
    alert("guesss is low!!")
}

