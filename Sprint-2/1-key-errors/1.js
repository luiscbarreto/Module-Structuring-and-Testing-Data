// Predict and explain first...

// Why will an error occur when this program runs?
/* =============> I think it will throw an error due to declaring a variable with an already declared name inside 
of the function.*/

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> Indeed the function threw an error because decimalNumber had already been declared.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.89));
