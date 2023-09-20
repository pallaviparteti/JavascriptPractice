let str = " today is tuesday";
let words = str.split('')
for(let i =0 ; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() 
}
let capitalWords = words.join('');
console.log(capitalWords);
