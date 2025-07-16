 function calculate(operator) {
      let a = parseFloat(document.getElementById('num1').value);
      let b = parseFloat(document.getElementById('num2').value);
      let output;

      switch (operator) {
        case '+':
          output = a + b;
          break;
        case '-':
          output = a - b;
          break;
        case '*':
          output = a * b;
          break;
        case '/':
          if (b === 0) {
            output = "Cannot divide by zero";
          } else {
            output = a / b;
          }
          break;
        default:
          output = "Invalid operation";
      }

      document.getElementById('result').innerText = "Result: " + output;
    }