function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
const numbers = [10, 5, 20,27, 15, 30];
const secondLargestNumber = findSecondLargest(numbers);
console.log("The second largest number is:", secondLargestNumber);
