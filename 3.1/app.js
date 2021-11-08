// const power= (a) => a**2;
const power=(a)=> { return a**2;}

console.log(power(2));

// const squareRoot=(;(a)=>{Math.sqrt(a)})();

 ((a)=> {let res= Math.sqrt(a);
console.log (res); })(3);

((a,b)=> {let res= Math.random() * (a - b) + b;
    console.log(res)})();