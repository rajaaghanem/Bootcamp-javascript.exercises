
let population = [9000000, 1200000, 400099,30000000];

function populationPercentages(population){
    let percentages=[];
    for (let i=0; i<population.length; i++){
        let res = percentageOfWorld1(population[i]);
        percentages.push(res+ "%");
    }
    return percentages;
}

function percentageOfWorld1(population){
    const worldPop= 7900000000;
    let res = (population/worldPop)*100;
    return res;
}


let result= populationPercentages(population);
console.log(result);

