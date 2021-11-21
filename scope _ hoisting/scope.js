

movie = "me and you";


function outer(){
    // let movie = "lord of the rings";
    console.log(movie);

    function inner(){
        // let movie = "up";
        console.log(movie);

        function extraInner(){
            // let movie = "fight club";
            console.log(movie);

        }
        extraInner();

    }
    inner();
}

outer();