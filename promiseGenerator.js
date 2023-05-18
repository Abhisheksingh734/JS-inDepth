const generator = function*(){
        yield new Promise((res,rej)=>{
            setTimeout(()=>{
                res(1);
            },1000)
        });
        yield new Promise((res,rej)=>{
            setTimeout(()=>{
                res(2);
            },2000)
        });
};

const generatorObj  = generator();

console.log(generator);
console.log(generatorObj);
generatorObj.next().value.then((result)=>{
    console.log(result);
})
 
const getObjectAsync = async()=>{
    for(const count of generatorObj){
        const result = await count;
        console.log(result);
            
        }
}

getObjectAsync();


