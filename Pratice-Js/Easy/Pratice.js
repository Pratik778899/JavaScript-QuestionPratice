// let numbers = [3, 7, 2, 9, 1];

// function findLargestElement(numbers) {
//   let store = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= store) {
//       store = numbers[i];
//     }
//   }
//   return store;
// }

// console.log(findLargestElement(numbers));

// function isAnagram(str1, str2) {
//   let cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
//   let cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

// //   if (cleanStr1 != cleanStr2) {
// //     return false;
// //   }

//   const StoreStr1 = cleanStr1.split('').sort().join('');
//   const StoreStr2 = cleanStr2.split('').sort().join('');

//   return StoreStr1 === StoreStr2;
// }

// console.log(isAnagram("School MASTER", "The ClassROOMm"));

// function calculateTotalSpentByCategory(transactions) {
//   const categoryMap = {};

//   transactions.forEach(item => {
//     const { category, price } = item;
//     if (!categoryMap[category]) {
//       categoryMap[category] = 0;
//     }
//     categoryMap[category] += price;
//   });

//   const result = Object.keys(categoryMap).map(category => ({
//     category,
//     totalSpent: categoryMap[category],
//   }));

//   return result;
// }

// let tran = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656105600000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656134400000,
//     price: 30,
//     category: "Food",
//     itemName: "Sushi",
//   },
// ];

// console.log(calculateTotalSpentByCategory(tran));

// function countVowels(str) {
//   // Your code here
//   let numberCount = 0;
//   let vowels = ["a", "e", "i", "o", "u"];

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (vowels.includes(char)) {
//       numberCount++;
//     }
//   }
//   return numberCount;
// }

// console.log(countVowels("OpenAI"));

// function isPalindrome(str) {
//   let reverceStr = str.split("").reverse().join("");
//   if (str === reverceStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("nan"));

// Question:

// Given an array of integers, write a function to determine if any two numbers in the array sum up to a specific target value. If such a pair exists, return true; otherwise, return false.

// function twoSum(nums, target) {
//   // Your code here
//   for (let i = 0; i < nums.length; i++) {
//     let num = 0;
//     for (let j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j];
//       //   console.log(match);
//       if (sum === target) {
//         return true;
//       }
//     }
//     return false;
//   }
//   // Return true or false based on whether there exists a pair that sums up to the target
// }

// // Test case
// const nums = [5, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));

// Question:

// Given an array of integers, write a function that moves all zeros to the end of the array while maintaining the relative order of the non-zero elements. Modify the array in place without using any extra space.

// function moveZeros(nums) {
//   // Your code here to move zeros to the end

//    let nonZeroIndex = 0;

//    // Move non-zero elements to the front of the array
//    for (let i = 0; i < nums.length; i++) {
//      if (nums[i] !== 0) {
//        nums[nonZeroIndex] = nums[i];
//        nonZeroIndex++;
//      }
//    }

//    for (let i = nonZeroIndex; i < nums.length; i++) {
//     nums[i] = 0;

//    }
//   // Modify the 'nums' array in place
// }

// // Test case
// const array = [0, 1, 0, 3, 12];
// moveZeros(array);
// console.log(array); // Output should be [1, 3, 12, 0, 0]

// Question:

// Given a string, write a function that returns the first non-repeating character. If no unique character exists, return an empty string.

// function firstNonRepeatingChar(str) {
//   let charFreq = {};

//   // Count the frequency of each character
//   for (let char of str) {
//     charFreq[char] = (charFreq[char] || 0) + 1;
//   }

//   // Find the first non-repeating character
//   for (let char of str) {
//     if (charFreq[char] === 1) {
//       return char;
//     }
//   }

//   return "";
// }

// // Test cases
// console.log(firstNonRepeatingChar("leetcode")); // Output should be "l"
// console.log(firstNonRepeatingChar("loveleetcode")); // Output should be "v"
// console.log(firstNonRepeatingChar("aabbcc")); // Output should be ""

// Question:

// Given a sorted array of integers and a target value, write a function that returns the index of the target value in the array. If the target is not found, return -1.

// function search(nums, target) {
//   // Your code here to search for the target value

//   for (let i = 0; i < nums.length; i++) {
//     console.log(i);
//     if (nums[i] == target) {
//       return i;
//     }
//   }

//   return -1;

//   // Return the index of the target or -1 if not found
// }

// // Test cases
// console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Output should be 4
// console.log(search([-1, 0, 3, 5, 9, 12], 2)); // Output should be -1

// Question:

// Given a string, write a function that reverses the order of characters in each word while maintaining the order of words in the string. Words are separated by a single space.

// function reverseWords(str) {
//   // Your code here to reverse the characters in each word
//   let splitWord = str.split(" ");
//   for (let i = 0; i < splitWord.length; i++) {
//     let wordRap = splitWord[i].split("");
//     wordRap.reverse();
//     splitWord[i] += wordRap.join("");
//   }
//   return splitWord.join(" ");
// }

// // Test case
// console.log(reverseWords("Let's code and have fun")); // Output should be "s'teL edoc dna evah nuf"

// function missingNumber(nums) {
//     // Your code here to find the missing number
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
//     return expectedSum - actualSum;
//     // Return the missing number
// }

// // Test cases
// console.log(missingNumber([3, 0, 1])); // Output should be 2
// console.log(missingNumber([0, 1])); // Output should be 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output should be 8
// console.log(missingNumber([0])); // Output should be 1


