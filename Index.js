// String Manipulation Functions

// Reversed String
 function reverseString(str) {
     let reversed = "";

     for (let i = str.length -1; i >= 0; i--) {
         reversed += str[i];
     }
     return reversed;
 }

 console.log(reverseString("I am a web developer"))

// Count Characters
 function countCharacters(str) {
     let count = 0;

     for (let i = 0; i < str.length; i++) {
         count++;
     }

     return count;
 }

 console.log(countCharacters("WebDeveloper"))

// Capitalize Words
 function capitalizeWords(sentence) {
     let words = sentence.split(" ");
     let result = "";

     for (let i = 0; i < words.length; i++) {
         let word = words[i];

         let capitalized = 
         word.charAt(0).toUpperCase() + word.slice(1);

         result += capitalized + " ";
     }
     return result.trim();
 }

// console.log(capitalizeWords("i am a web developer"));

// Find Maximum in an Array
 function findMax(arr) {
     let max = arr[0];

     for (let i = 1; i < arr.length; i++) {
         if (arr[i] > max) {
             max = arr[i];
         }
     }
     return max;
 }

 console.log(findMax([5, 1, 9, 32, 6, 90, 3]));
 
 
 // Find Minimum in an Array
 function findMin(arr) {
     let min = arr[0];

     for (let i = 1; i < arr.length; i++) {
         if (arr[i] < min) {
             min = arr[i];
         }
     }
     return min;
 }

 console.log(findMin([32, 9, 3, 7, 10, 2]));


// Sum of Array
 function sumArray(arr) {
     let sum = 0;
     for (let num of arr) {
         sum += num;
     }
     return sum;
 }

 console.log(sumArray([32, 9, 3, 7, 10, 2]));


 // Filter Array  Based On Condition
 function filterArray(arr, condition){
     let result = [];
         for (let i = 0; i < arr.length; i++) {
             if (condition(arr[i])) {
                 result.push(arr[i]);
             }
         }
         return result;
 }

 console.log(filterArray([2, 6, 8, 3, 4, 1, 10, 5], n=> n < 5));


//Mathematical Functions

// Factorial
 function factorial(n) {
     let result = 1;

     for (let i = 1; i <= n; i++) {
         result *= i;
     }

     return result;
 }

 console.log(factorial(10));


// Prime Number
 function isPrime(num) {
     if (num <= 1) return false;

     for (let i = 2; i < num; i++) {
         if (num % i === 0) {
             return false;
         }
       
     }

     return true;
 }

 console.log(isPrime(7));


// Fibonacci Sequence
 function fibonacci(n) {
     let sequence = [0, 1];

     for (let i = 2; i < n; i++) {
         sequence.push(sequence[i - 1] + sequence[i - 2]);
     }

     return sequence.slice(0, n);
 }

 console.log(fibonacci(10));
