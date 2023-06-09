function Hero(name){
    this.name = name,
    this.greet = function(){
        console.log(this);
        console.log(this.name);
    };
}

const storm = new Hero("Storm");

console.log(storm);

storm.greet();
storm.greet.call({name:"Cyborg"});

console.log("*******************");

