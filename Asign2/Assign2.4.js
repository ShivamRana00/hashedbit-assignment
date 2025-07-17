// . Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
function sumOfDigitProducts(n1, n2) {
 
  let str1 = n1.toString().split('').reverse();
  let str2 = n2.toString().split('').reverse();

  let len = Math.max(str1.length, str2.length);
  let sum = 0;

  for (let i = 0; i < len; i++) {
    let digit1 = parseInt(str1[i] || 0);  
    let digit2 = parseInt(str2[i] || 0);
    sum += digit1 * digit2;
  }
  return sum;
}

console.log("First som of product on 6 and 34 is ="+sumOfDigitProducts(6, 34));     
console.log("second som of product on 123 and 456 is ="+sumOfDigitProducts(123, 456));  
console.log("First som of product on 9 and 9 is ="+sumOfDigitProducts(9, 9));      

