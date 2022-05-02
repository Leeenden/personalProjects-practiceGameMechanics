// ---------------------- Main Game screen variables -----------------------------------
const screen = document.getElementById("screen");
const screenBottom = document.getElementById("screenBottom");
const screenMiddle = document.getElementById("screenMiddle");
const screenCenter = document.getElementById("screenCenter");
const leftScreen = document.getElementById("screenLeft");
const screenRight = document.getElementById("screenRight");

// -------------------- Audio file variables --------------------------
// const diceAudio = new Audio("diceroll.mp3");
// const winAudio = new Audio("victory.wav");
// const lossAudio = new Audio("./sounds/loss.wav");

// ------------------------- pet class declaration -----------------------------------
// ---------------------------------------------------------------

class PetChoice {                         
    constructor(species, nameCat, home, furCol, smell, nature){
        this.species = species;
        this.nameCat = nameCat;
        this.home = home;
        this.furCol = furCol;
        this.smell = smell;
        this.nature = nature;
    };

    introduceSelf(){
        setTimeout(function(){
            statusBanner.textContent = (`This is choice number ${this.species}. It's a ${this.nameCat} from ${this.home}.`);
            console.log(`This is choice number ${this.species}. It's a ${this.nameCat} from ${this.home}.`);
        }, 2000);

        setTimeout(function(){
            statusBanner.textContent = `It's fur is ${this.furCol} and smells ${this.smell}. They love ${this.nature}.`;
            console.log("done 2");
        }, 2000);
        
        setTimeout(function(){
            statusBanner.textContent = "Please choose a Cat by species ID.";
            console.log("done 3");
        }, 2000);
    }
}; 
// ------------------- pet objects ------------------------
const petChoice1 = new PetChoice(1, "Extra-terresti-Cat", "an unknown location", "an earie green glow", "like petrol", "sleeping in moon craters");
petChoice1.introduceSelf();
const petChoice2 = new PetChoice(2, "Princess Cat", "the kitty kingdom", "an adorable candy pink", "cotton candy", "being pampered");
const petChoice3 = new PetChoice(3, "Wild Cat", "the great wildlands", "a brown and spotted", "like it hasn't had a wash", "to explore");
// ------------------- pet selection sequence------------------------
const confirmPet1 = document.getElementById("confirmPet1");
const confirmPet2 = document.getElementById("confirmPet2")
const confirmPet3 = document.getElementById("confirmPet3");
const confirmPet = document.getElementById("confirmPet");

confirmPet.style.display = "none";
drinkPet.style.display = "none";
foodPet.style.display = "none";
playPet.style.display = "none";

myChoice = 0;
confirmPet1.addEventListener("click", function(){
    myChoice = 1;
    leftScreen.style.width = "100%";
    leftScreen.style.height = "100%";
    leftScreen.style.border = "none";

    statusBanner.textContent = `This is the ${petChoice1.nameCat}.`;
    confirmPet.style.display = "";
    confirmPet1.style.display = "none";
    confirmPet2.style.display = "none";
    confirmPet3.style.display = "none";
    screenRight.style.display = "none";
    screenCenter.style.display = "none";
});
confirmPet2.addEventListener("click", function(){
    myChoice = 2;
    screenCenter.style.width = "100%";
    screenCenter.style.height = "100%";
    screenCenter.style.border = "none";

    statusBanner.textContent = `This is the ${petChoice2.nameCat}.`;
    confirmPet.style.display = "";
    confirmPet1.style.display = "none";
    confirmPet2.style.display = "none";
    confirmPet3.style.display = "none";
    leftScreen.style.display = "none";
    screenRight.style.display = "none";
});
confirmPet3.addEventListener("click", function(){
    myChoice = 3;
    screenRight.style.width = "100%";
    screenRight.style.height = "100%";
    screenRight.style.border = "none";

    statusBanner.textContent = `You chose the ${petChoice3.nameCat}.`;
    confirmPet.style.display = "";
    confirmPet1.style.display = "none";
    confirmPet2.style.display = "none";
    confirmPet3.style.display = "none";
    screenCenter.style.display = "none";
    leftScreen.style.display = "none";
});

confirmPet.addEventListener("click", function(){
    statusBanner.textContent = "Nice choice, welcome to the world of Cats!";
    if(myChoice === 1){
        confirmPet.style.display = "none";
        screenMiddle.style.backgroundImage = "url(images/background6.gif)";
        screenMiddle.style.backgroundSize = "cover";
        leftScreen.style.background = "none";
        frameHunger();
        frameThirst();
        frameHappiness();
        foodPet.style.display = "";
        drinkPet.style.display = "";
        playPet.style.display = "";
        callHungerTimer();
        callHappinessTimer();
        callThirstTimer();
    } else if(myChoice === 2){
        confirmPet.style.display = "none";
        screenMiddle.style.backgroundImage = "url(images/background.gif)";
        screenMiddle.style.backgroundSize = "cover";
        screenCenter.style.background = "none";
        frameHunger();
        frameThirst();
        frameHappiness();
        foodPet.style.display = "";
        drinkPet.style.display = "";
        playPet.style.display = "";
        callHungerTimer();
        callHappinessTimer();
        callThirstTimer();

    } else if(myChoice === 3){
        confirmPet.style.display = "none";
        screenMiddle.style.backgroundImage = "url(images/background5.gif)";
        screenMiddle.style.backgroundSize = "cover";
        screenRight.style.background = "none";
        frameHunger();
        frameThirst();
        frameHappiness();
        foodPet.style.display = "";
        drinkPet.style.display = "";
        playPet.style.display = "";
        callHungerTimer();
        callHappinessTimer();
        callThirstTimer();
        
    }
});

document.addEventListener("keypress", (e) => {
    if (e.key === "m" || e.key === "M") {
		leftScreen.style.width = "60%";
        screenCenter.style.display ="";
	};
});
document.addEventListener("keyup", (e) => {
	leftScreen.style.width = "100%";
    screenCenter.style.display ="none";
	
});