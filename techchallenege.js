// Instructions
// You are given three arrays of equal size. Each array has 1 million RANDOM integer values.

// Assume that each array is already sorted in ascending order and that no individual array has any duplicate values.

// Your goal is to write a method/function that will return an array of any/all values which are present in all three arrays.

// Bonus: Once you’ve found a working solution, try to optimize to run in O(n) time and 1x space complexity.

// Small Scale Example Below

// start with
//    nums1 = [1, 2, 4, 5, 8]
//    nums2 = [2, 3, 5, 7, 9]
//    nums3 = [1, 2, 5, 8, 9]

// create method to generate 1,000,000 integers afterwards

// #JavaScript
//     nums1 = [1, 2, 4, 5, 8]
//     nums2 = [2, 3, 5, 7, 9]
//     nums3 = [1, 2, 5, 8, 9]
//     findMatches(nums1, nums2, nums3)
//     => [2, 5]

// (input) function - take in three arrays
// (output) an array of all the matching in each array

nums1 = [1, 2, 4, 5, 8, 10, 11, 14, 16,457474674]
nums2 = [2, 3, 5, 7, 9, 10, 11, 34, 56]
nums3 = [1, 2, 5, 8, 9, 10, 56, 3454]

function findMatches(array1, array2, array3) {
// find all values that are present in all three arrays
// reduce - look at each number in array1 and see if it is equal to every number in array 2, 
// if yes, then look at each number in array3. 
// if yes add number to accumulator

  return array1.reduce((acc, number) => {
    if(array2.includes(number) && (array3.includes(number)))  {
        acc.push(number)
    }

    return acc
  }, [])
}

console.log("findMatches:", findMatches(nums1, nums2, nums3))

const nums1 = [1, 2, 4, 5, 8, 10, 11, 14];
const nums2 = [2, 3, 5, 7, 9, 10, 11, 34];
const nums3 = [1, 2, 5, 8, 9, 10, 56, 3454];

const set2 = new Set(nums2)
const set3 = new Set(nums3)

function findMatches(array1, array2, array3) {
  return array1.filter((number) => array2.has(number) && array3.has(number));
}

console.log("findMatches:", findMatches(nums1, set2, set3));