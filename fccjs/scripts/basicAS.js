console.log("Hey Steve, here's what you're logging to the console");

//repaint page based on user choice from dropdown selector 
function dropdownChoice() {
  "use strict";
  document.getElementById("textbox").value = "";
  document.getElementById("number").value = "";
  document.getElementById("output-area").innerHTML = "";
  document.getElementById("number").style.visibility = "hidden";
  var script = document.getElementById("dropdown").value;
//  console.log('script value=', script);

  switch (script) {
    case "cToF":
      document.getElementById("descTitle").innerHTML = "Convert Celsius to Fahrenheit";
      document.getElementById("descText").innerHTML = "The algorithm to convert from Celsius to Fahrenheit is; <code>F = (C x (9/5)) + 32</code>";
      document.getElementById("descTests").innerHTML = "<li><var>-30</var> should return a value of <var>-22</var></li><li><var>-10</var> should return a value of <var>14</var></li><li><var>0</var> should return a value of <var>32</var></li><li><var>20</var> should return a value of <var>68</var></li><li><var>30</var> should return a value of <var>86</var></li>";
      document.getElementById("textbox").placeholder = "-40";
      break;
      
    case "fToC":
      document.getElementById("descTitle").innerHTML = "Convert Fahrenheit to Celsius";
      document.getElementById("descText").innerHTML = "The algorithm to convert from Fahrenheit to Celsius is; <code>C = (F-32) * (5/9)</code><br> This wasn't a script in the course but being in the U.S. I have more reason to use this conversion.<br> One day I'll write a toggle so you don't have to choose from the dropdown.";
      document.getElementById("descTests").innerHTML = "<li><i>-40</i> should return a value of <i>-40</i> (it's where the two scales cross)</li><li><i>32</i> should return a value of <i>0</i></li><li><i>68</i> should return a value of <i>20</i></li><li><i>212</i> (boiling point of water) should return a value of <i>100</i></li><li><i>451</i> (ignition temp of paper) should return a value of <i></i>233</li>";
      document.getElementById("textbox").placeholder = "72";
      break;

    case "revString":
      document.getElementById("descTitle").innerHTML = "Reverse a String";
      document.getElementById("descText").innerHTML = "Reverse the provided string";
      document.getElementById("descTests").innerHTML = "<li>\"hello\" should become \"olleh\"</li><li>\"Howdy\" should become \"ydwoH\"</li><li>\"Greetings from Earth\" should become \"htraE morf sgniteerG\"</li>";
      document.getElementById("textbox").placeholder = "stressed";
      break;

    case "factorial":
      document.getElementById("descTitle").innerHTML = "Factorialize a Number";
      document.getElementById("descText").innerHTML = "Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!<br> For example: 5! = 1 x 2 x 3 x 4 x 5 = 120<br> Only integers greater than or equal to zero will be supplied to the function.";
      document.getElementById("descTests").innerHTML = "<li><var>5</var> should return <var>120</var><li><var>10</var> should return <var>3628800</var><li><var>20</var> should return <var>2432902008176640000</var><li><var>0</var> should return <var>1</var>";
      document.getElementById("textbox").placeholder = "11";
      break;

    case "longest":
      document.getElementById("descTitle").innerHTML = "Find the Longest Word in a String";
      document.getElementById("descText").innerHTML = "Return the length of the longest word in the provided sentence.<br> The response should be a number";
      document.getElementById("descTests").innerHTML = "<li>\"The quick brown fox jumped over the lazy sleeping dog\" should return 8</li><li>\"May the force be with you\" should return 5</li><li>\"Google do a barrel roll\" should return 6</li><li>\"What is the average airspeed velocity of an unladen swallow\" should return 8</li><li>\"What if we try a super-long word such as otorhinolaryngology\" should return 19</li>";
      document.getElementById("textbox").placeholder = "May the Fourth is Star Wars day";
      break;

//    case "largestNums":
//      document.getElementById("descTitle").innerHTML = "Return Largest Numbers in Arrays";
//      document.getElementById("descText").innerHTML = "Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.<br> Remember, you can iterate through an array with a simple for loop, and access each member with array syntax <code>arr[i]</code>.";
//      document.getElementById("descTests").innerHTML = "<li>[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]] should return [5, 27, 39, 1001]</li><li>[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]] should return [27, 5, 39, 1001]</li><li>[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]] should return [9, 35, 97, 1000000]</li><li>[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]] should return [25, 48, 21, -3]</li>";
//      document.getElementById("textbox").placeholder = "[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]";
//      break;

    case "ending":
      document.getElementById("descTitle").innerHTML = "Confirm the Ending";
      document.getElementById("descText").innerHTML = "- Check if a string (first argument, <code>str</code>) ends with the given target string (second argument, <code>target</code>).<br> - This challenge <em>can</em> be solved with the <code>.endsWith()</code> method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.";
      document.getElementById("descTests").innerHTML = "<li>\"Bastian\", \"n\" should return true</li><li>\"Congratulation\", \"on\" should return true</li><li>\"Connor\", \"n\" should return false</li><li>\"Walking on water and developing software from a specification are easy if both are frozen\", \"specification\" should return false</li><li>\"He has to give me a new name\", \"name\" should return true</li><li>\"Open sesame\", \"same\" should return true</li><li>\"Open sesame\", \"pen\" should return false</li><li>\"Open sesame\", \"game\" should return false</li><li>\"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing\", \"mountain\" should return false</li><li>\"Abstraction\", \"action\" should return true</li>";
      document.getElementById("textbox").placeholder = "bicycle";
      document.getElementById("number").style.visibility = "visible";
      document.getElementById("number").placeholder = "cycle";
      break;

    case "repeat":
      document.getElementById("descTitle").innerHTML = "Repeat a String Repeat a String";
      document.getElementById("descText").innerHTML = "Repeat a given string <code>str</code> (first argument) for <code>num</code> times (second argument). Return an empty string if <code>num</code> is not a positive number.<br> The built-in <code>repeat()</code> method should not be used";
      document.getElementById("descTests").innerHTML = "<li>\"*\", 3 should return \"***\"</li><li>\"abc\", 3 should return \"abcabcabc\"</li><li>\"abc\", 4 should return \"abcabcabcabc\"</li><li>\"abc\", 1 should return \"abc\"</li><li>\"*\", 8 should return \"********\"</li><li>\"abc\", -2 should return \" \"</li>";
      document.getElementById("textbox").placeholder = "tick-tock";
      document.getElementById("number").style.visibility = "visible";
      document.getElementById("number").placeholder = "2";
      break;

    case "truncate":
      document.getElementById("descTitle").innerHTML = "Truncate a String";
      document.getElementById("descText").innerHTML = "Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a <code>...</code> ending.";
      document.getElementById("descTests").innerHTML = "<li>\"A-tisket a-tasket A green and yellow basket\", 8 should return \"A-tisket...\"</li><li>\"Peter Piper picked a peck of pickled peppers\", 11 should return \"Peter Piper...\"</li><li><s>\"A-tisket a-tasket A green and yellow basket\", \"A-tisket a-tasket A green and yellow basket\".length should return \"A-tisket a-tasket A green and yellow basket\"</s> Don't have a way to test this...yet</li><li><s>\"A-tisket a-tasket A green and yellow basket\", \"A-tisket a-tasket A green and yellow basket\".length + 2 should return \"A-tisket a-tasket A green and yellow basket\"</s> Don't have a way to test this...yet</li><li>\"A-\", 1 should return \"A...\"</li><li>\"Absolutely Longer\", 2 should return \"Ab...\"</li>";
      document.getElementById("textbox").placeholder = "GitHub cheat sheet";
      document.getElementById("number").style.visibility = "visible";
      document.getElementById("number").placeholder = "6";
      break;

//    case "find":
//      document.getElementById("descTitle").innerHTML = "Finders Keepers";
//      document.getElementById("descText").innerHTML = "Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.";
//      document.getElementById("descTests").innerHTML = "<li>[1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; } should return 8</li><li>[1, 3, 5, 9], function(num) { return num % 2 === 0; } should return undefined</li>";
//      document.getElementById("textbox").placeholder = "[21, 23, 25, 28, 29, 30], function(num) { return num % 2 === 0; }";
//      break;

//    case "bool":
//      document.getElementById("descTitle").innerHTML = "Boo who";
//      document.getElementById("descText").innerHTML = "Check if a value is classified as a boolean primitive. Return true or false.<br> Boolean primitives are true and false.";
//      document.getElementById("descTests").innerHTML = "<li>true should return true</li><li>false should return true</li><li>[1, 2, 3] should return false</li><li>[ ].slice should return false</li><li>{ \"a\": 1 } should return false</li><li>1 should return false</li><li>NaN should return false</li><li>\"a\" should return false</li><li>\"true\" should return false</li><li>\"false\" should return false</li>";
//      document.getElementById("textbox").placeholder = "boring";
//      break;

    case "titleCase":
      document.getElementById("descTitle").innerHTML = "Title Case a Sentence";
      document.getElementById("descText").innerHTML = "Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.<br> For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.";
      document.getElementById("descTests").innerHTML = "<li>\"I'm a little tea pot\" should return a string</li><li>\"I'm a little tea pot\" should return \"I'm A Little Tea Pot\"</li><li>\"sHoRt AnD sToUt\" should return \"Short And Stout\"</li><li>\"HERE IS MY HANDLE HERE IS MY SPOUT\" should return \"Here Is My Handle Here Is My Spout\"</li>";
      document.getElementById("textbox").placeholder = "wHo TyPeS LiKe ThIs?";
      break;

//    case "sliceSplice":
//      document.getElementById("descTitle").innerHTML = "Slice and Splice";
//      document.getElementById("descText").innerHTML = "You are given two arrays and an index.<br>Use the array methods <code>slice()</code> and <code>splice()</code> to copy each element of the first array into the second array, in order.<br> Begin inserting elements at index <code>n</code> of the second array.<br> Return the resulting array. The input arrays should remain the same after the function runs.";
//      document.getElementById("descTests").innerHTML = "<li>[1, 2, 3], [4, 5], 1 should return [4, 1, 2, 3, 5]</li><li>[1, 2], [\"a\", \"b\"], 1 should return [\"a\", 1, 2, \"b\"]</li><li>[\"claw\", \"tentacle\"], [\"head\", \"shoulders\", \"knees\", \"toes\"], 2 should return [\"head\", \"shoulders\", \"claw\", \"tentacle\", \"knees\", \"toes\"]</li><li>All elements from the first array should be added to the second array in their original order</li><li>The first array should remain the same after the function runs</li><li>The second array should remain the same after the function runs</li>";
//      document.getElementById("textbox").placeholder = "['and'], ['slice', 'dice'], 1";
//      break;

//    case "falsy":
//      document.getElementById("descTitle").innerHTML = "Falsy Bouncer";
//      document.getElementById("descText").innerHTML = "Remove all falsy values from an array.<br> Falsy values in JavaScript are <code>false</code>, <code>null</code>, <code>0</code>, <code>\"\"</code>, <code>undefined</code>, and <code>NaN</code>.<br> Hint: Try converting each value to a Boolean.";
//      document.getElementById("descTests").innerHTML = "<li>[7, \"ate\", \" \", false, 9] should return [7, \"ate\", 9]</li><li>[\"a\", \"b\", \"c\"] should return [\"a\", \"b\", \"c\"]</li><li>[false, null, 0, NaN, undefined, \" \"] should return [ ]</li><li>[1, null, NaN, 2, undefined] should return [1, 2]</li>";
//      document.getElementById("textbox").placeholder = "[7, 'ate', ' ', false, true, 9]";
//      break;

//    case "belongs":
//      document.getElementById("descTitle").innerHTML = "Where do I Belong";
//      document.getElementById("descText").innerHTML = "Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.<br> For example, <code>getIndexToIns([1,2,3,4], 1.5)</code> should return <code>1</code> because it is greater than <code>1</code> (index 0), but less than <code>2</code> (index 1).<br> Likewise, <code>getIndexToIns([20,3,5], 19)</code> should return <code>2</code> because once the array has been sorted it will look like <code>[3,5,20]</code> and <code>19</code> is less than <code>20</code> (index 2) and greater than <code>5</code> (index 1).";
//      document.getElementById("descTests").innerHTML = "<li>[10, 20, 30, 40, 50], 35 should return a number</li><li>[10, 20, 30, 40, 50], 35 should return 3</li><li>[10, 20, 30, 40, 50], 30 should return 2</li><li>[40, 60], 50 should return 1</li><li>[3, 10, 5], 3 should return 0</li><li>[5, 3, 20, 3], 5 should return 2</li><li>[2, 20, 10], 19 should return 2</li><li>[2, 5, 10], 15 should return 3</li><li>[ ], 1 should return 0</li>";
//      document.getElementById("textbox").placeholder = "[3, 1, 2], 2.5";
//      break;

//    case "mutate":
//      document.getElementById("descTitle").innerHTML = "Mutations";
//      document.getElementById("descText").innerHTML = "Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.<br> For example, <code>['hello', 'Hello']</code>, should return true because all of the letters in the second string are present in the first, ignoring case.<br> The arguments <code>['hello', 'hey']</code> should return false because the string 'hello' does not contain a 'y'.<br> Lastly, <code>['Alien', 'line']</code>, should return true because all of the letters in 'line' are present in 'Alien'.";
//      document.getElementById("descTests").innerHTML = "<li>[\"hello\", \"hey\"] should return false</li><li>[\"hello\", \"Hello\"] should return true</li><li>[\"zyxwvutsrqponmlkjihgfedcba\", \"qrstu\"] should return true</li><li>[\"Mary\", \"Army\"] should return true</li><li>[\"Mary\", \"Aarmy\"] should return true</li><li>[\"Alien\", \"line\"] should return true</li><li>[\"floor\", \"for\"] should return true</li><li>[\"hello\", \"neo\"] should return false</li><li>[\"voodoo\", \"no\"] should return false</li>";
//      document.getElementById("textbox").placeholder = "Harley Davidson, ride";
//      break;

//    case "chunks":
//      document.getElementById("descTitle").innerHTML = "Chunky Monkey";
//      document.getElementById("descText").innerHTML = "Write a function that splits an <b>array</b> (first argument) into groups the length of <b>size</b> (second argument) and returns them as a two-dimensional array.";
//      document.getElementById("descTests").innerHTML = "<li>[\"a\", \"b\", \"c\", \"d\"], 2 should return [[\"a\", \"b\"], [\"c\", \"d\"]]</li><li>[0, 1, 2, 3, 4, 5], 3 should return [[0, 1, 2], [3, 4, 5]]</li><li>[0, 1, 2, 3, 4, 5], 2 should return [[0, 1], [2, 3], [4, 5]]</li><li>[0, 1, 2, 3, 4, 5], 4 should return [[0, 1, 2, 3], [4, 5]]</li><li>[0, 1, 2, 3, 4, 5, 6], 3 should return [[0, 1, 2], [3, 4, 5], [6]]</li><li>[0, 1, 2, 3, 4, 5, 6, 7, 8], 4 should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]</li><li>[0, 1, 2, 3, 4, 5, 6, 7, 8], 2 should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]</li>";
//      document.getElementById("textbox").placeholder = "[0, 1, 2, 3, 4, 5], 3";
//      break;
      
    default:
      //do nothing;
  }
}
//end page setup


