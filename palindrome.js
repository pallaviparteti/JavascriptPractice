function toCheckPalindrome() {
  let str = "MADAM";
  const checkString = str.split("");
  console.log(checkString);
  const palindrome = checkString.reverse().join("");
  console.log(palindrome);
  if (str == palindrome) 
  console.log("given string is palindrome");
else
console.log(str,"not a palindrome");
}
toCheckPalindrome();
