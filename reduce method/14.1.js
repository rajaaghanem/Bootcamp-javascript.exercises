
//max
const max=[2,3,6,1,13].reduce((prev,curr)=> Math.max(prev,curr));

console.log(max);

// sum of even numbers

const sum = [9,3,6,1,13].reduce((prev,curr)=> {
   if (curr%2===0) return prev+curr;
   else return prev;
},0)

console.log(sum);


// average

const arr = [9,3,6,1,13];
const average = arr.reduce((prev,curr)=> {
    return prev+curr;
 },0)/ arr.length;
 

console.log(average);