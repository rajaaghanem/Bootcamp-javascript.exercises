function div7(num){
    for (let i=1; i<=num; i++){
        let str=String(i);
        if (str.includes('7') && (i%7 === 0)) console.log("BOOM-BOOM");
        else if (i%7 === 0) console.log("BOOM");
        else console.log(i);

    }
}


div7(18);