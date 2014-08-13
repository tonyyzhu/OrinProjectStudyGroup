// 13/8/14: version 2 of the Dragon Slayer: added quite a few console.log message, to understand how the program runs;
// Basically 4 hits to slay the dragon, but one miss will defeat yourself instead!

var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
console.log("First Hit Outside of while loop: " + youHit);
// Added this one to clarify the youHit;
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    console.log("total damage is now: " + totalDamage);
    // Added this one to clarify the totalDamage;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
      console.log("You hit it from inside the while loop: " + youHit);
      // Added this one to clarify the youHit;
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}