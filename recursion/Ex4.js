function pow(exponent, number){
  return  (exponent===0)? 1: pow(exponent-1, number)*number;

}

console.log(pow(2,4));
console.log(pow(2,3));

