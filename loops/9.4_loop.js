function steps(n){
    
    for(let i=0; i<n; i++){
        let str=" ";
        for(let j=0; j<n; j++){
            if(j<=i)
            str = str +"#";
            else str = str + " ";
        }
    console.log(str);
    }
}

steps(3);