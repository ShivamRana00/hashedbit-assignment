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
