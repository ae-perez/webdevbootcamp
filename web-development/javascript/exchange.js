/*The following are solutions to the below coding challenge...
Instructions: You are tasked with organizing a gift exchange among friends; every member of the group has to both give and receive a gift randomly from among the others. The only rule is that one can not receive a gift from the same person to whom they give a gift. Write a solution for the above requirements for groups of varying sizes using Javascript. Remember to account for edge cases that would make the above rules impossible to follow. example input: ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']
example output: 
Abe gives a gift to Quan 
Ardi gives a gift to Beth 
Susan gives a gift to Abe 
Quan gives a gift to Ardi 
Beth gives a gift to Susan */

//For this sample, I changed it from const to var, because I was going to play around with the array -- aka I am not creating a copy of the array
var names = ['Susan', 'Beth', 'Abe', 'Ardi'];

function pair() {
  //start at the end of the loop, make sure that i is always greater than 0, and subtract 1 each time (so going backwards)
  for (let i = names.length - 1; i >= 0; i--) {
    // I don't do Math.random() * names.length here because we want a random number from how far the loop has worked backwards from
    let index = Math.floor(Math.random() * i - 1);

    //because i will get to 0, it will do 0-1 which will be -1, but that is where it stops
    //to solve this if ever the index equals -1 so, just change it back to 0
    if (index == -1) {
      index = 0;
    }

    //created variable for the value that is going to get swapped
    let temp = names[i];

    //the below does the swapping
    names[i] = names[index];
    names[index] = temp;
  }

  display();
}

function display() {
  var str = [];

  //loop stops at the very last one (so in this example at position 2)
  for (let i = 0; i < names.length - 1; i++) {
    console.log(`${names[i]} gives to ${names[i + 1]}`);
  }

  //this displays the very last combo
  console.log(`${names[names.length - 1]} gives to ${names[0]}`);
}

pair();
