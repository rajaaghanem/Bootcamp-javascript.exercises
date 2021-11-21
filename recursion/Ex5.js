function BinarySearch(arr ,x){
   let res= BinarySearchInner(arr, x , 0, arr.length-1);
   return res;
}

function BinarySearchInner(arr,x , i, j){
    let half= Math.floor((i+j)/2);
    if (arr[half]===x) return half;
    if (j<i) return -1;

    return (arr[half]> x)? BinarySearchInner(arr, x, i, half-1): BinarySearchInner(arr, x, half+1, j );
}


//testing
console.log(BinarySearch([1,2,5,7,8], 8));
console.log(BinarySearch([1,2,5,7,8], 5));
console.log(BinarySearch([1,2,5,7,8,10], 7));
console.log(BinarySearch([1,2,5,7,8,10], 10));
console.log(BinarySearch([1,2,5,7,8,10], 1));
console.log(BinarySearch([1,2,5,7,8,10], 3));


