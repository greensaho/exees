function isX(value) {
  // A hypothetical function that checks some condition on value
  return value > 10;
}

const xM = null;  // xM is falsy
const m = 15;     // Some value for m

// Using the expression
const xm = xM || isX(m);

console.log(xm);  // Output: true, because isX(15) returns true
