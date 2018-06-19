'use strict';

let counter = 0;



// Even or Odd------------------------------------------------
//--This function is O(1)
//--The value can be 1B or 1 and it performs 1 operation
function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}

// Are you here?----------------------------------------------
//--This function is O(n^2)
//--First loop goes through say (1000x) and for every time it loops through It will loop through the
//second array 1000x

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

let arr1 = [1,2,3,4,5,];
let arr2 = [2,4,6,8,1];


// Doubler----------------------------------------------------
//--This function is O(n) 
//-- It performs 1 function in direct size to the array input

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Naive Search-----------------------------------------------
// O(1) vs. O(log n) vs. O(n) vs. O(n log(n)) vs. O(n^2) vs. O(2^n) vs. O(n!)
//--This function is O(n)
//--It performs a single function in direct corealation to the input size

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// Creating pairs---------------------------------------------
// O(1) vs. O(log n) vs. O(n) vs. O(n log(n)) vs. O(n^2) vs. O(2^n) vs. O(n!)
//-- This function is O(n^2) 
//-- This first loop will run the second loop the amount of times in direct length to the array 
//-- example (1 loop = 1 operation), (2 loops = 4 ops ) , (3 loops = 9 ops)

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      counter+=1;
      // console.log(arr[i] + ', ' +  arr[j] );
    }
  }
  console.log(counter);
  counter = 0;
}


//    if arr.length is 5 .. operations performed is? = 10 = 25
//    if arr.length is 10 .. operations performed is? = 45 = 100
//    if arr.length is 100 .. operations performed is? = 4950 = 10000
//createPairs(100);


// Fibonacci--------------------------------------------------
//--This function is O(n)
//--It runs the same amount of operations in direct increase of (n)
// examples (2 loops = 2 functions), (4 loops = 4 functions), (10 loops = 10 functions)
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i == 2) {
      result.push(1);
    }

    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
 
  return result;
}

// Effecient Search----------------------------------------------
//--This function is O(log n)
//--This function takes an array and divides it in half
//--Example lengths (10 = 5) , (20 = 10)
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// Random element------------------------------------------------
//--This function is O(1)
//--It performs 1 operation regardless the size of input
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Is it prime?--------------------------------------------------
//--This function is O(n)
//--It performs a check on all numbers up to number to see if it's prime
//--Example (23 gets 23 operations) (41 gets 41 operations)
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}



