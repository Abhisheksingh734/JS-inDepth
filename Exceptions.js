// try{
//     const msg = "hi"
//     console.log(msg);
//     throw "Boom!"
// }catch(error){
//     console.error(error); //"Boom"
//     console.error("I got you don't worry")
// }

// console.log("Hi?")



// try{
//     const msg = "hi"
//     console.log(msg);
//     throw new Error("Boom!")
// }catch(error){
//     console.error(error); //"Boom"
//     console.error("I got you don't worry")
// }

// console.log("Hi?")










// try{
//     const user = {
//         name: "John",
//         age: 30
//     }
//     console.log(user.profile.color);
// }catch(error){
//     console.error(error);

// }



// console.log("Hi?")



// for(let i = 1; i<=10;i++){
//     if(i==5){
//         try{
//             throw new Error("Boom!")
//         }catch(error){
//             console.error("loop",i);
//             console.error(error);
//         }
//     }else{
//         console.log(i);

//     }
// }




// const user = {
//     name: "Misha",
//     age: 22,
//     settings: {
//         colour: "blue"
//     }
// }

// console.log("Creating user");
// try{
//     console.log(user.profile.colour);  //undefined.colour
//     console.log("User created!");

// }catch(e){
//     console.error(e);
// }




let number = 1337;
try{
    const randomNumber =Math.floor(Math.random()*1001);
    number += randomNumber;
    console.log(number);
    if(number<2000){
        throw new Error("You lose");
    }else{
        console.log("You win");
    }
}catch(error){
    console.log(error);
    console.log(number);
}




