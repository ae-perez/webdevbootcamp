/*The following are solutions to the below coding challenge...
Instructions: You are tasked with organizing a gift exchange among friends; every member of the group has to both give and receive a gift randomly from among the others. The only rule is that one can not receive a gift from the same person to whom they give a gift. Write a solution for the above requirements for groups of varying sizes using Javascript. Remember to account for edge cases that would make the above rules impossible to follow. example input: ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']
example output: 
Abe gives a gift to Quan 
Ardi gives a gift to Beth 
Susan gives a gift to Abe 
Quan gives a gift to Ardi 
Beth gives a gift to Susan */

const names = ['Susan', 'Beth', 'Abe', 'Ardi'];

var assign = [];
var index = -1;

function pair() {
  //loop through the names array
  for (let i = 0; i < names.length; i++) {
    let x = 0;
    //whileeeeeee {the index value equals -1 OR index value euqals i value OR the value is not found in the assigned array}
    while (index == -1 || index == i || assign.indexOf(names[index]) != -1) {
      index = Math.floor(Math.random() * names.length);
      x++;
      if (x >= names.length) {
        pair();
      } else {
        break;
      }
    }
    assign.push(names[index]);
  }

  display();
}

function display() {
  for (let i = 0; i < names.length; i++) {
    //you could implement html code in the below lines
    console.log(`${names[i]} gives to ${assign[i]}`);
  }
}

pair();

/*Notes:
- names array was declared constant because we won't be reassigned --> if reassigning I'd just .slice() values into another array
    *side-note: if working on a website, it would probably be best to develop a button feature to allow a user to input their own value of names
- I have developed two functions for this problem (keeping a UI design in mind -- to keep everything clean)
    * first function --> pair(), this function takes a value from names, that is not equal to itself and is selected randomly to then be pushed to the assign array
    * once looping is complete, the display() function is called
    
    * second function --> display(), this function just takes the values of names and assign and displays them to the console. However with UI in mind, one could easily manipulate the display function
    to call upon html and display it on a webpage
*/
