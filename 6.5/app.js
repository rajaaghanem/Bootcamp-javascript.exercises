let staticArr = new Array(100);

let car ={
    color:"blue",
    model: 3
}

//! 1
staticArr.fill(car, 0, 99);
console.log(staticArr);

//! 2

// let fromArr= new Array (100);

// fromArr=Array.from(Array(101).keys());
// fromArr.shift();
// console.log(fromArr);


let fromArr= Array.from(Array(100).keys()).map(i=> i+1);
console.log(fromArr);



//! 3

let obj = {1:"2", 6:"foo", 9:"4"};
let res = Object.values(obj);

console.log(res);

//! 4
let obj1= Object.assign({}, ['a','b','c']);
console.log(obj1);

//! 5

let res1 = Array.isArray(res);
console.log(res1);

//! 6 no effect

let arr1= [1,2,3]
let copy = arr1.slice();
copy.shift("hello");
console.log(copy);
console.log(arr1);

//! 7 effect
let arr2= [3,4,5];
let arr3 = arr2;
arr3.push("hello");
console.log(arr2);
console.log(arr3);
