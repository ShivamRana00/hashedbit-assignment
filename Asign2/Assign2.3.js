// You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.
function findTax(salary) {
  let tax = 0;
  let slab = 0;

  if (salary <= 5000) {
    slab = 1;
  } else if (salary <= 10000) {
    slab = 2;
  } else if (salary <= 20000) {
    slab = 3;
  } else {
    slab = 4;
  }

 
  switch (slab) {
    case 1:
      tax = 0;
      break;
    case 2:
      tax = salary * 0.10;
      break;
    case 3:
      tax = salary * 0.15;
      break;
    case 4:
      tax = salary * 0.20;
      break;
    default:
      tax = 0;
  }

  return tax;
}


console.log("First 4000 tax is ="+findTax(4000));
console.log("second 8000 on tax ="+findTax(8000));  
console.log("third 15000 on tax ="+findTax(15000)); 
console.log("fourth 30000 on tax ="+findTax(30000)); 
