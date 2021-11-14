let obj = {};
console.time("My operation");// <---- Starts the timer

for (i=0; i<1000000; i++){
    obj[i] = "hello";
}

console.timeEnd("My operation");


let map = new Map();
console.time("My operation2");
for(i=0; i<1000000; i++){
    map.set(i, "hello");
}

console.timeEnd("My operation2");
