let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("h1").text("Level " + level);
    level++;
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

$(".btn").on("click", function(){
    let userChosenColour = this.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);

    if(!userClickedPattern.length) {
        nextSequence();
    }

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});
