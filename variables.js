// how do we store data in a variable
console.log(myComputer, "1");
// console.log(myLaptop)
// console.log(myPhone);
//1. using a var keyword
var myAge = 75;

// 2. using let keyword

let myName = "John";

// 3. using const keyword

const pi = 3.14;

// assigning a value to a variable

var myColor; // declaration
myColor = "blue"; // assignment

// redeclaration of a variable

// using var keyword

var mySchool = "Zafrino";
var mySchool = "St. Mary's";

// console.log

console.log(mySchool);

// using let keyword
// let myCar = "Toyota";
// let myCar = "Nissan";

// using const keyword
// const myCountry = "Nigeria";
// const myCountry = "Ghana";

//difference 1 ==> var keyword can be redeclared but let and const cannot be redeclared

// reassigning a value to a variable
var yourAge = 75;
yourAge = 80;

// using let keyword
let yourName = "John";
yourName = "Jane";
console.log(yourName);

// using const keyword
// const yourCountry = "Nigeria";
// yourCountry = "Ghana";

// function scope
function myFunction(number1, number2) {
  var result = number1 + number2;
  return result;
}

console.log(myFunction(2, 3));

// block scope
{
}

// global variable
var myGlobal;

// local variable
// console.log(result);

// difference 2 ==> var keyword has a function scope while let and const have a block scope

function myFunction2() {
  {
    var myVar = "I am a local variable";
  }

  console.log(myVar);
}

// console.log(myVar);
myFunction2();

// var keyword is function scoped

function myFunction3() {
  {
    let myLet = "I am a local variable 2";
    console.log(myLet);
  }
}

// let keyword is block scoped
// console.log(myLet);
myFunction3();

function myFunction4() {
  console.log(x);
  {
    let myConst = "I am a local variable 3";
    console.log(myConst);
  }

  var x = 10;
}

// let keyword is block scoped
// console.log(myLet);
myFunction4();

// variable hoisting

// var myComputer = "HP";

var myComputer;
console.log(myComputer, "2");
myComputer = "HP";
console.log(myComputer, "3");
// console.log(myLaptop);
let myLaptop = "Dell";
const myPhone = "Samsung";

// var declaration is hoisted to the top of the scope but the assignment is not hoisted.
// let and const declarations are not hoisted

function myFunction5() {
  console.log(myVar);
  var myVar = "I am a local variable 5";
}

function myFunction5WhileTheCodeRuns() {
  var myVar = undefined;
  console.log(myVar, "1st");
  myVar = "I am a local variable 5";
  myVar = "klilled it"
  console.log(myVar, "second");
}

myFunction5WhileTheCodeRuns();