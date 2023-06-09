 // Arrow functions cannot be used with "this" binding 

//it bound diffenetly deoending upini the context of where it call from and we never know that util we execute that
// const alex ={
//     name: "Alex",
//     greet: function(){
//         console.log(`${this.name} says Hii!`);
//     }
// }

// alex.greet();        //Alex says Hii!


// const mark ={
//     name: "Alex",
//     friend:{
//         name:"Priya",
//         greet: function(...args){
//             console.log(`${this.name} says Hii!`);
//         }
//     }
// }

// mark.friend.greet();  //undefined says Hii!






// call method 


// const mark ={
//     name: "Alex",
//     friend:{
//         name:"Priya",
//         greet: function(...args){
//             console.log(args);
//             console.log(`${this.name} says Hii!`);
//         }
//     }
// }


// mark.friend.greet.call({name:"Mis"},1,2);   
// [1,2]
//Mis says Hii!



//apply method

// mark.friend.greet.apply({name:"Mis"},[1,2]);   //same as call but has only 2 arguments



//bind method

const alex = {
    name: "Alex",
    firend: {
        name: "Priya",
        greet: function(){
            console.log(`${this.name} says Hii!`);
        }
    }
}



const boundGreet = alex.firend.greet.bind({name:"Mia"});

boundGreet();
boundGreet();

// binding it to name 
alex.firend.greet = alex.firend.greet.bind({name:"Iron man"});

alex.firend.greet();





