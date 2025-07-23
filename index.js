// Javascript for the Drum Kit
const buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    button.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    var audio = pickAudio(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    audio.play();
    });
});

document.addEventListener("keydown", function(event) { 
    console.log(event);
    var audio = pickAudio(event.key);
    buttonAnimation(event.key);
    audio.play();
});

function pickAudio(s){
    let audio;
    switch (s) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            audio = new Audio("sounds/snare.mp3");
            break;
        default:
            console.log("Invalid key:", s);
            return null;
    }
    return audio;
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}