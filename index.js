// document.querySelectorAll(".choice");

class Character {
    constructor(Health, Stamina, Mana, Attack, Defense, Speed){
        this.Health = Health,
        this.Stamina = Stamina,
        this.Mana = Mana,
        this.Attack = Attack,
        this.Defense = Defense,
        this.Speed = Speed,

        // pre-define starting stats
        this.level = 1,
        this.requiredExp = 10,
        this.currentExp = 0;
        
        this.talentpoint = 1,
        this.moves = {
            basicATK: 10,
            strongATK: 25
        },
        this.abilities = {}
        
    }
    gainExp(){
        setInterval(() => {
            this.currentExp += 1;
            console.log(this.currentExp);
            this.levelUp();
        }, 1000);
    }
    levelUp(){
        if(this.currentExp === this.requiredExp){
            this.level += 1;
            console.log("LEVEL UP");
            console.log(this.level);
            this.requiredExp += 10;
            this.currentExp = 0;
        }
    }
    useTalentPointChoice1(){
        this.talentpoint -= 1;
        this.Attack +=10;
    }
    useTalentPointChoice2(){
        this.talentpoint -= 1;
        this.Defense +=10;
    }
    useTalentPointChoice3(){
        this.talentpoint -= 1;
        this.Speed +=10;
    }
    useTalentPointChoice4(){
        this.talentpoint -= 1;
        let shamansBlessing = setInterval(()=>{
            this.Health += 5;
            console.log(this.Health)
        }, 5000)
        this.abilities.passive = {name: "shamansBlessing", action: shamansBlessing };
    }
    useTalentPointChoice5(){
        this.talentpoint -= 1;
        let wizardsBlessing = setInterval(()=>{
            this.Mana += 5;
            console.log(this.Mana)
        }, 5000)
        this.abilities.passive = {name: "wizardsBlessing", action: wizardsBlessing };
    }
    useTalentPointChoice6(){
        this.talentpoint -= 1;
        let warriorsBlessing = setInterval(()=>{
            this.Stamina += 5;
            console.log(this.Stamina)
        }, 5000)
        this.abilities.passive = {name: "warriorsBlessing", action: warriorsBlessing };
    }
}

let shaman = new Character(50, 5, 5, 5, 5, 5)
let wizard = new Character(50, 5, 5, 5, 5, 5);
let warrior = new Character(50, 5, 5, 5, 5, 5);
// ============================================
//  code testing
// ============================================
//===========================================
// use onece talents tetsing
// =====================================
// console.log(warrior.talentpoint);
// console.log(warrior.Attack);
// warrior.useTalentPointChoice1();
// console.log(warrior.talentpoint);
// console.log(warrior.Attack);
//===========================================
// passive talent testing 
// =========================================
// warrior.useTalentPointChoice6();
// console.log(warrior.talentpoint);
// console.log(warrior.abilities.passive.name);

//===========================================
// passive talent testing 
// =========================================
console.log(warrior.currentExp)
console.log(warrior.requiredExp)
warrior.gainExp();