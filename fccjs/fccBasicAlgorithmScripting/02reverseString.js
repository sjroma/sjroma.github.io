// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

reverseString("hello");

console.log(reverseString("hello"));                   //should become "olleh"
//console.log(reverseString("Howdy"));                 //should become "ydwoH"
//console.log(reverseString("Greetings from Earth"));  //should return "htraE morf sgniteerG"
