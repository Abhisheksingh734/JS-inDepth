// const asyncGenerator = async function*(){
//     yield new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(1);
//         },1000);
//     });
// };

// const asyncGeneratorObject = asyncGenerator();

// console.log(asyncGenerator);
// console.log(asyncGeneratorObject);


// const asyncGeneratorExecutor = async ()=>{
//     for await (const promise of asyncGeneratorObject){
//         console.log(promise);
//     }
// }

// asyncGeneratorExecutor(); 








//this below function is a async generator function which returns a promise




// const asyncGenerator = async function*(){
//     let i =0;
//     while (true){
//         yield  new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res(i);
//             },1000);
//         });
//         i++;
//     }

// };

// const asyncGeneratorObject = asyncGenerator();

// console.log(asyncGenerator);
// console.log(asyncGeneratorObject);



// const asyncStarter = async function(){
//     for await(const number of asyncGeneratorObject){
//         console.log(number);
//     }
// }
// asyncStarter();
// console.log("Hello??");






//EXERCISES -----------------------

// warmup
/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)
*/



// const asyncGenerator =async function*(){
//     while(true){

//         yield new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res(Math.floor(Math.random()*10));
//             },1000);
//         });
//     }
// };

// const asyncGeneratoObject = asyncGenerator();

// const asyncAwait = async()=>{
//         for await(const num of asyncGeneratoObject){
//             console.log(num);
//         };

// };

// asyncAwait();







// Exercise 1


/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/


// const asyncGenerator = async function*(){
//     while(true){

//         let randNum = Math.floor(Math.random()*2);
//         randNum ===1?
//         yield new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res("Fast");
//             },500);
//         }):
//         yield new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res("Slow");
//             },3000);
//         })
//     }
// }

// const generatorObj = asyncGenerator();

// const forAwait = async ()=>{
//     for await(const num of generatorObj){
//         console.log(num);
//     }
// }
// forAwait();









// EXERCISE 2


/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel (aeiou) then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/

// const asynGenerator = async function*(sentence){
//     for(const letter of sentence)
//     yield new Promise((res,rej)=>{
//         setTimeout(()=>{
//             ['a','e','i','o','u'].includes(letter)
//             ?res("*")
//             : res(letter.toUpperCase());
//         },100);
//     });
// };


// const generatorObj = asynGenerator("Monkeys are the coolest animal!");

// const forAwait = async()=>{
//     for await(const lettter of generatorObj){
//         console.log(lettter);
//     }
// }
// forAwait();








/*
    1. Create an async Generator function that has a single
       parameter called "time". This function will yield a
       Promise that resolves with the time taken after that
       many milliseconds. The time for each subsequent Promise
       will take TWICE as long.

    2. Create the generator object by calling the function ^
       with the value 100 to start.

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    4. Example output if we started with:
       const timeGeneratorObject = timeGenerator(100)
       for await (const time of timeGeneratorObject)
          - ^ If we logged "time" each loop we'd get:
          - 100, 200, 400, 800, 1600, 3200 ... etc
*/



// const asyncGenerator = async function*(time){
//     while(true){
//         yield new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res(time);
//             },time)
//         })
//         time*=2;
//     }
// }

// const asyncGeneratorObject = asyncGenerator(100);

// const forAwait = async ()=>{
//     for await(const num of asyncGeneratorObject){
//         console.log(num);
//     };
// };
// forAwait();



















