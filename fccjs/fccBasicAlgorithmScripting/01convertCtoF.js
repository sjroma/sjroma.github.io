//Convert Celsius to Fahrenheit
//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

//You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

let fahrenheit;
let celsius;
function convertToF(celsius) {
  "use strict";
  fahrenheit = (celsius * (9 / 5) + 32);
  console.log(celsius + " degrees celsius is", fahrenheit + " degrees fahrenheit");
  return fahrenheit;
}

//convertToF(-30) //should return a value of -22
//convertToF(-10) //should return a value of 14
//convertToF(0) //should return a value of 32
convertToF(20) //should return a value of 68
//convertToF(30) //should return a value of 86
