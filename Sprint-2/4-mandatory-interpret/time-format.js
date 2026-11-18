function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(3600));
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
/* to help you answer these questions (as the python visualizer was failing, 
I used https://www.codevisualizer.app/playground/javascript)*/

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> It will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> It is 0

// c) What is the return value of pad is called for the first time?
// =============> It returns 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
/* =============> It is 1. This represents the 1 in the end of the final result which is 00:01:01.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
/* =============> It returns 01. What the function pad is doing here is turning the input into a string, 
and adding 0s to the left of the input until it reaches 2 characters. As it is 1 character long, it only adds one 0.*/