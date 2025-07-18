function scopeExample() {
  if (true) {
    var x = "I am var";      // Function-scoped
    let y = "I am let";      // Block-scoped
    const z = "I am const";  // Block-scoped

    console.log("Inside block:");
    console.log("var:", x);  // ✅ Works
    console.log("let:", y);  // ✅ Works
    console.log("const:", z); // ✅ Works
  }

  console.log("Outside block:");
  console.log("var:", x);    // ✅ Works: function-scoped

  try {
    console.log("let:", y);  // ❌ Error: y is not defined outside the block
  } catch (err) {
    console.log("let: Error -", err.message);
  }

  try {
    console.log("const:", z); // ❌ Error: z is not defined outside the block
  } catch (err) {
    console.log("const: Error -", err.message);
  }
}

scopeExample();
