/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const welcome = () => 'Welcome to Appleseeds Bootcamp!';
const welcome = () => { return 'Welcome to Appleseeds Bootcamp!';};

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const power= (a) => a**2;
const power=(a)=> { return a**2;}

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

((a)=> {let res= Math.sqrt(a);
    console.log (res); })();

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

((a,b)=> {let res= Math.random() * (a - b) + b;
console.log(res)})(2,3);
