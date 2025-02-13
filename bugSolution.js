function foo(a, b) {
  // Explicit type checking and conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    return "Invalid input types";
  }
}

console.log(foo(1, '2')); // Output: "Invalid input types"

console.log(foo(1, 2)); // Output: 3