
function neighbouring(array){
    for(let row of array){
        for (let country of row){
            console.log(`Neighbour: ${country} `)
        }
    }
}


const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];


   //! test
neighbouring(listOfNeighbours);