//Basic Algorithm Scripts

//convert celsius to fahrenheit
function convertToF(celsius) {
  var fahrenheit;
  const tempFahrenheit = (celsius * (9 / 5) + 32);
  fahrenheit = tempFahrenheit.toFixed(0);
  return fahrenheit;
}

//convert from fahrenheit to celsius
function convertToC(fahrenheit) {
  var celsius;
  const tempCelsius = ((fahrenheit - 32) * (5/9));
  celsius = tempCelsius.toFixed(0);
  return celsius;
}

//reverse a string
function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

//factorialize a positive integer
function factorialize(num) {
  var answer = 0;
  if (num == 0) {
    answer = 1;
  } else {
    answer = num * factorialize(num - 1);
  }
  return answer;
}

//find the longest word in a string
function findLongestWordLength(str) {
  var eachWord = str.split(" ");
  var longestWord = 0;
  //  console.log("Split words are ",eachWord);
  for (var i = 0; i < eachWord.length; i++) {
    if (eachWord[i].length > longestWord) {
      longestWord = eachWord[i].length;
    }
  }
  return longestWord;
}

//find the largest numbers in an array of numbers
//function largestOfFour(arr) {
//  var largestArr = [];
//  for (var i = 0; i < arr.length; i++) {
//    var largestNum = arr[i][0];
//    for (var j = 0; j < arr[i].length; j++) {
//      if (arr[i][j] > largestNum) {
//        largestNum = arr[i][j];
//      }
//    }
//    largestArr.push(largestNum);
//  }
//  return largestArr;
//}

