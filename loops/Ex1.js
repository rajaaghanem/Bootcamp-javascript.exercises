function printToN(n){
    for(let i=0; i<=n; i++)
    console.log(i);
}

printToN(14);

function countX(n,t){
    let count=0;
    for(let i=0; i<=n; i++){
        if(i%t===0) count++;
    }
    return count;
}

console.log("countX :",countX(24,8));

function countEven(n){
    let count=0;
    while(n>0){
        if((n%10)%2===0) count++;
        n=Math.floor(n/10);
    }
    return count;
}

console.log("countEven :", countEven(1245));

function printReverse (n){
    if (n===0) {
        console.log(n);
        return;
    } 
    console.log(n);
    printReverse(n-1);      
}

printReverse (100);