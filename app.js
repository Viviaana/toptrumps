//setting up template for all cards
class cardStats{
    constructor (name, str, int, agi, stam, lore){
    this._name = name;
    this._str = str;
    this._int = int;
    this._agi = agi;
    this._stam = stam;
    this._lore = lore;
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
    get stam(){
        return this._stam;
    }
    get lore(){
        return this._lore;
    }
}

//list of all cards available
const thrall = new cardStats("Thrall, son of Durotan", 79,83,9,67,99); 
const anduin = new cardStats("King Anduin Wrynn of Stormwind",35,92,12,61,99);
const sylvanas = new cardStats("Sylvanas Windrunner, the Banshee Queen",50,60,90,30,99);
const mankrik = new cardStats("Mankrik", 10,10,10,10,100);
const medivh = new cardStats("Medivh, the Last Guardian of Tirisfal", 20,99,10,40,90);
const velen = new cardStats("Prophet Velen", 10,92,8,47,72);
const valeera = new cardStats("Valeera Sanguinar", 50,30,80,60,40);
const ashara = new cardStats("Queen Ashara",60,100,30,60,90);

let fullSet = [thrall, anduin, sylvanas, mankrik, medivh, velen, valeera, ashara]

function shuffle(fullSet) {
    var currentIndex = fullSet.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = fullSet[currentIndex];
      fullSet[currentIndex] = fullSet[randomIndex];
      fullSet[randomIndex] = temporaryValue;
    }
  
    return fullSet;
  }
  
  // Used like so
  fullSet = shuffle(fullSet);
  console.log(fullSet);