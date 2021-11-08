function avrage(a,b,c){
    let res = (a+b+c)/3;
    return res;
}

function bigger(a,b){
    if (a>b) return a;
    if (a<b) return b;
    if (a===b) return -1;
}

let team1= avrage(89,120,103);
let team2= avrage(116,94,123);

let winner=bigger (team1,team2);

if (winner=== -1) console.log("tiko");
else if(winner === team1) console.log(`John's team win with ${team1} points!`);
else console.log(`Mike's team win with ${team2} points!`);

