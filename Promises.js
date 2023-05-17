/*WHAT are Promises---------------------------------------
promises are objects in javascript which represents events failure ,
completion, or pending state for an asynchronus operation */



// WHEN promise is fullfilled

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Hello my friend");
//         resolve("Here's your iceCreame");
//     },1000);
// })

// console.log("Hello");
// console.log(myPromise);


// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Here's your ice  cream");
//         reject("Sorry we're out of ice cream");
//     },1000);
// })

// myPromise
//     .then((resolvedValue)=>{
//         console.log("Promise seems to be done");
//         console.log(resolvedValue);
//         console.log(myPromise);
// })
//     .catch((error)=>{
//         console.log("Promise got rejected");
//         console.log(error);
//         console.log(myPromise);
//     // console.log("And...Here's your money back");
// })

// console.log("Excuse me sir?");
// console.log(myPromise);


// QUESTIONS-----------

// console.log("Program started");

// const myPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Program completed");
//     },3000);
//     setTimeout(()=>{
//         reject("Program failure")
//     },2000);
// })

// //---Promise is pending currently
// console.log(myPromise);
// console.log("Program in progress...");

// myPromise.then((resValue)=>{
//     console.log(resValue);
// })
// .catch((error)=>{
//     console.log(error);
// })


//QUESTION----------------

//this is answer to the question which ask to print the promise object 
//and it is pending and then print the program in progress and then print the
//program completed after 3 seconds and then print the promise object again and
//it is resolved now and then print the program completed 


// console.log("Program started");
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },3000);
    
// })

// myPromise
//     .then(()=>{
//         console.log("Step 1 Complete")
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("Step 2 Complete");
//             },2000);
//         })
//     })
//     .then((val)=>{
//         console.log(val);
//     })

//     // above is a promise chain
//     //below i am printing the promise object and it is pending
// console.log(myPromise);
// console.log("Program in progress...")
     



// QUESTION 3----------------------
// console.time('program');

// console.log("Program started");

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({data:"Hello",error:null});
//     },5000)
// })

// console.log(myPromise);
// console.log("Program in process...");

// myPromise
//     .then((resValue)=>{
//         console.log(resValue);

//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("First promise chain complete!")
//             },2000)
//         })
//     })
//     .then((resValue)=>{
//         console.log(resValue);
//     })

// myPromise
//     .then((val)=>{
//         console.log(val);

//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("Second promise chain complete!");
//             },10000);
//         })
//     })
//     .then((val)=>{
//         console.log(val);
//         console.timeEnd('program');
//     })


//BONUS------

const sum =(arr)=>{
    let ans = arr.reduce((result,sum)=>{
        return result+sum;
    },0);

    return ans;
}

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },5000);
}) 

Promise.all([promise1,promise2]).then((r1)=>{
    console.log(sum(r1));
})