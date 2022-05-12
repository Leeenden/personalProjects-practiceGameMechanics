const canvas = document.getElementById("gameMap")
const c = canvas.getContext("2d");

canvas.width = 840;
canvas.height = 480;

c.fillRect(0, 0, canvas.width, canvas.height);
const gameMap = new Image();
gameMap.src = "./images/map.png";


const widthPet1 = 0;
const heightPet1 = 0;
const frameWidthPet1 = 32;
const frameHeightPet1 = 48;
const xPosPet1 =256;
const yPosPet1 = 128;
const scalePet1 = 2;
const fpsPet1 = 10;
const secondsToUpdatePet1 = 1 * fpsPet1;
let frameIndexPet1 = 0;
let countPet1 = 0;

let row = 0;
// --------------------- Image spritesheets ----------------------------------
const pet1 = new Image();
pet1.src = "images/char.png";
// --------------------- State object Pet 1----------------------------------
const StatePet1 = {
    statesPet1: {},
    generateStatesPet1: function(namePet1, startRow, startIndexPet1, endIndexPet1){
        if (!this.statesPet1[namePet1]) {
            this.statesPet1[namePet1] = {
                frameIndexPet1: startIndexPet1,
                row: startRow,
                startIndexPet1: startIndexPet1,
                endIndexPet1: endIndexPet1
            };
        }
    },
    getStatePet1: function(namePet1){
        if (this.statesPet1[namePet1]){
            return this.statesPet1[namePet1];
        }
    }
};

// ------------individual state generating for pet 1 --------------
StatePet1.generateStatesPet1("idleDown", 0, 0, 3);
StatePet1.generateStatesPet1("idleLeft", 1, 0, 3);
StatePet1.generateStatesPet1("idleRight", 2, 0, 3);
StatePet1.generateStatesPet1("idleUp", 3, 0, 3);

StatePet1.generateStatesPet1("walkDown", 4, 0, 3);
StatePet1.generateStatesPet1("walkRight", 5, 0, 3);
StatePet1.generateStatesPet1("walkUp", 6, 0, 7);
StatePet1.generateStatesPet1("walkLeft", 7, 0, 7);
StatePet1.generateStatesPet1("runDown", 8, 0, 7);
StatePet1.generateStatesPet1("runRight", 9, 0, 7);
StatePet1.generateStatesPet1("runUp", 10, 0, 7);
StatePet1.generateStatesPet1("runLeft", 11, 0, 7);
StatePet1.generateStatesPet1("attackDown", 12, 0, 4);
StatePet1.generateStatesPet1("attackRight", 13, 0, 4);
StatePet1.generateStatesPet1("attackUp", 14, 0, 4);
StatePet1.generateStatesPet1("attackLeft", 15, 0, 4);
StatePet1.generateStatesPet1("hurtDown", 16, 0, 2);
StatePet1.generateStatesPet1("hurtRight", 17, 0, 2);
StatePet1.generateStatesPet1("hurtUp", 18, 0, 2);
StatePet1.generateStatesPet1("hurtLeft", 19, 0, 2);

// --------------------- Animation Function - Pet 1 ----------------------------------
function animatePet1(statesPet1){
    c.drawImage(
        pet1,
        statesPet1.frameIndexPet1 * frameWidthPet1,
        statesPet1.row * frameHeightPet1,
        frameWidthPet1,
        frameHeightPet1,
        xPosPet1,
        yPosPet1,
        frameWidthPet1 * scalePet1,
        frameHeightPet1 * scalePet1,
    );
    countPet1++;
    if (countPet1 > secondsToUpdatePet1) {
        statesPet1.frameIndexPet1++;
        countPet1 = 0;
    }
    if (statesPet1.frameIndexPet1 > statesPet1.endIndexPet1){
        statesPet1.frameIndexPet1 = statesPet1.startIndexPet1;
    }
}
// --------------------- Idle state Loop - Pet 1 ----------------------------------
function down() {
    c.clearRect(0,0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("idleDown"));
    requestAnimationFrame(down);
};
// --------------------- Sit state Loop - Pet 1  ----------------------------------
function wLeft() {
    c.clearRect(0, 0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("walkLeft"));
    requestAnimationFrame(wLeft);
};
// --------------------- Sit state Loop - Pet 1  ----------------------------------
function wRight() {
    c.clearRect(0,0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("walkRight"));
    requestAnimationFrame(wRight);
};

// onload functionality
gameMap.onload = () => {
    c.drawImage(gameMap, -500 , -500);
}

// --------------------- calling the ALL animaion functions ----------------------------------
down();
// wLeft();
// wRight();
// sitPet1();
// sitPet2();
// sitPet3();
// lieDownPet1();
// lieDownPet2();
// lieDownPet3();


// const playAgain = document.getElementById("playAgain");
// playAgain.style.display = "none";

// playAgain.addEventListener('click', () => {
// 	window.location.reload()
// });


// key button functionallity for player movement

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w": 
            console.log("pressed w key")
            break

        case "a": 
            console.log("pressed a key")
            break

        case "s": 
            console.log("pressed s key")
            break
            
        case "d": 
            console.log("pressed d key")
            break
    }
});