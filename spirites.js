// ######################## Animations- Pet 1 ########################

// ---------------------  constant variables Pet 1 --------------------------
const canvasPet1 = document.querySelector(".canvasPet1")
const contextPet1 = canvasPet1.getContext("2d");
const widthPet1 = canvasPet1.width = 96;
const heightPet1 = canvasPet1.height =96;
const frameWidthPet1 = 32;
const frameHeightPet1 = 32;
const xPosPet1 = 32;
const yPosPet1 = 64;
const scalePet1 = 1;
const fpsPet1 = 10;
const secondsToUpdatePet1 = 1 * fpsPet1;
let frameIndexPet1 = 0;
let countPet1 = 0;
// --------------------- Placing the canvas elements  --------------------------
canvasPet1.style.marginTop = screenLeft.innerHeight / 2 - heightPet1 / 2 + "px";
// --------------------- Image spritesheets ----------------------------------
const pet1 = new Image();
pet1.src = "images/pet1.png";
// --------------------- State object Pet 1----------------------------------
const StatePet1 = {
    statesPet1: {},
    generateStatesPet1: function(namePet1, startIndexPet1, endIndexPet1){
        if (!this.statesPet1[namePet1]) {
            this.statesPet1[namePet1] = {
                frameIndexPet1: startIndexPet1,
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
StatePet1.generateStatesPet1("Idle", 6, 10);
StatePet1.generateStatesPet1("Sit", 0, 6);
StatePet1.generateStatesPet1("Lie", 10, 18);

// --------------------- Animation Function - Pet 1 ----------------------------------
function animatePet1(statesPet1){
    contextPet1.drawImage(
        pet1,
        statesPet1.frameIndexPet1 * frameWidthPet1,
        0 * frameHeightPet1,
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
function idlePet1() {
    contextPet1.clearRect(0,0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("Idle"));
    requestAnimationFrame(idlePet1);
};
// --------------------- Sit state Loop - Pet 1  ----------------------------------
function sitPet1() {
    contextPet1.clearRect(0,0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("Sit"));
    requestAnimationFrame(sitPet1);
};
// --------------------- Sit state Loop - Pet 1  ----------------------------------
function lieDownPet1() {
    contextPet1.clearRect(0,0,widthPet1,heightPet1);
    animatePet1(StatePet1.getStatePet1("Lie"));
    requestAnimationFrame(lieDownPet1);
};

// ######################## Animation - Pet 2 ########################

// ---------------------  constant variables Pet 2 ---------------------------
const canvasPet2 = document.querySelector(".canvasPet2")
const contextPet2 = canvasPet2.getContext("2d");
const widthPet2 = canvasPet2.width = 96;
const heightPet2 = canvasPet2.height = 96;
const frameWidthPet2 = 32;
const frameHeightPet2 = 32;
const xPosPet2 = 32;
const yPosPet2 = 64;
const scalePet2 = 1;
const fpsPet2 = 10;
const secondsToUpdatePet2 = 1 * fpsPet2;
let frameIndexPet2 = 0;
let countPet2 = 0;
// --------------------- Placing the canvas elements  --------------------------
canvasPet2.style.marginTop = screenCenter.innerHeight / 2 - heightPet2 / 2 + "px";
// --------------------- Image spritesheets ----------------------------------
const pet2 = new Image();
pet2.src = "images/pet2.png";
// --------------------- State object Pet 2----------------------------------
const StatePet2 = {
    statesPet2: {},
    generateStatesPet2: function(namePet2, startIndexPet2, endIndexPet2){
        if (!this.statesPet2[namePet2]) {
            this.statesPet2[namePet2] = {
                frameIndexPet2: startIndexPet2,
                startIndexPet2: startIndexPet2,
                endIndexPet2: endIndexPet2
            };
        }
    },
    getStatePet2: function(namePet2){
        if (this.statesPet2[namePet2]){
            return this.statesPet2[namePet2];
        }
    }
};
// ------------individual state generating for pet 2 --------------
StatePet2.generateStatesPet2("Idle", 6, 10);
StatePet2.generateStatesPet2("Sit", 0, 6);
StatePet2.generateStatesPet2("Lie", 10, 18);

// --------------------- Animation Function - Pet 1 ----------------------------------
function animatePet2(statesPet2){
    contextPet2.drawImage(
        pet2,
        statesPet2.frameIndexPet2 * frameWidthPet2,
        0 * frameHeightPet2,
        frameWidthPet2,
        frameHeightPet2,
        xPosPet2,
        yPosPet2,
        frameWidthPet2 * scalePet2,
        frameHeightPet2 * scalePet2,
    );
    countPet2++;
    if (countPet2 > secondsToUpdatePet2) {
        statesPet2.frameIndexPet2++;
        countPet2 = 0;
    }
    if (statesPet2.frameIndexPet2 > statesPet2.endIndexPet2){
        statesPet2.frameIndexPet2 = statesPet2.startIndexPet2;
    }
}
// --------------------- Idle state Loop - Pet 2 ----------------------------------
function idlePet2() {
    contextPet2.clearRect(0,0,widthPet2,heightPet2);
    animatePet2(StatePet2.getStatePet2("Idle"));
    requestAnimationFrame(idlePet2);
};
// --------------------- Sit state Loop - Pet 2  ----------------------------------
function sitPet2() {
    contextPet2.clearRect(0,0,widthPet2,heightPet2);
    animatePet2(StatePet2.getStatePet2("Sit"));
    requestAnimationFrame(sitPet2);
};
// --------------------- Sit state Loop - Pet 1  ----------------------------------
function lieDownPet2() {
    contextPet2.clearRect(0,0,widthPet2,heightPet2);
    animatePet2(StatePet2.getStatePet2("Lie"));
    requestAnimationFrame(lieDownPet2);
};

// ######################## Animation - Pet 3 ########################

// ---------------------  constant variables Pet 3 ---------------------------
const canvasPet3 = document.querySelector(".canvasPet3")
const contextPet3 = canvasPet3.getContext("2d");
const widthPet3 = canvasPet3.width = 96;
const heightPet3 = canvasPet3.height = 96;
const frameWidthPet3 = 32;
const frameHeightPet3 = 32;
const xPosPet3 = 32;
const yPosPet3 = 64;
const scalePet3 = 1;
const fpsPet3 = 10;
const secondsToUpdatePet3 = 1 * fpsPet3;
let frameIndexPet3 = 0;
let countPet3 = 0;
// --------------------- Canvas location --------------------------
canvasPet3.style.marginTop = screenRight.innerHeight / 2 - heightPet3 / 2 + "px";
// --------------------- Image spritesheet - Pet 3 ----------------------------------
const pet3 = new Image();
pet3.src = "images/pet3.png";
// --------------------- State object Pet 3----------------------------------
const StatePet3 = {
    statesPet3: {},
    generateStatesPet3: function(namePet3, startIndexPet3, endIndexPet3){
        if (!this.statesPet3[namePet3]) {
            this.statesPet3[namePet3] = {
                frameIndexPet3: startIndexPet3,
                startIndexPet3: startIndexPet3,
                endIndexPet3: endIndexPet3
            };
        }
    },
    getStatePet3: function(namePet3){
        if (this.statesPet3[namePet3]){
            return this.statesPet3[namePet3];
        }
    }
};
// ------------individual state generating for pet 3 --------------
StatePet3.generateStatesPet3("Idle", 6, 10);
StatePet3.generateStatesPet3("Sit", 0, 6);
StatePet3.generateStatesPet3("Lie", 10, 18);

// --------------------- Animation Function - Pet 3 ----------------------------------
function animatePet3(statesPet3){
    contextPet3.drawImage(
        pet3,
        statesPet3.frameIndexPet3 * frameWidthPet3,
        0 * frameHeightPet3,
        frameWidthPet3,
        frameHeightPet3,
        xPosPet3,
        yPosPet3,
        frameWidthPet3 * scalePet3,
        frameHeightPet3 * scalePet3,
    );
    countPet3++;
    if (countPet3 > secondsToUpdatePet3) {
        statesPet3.frameIndexPet3++;
        countPet3 = 0;
    }
    if (statesPet3.frameIndexPet3 > statesPet3.endIndexPet3){
        statesPet3.frameIndexPet3 = statesPet3.startIndexPet3;
    }
}
// --------------------- Idle state Loop - Pet 3 ----------------------------------
function idlePet3() {
    contextPet3.clearRect(0,0,widthPet3,heightPet3);
    animatePet3(StatePet3.getStatePet3("Idle"));
    requestAnimationFrame(idlePet3);
};
// --------------------- Sit state Loop - Pet 3  ----------------------------------
function sitPet3() {
    contextPet3.clearRect(0,0,widthPet3,heightPet3);
    animatePet3(StatePet3.getStatePet3("Sit"));
    requestAnimationFrame(sitPet3);
};
// --------------------- Sit state Loop - Pet 3  ----------------------------------
function lieDownPet3() {
    contextPet3.clearRect(0,0,widthPet3,heightPet3);
    animatePet3(StatePet3.getStatePet3("Lie"));
    requestAnimationFrame(lieDownPet3);
};
// --------------------- calling the ALL animaion functions ----------------------------------
idlePet1();
idlePet2();
idlePet3();
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