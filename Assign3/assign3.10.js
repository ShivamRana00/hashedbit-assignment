// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example:
let input = "Hello";
let output = reverseString(input);
console.log(output); // Output: olleH
