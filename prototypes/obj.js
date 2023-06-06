// Object.prototype.speak =()=>{
//     console.log("hii from prototype");
// } 

const obj = {
    type: "myObject"
}

// obj.speak();
console.log(obj.__proto__.__proto__);


console.log(Object.getOwnPropertyNames(obj.__proto__));