"use strict";
// a filter array is declared where, one param will be an array of type T. the condition will be about an element of type T that will return a boolean value
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(arr, (num) => num % 2 === 0);
console.log(evenNumbers);
const stringArray = ['apple', 'banana', 'cherry', 'date'];
const shortWords = filterArray(stringArray, (word) => word.length < 6);
console.log(shortWords);
const fruitArray = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: "yellow" },
    { name: "cherry", color: "red" }
];
const redFruit = filterArray(fruitArray, (f) => f.color === 'red');
console.log(redFruit);
