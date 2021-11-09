function countryToLiveIn(language, isIsland, population, country){
    if (language!="hebrew" || isIsland===true || population<9000000)
    console.log (`${country} does not meet your criteria`);
    else console.log (` You should live in ${country}`);
}

countryToLiveIn("english", true, 50000000, "Israel" );