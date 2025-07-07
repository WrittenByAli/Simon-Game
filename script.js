let gameSequence = [];
let userSequence = [];

let gameStarted =  false;
let level = document.querySelector(".level");
let num = 0;
let red_btn = document.querySelector(".red");
let green_btn = document.querySelector(".green");
let yellow_btn = document.querySelector(".yellow");
let blue_btn = document.querySelector(".blue");
document.addEventListener("keypress", ()=>{
    if (gameStarted == false){
        console.log ("Game Started");
        gameStarted = true;
        levelUp();

    }
});

function levelUp(){
    userSequence = [];
    num++;
    level.innerHTML = "Level " + num;
    let random = Math.floor(Math.random() *4);
    console.log (random);
    if (random == 0) {
        red_btn.classList.add("flash");
         setTimeout(() => {
            red_btn.classList.remove("flash");
         }, 900);
    }
    else if (random == 1) {
        green_btn.classList.add("flash");
         setTimeout(() => {
            green_btn.classList.remove("flash");
         }, 900);

    }
    else if (random == 2) {
        yellow_btn.classList.add("flash");
        setTimeout(() => {
            yellow_btn.classList.remove("flash");
        }, 900);
    }
    else if (random == 3){
        blue_btn.classList.add("flash");
         setTimeout(() => {
            blue_btn.classList.remove("flash");
        }, 900);
    }
    addValue(random);

}
function addValue(value){
    gameSequence.push(value);
    userInput();
    console.log (gameSequence);
    console.log (userSequence);
}

function userInput(){
        red_btn.addEventListener("click", redClick);
        green_btn.addEventListener("click", greenClick);
        yellow_btn.addEventListener("click", yellowClick);
        blue_btn.addEventListener("click", blueClick);
}

function redClick(){
    userSequence.push (0);
    check();
}

function greenClick(){
    userSequence.push (1);
    check();

}

function yellowClick(){
    userSequence.push (2);
    check();
}

function blueClick(){
    userSequence.push (3);
    check();
}

function check() {
    let currentIndex = userSequence.length - 1;

    if (gameSequence[currentIndex] !== userSequence[currentIndex]) {
        level.innerHTML = "Game Over";
        gameSequence = [];
        userSequence = [];
        gameStarted = false;
        num = 0;
        return;
    }

    if (userSequence.length === gameSequence.length) {
        userSequence = [];

        setTimeout(() => {
            levelUp();
        }, 500);
    }
}

// Startup menu logic
window.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('start-btn');
    var startupMenu = document.getElementById('startup-menu');
    if (startBtn && startupMenu) {
        startBtn.addEventListener('click', function() {
            startupMenu.style.display = 'none';
        });
    }
});
