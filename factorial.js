const number = 5;

function factorial(number1){
    let factorialValue = 1; 
for(let i = 1; i <= number1; i++)
factorialValue = factorialValue * i;
console.log("factoriable of number",number,"is",factorialValue);
}

factorial(number)