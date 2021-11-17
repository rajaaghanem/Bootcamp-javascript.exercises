// 1 :

// //! 10 20 20 
// var x = 10;
// console.log(x);
// if (true) {
// var x = 20;
// console.log(x);
// }
// console.log(x);

// 2 :

//! 10 20 10

// var x = 10;
// console.log(x);
// if (true) {
// (function() {
// var x = 20;
// console.log(x);
// })();
// }
// console.log(x);
// console.log("*****");

// 3 :

//! 10 20 30 20 10

// var x = 10;
// console.log(x);
// function test()
// {
// var x = 20;
// console.log(x);
// if (x > 10) {
// let x = 30;
// console.log(x);
// }
// console.log(x);
// }
// test();
// console.log(x);
// console.log("*****"); 

// 4:

//! undefined
// var x;
// x = 10;
// function test()
// {
// var x;
// if (x > 20) {
// x = 50;
// }
// console.log(x);
// }

// test();

// 5:

//! undefined  undefined  100

// function test()
// {
// var x, y;
// if (false) {
// x = 50;
// }
// console.log(x);
// console.log(y);
// y = 100;
// console.log(y);
// }
// test();

// 6 :

//! TypeError: bar is not a function

function test()
{
foo();
bar();
// Function defiened
// using function declaration
function foo()
{
console.log('foo');
}
// Function defined
// using function expression
var bar = function() {
console.log('bar');
}
}
test();