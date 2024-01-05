
// Q:1
// const originalArray = [1, 2, 3, 4, 5];
// const squaredArray = originalArray.map((element) => element * element);
// console.log(squaredArray);

// Q 2
// const originalArray = ["pepsi", "due", "sting", "marinda", "spirite"];
// const filteredAndCapital= originalArray
//   .filter((str) => str.length >= 5)
//   .map((str) => str.toUpperCase());
// console.log(filteredAndCapital);

// Q 3:
// const brand= [
//     { name: 'Product1', price: 20 },
//     { name: 'Product2', price: 15 },
//     { name: 'Product3', price: 25 },
//     { name: 'Product4', price: 18 }
//   ];
  
//   const sortedArray = brand.sort((a, b) => b.price - a.price);
//     console.log(sortedArray);

// /Q 4
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEvens = array.reduce((accumulator, currentNumber) => {
//   return currentNumber % 2 === 0 ? accumulator + currentNumber : accumulator;
// }, 0);
// console.log(sumOfEvens);

// Q 5:
// const arrayOfObjects = [
//     { id: 1, status: 'pending' },
//     { id: 2, status: 'in-progress' },
//     { id: 3, status: 'pending' },
//     { id: 4, status: 'in-progress' }
//   ];
  
//   const targetId = 3;
  
//   const targetObject = arrayOfObjects.find(obj => obj.id === targetId);
  
//   if (targetObject) {
//     targetObject.status = 'completed';
//     console.log(targetId, arrayOfObjects);
//   } else {
//     console.log(`Object with id  not found.`);
//   }
  
  // Q 6:
//   const mixedArray = [-6, 9, 3, -2, 10, -6, 4];
// const averageOfPositives = mixedArray
//   .filter(number => number > 0)
//   .reduce((sum, currentNumber, index, array) => sum + currentNumber / array.length, 0);
// const roundedAverage = averageOfPositives.toFixed(2);
// console.log(parseFloat(roundedAverage));

// Q 7:
// const profile = [
//   { name: 'rabia', age: 20 },
//   { name: 'ritika', age: 16 },
//   { name: 'wareesha', age: 30 },
//   { name: 'Doremon', age: 17 }
// ];

// function filterAdults(arrayOfPersons) {
//   return arrayOfPersons.filter(person => person.age >= 18);
// }
// const adults = filterAdults(profile);
// console.log(adults);

// Q 8:
// const arrayOfStrings = ['apple', 'banana', 'kiwi', 'grape', 'orange', 'pear', 'peach'];
// const sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length);
// console.log(sortedArray);

// // Q 9: 
// const nestedarr= [[6, 2, 5], [6, 5], [6, 7, 6]];
// const flattenedarr= nestedarr.flat();
// const sum = flattenedarr.reduce((sum, number) => sum + number, 0);
// console.log(sum);

// Q 10:
// const array = [
//   { id: 1, name: 'rabia' },
//   { id: 2, name: 'rituka' },
//   { id: 3, name: 'wareesha' }
// ];

// function findObjectById(array, targetId, defaultObject) {
//   const foundObject = array.find(obj => obj.id === targetId);

//   return foundObject || defaultObject;
// }

// const targetId = 4;
// const defaultObject = { id: targetId, name: 'Not Found' };

// const resultObject = findObjectById(array, targetId, defaultObject);
// console.log(resultObject);

// Q11
// const numbers = [1, 2, 3, 4, 5];
// // doubling each number in the array using arrow function with map()
// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers);

// Q12
// const numbers = [2, 8, 4, 10, 6, 3, 7];

// // Using filter() to extract numbers greater than 5
// const greaterThanFive = numbers.filter(number => number > 5);

// console.log(greaterThanFive);

 // Q13
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 30 }
//   ];
  
//   // Sorting people by age using a custom comparison function
//   people.sort((person1, person2) => person1.age - person2.age);
  
//   console.log(people);
   
// Q14
// const numbers = [1, 2, 3, 4, 5];

// // Computing the sum of numbers using reduce()
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); 

// Q15
// const numbers = [5, 12, 8, 3, 18];

// // Using find to find the first number greater than 10
// const firstGreaterThanTen = numbers.find(number => number > 10);
// console.log(firstGreaterThanTen); 
// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];
  //   // Finding a user by ID using find()
//   const userWithIdTwo = users.find(user => user.id === 2);
  
//   console.log(userWithIdTwo);

// //  Q 16
// const strings = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'avocado'];

// const concatenatedString = strings
//   .filter(word => word.startsWith('a')) // Filter strings starting with 'a'
//   .map(word => word.toUpperCase()) // Convert filtered strings to uppercase
//   .reduce((accumulator, currentValue) => accumulator + currentValue, ''); // Concatenate into a single string

// console.log(concatenatedString);

// Q17
// const numbers = [1, 2, 3, 4, 5];

// // Using map with a callback function to double each number
// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubledNumbers); 

// Q18

// const numbers = [];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue === undefined || currentValue === null) {
//     return accumulator; // Skip undefined or null values
//   }
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 0 (Handled for an empty array)

// Q19
// const originalArray = [1, 2, 3, 4, 5];

// const doubledArray = originalArray.map(num => num * 2);

// console.log(originalArray); 
// console.log(doubledArray); 


// Using filter to keep only numbers greater than 3:
// const originalArray = [2, 4, 6, 8, 10];

// const filteredArray = originalArray.filter(num => num > 3);

// console.log(originalArray); 
// console.log(filteredArray); 


