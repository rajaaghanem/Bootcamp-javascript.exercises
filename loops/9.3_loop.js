function compare(arr1, arr2){

    if(arr1.length !== arr2.length) return false;

    for(let i=0; i<arr1.length; i++)
    if (arr1[i] !== arr2[i]) return false;

    return true;
}


//! test

const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

console.log(compare(food,food1));