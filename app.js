//setting up template for all cards
class cardStats{
    constructor (name, str, int, agi, lore, evil){
    this._name = name;
    this._str = str;
    this._int = int;
    this._agi = agi;
    this._lore = lore;
    this._evil = evil;
    }
    get name(){
        return this._name;
    }
    get str(){
        return this._str;
    }
    get int(){
        return this._int;
    }
    get agi(){
        return this._agi;
    }
    get lore(){
        return this._lore;
    }
    get evil(){
        return this._evil
    }
    choiceStr (){
        if (currentCardp1.str > currentCardp2.str){
            console.log("player one wins")
        }
        else {
            console.log("player two wins")
        }
    }
    choiceInt (){
        if (currentCardp1.int > currentCardp2.int){
            console.log("player one wins")
        }
        else {
            console.log("player two wins")
        }
    }

}

//list of all cards available
const thrall = new cardStats("Thrall, son of Durotan", 79, 83, 9, 99, 10); 
const anduin = new cardStats("King Anduin Wrynn of Stormwind", 35, 92, 12, 99, 2);
const sylvanas = new cardStats("Sylvanas Windrunner, the Banshee Queen", 53, 65, 91, 99, 89);
const mankrik = new cardStats("Mankrik", 10, 10, 10, 100, 4);
const medivh = new cardStats("Medivh, the Last Guardian of Tirisfal", 20, 99, 11, 90, 56);
const velen = new cardStats("Prophet Velen", 10, 92, 8, 72, 7);
const valeera = new cardStats("Valeera Sanguinar", 51, 32, 84, 25, 43);
const ashara = new cardStats("Queen Ashara", 63, 100, 36, 89, 99);
const archimonde = new cardStats("Archimonde the Defiler", 56, 68, 23, 86, 98);
const kiljaeden = new cardStats("Kil'jaeden the Deceiver", 48, 91, 24, 78, 97);
const sargeras = new cardStats("Sargeras", 98, 95, 94, 98, 99, 100);
const alex = new cardStats("Alexstrasza the Life-Binder", 59, 87, 19, 92, 89, 9);



let fullSet = [thrall, anduin, sylvanas, mankrik, medivh, velen, valeera, ashara, archimonde, kiljaeden, sargeras, alex]

function shuffle(fullSet) {
    let currentIndex = fullSet.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = fullSet[currentIndex];
      fullSet[currentIndex] = fullSet[randomIndex];
      fullSet[randomIndex] = temporaryValue;
    }
  }

let firstSet = shuffle(fullSet);
let playerOne = fullSet.slice(0,6);
let playerTwo = fullSet.slice(6);
let cardNamep1 = "";
let cardNamep2 = "";
let turnNum = 0

const init = () =>{
    currentCardp1 = playerOne[turnNum];
    currentCardp2 = playerTwo[turnNum];
    console.log (`Name: ` + currentCardp1.name + '\n' +  `Strength: ` + currentCardp1.str + '\n' + `Intellect: ` + currentCardp1.int + '\n' + `Agility: ` + currentCardp1.agi + `\n` + `Lore: ` + currentCardp1.lore + '\n' + `Evilness: ` + currentCardp1.evil)
    let choice = prompt("Which stat would you like to pick?")
    if (choice == "Strength" || choice == "strength"){
        (currentCardp1).choiceStr(currentCardp1.str, currentCardp2.str)
    }
    else if (choice == "Intellect" || choice == "intellect"){
        (currentCardp1).choiceInt(currentCardp1.int, currentCardp2.int)
    }
    else if (choice == "Agility" || choice == "agility"){
        (currentCardp1).choiceAgi(currentCardp1.agi, currentCardp2.agi)
    }
    else if (choice == "Lore" || choice == "lore"){
        (currentCardp1).choiceInt(currentCardp1.lore, currentCardp2.lore)
    }
    else if (choice == "Evilness" || choice == "evilness"){
        (currentCardp1).choiceInt(currentCardp1.evil, currentCardp2.evil)
    }
    else {
        console.log("Please select a stat name from above")
    }
}


console.log(init());