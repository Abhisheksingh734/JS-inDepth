/*
    1. Add a new function called "boop" to the prototype
       of String. This function should simply log out the
       String "Boop!".

    2. Create a new String with the value "meow" and
       assign it to a variable called "cat".

    3. Call the "boop" method on "cat" to make sure it
       works correctly.
*/

// String.prototype.boop = ()=>{
//     console.log("Boop!");
// }

// // let meow = new String();

// let meow = "cat";
// meow.boop();
// console.log(Object.getOwnPropertyNames(meow));














//EXERCISE 1


/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/

const animal =[1,2,3,6]
const animal2 = {
    type: "bird"
}
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));
console.log(Object.getOwnPropertyNames(animal.__proto__.__proto__));
console.log(Object.getOwnPropertyNames(animal2));

