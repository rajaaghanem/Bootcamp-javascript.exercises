function describeCountry(country, population, capitalCity){
    let str =`${country} has ${population} people and its capital city is ${capitalCity}`;
    return str;
}

let str1 = describeCountry("Italy","60,317,116","Rome");
console.log(str1);
let str2 = describeCountry("Spain","47,450,795","Madrid");
console.log(str2);

