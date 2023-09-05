function primeOrNot(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime.
  }

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      return false; // If the number is divisible by 2  it's not prime.
    } else {
      return true;
    }
  }
}
console.log(primeOrNot(7)); // true
console.log(primeOrNot(12)); // false
console.log(primeOrNot(17)); // true
