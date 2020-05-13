// make clock appear on click
const clock = document.getElementById("clock");
const play = document.getElementById("play-button");
const menu = document.getElementById("menu");
const sound = new Audio("glass.ogg");

function startTransform() {
    if (clock.style.display === "none" && play.style.display === "flex" && menu.style.display === "none") {
        clock.style.display = "flex";
        play.style.display = "none";
        menu.style.display = "flex"
    } else {
        clock.style.display = "none";
        play.style.display = "flex";
        menu.style.display = "none";
    }
}
function resetAll() {
    clock.style.display = "none";
    play.style.display = "flex";
    menu.style.display = "none";
}


//countdown
function startTimer() {
    sound.play();
}
