const number = [10,2,3,4,5,6,7,1]
for(let i=0; i<number.length; i++){
    console.log("--------->",number[i])
}

number.forEach((element,index) => { element[index]*element[index]})
for(let i of number){
    console.log(i)
}
for(let i in number){
    console.log(number[i])
}

