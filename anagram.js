let str = "cat";
let str1= "act";
let length1 = str.length;
let length2 = str1.length;

if(length1 != length2){
    console.log("false");
   }
   let sort1 = str.split('').sort().join();
   let sort2 = str1.split('').sort().join();
   if(sort1 == sort2){
    console.log("given strings are anagram");
   }
   else{
    console.log("given strings are not anagram")
   }
