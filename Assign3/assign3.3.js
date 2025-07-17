// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
let arr = ['I', 'N', 'D', 'I', 'A'];

// Replace from index 3: remove 2 items and add the rest of 'ONESIA'
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');

console.log(arr.join(''));
