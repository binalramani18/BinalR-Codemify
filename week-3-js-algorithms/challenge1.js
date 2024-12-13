//1. Finish coding challenge. Create an “if statement” that checks if variable “first” is bigger than variable “second”:
const num1 = 10;
const num2 = 9;
if (num1 > num2){
    console.log('10 is bigger than 9')
}
//2 - Create a function that returns the length of a string

function getStringLength(str){
    return(str.length);
}
console.log(getStringLength('sergii'));
console.log(getStringLength('alex'));
//3 - Create a function called divideByTwo. It should accept 1 parameter, divide it by 2 and return the result of the division

function divideByTwo(numberToDevide){
    const res = numberToDevide/2;
    return res;
}
console.log(divideByTwo(6));
console.log(divideByTwo(105));
//4 - Finish the function. It accepts 2 params, adds them up and returns the sum of two
function sum(a, b) { 
  return (a+b);
}
console.log(sum(1, 2)) // 3
console.log(sum(2, 2)) // 4
console.log(sum(55, 2)) // 57
//5 - Finish the function. It should accept one parameter, 'number', check if it is greater than 5 and return true or false.
function isBiggerThan5(number) {
    if(number > 5){
      return true
    }
    else{
      return false
    }
  }
  
  console.log(isBiggerThan5(6)) // true
  console.log(isBiggerThan5(5)) // false
  console.log(isBiggerThan5(4)) // false
  console.log(isBiggerThan5(1)) // false
//6 - Finish the function. It should accept two parameters and return the larger one.
// Your code here 

function findBiggerNumber(firstNum, secondNum) {
    if(firstNum > secondNum)
    {
     return firstNum+"  "+'It is Bigger number';
    }
    else if(firstNum<secondNum)
    {
      return firstNum+"  "+'it is smaller number';
    }
    else
    {
        return firstNum+ " "+ "is equal to" + "  "+secondNum;
    }
  }

  console.log(findBiggerNumber(6, 7)) // 7
  console.log(findBiggerNumber(5, 1)) // 5
  console.log(findBiggerNumber(2, 2)) // 2
  //7 - Create the function. It should accept two string parameters and return the longer one
// Your code here
  function longerString(str1,str2){
    if (str1>str2){
      return str1 ;
  }else   
    
    return str2;
  }
  console.log(longerString('codemify', 'test')) // codemify
  console.log(longerString('automation', 'coding')) // automation
  console.log(longerString('automation', 'the codemify')) // the codemify
//8 - Equality Check. Create a function that returns true or false that matches the examples below
// Your code here

function checkEquality(ch1,ch2){
 if(ch1===ch2){
  return true;
 }else
 return false;

}
console.log(checkEquality(1, true)) // ➞ false. A number and a boolean: the value and type are different
console.log(checkEquality(0, "0")) // ➞ false. A number and a string: the type is different
console.log(checkEquality(1, 1)) // ➞ true. A number and a number: the type and value are equal
 

//9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."
// Your code hereag1,ag
function compareAge(name,age){
  const myage=25
if (myage<age)
{
  return name+" "+"is older than me";
}else if (myage>age){
  return name+" "+" is younger than me";
}else 
return "Lily is younger than me";
}
console.log(compareAge("Joel", 36)) // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 24)) // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 28)) // ➞ "Lily is oder than me."
 
