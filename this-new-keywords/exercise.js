/*
    1. Create the following Object and assign it to a variable
       named "pet":
       { name: "Nemo", type: "fish", age: 2 }

    2. Add a 'sayHello' function to the Object prototype. When
       called, it should log out the Object's name,
       type and age to match the following example:
       "Nemo is a fish and is 2 years old. Nemo says hi!"

       ^ This would be logged if we did pet.sayHello();

    3. Create another pet with different property values
       to make sure it works as well.
*/

// const pet = {
//   name: "Nemo",
//   type: "fish",
//   age: 2,

// };

// Object.prototype.sayHello =function(){
//     console.log(`${this.name} is a ${this.type} and is ${this.age} years old. ${this.name} says hi!`)
//     }

// pet.sayHello();



//Exercise 1
/*
    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

    2. Call the list function on the book and explain the behaviour

    3. How would you make the "list" method temporarily (for one
       function call) log out this array instead:
       ["Draco", "Severus", "Voldemort"] ?

    HINT* What methods can we use on Functions to manipulate "this"?
*/

// const book = {
//     name: "Harry Potter",
//     author: "J.K. Rowlings",
//     characters: {
//         mainChars: ["Harry","Ron","Hermione"],
//         list: function (){
//             for(const char of this.mainChars){
//                 console.log(char);
//             }
//         }
//     }
// }

// // book.characters.list.call({mainChars:["Draco","Severus","Voldemort"]});


// book.characters.list();
// book.characters.list = book.characters.list.bind({mainChars:["Draco","Severus","Voldemort"]});

// book.characters.list();












//EXERCISE 3

/*
    1. Create a function called "Person". It will have 3
       parameters: name, age, and favouriteFood. (function
       syntax, not arrow function!)

    2. Inside of Person, directly set these values:
       this.name = name;
       this.age = age;
       this.favouriteFood = favouriteFood
       (no return value is needed)

    3. Create a the following two variables:
       const avery = Person("Avery", 20, "Dark Chocolate");
       const jackie = new Person("Jackie", 35, "Sourdough Bread");

    4. Log out "avery" and "jackie" and explain what you see

    5. Log out the entire prototype chain of "jackie" (one by one)

    6. How would you explain what is happening when we use the
       "new" operator with a function in JS?
*/

function Person(name,age,favouriteFood){
    return {

        name,
        age,
        favouriteFood
    }
}

const avery = Person("Avery",20,"Dark Chocolate");
// const jackie = new Person("jackie",35,"Sourdough Bread");

console.log(avery);
// console.log(jackie);


