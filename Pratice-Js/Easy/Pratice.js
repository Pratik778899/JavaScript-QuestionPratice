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
