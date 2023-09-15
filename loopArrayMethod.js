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

const arr = number.map((element)=>element*2);
console.log(arr);

 const g = number.reduce((sum , value) => { return(sum + value)})
 console.log(g);
 
 const f = number.filter((element)=>{ 
     return element % 2 != 0
     
 })
 console.log(f)
 
 const array4 =[10,20,30,40]
 const abc = array4.flatMap((elements)=>[elements*2]);
 console.log(abc)