//confirm the ending is the same
function confirmEnding(str, target) {
  var doesIt = "";
  doesIt = str.indexOf(target, str.length - target.length) !== -1;
  return doesIt;
}

//repeat a string n number of times
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    str = str + repeatStringNumTimes(str, num - 1);
  }
  return str;
}

//truncate a string
function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num) + '...';
  } else {
    return str;
  }
}

//return first element in an array that passes a truth test
//function findElement(arr, func) {
//  let num;
//  for (let i = 0; i < arr.length; i++) {
//    if (func(arr[i]) === true) {
//      num = arr[i];
//      return num;
//    }
//  }
//}

//check if a value is a boolean primitive
//function booWho(bool) {
//  return (bool) === false || (bool) === true;
//}

//uppercase the first letter of each word in a sentence, all other letters lowercase
function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  let capitalWords = [];
  for (let i = 0; i < words.length; i++) {
    capitalWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return capitalWords.join(' ');
}

//slice & splice
//function frankenSplice(arr1, arr2, n) {
//  let newArray = arr2.slice();
//  for (let i = 0; i < arr1.length; i++) {
//    newArray.splice(n, 0, arr1[i]);
//    n++;
//  }
//  return newArray;
//}

//remove all fasly values from an array
//function bouncer(arr) {
//  return arr.filter(Boolean);
//}

