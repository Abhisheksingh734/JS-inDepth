const animal = {
    type: "obj",
    __proto__:Array.prototype
}

console.log(animal);
console.log(Object.getOwnPropertyNames(animal.__proto__)); //array properties
console.log(animal.__proto__); 