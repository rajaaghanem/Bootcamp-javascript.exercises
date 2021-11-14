function  populationPercentages(population){
    let i = 0;
    let percentages=[];

    while (i<4){
        let res = percentageOfWorld1(population[i]);
        percentages.push(res.toFixed(2)+ "%");
        i++;
    }
    return percentages;
}


function percentageOfWorld1(population){
    const worldPop= 7900000000;
    let res = (population/worldPop)*100;
    return res;
}


//! test
let population = [9000000, 1200000, 400099,30000000];
let result= populationPercentages(population);
console.log(result);