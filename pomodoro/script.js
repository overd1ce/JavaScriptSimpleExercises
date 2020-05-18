const clock = document.getElementById("clock");
const menu = document.getElementById("menu");
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const sound = new Audio("glass.ogg");

// make clock appear on click
function startTransform() {
    if (clock.style.display === "none" && startButton.style.display === "flex" && menu.style.display === "none") {
        clock.style.display = "flex";
        startButton.style.display = "none";
        menu.style.display = "flex"
    } else {
        clock.style.display = "none";
        startButton.style.display = "flex";
        menu.style.display = "none";
    }
}
startTransform();
function resetDisplay() {
    clock.style.display = "none";
    startButton.style.display = "flex";
    menu.style.display = "none";
}
function playSound() {
    sound.play();
}
startButton.addEventListener('click', startTransform);
stopButton.addEventListener('click', resetDisplay);

// make tik-tak
var sec         = 1500,
    secBreak    = 300,
    countDiv    = document.getElementById("timer-display"),
    sessType    = document.getElementById("session-type"),
    pause       = false,
    mode        = "work",
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        timer();
    }, 1000);

function timer(){
    if (mode == "work") {
        secPassWork();
    } if (mode == "break") {
        secPassBreak();
    }
}
function secPassWork() {
    if (!pause) {
    'use strict';
    sessType.innerHTML = mode;
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    if (remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    countDiv.innerHTML = min + ":" + remSec;
    if (sec > 0) {
        sec = sec - 1;
    } else {
        mode = "break";
        sec = 1500;
        playSound();
    }
}
}
function secPassBreak() {
    if (!pause) {
    'use strict';
    sessType.innerHTML = mode;
    var min     = Math.floor(secBreak / 60),
        remSec  = secBreak % 60;
    if (remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    countDiv.innerHTML = min + ":" + remSec;
    if (secBreak > 0) {
        secBreak = secBreak - 1;
    } else {
        mode = "work";
        secBreak = 300;
        playSound();
    }
} }

// make pause & stop
document.getElementById('pause-button').addEventListener('click', function () {
	if(pause) {
        pause = false;
    } else {
        pause = true;
    }
});

function refreshPage(){
    window.location.reload();
} 