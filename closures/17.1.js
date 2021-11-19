// 1 :

//! if we console.log the last line we will get 5, the inner function has access to the outer function variables.
// var b = 1;
// function someFunction(number) {

//  function otherFunction(input) {
//  return b;
//  }
//  b = 5;
//  return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);


//2 

//! 1 , a is function scoped, it doesn't changing outside the function scope.

var a = 1;
function b2() {
 a = 10;
 return;
 function a() { }
}
b2();
console.log(a);


//3

//!

let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
}


