var randomChosenColor;
var UserClickPattern = [];
var UserClick;
var CanPlay = true;
var Stop = false;


$(document).keypress(function (event) {
    GameStart();
})

function GameStart() {
    $("div.btn").click(function () {
        Stop = true;
        UserClick = this.id;
        UserClickPattern.push(UserClick);
        if (UserClick !== colorPicker(randomChosenColor)) {
            
        }
    })
    while (CanPlay === true) {
        while(Stop === false){
        randomChosenColor = Math.floor((Math.random() * 4) + 1);
        SoundPicker(randomChosenColor);

            $(`#${colorPicker(randomChosenColor)}`).animate({
                opacity: 0.1
            }, 0.1).animate({
                opacity: 1
            });
            Stop = true;
        }
        CanPlay = false;
    }
}





















//Sound Picker
function SoundPicker(rand) {
    switch (rand) {
        case 1:
            let green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case 2:
            let red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case 3:
            let yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case 4:
            let blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
    }
}

function SoundSelector(click) {
    switch (click) {
        case "green":
            let green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "red":
            let red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "yellow":
            let yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case "blue":
            let blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
    }
}

//Color Picker
function colorPicker(rand) {
    switch (rand) {
        case 1:
            return "green";
        case 2:
            return "red";
        case 3:
            return "yellow";
        case 4:
            return "blue";
    }
}