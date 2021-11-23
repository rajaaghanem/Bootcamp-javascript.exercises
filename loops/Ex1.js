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

console.log("count :",countX(24,8));

