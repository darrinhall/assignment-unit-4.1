console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}

// Remember to call the function to test
console.log(helloName('Darrin'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // firstNumber = 12;
  // secondNumber = 5;
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(12, 5));
console.log(addNumbers(94, 53));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne, numberTwo, numberThree) {
  // numberOne = 6;
  // numberTwo = 7;
  // numberThree = 4;
  return numberOne * numberTwo * numberThree;
}
console.log(multiplyThree(6, 7, 4));
console.log(multiplyThree(12, 37, 24));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    // console.log(positive);
    return true;
  }
  else {
    // console.log(negative);
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
// console.log(5);
// console.log(-3);
console.log(isPositive(7));
console.log(isPositive(-4));
console.log(isPositive(-12));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
// let array = ['football', 'baseball', 'basketball', 'tennis']
function getLast(array) {
  // if (index >= 0) {
  // return array.length-1;
  // }
  // else {
  //   return 'undefined';
  //   }

 if (array.length-1 > 0) {
  return array[array.length-1];
  }
  else {
    return 'undefined';
    }
  }
  
console.log(getLast(['football', 'baseball', 'basketball', 'tennis', 'soccer']));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return true;
    }
    // loop is done
  }
      return false;
}
console.log(find(14, [2, 4, 84, 75, 1, 92, 14, 7, 18, 37]));
console.log(find(49, [2, 4, 84, 75, 1, 92, 14, 7, 18, 37]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