//where does it belong
//function getIndexToIns(arr, num) {
//  arr.sort(function (a, b) {
//    return a - b;
//  });
//
//  for (var a = 0; a < arr.length; a++) {
//    if (arr[a] >= num)
//      return a;
//  }
//  return arr.length;
//}

//mutations
//function mutation(arr) {
//  let lower = arr[1].toLowerCase();
//  let target = arr[0].toLowerCase();
//  for (var i = 0; i < lower.length; i++) {
//    if (target.indexOf(lower[i]) < 0)
//      return false;
//  }
//  return true;
//}

//chunky monkey
//function chunkArrayInGroups(arr, size) {
//  let newArray = [];
//  let finalArray = [];
//
//  for (let i = 0; i < arr.length; i++) {
//    if (i % size !== size - 1)
//      newArray.push(arr[i]);
//    else {
//      newArray.push(arr[i]);
//      finalArray.push(newArray);
//      newArray = [];
//    }
//  }
//
//  if (newArray.length !== 0)
//    finalArray.push(newArray);
//  return finalArray;
//}

//End scripts

//populate the output area
function userInput(script, str) {
  "use strict";
  script = document.getElementById("dropdown").value;
  let userInput = document.getElementById("textbox").value;
  let userInput2 = document.getElementById("number").value;
  var output = '';

  switch (script) {
    case ("cToF"):
      var faren = convertToF(userInput);
      output = `${userInput}°C equals ${faren}°F`;
      console.log('output=', output);
      break;
      
    case ("fToC"):
      var celsius = convertToC(userInput);
      output = `${userInput}°F equals ${celsius}°C`;
      console.log('output=', output);
      break;

    case ("revString"):
      output = reverseString(userInput);
      console.log('output=', output);
      break;

    case ("factorial"):
      if (userInput <0) {
        output = "Input must be 0 or greater";
      } else {
        var factorialNum = factorialize(userInput);
        output = `${userInput}! = ${factorialNum}`;
        console.log('output=', output);
      }
      break;

    case ("longest"):
      var longestLength = findLongestWordLength(userInput);
      output = `The longest word is ${longestLength} characters`;
      console.log('output=', output);
      break;

//    case ("largestNums"):
//      output = largestOfFour(userInput);
//      console.log('output=', output);
//      break;

    case ("ending"):
      output = confirmEnding(userInput, userInput2);
      console.log('output=', output);
      break;

    case ("repeat"):
      if (isNaN(userInput2)) {
        output = "The second argument must be an integer";
      } else {
        output = repeatStringNumTimes(userInput, userInput2);
        console.log('output=', output);
      }
      break;

    case ("truncate"):
      output = truncateString(userInput, userInput2);
      console.log('output=', output);
      break;

//    case ("find"):
//      output = findElement(userInput);
//      console.log('output=', output);
//      break;

//    case ("bool"):
//      output = booWho(userInput);
//      console.log('output=', output);
//      break;

    case ("titleCase"):
      output = titleCase(userInput);
      console.log('output=', output);
      break;

//    case ("sliceSplice"):
//      output = frankenSplice(userInput);
//      console.log('output=', output);
//      break;

//    case ("falsy"):
//      output = bouncer(userInput);
//      console.log('output=', output);
//      break;

//    case ("belongs"):
//      output = getIndexToIns(userInput);
//      console.log('output=', output);
//      break;

//    case ("mutate"):
//      output = mutation(userInput);
//      console.log('output=', output);
//      break;

//    case ("chunks"):
//      output = chunkArrayInGroups(userInput);
//      console.log('output=', output);
//      break;
      
    default:
      //do nothing;
  }
  document.getElementById("output-area").innerHTML = output;
}

document.getElementById("dropdown").onchange = function() {dropdownChoice()};
