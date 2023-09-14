const array = [20,10,3,44,5,6,7];
for(let i =0; i<=array.length;i++){
    for(let j = i+1; j<array.length; j++){
    if(array[i]>array[j]){
        let element = array[i];
        array[i] = array[j];
        array[j] = element;
    } 
}
}
console.log(array);