var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

// once the header is clicked sessionStorage will be set to reloading
//this occurs first because of when you click the header
function reloadPage() {
    //changes the values for sessionStorage and sets to true
    //if you didn't set these values variable reloading would always be false
    sessionStorage.setItem("reloading", "true");
    document.location.reload(); //then reloads the page
}

//this occurs after page is reloaded from location.reload
window.onload = function () {
    //store sessionStorage info in variable
    var reloading = sessionStorage.getItem("reloading"); 
    //this is going to be true
    if (reloading) {
        sessionStorage.removeItem("reloading"); //setting it back to null
        myFunction();
    }
}

function myFunction() {
    //save the number and convert it and change first img
    document.querySelector(".img1").setAttribute('src', `images/dice${num1}.png`);
    document.querySelector(".img2").setAttribute('src', `images/dice${num2}.png`);

    //change the top message
    if (num1 > num2) {
        //player 1 wins
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
    } else if (num1 < num2) {
        //player 2 wins
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";

    } else {
        //draw!
        document.querySelector("h1").innerHTML = "Draw!";

    }
}


