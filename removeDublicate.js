const array = ["have", "has", "have", "has", "", "had"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(array));
