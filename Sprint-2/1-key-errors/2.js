
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

/* =============> I think it will result in an error because a function uses a 'name' as parameter,
so using a specific number instead brakes the function.*/

/*function square(3) {
    return num * num;
}*/

// =============> write the error message here

/*/home/luiscbdb/Projects/MCB/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:9
function square(3) {
                ^

SyntaxError: Unexpected number
    at wrapSafe (node:internal/modules/cjs/loader:1900:18)
    at Module._compile (node:internal/modules/cjs/loader:1942:20)
    at Object..js (node:internal/modules/cjs/loader:2108:10)
    at Module.load (node:internal/modules/cjs/loader:1690:32)
    at Module._load (node:internal/modules/cjs/loader:1480:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:33:47

Node.js v26.13.0*/

/* =============> According to my understanding, the function expects an identifier as parameter, 
and a number doesn't seem to count as such.*/

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
};
console.log(square(5));