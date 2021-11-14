var hourCnt =0;
var minCnt =0;
var secCnt=0;

setInterval(sec,1000);
setInterval(mins,60000);
setInterval(hours,3600000); 

var arrayClock = [];


function hours(){
   console.log( ++hourCnt);
}

function mins(){
    console.log( ++minCnt);
}

function sec(){
    console.log( ++secCnt);
}


