// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function checkScope() {
  if (true) {
    var x = 10;      
    let y = 20;      
    const z = 30;    
    console.log("Inside block:", x, y, z);
  }

  console.log("Outside block:");
  console.log("x (var):", x);   
}

checkScope();
