// Predict and explain first...

// Predict the output of the following code:
/* =============> As we're not assigning an argument to the function, it takes it from the global
variable 'num (103)', so it will log the same result 3 times without using the inputs in the function calls.*/  

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
/* =============> write the output here
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3*/

// Explain why the output is the way it is
/* =============> It reads the global variable num first, so it ignores any input we give it when calling the function.*/

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
/*If we want the function call to apply the inputs we pass, instead of declaring the global variable,
we could declare num as parameter for the function so the function will be able to use the inputs.*/

