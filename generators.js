// const counter = function *() {
// //pauses and return the generator
//     console.log("this will run with first .next");
//     yield 1;
//     console.log("this will run with second .next");
//     yield 2;
//     yield "run";
// }

// const counterGenerator = counter(); //counterGenerator is  generator object here
// // console.log(counterGenerator.next());
// // console.log(counterGenerator.next());
// // console.log(counterGenerator.next());


// for(const count of counterGenerator){
//     console.log(count);

// }

// const countTo10 = function*(){
//     for(let i=0;i<=10;i++){
//         yield i;
//     };
// };


// const countObj = countTo10();

// for(const count of countObj){
//     console.log(count);
// }








// const randomNumberGenerator = function*(){
//     while(true){
//         yield Math.floor(Math.random()*10);
//     }
// };

// const randomNumber = randomNumberGenerator();

// for(let i=0;i<10;i++){
//     console.log(randomNumber.next().value);
// };



// const randomAmountFromRange = function *(amt,min,max){
//     for(let i=0;i<amt;i++){
//         yield Math.ceil( Math.random() * (max-min) +min);
//     };
// };

// const randomObj = randomAmountFromRange(5,100,200);

// for(const num of randomObj){
//     console.log(num);
// };
 











// const getRandomNumber =function *(){
//     for(let i =0;i<5;i++){
//         yield Math.floor(Math.random()*10 +1);
//     };
// };


// const groceryList = function * (){
//     const groceries = ["Avocado" ,"Cookie", "Milk", "Soup", "Soda"];
//     const groceryLen = groceries.length;
//     for(let i=0;i<groceryLen;i++){
//         let randInd = Math.floor(Math.random()*groceries.length);
//         yield groceries.splice(randInd,1)[0];
        
//     }
    
// }
// const randomObj = getRandomNumber();
// const randomGroceries = groceryList();

// for(let i=0;i<5;i++){
//     console.log(randomObj.next().value,randomGroceries.next().value);
// }


// const randomNumber =function*(){
//     while(true){
//         yield Math.floor(Math.random()*10);
//     };
// };

// const randomObj = randomNumber();

// for(let i =0;i<10;i++){
//     console.log(randomObj.next().value);
// };


//QESTION 3//



// const randomNumberGen = function *(){
//     for(let i=0;i<5;i++){
//         yield Math.floor(Math.random()*10);
//     };
// };

// const randomGroceryGen = function*(){
//     const groceries = ["Avacoado","Cookie","Milk","Soup","Soda"];
//     const groceryLen = groceries.length;
//     for(let i =0;i<groceryLen;i++){
//         const randInd = Math.floor(Math.random()*groceries.length);
//         yield groceries[randInd];
//         groceries.splice(randInd,1);
//     };

// };

// const randomGrocery = randomGroceryGen();
// const randomNumber = randomNumberGen();

// for(let i=0;i<5;i++){
//     console.log(randomGrocery.next().value , randomNumber.next().value);
// }