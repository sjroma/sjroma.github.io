// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArray.splice(n, 0, arr1[i]);
    n++;
  }
  return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); //should return [4, 1, 2, 3, 5, 6]
//console.log(frankenSplice([1, 2, 3], [4, 5], 1));  //should return [4, 1, 2, 3, 5]
//console.log(frankenSplice([1, 2], ["a", "b"], 1)); //should return ["a", 1, 2, "b"]
//console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

//Notes:
//Splice vs Slice
//
//1. The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
//
//2. The splice() method changes the original array and slice() method doesn’t change the original array.
//
//3. The splice() method can take n number of arguments and slice() method takes 2 arguments.
