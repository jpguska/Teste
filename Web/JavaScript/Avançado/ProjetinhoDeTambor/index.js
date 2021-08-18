//MALUCO EU DESCOBRI ISSO NA CAGADA KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
/*document.querySelectorAll(".drum").forEach(addEventListener("click", function(){
     var audio = new Audio("sounds/tom-1.mp3"); audio.play();
    }));*/

var a = document.querySelectorAll(".drum").length;
for(var i = 0; i < a; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        som(this.innerHTML);
    })
}
document.addEventListener("keypress", function(event){
        som(event.key);
})

//bloat

function som(char){
    switch(char){
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            addAnim(char);
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            addAnim(char);
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            addAnim(char);
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            addAnim(char);
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            addAnim(char);
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            addAnim(char);
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            addAnim(char);
            kick.play();
            break;
        
    }
}

function addAnim(char){
        let activeButton = document.querySelector(`.${char}`);
        activeButton.classList.add("pressed");
            setTimeout(function(){
                activeButton.classList.remove("pressed");
            }, 100)
}