//  Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.
let states = [
  "Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Tamil Nadu",
  "Maharashtra", "Karnataka", "Kerala", "Assam", "Rajasthan"
];

let filteredStates = states.filter(state => {
  let firstChar = state[0].toLowerCase();
  return !"aeiou".includes(firstChar);
});

console.log(filteredStates);