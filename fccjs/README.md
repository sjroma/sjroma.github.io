# freeCodeCamp - JavaScript  
Working through the on-line course, _JavaScript Algorithms and Data Structures_ at [freeCodeCamp](https://freecodecamp.org)  
* The course covers;  
  * **Basic JavaScript**  
    * JavaScript is a high-level programming language that all modern web browsers support. It is also one of the core technologies of the web, along with HTML and CSS that you may have learned previously. This section will cover basic JavaScript programming concepts, which range from variables and arithmetic to objects and loops.  
  * **ES6**  
    * ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the term JavaScript.  
    * Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the language are released for use by developers.  
    * The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features that will be covered in this section of challenges, including:  
      * Arrow functions
      * Classes
      * Modules
      * Promises
      * Generators
      * `let` and `const`  
  * **Regular Expressions**  
    * Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text. Regular expressions can appear cryptic because a few characters have special meaning. The goal is to combine the symbols and text into a pattern that matches what you want, but only what you want. This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.  
  * **Debugging**  
    * Debugging is a valuable and (unfortunately) necessary tool for programmers. It follows the testing phase of checking if your code works as intended, and discovering it does not. Debugging is the process of finding exactly what isn't working and fixing it. After spending time creating a brilliant block of code, it is tough realizing it may have errors. These issues generally come in three forms: 1) syntax errors that prevent a program from running, 2) runtime errors when code fails to execute or has unexpected behavior, and 3) semantic (or logical) errors when code doesn't do what it's meant to.  
    * Modern code editors (and experience) can help identify syntax errors. Semantic and runtime errors are harder to find. They may cause your program to crash, make it run forever, or give incorrect output. Think of debugging as trying to understand why your code is behaving the way it is.  
    * Example of a syntax error - often detected by the code editor:  
      ```
      funtion willNotWork( {
        console.log("Yuck");
      }
      // "function" keyword is misspelled and there's a missing parenthesis
      ```
    * Here's an example of a runtime error - often detected while the program executes:  
      ```
      function loopy() {
        while(true) {
        console.log("Hello, world!");
        }
      }
      // Calling loopy starts an infinite loop, which may crash your browser
      ```
    * Example of a semantic error - often detected after testing code output:  
      ```
      function calcAreaOfRect(w, h) {
        return w + h; // This should be w * h
      }
      let myRectArea = calcAreaOfRect(2, 3);
      // Correct syntax and the program executes, but this gives the wrong answer
      ```
    * Debugging is frustrating, but it helps to develop (and follow) a step-by-step approach to review your code. This means checking the intermediate values and types of variables to see if they are what they should be. You can start with a simple process of elimination.  
    * For example, if function A works and returns what it's supposed to, then function B may have the issue. Or start checking values in a block of code from the middle to try to cut the search space in half. A problem in one spot indicates a bug in the first half of the code. If not, it's likely in the second.  
    * This section will cover a couple of helpful tools to find bugs, and some of the common forms they take. Fortunately, debugging is a learnable skill that just requires a little patience and practice to master.  
  * **Basic Data Structures**  
    * Data can be stored and accessed in many different ways, both in Javascript and other languages. This section will teach you how to manipulate arrays, as well as access and copy the information within them. It will also teach you how to manipulate and access the data within Javascript objects, using both dot and bracket notation. When you're done with this section, you should understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose.  
  * **Basic Algorithm Scripting**  
    * A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.  
    * To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.  
    * In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.  
    * **HINT:** If you get stuck, try using `console.log()`to log variable values to the console. This will help to debug problems.  
  * **Object Oriented Programming**  
    * At its core, software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.  
    * As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.  
    * The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.  
    * Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.  
  * **Functional Programming**  
    * Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.  
    * Functional programming follows a few core principles:  
      * Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation  
      * Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data  
      * Functions have minimal side effects in the program  
    * The functional programming software development approach breaks a program into small, testable parts. This section covers basic functional programming principles in JavaScript.  
  * **Intermediate Algorithm Scripting**  
  
and then culminates with five projects for the student to complete in order to be certified.  
* The projects are;  
  [ ] Palindrome Checker  
  [ ] Roman Numeral Converter  
  [ ] Caesar Cipher  
  [ ] Telephone Number Validator  
  [ ] Cash Register 
  
##### Course description as of 16 Sep 2019

##### ~/freeCodeCamp/fccJavaScript  
