var randomChosenColor
randomChosenColor = Math.floor((Math.random() * 4) + 1)
$(document).keypress(function(event){
    SoundPicker(randomChosenColor);
    $(colorPicker(randomChosenColor)).animate({opacity: 0.1}, 0.1).animate({opacity: 1});
})






















//Sound Picker
function SoundPicker(rand){
    switch(rand){
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


//Color Picker
function colorPicker(rand){
    switch(rand){
        case 1:
            return "#green";
        case 2:
            return "#red";
        case 3:
            return "#yellow";
        case 4:
            return "#blue";  
    }
}