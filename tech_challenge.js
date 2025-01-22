// input brackets: {[]}
// output: boolean
// brackets need to be paired and be well-formed - in the right order
//create a function that takes in a parameter of a string ( which will be different kinds of brackets)
// will we only have brackets - what to do with numbers or letters or other characters

function wellFormed (input) {
  var brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  
  // set pty 
  var emptyArray = []
  // turn input into an array of strings
  var splitInput = input.split('')

  for (const i of input){
    if(i === emptyArray[emptyArray.length -1 ]) {
      emptyArray.pop()
    } else {
      emptyArray.push(brackets[i])
    }
  }

  // check if one element in the array is '{' it should have a '}' to return true otherwise false also with () and []
  if (emptyArray.length === 0 ) {
    return true
  } else {
    return false
  }
}

console.log("wellFormed", wellFormed("{[]}"))
console.log("wellFormed", wellFormed("{}"))
console.log("wellFormed", wellFormed("{[]{{"))
console.log("wellFormed", wellFormed("{}[]()"))
console.log("wellFormed", wellFormed("{[(}])"))

//Summation of Primes
// The sum of the primes below 10 is  2 +3 + 5 + 7 + 17

// Find the sum of all the primes below two million.

// input: 2,000,000
// output: sum of all prime numbers under the input 

// function sumOfPrimes(input) {
//   var primeNumbers = []

//   if(input <= 1) {
//     return false
//   }

//   return primeNumbers.reduce((acc, currentValue) => acc + currentValue, 0)
// }

// console.log("sum of primes", sumOfPrimes(2000000))