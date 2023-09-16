const str = "Bridgelabz Solution";

const str2 = str.split(" ");
console.log(str2);
const arr = [];

for (let i = 0; i <= str2.length - 1; i++) {
    let strValue =''
  let value = str2[i].split("");
  // console.log(value)
  for (let p = value.length - 1; p >= 0; p--) {
    // console.log(value[p])
    strValue += value[p];
  }
  arr.push(strValue)
  // let index = str2.reverse().join('');
  // console.log(index)
}
console.log(`reverse string--------- ${arr}`)
