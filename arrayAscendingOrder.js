const array = [9, 8, 2, 3, 1, 4];
let newValue;
for(const i of array) {
    if(array[i] < array[i-1]){
        console.log(array,"not in sorted order")
    }
    else{
    newValue = array.sort()
    }
    }
    console.log(newValue);
    


