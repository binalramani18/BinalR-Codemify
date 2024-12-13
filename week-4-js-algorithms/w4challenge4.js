// Challenge 4: //Find Numbers Greater than Ten
// Write a function to find all numbers that are larger than 10 in the array.
// Usage examples:

function findNumbersGreaterThanTen(number){
   let largerNum = [];

    for( let i = 0; i < number.length; i++){

        if( number[i] > 10){
            largerNum.push(number[i]);
        }
}
  return largerNum;

}
 console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
 console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
 console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]