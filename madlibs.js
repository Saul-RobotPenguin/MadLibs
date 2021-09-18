function MadLibs() {
  
let playerChoice = prompt("Do you want Story One or Story Two? (Type 1  for Story 1 or Type 2 for Story 2");

if (playerChoice == 1) {
    //Story1
let answer1 = prompt("Type an adjective");
let answer2 = prompt("Type a general place");
let answer3 = prompt("Type a vehicle name (plural)");
let answer4 = prompt("Type the name of a game");
let answer5 = prompt("Type a plural noun");
let answer6 = prompt("Type an 'ing' verb");
let answer7 = prompt("Type another 'ing' verb");
let answer8 = prompt("Type a food name (plural)");
let answer9 = prompt("Type the name of the sport");
let answer10 = prompt("Type another 'ing' verb");
let answer11 = prompt("Type an emotion");
let answer12 = prompt("Type a  number");
  
  alert("A vacation is when you take a trip to some " + answer1 + " place near an amazing " + answer2 +
    ". A good vacation place is one where you can ride " + answer3 + " or play " + answer4 + " or go hunting for " + answer5 +
    ". I like to spend my time " + answer6 + " or " + answer7 + ". When parents go on a vacation, they spend their time eating three "
    + answer8 + " a day. Usually, fathers play " + answer9 + ", and mothers spend their time " + answer10 +
    ". Adults need vacations more than kids because adults are always very " + answer11 + " because they have to work "
    + answer12 + "hours every day all year just to afford their vacations!");
} else if (playerChoice == 2) {
  //Story2
let answerV1 = prompt("Type an adjective");
let answerV2 = prompt("Type a famous place");
let answerV3 = prompt("Type a plural noun");
let answerV4 = prompt("Type another adjective");
let answerV5 = prompt("Type a food (plural)");
let answerV6 = prompt("Type an emotion");
let answerV7 = prompt("Type an 'ing' verb");
let answerV8 = prompt("Type a common place");
let answerV9 = prompt("Type another adjective");
let answerV10 = prompt("Type a noun");
let answerV11 = prompt("Type another adjective");
let answerV12 = prompt("Type another noun");
let answerV13 = prompt("Type a family member");
let answerV14 = prompt("Type another adjective");

  alert("Today we took a " + answerV1 + " fieldtrip to " + answerV2 + ". They're famous for making " + answerV3 + " and for cooking "
    + answerV4 + " " + answerV5 + " . Eating all that food made me feel " + answerV6 + " . Next we enjoyed the local tradition of  "
    + answerV7 + " in the middle of the " + answerV8 + "! Finally, we went shopping for souvenirs. I bought a " + answerV9 +
    " " + answerV10 + " for myself, and a " + answerV11 + " " + answerV12 + " for my favorite " + answerV13
    + " . I'll definitely never forget this " + answerV14 + " trip!");
} else {
  alert("It seems we ran to a problem, try again!");
  MadLibs();
}


}

MadLibs();



