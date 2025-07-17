//  Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
  let words = paragraph.trim().split(/\s+/);
  return words.length;
}

// Example:
let para = "India is my beautiful country. I love it.";
console.log(countWords(para)); // Output: 8
