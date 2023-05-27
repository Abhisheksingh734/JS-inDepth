// const mySymbol = Symbol();

// const namedSymbol = Symbol("myName"); ///this is description

// console.log(mySymbol);
// console.log(namedSymbol);

// // hide from iteration

// const character ={
//     name:"Rick",
//     class: "Axe",
//     quote:"I'll never let you down",
//     [Symbol("admin")]:false
// }
// for(const key of Object.keys(character)){
//     console.log(key);
// }

// console.log(Object.getOwnPropertySymbols(character));

/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.iterator property on "book" that will
       allow you to loop over it using a for-of-loop that will
       give you back the key-value pairs each loop as a paired
       array (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-of-loop to make sure it works

    HINT: A generator function is the easiest way to do this
*/

// const book = {
//   name: "1984",
//   author: "George Orwell",
//   year: 1949,
//   rating: 4.6,
//   genre: "Science Fiction",
//   movie: true,
// };

// book[Symbol.iterator] = function*(){
//     const entries = Object.entries(book);
//     for(const entry of entries){
//         yield entry;  //["Name":"1984"]
//     }

// }

// for(const entry of book){
//     console.log(entry);
// }

/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.asyncIterator property on "book" that
       will allow you to loop over it using a for-await-of-loop
       that will give you back the key-value pairs each loop but
       delayed by 1 second each as a paired array 
       (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-await-of-loop to make sure it works

    HINT: An async generator function is the easiest way to do this
*/

const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};


book[Symbol.asyncIterator] = async function*(){
   for(const item of Object.entries(book)){
      yield new Promise((res,rej)=>{
         setTimeout(()=>{
            res(item);
         },1000);
      });
   };
};


const asyncObj =async function(){
   for await (const item of book){
      console.log(item);
   }
}

asyncObj();














// const book = {
//   name: "1984",
//   author: "George Orwell",
//   year: 1949,
//   rating: 4.6,
//   genre: "Science Fiction",
//   movie: true,
// };

// book[Symbol.asyncIterator] = async function*(){
//     for(const item of Object.entries(book)){
//         yield new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res(item);
//             },100);
//         });
//     };
// };

// const asyncObj = async()=>{
//     for await (const [key,value] of book){
//         console.log(key,value);
//     }
// }

// asyncObj();

// const asyncGenerator = async function*(){
//     for(const item of Object.entries(book)){
//         yield new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res(item);
//             },1000);
//         })
//     }

// }

// const asyncGeneratorObj = asyncGenerator();

// const asyncAwait = async ()=>{
//     for await (const [key,value] of asyncGeneratorObj){
//         console.log([key,value]);
//     }
// }

// asyncAwait();
