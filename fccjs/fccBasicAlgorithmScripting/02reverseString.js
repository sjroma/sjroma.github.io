// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

let splitString;
let reverseArray = [];
let joinArray = [];
function reverseString(str) {
  "use strict";
  splitString = str.split("");
  reverseArray = splitString.reverse();
  joinArray = reverseArray.join("");
  return joinArray;
}

reverseString("hello");

console.log(reverseString("hello"));                   //should become "olleh"
//console.log(reverseString("Howdy"));                 //should become "ydwoH"
//console.log(reverseString("Greetings from Earth"));  //should return "htraE morf sgniteerG"
