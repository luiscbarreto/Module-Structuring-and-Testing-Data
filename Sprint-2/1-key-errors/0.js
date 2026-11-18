// Predict and explain first...
/*  =============> I think it will result in an error because the variable declared inside of the function
has the same name as the parameter assigned to the function itself.*/ 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("again"));*/
// =============> write your explanation here
// I can see that, indeed, the function threw an error because str had already been declared

// =============> write your new code here

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}
console.log(capitalise("again"));