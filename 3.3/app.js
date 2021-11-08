
//* function declaration

function percentageOfWorld1(population){
const worldPop= 7900000000;
let res = (population/worldPop)*100;
return res;
}
//! console
console.log("china is "+ percentageOfWorld1(1441000000) 
+"%"+"of the world");

console.log("Montenegro  is "+ percentageOfWorld1(1441000000) 
+"%"+" of the world");

console.log("Spain is "+ percentageOfWorld1(1441000000) 
+"%"+" of the world");

//* function expression

const percentageOfWorld2=(population)=>{ 
    const worldPop= 7900000000;
    let res = (population/worldPop)*100;
    return res;};

//! console

console.log("china is "+ percentageOfWorld2(1441000000) 
+"%"+" of the world");

console.log("Montenegro  is "+ percentageOfWorld2(1441000000) 
+"%"+" of the world");

console.log("Spain is "+ percentageOfWorld2(1441000000) 
+"%"+" of the world");
