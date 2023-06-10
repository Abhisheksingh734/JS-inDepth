class Player{
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


class Warrior extends Player{
    constructor(name, hp, mp, items, shield){
        // this.shield = shield;  ----> cannot do this before calling super
        super(name,hp,mp,items);
        this.shield = shield;
        super.speak(`heehwaa`);
    }
}


const player = new Player("Player",100, 50, ["Banana"]);
console.log(player);
const warrior = new Warrior("Gengis Khan",120,20,["Sabre"],"Leather Shield");
console.log(warrior);

warrior.speak("hii");



// instanceof keyword

console.log(warrior instanceof Player);
console.log(warrior instanceof Warrior);
console.log(warrior instanceof Object);
