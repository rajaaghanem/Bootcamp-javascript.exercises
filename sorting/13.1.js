const numbers = [1, -5, 666, 2, 400, 11];

const asc = numbers.slice().sort((a,b)=> a-b);
const dec = numbers.slice().sort((a,b)=> b-a);

console.log(asc);
console.log(dec);