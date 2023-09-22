let str2 = "have a greate future";
let words2 = str2.split(" ");
let firstWord = words2.map((word) => {
  let first = word.charAt(0).toUpperCase();
  let second = word.slice(1);
  return first + second ;
});
console.log(firstWord.join(" "));