const promise = new Promise((resolve , reject)=>{
    let number = 20;
    setTimeout(()=>{
        if(number%10 == 0){
        resolve("number divisible by 10")
    }
    else{
        reject("number is not divisible by 10")
    }
    },3000)
    
})

function print(){
    // console.log( await promise)
    // // return promise.then((message)=>{
    // //     console.log(message);
    // // }).catch((error)=>{
    // //     console.log(error);
    // // })
    return promise
}

async function returnPromise(){
    const value = await print()
    console.log(value)
}
returnPromise()