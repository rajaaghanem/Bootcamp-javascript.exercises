// 1 :

//! return undefined 2 
//! var a is defined after the console.log(a), to fix it we can definde it before.
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;

    function foo() {
    return 2;
    }
   }
   funcA();

// 2 :
//! return : Aurelio De Rosa John Doe
var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//3 :

//! return undefined number
function funcB() {
    let a = b = 0;
    a++;
    
    return a;
   }
   funcB();
   console.log(typeof a);
   console.log(typeof b);


//4 :

//! return 2 2
function funcC() {
    console.log("1");
   }
   funcC();
   function funcC() {
    console.log("2");
   }
   funcC();

// 5 :

//! ReferenceError: e is not defined
function funcD1() {
    d = 1;
   }
   funcD1();
   console.log(d);
   function funcD2() {
    var e = 1;
   }
   funcD2();
//    console.log(e);

// 6 :

//! Value of f in global scope:  undefined
//! Value of f in local scope:  1

function funcE() {
    console.log("Value of f in local scope: ", f);
   }
   console.log("Value of f in global scope: ", f);
   var f = 1;
   funcE();
