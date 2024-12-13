// Challenge 1: Square All Numbers
// Write a function that takes an array of numbers and returns a new array with each number squared.
// Usage examples:

function squareNumbers(arr){

let squareNumber = [];

for( let i = 0; i < arr.length; i++){

    squareNumber.push(arr[i] * arr[i]) 
}
return squareNumber;
}


 console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
 console.log(squareNumbers([10, 20, 30, 40, 50])); // [100, 400, 900, 1600, 2500]



 // Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers.
// Usage examples:

function findOddNumbers(array){

 let oddNumbers = [];

 for(let i = 0; i <array.length; i++){

    if(array[i] % 2 !==0){
        oddNumbers.push(array[i]);
    }
 }
return oddNumbers;
}

 console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
 console.log(findOddNumbers([2, 4, 6, 8, 10])); // []