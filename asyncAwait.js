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

const makeTimeout = (ms)=>{
    const timeout = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("All done!");
            // reject("There was an error");
        },ms);
    });

    return timeout;
}; 

const causeError = async()=>{
    try{
        const result = await makeTimeout(2000);
        console.log(result);
        console.log("Program done!");

    }catch(e){
        console.error(e);
    }
    
};
console.log("Program started...");
causeError();








