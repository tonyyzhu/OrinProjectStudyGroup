// 12/08/2014: Restart the whole Odin Project: follow the instructions to the letter and never miss any reference!
// Check if the user is ready to play!
confirm("I understand, confirm!");
var age = prompt("What's your age");
if (age < 13) {
    console.log ("The author does not accept any responsibility or damage. Play the game at your own risk.");
}
else {
    console.log ("Welcome on borad to play the game! Let's check out how good you are!");
};
console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log ("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Bieber on stage? Please type in either 'yes' or 'no'. ");
if (userAnswer == "yes") {
    console.log ("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
};
var feedback = prompt("Please rate the game from 1 to 10, where 1 means worst game, and 10 means best game ever!");
if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.");
};