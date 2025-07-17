// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


function correctfn(str, wrong, correct) {
  return str.replace(wrong, correct); // replaces only first occurrence
}

// Example:
let result = correctfn("He is a good boi", "boi", "boy");
console.log(result);

return str.replace(new RegExp(wrong, 'g'), correct);
