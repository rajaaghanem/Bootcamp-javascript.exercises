const mycountry ={
    country: "Israel",
    capital:"Jerusalem",
    language:"Hebrew",
    population: 9,
    neighbours: ["Jordan", "Lebanon", "Syria", "Egypt"],
    describe() {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
        have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    isIsland: function checkIsland(){
        return mycountry.neighbours.length? true:false;
    }
};
mycountry.describe();
console.log(mycountry.isIsland());