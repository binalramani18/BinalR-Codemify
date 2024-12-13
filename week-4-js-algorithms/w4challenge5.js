// Challenge 5: Sum of Numbers
// Write a function to find the sum of all numbers in the array.
// Usage examples:

function sumNumbers(number){
let sum = 0;

for( let i = 0; i < number.length; i++){
    sum = sum + number[i]
}
  return sum;
}

console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
 console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
 console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15
