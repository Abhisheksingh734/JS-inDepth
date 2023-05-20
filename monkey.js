const monkey ={
    name:"Abu",
    species: "Capuchin",
    hobbies:["Stealing"],
    age:5

};
const printMonkey =()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // console.log(monkey);
            res(monkey);
        },2000);
    });
};

const resultMonkey = await printMonkey();
export {resultMonkey};