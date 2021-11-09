function div7(num){
    let numbersArr=[];
    for (let i=1; i<=num; i++){
        let str=String(i);
        if (str.includes('7') && (i%7 === 0)) 
        numbersArr.push("BOOM-BOOM");
        else if (i%7 === 0) 
        numbersArr.push("BOOM");
        else  numbersArr.push(i);
    }
   console.log(numbersArr.toString()) ;
}


div7(70);