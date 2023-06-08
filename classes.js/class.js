class Player {
    constructor(name, hp, mp, items){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }


    speak(phrase){
        console.log(`${this.name} says: ${phrase}`);
    }
}

//PLayer 1
const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
hanSolo.speak("yoo guys----------------------------------------");

//Player 2
const nader = new Player("Nader", 10, 5, ["Computer"]);
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));
nader.speak("Youu guys i'm Nader---------------------------------------");



//Enemy made with the function
function AnotherPlayer(name,hp,mp,items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
}

const darthVader = new AnotherPlayer("Darth Vader", 200, 30, ["Light Saber"]);

console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader.__proto__));
