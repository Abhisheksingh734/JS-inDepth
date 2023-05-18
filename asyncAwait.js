// Why Async/ Await ?


/*

-Synchronous lookinh code for Promises

-Avoid deeply neseted "call-back hell" style code
(multiple .then.then.then...catch)


-Built on Promises and can do everything vanilla Promises can

-with great power...

*/

// const makeTime =(ms)=>{
//     const timeOut = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("All done!")
//         },ms);
//     });

//     return timeOut;
// };

// const asynct = async()=>{
//     const msg = await makeTime(1000);
//     console.log(msg);
// }

// asynct();




// ERrors

// const makeTimeout = (ms)=>{
//     const timeout = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("All done!");
//             // reject("There was an error");
//         },ms);
//     });

//     return timeout;
// }; 

// const causeError = async()=>{
//     try{
//         const result = await makeTimeout(2000);
//         console.log(result);
//         console.log("Program done!");

//     }catch(e){
//         console.error(e);
//     }
    
// };
// console.log("Program started...");
// causeError();













//  EXERCISES Q 1
/*
1. Create a function "fetchPokemon" which returns a promise
that resolves a value {data:{name:"Pickachu",Power:20}} after 2 sec

2. Print put "Program starting..."

3, Create a async function that uses await to ait for the data to comes back
from "fetchPokemon" then log out the data

4. Call the async function you created

*/


//SOLUTION

// const fetchPokemon=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve({data:{name:"Pickachu",Power:20}});
//             reject(new Error("Danger, danger!"));
//         },2000);
//     });


// };

// console.log("Program starting...");

// const callPokemon = async()=>{
//     try{
//         const data = await fetchPokemon();
//         console.log(data);
//     }catch(e){
//         console.error(e);
//         console.log("Done fetching...");
//     }
    
// };


// callPokemon();
// console.log("Program complete!");




// QUESTION 2

// const fetchUser = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({data:{user:"Monkey",admin:true}});
//         },3000);
//     });
// };

// const login = (user)=>{
//     if(user.data.admin === true){
//         console.log("Successfully logged in!");
//     }else{
//         console.log("Failed to login, please try again");
//     };
// }

// console.log("Program starting...");

// const getUser = async()=>{
//     const userData = await fetchUser();
//     login(userData);
// }

// getUser();
// console.log("Program complete...");






//QUESTION 3
// console.time('p');
// const fetchFast=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Fast Done!");
//         },2000);
//     });
// };

// const fetchSlow = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Slow Done!");
//         },6000);
//     });
// };

// console.log("Program started...");

// const fetchData = async()=>{
//     const fast = fetchFast();
//     // console.log(fast);
//     const slow = fetchSlow();
//     // console.log(slow);
//     const fetchBoth = await Promise.all([fast,slow]);
//     console.log(fetchBoth);
//     console.log("Program completed...");
//     console.timeEnd('p');
// }


// fetchData();







// QUESTION 4

// const getCandies = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({candy:"sour keys",quantity:10});
//         },2000);
//     });
// }


// const sellCandies = (obj)=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(obj.quantity * 25);
//         },3000);
//     });
// }

// const goGetCandies = async()=>{
//     const candies = await getCandies();
//     const sellCandie = await sellCandies(candies);
//     console.log(sellCandie);
//     console.log("Program ended..");
// }

// console.log("Program started...");
// goGetCandies();

// getCandies().then((obj)=>{
//     const sellValue = sellCandies(obj);
//     sellValue.then((value)=>{
//         console.log(value);
//     })
// })