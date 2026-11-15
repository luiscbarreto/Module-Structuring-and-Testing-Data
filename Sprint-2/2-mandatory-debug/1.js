// Predict and explain first...
//  =============> This will the concatenated string ending in undefined as the function has no assigned return.

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

/* =============> As the function has no assigned return, what get's added to the concatenation when the function is called
is undefined.*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
  
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);