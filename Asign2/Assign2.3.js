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
