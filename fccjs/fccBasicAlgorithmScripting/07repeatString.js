//Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number.
//The built-in repeat()-method should not be used

let repeated = "";
function repeatStringNumTimes(str, num) {
  "use strict";
  if (num <= 0) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    repeated = str + repeatStringNumTimes(str, num - 1);
  }
  return repeated;
}

//console.log(repeatStringNumTimes("*", 3)); //should return "***"
console.log(repeatStringNumTimes("abc", 3)); //should return "abcabcabc"
//console.log(repeatStringNumTimes("abc", 4)); //should return "abcabcabcabc"
//console.log(repeatStringNumTimes("abc", 1)); //should return "abc"
//console.log(repeatStringNumTimes("*", 8)); //should return "********"
//console.log(repeatStringNumTimes("abc", -2)); //should return ""
