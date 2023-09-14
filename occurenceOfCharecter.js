//Count the occurrences of a specific character in a string.
const strInput = "bridgelabz solution" 
function occurenceOfCharecter(strInput, char) {
    let count = 0;
    for (let i = 0; i < strInput.length; i++) {
      if (strInput[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  const charecter = "l";
  const occurrence = occurenceOfCharecter(strInput, charecter);
console.log(occurrence);
  