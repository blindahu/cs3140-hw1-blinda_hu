// Homework 1: JavaScript Fundamentals
// Name: Blinda Hu
// Date: 1/28/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr) {
   return arr.reduce((total, num) => total + num, 0);
}

function average(arr) {
    return sum(arr) / arr.length;
}

function min(arr) {
    return Math.min(...arr);
}

function max(arr) {
    return Math.max(...arr);
}
// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
    return str.charAt(0).toUpperCase()+ str.slice(1);
}

function reverse(str) {
  return str.split("").reverse.join("");
}

function countVowels(str) {
  // TODO: Return count of vowels (a, e, i, o, u)
  // "hello" -> 2
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str){
    if(vowels.includes(char)){
        count++;
    }
  }
  return count;
}
