// Code Challenges

// 12/20/24
// Instructions
// A palindrome is any number, word, or phrase that reads the same forward as it does backward. In this challenge, we are going to focus on palindromic numbers. For example, 12321 is a palindromic number, whereas 123 is not.

// Your goal is to write a method/function that takes in an integer and returns the next palindrome. It is safe to assume you are working with only whole numbers, no decimals, and no negatives.


// create a function that takes in a number
// add 1 to the number to get the next number
// check if the number is a palindrome by converting it to a string and comparing it to its reverse
// if it is a palindrome return the number
// if not, add 1 and repeat

function findNextPalindrome(number) {
  let num = number + 1;

  while (true) {
    if (num.toString() === num.toString().split('').reverse().join('')) {
      return num;
    }

    num++;
  }
}

// console.log('findNextPalindrome:', findNextPalindrome(123));

// 1/6/25

// A palindrome is any number, word, or phrase that reads the same forward as it does backward. In this challenge, we are going to focus on palindromic numbers. For example, 12321 is a palindromic number, whereas 123 is not.

// Write a method/function that starts at 0 and finds the first twenty-five numbers where the number plus its inverse equals a palindrome that is greater than 1,000.

// 47(number) + 74(inverse) = 121(palindrome) Note: This does not meet the greater than 1,000 rule.

// Collect the twenty-five numbers in an array as the return value. Be sure to collect the number and not the sum.

// Start a 0
// Find the first 25 numbers where the number plus its inverse equals a palindrome that is greater than 1,000
// Collect the 25 numbers in an array as the return value

// start at 0 add it to its inverse
// Check if that number is a palindrome
// Check if that number is more than 1000

// function palindromicSum() {
//   results = []
  // add number to its inverse
  // check if that number is over 1000
  // if yes, check if that that number is a palindrome
  // if yes, put in results array
  // if results.length === 25 return
// }

function palindromicSum() {
  const results = [];
  let num = 200;

  while (results.length < 25) {
    const inverse = parseInt(num.toString().split('').reverse().join(''), 10);
    const sum = num + inverse;

    if (sum > 1000 && sum.toString() === sum.toString().split('').reverse().join('')) {
      results.push(num);
    }

    num++;
  }

  return results;
}

// Test
// console.log(palindromicSum());


// In Ruby

// def palindromic_sum
//     results = []
//     num = 200
  
//     until results.size == 30
//       inverse = num.to_s.reverse.to_i
//       sum = num + inverse
//       if sum > 1000 && sum.to_s == sum.to_s.reverse
//         results << num
//         # require 'pry'; binding.pry
//       end
//       num += 1
//     end
  
//     results
//   end
  
//   # Test
// puts palindromic_sum.inspect


// task - reverse a string
// reverseString("hello"); // Output: "olleh"
// reverseString("JavaScript"); // Output: "tpircSavaJ"

function reverseString(string) {
  let newString = ''
  newString = string.split('').reverse().join('')
  return newString
}

// console.log("reverse string:", reverseString("hello"))





// ************   *************
// Use an object to count how many times each element appears in the array.

const findMostFrequent = (arr) => {
  if (arr.length === 0 ) return null

  const counts = {};

  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }

  console.log(counts);
}
  // map over the array 
  // for each instance of a new element create a key with a count of 1
  // if the key exists then add 1 to the count
  // after that runs you will compare to see which is the largest
  // if the map runs and there are no objects, return null





// console.log(findMostFrequent([1, 3, 3, 2, 1, 3, 1]))
// Output: 3 (or 1, as both appear 3 times)

// console.log(findMostFrequent(['a', 'b', 'a', 'c', 'b', 'a']))
// Output: 'a'

// console.log(findMostFrequent([]))
// Output: null (Empty array case)

// *********************
// You have an array which contains all numbers from 1 to 1 million.
// The numbers are randomly ordered/shuffled in the array.
// One number is in the array twice, also at some random location.
// How might you find the duplicate value?

