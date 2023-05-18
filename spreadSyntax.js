//NOTE: spread operator in only making shallow copy of the array
//  and not deep copy.
// if its not primitive datat type then it will 
// only copy the reference of the object and not the object itself. 
// i.e. changing the original array will change the copied array as well. 


// const prices = [10,20,30,40,50];
// const copy = [...prices];

// console.log(prices);
// console.log(copy);


// sets()

// const ages = new Set();
// ages.add(10);
// ages.add(15);
// ages.add(5);
// const allAges = [...ages, 20];
// console.log(allAges);

//Maps()

// const myMap = new Map();

// myMap.set("Apples",3);
// myMap.set("banana",4);
// myMap.set("Guvava",5);

// const stockArray = [...myMap];
// console.log(stockArray); // [ [ 'Apples', 3 ], [ 'banana', 4 ], [ 'Guvava', 5 ] ]



// Objects

// const countryPop={
//     Germany: 83,
//     Brazil: 25
// }

// const countryPopExtend = {
//     ...countryPop,
//     India: 100,
//     Egypt: 20
// }
// console.log(countryPopExtend);




// const superhero = {
//     name: "Bruce Wayne",
//     alias: "Batman",
//     universe: "DC",
//     happy:false,
//     enemies:["Joker","Catwoman","Bane"],
//     bestMovie :{title:"The Dark Knight", rating:95 } 
// }

// const copySuperheroes = {...superhero,
//     enemies:[...superhero.enemies,"Poison Ivy"],
//     bestMovie:{...superhero.bestMovie,year:2008}
// };
// console.log(copySuperheroes);
// console.log(superhero);

