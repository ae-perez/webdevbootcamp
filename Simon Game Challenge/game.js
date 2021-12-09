//global variables
const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


//MAIN FUNCTION
function nextSequence() {
    //get random index number
    var randomNumber = Math.floor(Math.random() * 4);
    //use index to get color
    var randomChosenColour = buttonColours[randomNumber];
    //push this randomcolor to pattern array
    gamePattern.push(randomChosenColour);

    //change the title to indicate level
    $("#level-title").text("Level " + level);
    level++;

    //play the sound of random chosen color
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $(".btn").on("click", function () {
        var userChosenColour = $(this).attr("id");
        animatePress(userChosenColour);

        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);

    });


}





//PLAY SOUND FUNCTION
function playSound(name) {
    //var sound = new Audio('sounds/'+ name +'.mp3');
    //sound.play();

    switch (name) {
        case "blue":
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;
        case "green":
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;
        case "red":
            var redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;
        default:
            var wrongSound = new Audio('sounds/wrong.mp3');
            wrongSound.play();
            break;
    }
}

//ADDING ANIMATION TO BUTTON FUNCTION
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

$("body").keypress(function () {
    if (!started) {
        started = true;
        nextSequence();
    }
});