// This is the end of the session game that I build for myself. The game logic is not good enough, but ok for example of knowledge learned.

var user = prompt("What's your name?").toUpperCase();
var surname = prompt("What's your surname?").toUpperCase();

switch(user) {
    case 'ANNIE':
        if (user === 'ANNIE' && surname === 'ZHU') {
            console.log("Hello, Annie");
            break;
        } else {
            console.log("You are not part of my family.");
            break;
        }

    case 'TONY':
        console.log("Hello, Tony");
        break;
    case 'CATHERINE':
        console.log("Hello, Catherine");
        break;
    case 'JANE':
        console.log("Hello, Jane");
        break;
    default:
        if (surname === 'ZHU' || name === "JANNIE") {
            console.log("Hello, stranger! Just kidding, " + user + "! :-)");
        } else {
            console.log("Hello, stranger! You are not part of my family!");
        }

}