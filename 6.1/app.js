const numArr = [1,7,3,0,-5,7,3,9];

function print(arr){

    for (let i=0; i< arr.length; i++)
    console.log (arr[i]);
}


//! length
function arrayLength(arr){
    let counter=0;
    for (let i=0; i<arr.length; i++){
        counter ++;
    }
    return counter;
}

//! sum
function arraySum(arr){
    let sum=0;
    for (let i=0; i<arr.length; i++){
        sum= sum + arr[i];
    }
    return sum;
}

//! multiplication
function arrayMulti(arr){
    let mul=arr[0];
    for (let i=1; i<arr.length; i++){
        mul= mul * arr[i];
    }
    return mul;
}


//# test

print(numArr);

let len= arrayLength(numArr);
console.log(len);

let sum= arraySum(numArr);
console.log(sum);

let mul= arrayMulti(numArr);
console.log(mul);