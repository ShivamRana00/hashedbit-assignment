//  Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return " we Cannot divide by zero";
      }
      return a / b;
    default:
      return "Please enter correct operator";
  }
}

console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*')); 
console.log(calculator(10, 5, '/'));
