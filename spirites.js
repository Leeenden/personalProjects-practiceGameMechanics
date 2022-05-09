// ######################## Animations- Pet 1 ########################

// ---------------------  constant variables Pet 1 --------------------------
const canvasPet1 = document.querySelector(".canvasPet1")
const contextPet1 = canvasPet1.getContext("2d");
const widthPet1 = canvasPet1.width = 96;
const heightPet1 = canvasPet1.height =128;
const frameWidthPet1 = 32;
const frameHeightPet1 = 48;
const xPosPet1 = 32;
const yPosPet1 = 64;
const scalePet1 = 1;
const fpsPet1 = 10;
const secondsToUpdatePet1 = 1 * fpsPet1;
let frameIndexPet1 = 0;
let countPet1 = 0;

let row = 0;
// --------------------- Placing the canvas elements  --------------------------
canvasPet1.style.marginTop = screenLeft.innerHeight / 2 - heightPet1 / 2 + "px";
// --------------------- Image spritesheets ----------------------------------
const pet1 = new Image();
pet1.src = "images/goku.png";
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
StatePet1.generateStatesPet1("walkDown", 0, 0, 3);
StatePet1.generateStatesPet1("walkLeft", 1, 0, 3);
StatePet1.generateStatesPet1("walkRight", 2, 0, 3);

// --------------------- Animation Function - Pet 1 ----------------------------------
function animatePet1(statesPet1){
    contextPet1.drawImage(
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
    contextPet1.clearRect(0,0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("walkDown"));
    requestAnimationFrame(down);
};
// --------------------- Sit state Loop - Pet 1  ----------------------------------
function wLeft() {
    contextPet1.clearRect(0, 0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("walkLeft"));
    requestAnimationFrame(wLeft);
};
// --------------------- Sit state Loop - Pet 1  ----------------------------------
function wRight() {
    contextPet1.clearRect(0,0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("walkRight"));
    requestAnimationFrame(wRight);
};
// --------------------- calling the ALL animaion functions ----------------------------------
// down();
// wLeft();
// wRight();
// sitPet1();
// sitPet2();
// sitPet3();
// lieDownPet1();
// lieDownPet2();
// lieDownPet3();


const playAgain = document.getElementById("playAgain");
playAgain.style.display = "none";

playAgain.addEventListener('click', () => {
	window.location.reload()
});