// 1st sort array 
// then check index position 0 and 1 for equality
// if not true then move to checking position 
//
//let millionArray = [5,1,3,7,8,0,3,9,4,2]

// function findDupe(arr) {
//   let sorted = arr.sort((a,b) => a - b)

//   for (let i = 0; i <= arr.length; i ++) {
//     if (sorted[i] === sorted[i + 1]) {
//       return sorted[i]
//     }  
//   }
// }

// console.log(findDupe(millionArray))
// //
//1. Reverse a String

// Write a function called reverseString that takes a string as input and returns the string reversed.

function reverseString(string) {
  return string.split('').reverse().join('')
} 

// console.log(reverseString("Cheese"))

// reverse reverses the order of separate things not a mirror image of something, so it needs to be split first

// *************************

// 2. Sum of Numbers

// Write a function called sumNumbers that takes an array of numbers and returns the sum of all the numbers in the array.

function sumOfNumbers(nums) {
  return nums.reduce((acc, currentValue) => acc + currentValue)
} 

// console.log(sumOfNumbers([2, 5, 7, 9]))

// *****************
//
// 3. Check Even or Odd

// Write a function called isEven that takes a number as input and returns true if the number is even, or false if it is odd.
//
// Function takes a number as an argument
// Divides that number by 2
// if number has a remainder then it is odd and return false
// if number does not have a remainder return true

function findEven(num) {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

// console.log (findEven(7))
// console.log (findEven(1))
// console.log (findEven(4))
// console.log (findEven(0))
// console.log (findEven(800))


// ******************
// write a function that checks if a word is included in an array of words

// array = ["beet", "bears", "battle"]

// function findWord(array, word) {
//   if (array.includes(word)) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(findWord(array, "beets"))
// console.log(findWord(array, "beet"))
// console.log(findWord(array, "battlestar galactica"))

//in ruby
// def stands for define - to define a method

// array = ["beet", "bears", "battle"]

// def find_word(array, word)
//   if array.include?(word)
//     true
//   else
//     false
//   end
// end

// puts find_word(array, "beets")              # Output: false
// puts find_word(array, "beet")               # Output: true
// puts find_word(array, "battlestar galactica") # Output: false

// write a function that can find a word from a sentence

sentence = "This is a full sentence."

function findWord(sentence, word) {
  if (sentence.split(' ').includes(word)) {
    return true
  } else {
    return false
  }
}

// console.log(findWord(sentence, "chair"))
// console.log(findWord(sentence, "a"))
// console.log(findWord(sentence, "i"))
// console.log(findWord(sentence, "full"))

// 2. Count Vowels

// Write a function called countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

// write a function that takes in a string
// within the function use .split('') to break the string into individual strings
// create a variable = count, that starts at 0
// iterate (foreach) over strings - if string is a, e, i, o , or u count += 1
// return count
// console.log function with multiple strings some with and one without vowels

function countVowels(string) {
  let count = 0
  let splitWord = string.split('')
  splitWord.forEach(word => {
    if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u"){
      count += 1
    }
  });
  return count
}

// console.log(countVowels('apples'))
// console.log(countVowels('chess'))
// console.log(countVowels('eeeeeeeee'))
// console.log(countVowels('npm'))

// 3. FizzBuzz

// Write a function called fizzBuzz that takes a number n and prints the numbers from 1 to n. For multiples of 3, print “Fizz” instead of the number, and for multiples of 5, print “Buzz”. For numbers divisible by both, print “FizzBuzz”.

// write a function that takes a number as an argument
// returns every number from 1 to that number
// if printed number is a multiple of 3 print fizz instead
// if printed number is a multiple of 5 print buzz instead
// if printed number is a multiple of 3 and 5 print fizzbuzz instead
//
function fizzBuzz(number){
  let nums = []
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      nums.push("FizzBuzz")
    } else if (i % 3 === 0) {
      nums.push('Fizz') 
    } else if (i % 5 === 0) {
      nums.push('Buzz')
    } else {
      nums.push(i)
    }
  }
  return nums
}

// console.log(fizzBuzz(15))

//1/22/25