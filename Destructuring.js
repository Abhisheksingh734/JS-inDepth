// const arr = ["Abhishek","Singh","Raghuvanshi"];

// const [firstName,MiddleName,LastName] = arr;

// console.log(firstName);
// console.log(MiddleName);
// console.log(LastName);




// Objects

// const movie ={
//     title: "Dune",
//     year: 2021,
//     length:155,
//     book:true,
// }

// const {title,year,length,book} = movie;

// console.log(title);
// console.log(year);
// console.log(length);
// console.log(book);

//missing values will give undefined in destructuring objects
// you can set default value to avoid undefined



//warmup exercise

// const store = new Map();

// store.set("Cups",46);
// store.set("Candles",121);
// store.set("Vases",15);

// for(const [key,value] of store){
//     console.log(`${key}=>${value}`);
// };


//Question 3


// const xyzCalc =({x,y,z})=>{
//     console.log( 5*x - 2* y-z);
// }

// xyzCalc({x:20,y:2,z:7});
// xyzCalc({x:2,y:1,z:20});
// xyzCalc({x:100,y:100,z:100});





const characters = ["Han solo","Spock", "Darth vader","yoda","Neo"," Sarah Conor"];


const news = characters.filter((num)=>num.includes(" "));
console.log(news);










