// Predict and explain first...

// =============> I think this will log first 320 and then "The result of multiplying 10 and 32 is undefined"

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

/* =============>  While the console.log() inside of the function will log it's result to the console, 
the function itself has no return, so the global console.log() calling on the multiply(a, b) function 
returns the concatenated string with undefined instead of the calculation.*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
