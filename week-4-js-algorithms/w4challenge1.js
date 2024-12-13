// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
// Usage examples:
function findLongestString(array){
    let longest = '';
  
    for(let i=0; i<array.length; i++ ){
    const element = array[i];
    if (element.length > longest.length){
        longest = element;
    }
    
  }
  return longest;
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
 console.log(findLongestString(["one", "two", "three"])); // "three"
 console.log(findLongestString(["1", "22", "333"])); // "333"