let str = "today is tuesday";
let array = [];
let words = str.split(' ')
console.log(words)
 const last = words.map((word)=>{
  const lastchar = word.charAt(word.length-1)
  return word.slice(0,-1) + lastchar.toUpperCase();
 })
 console.log(last.join(" "));