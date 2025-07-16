import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalc = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res = 0;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        if (b === 0) {
          setResult("Cannot divide by 0");
          return;
        }
        res = a / b;
        break;
      default:
        return;
    }

    setResult(`Result: ${res}`);
  };

  return (
    <div>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => handleCalc('+')}>Add</button>
      <button onClick={() => handleCalc('-')}>Subtract</button>
      <button onClick={() => handleCalc('*')}>Multiply</button>
      <button onClick={() => handleCalc('/')}>Divide</button>

      <br /><br />

      <div>{result}</div>
    </div>
  );
}

export default App;
