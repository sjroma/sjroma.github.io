// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive 
// integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  var answer = 0;
  if (num < 0) {
    return "Must be greater than or equal to 0"; 
  } else if (num === 0) {
    answer = 1;
  } else {
    answer = num * factorialize(num-1);
  }
  return answer;
}

//console.log("5! =", factorialize(5)); //should return 120
console.log("10! =", factorialize(10)); //should return 3628800
//console.log("20! =", factorialize(20)); //should return 2432902008176640000
//console.log("0! =", factorialize(0)); //should return 1
