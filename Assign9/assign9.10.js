
// const numbers = [10, 20, 30, 40, 50];
const numbers = [10, 20, 30, 40, 50];

function getSum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(getSum(numbers)); // Output: 150

