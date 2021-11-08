const prompt = require('prompt-sync')({sigint: true});

function main(){
    
    const subNum = prompt('How many siblings do you have?');
    // console.log(subNum);

    if (subNum == 1){
        console.log ('1 sibling!');
    }
    else if (subNum > 1) {
        console.log('More than 1 sibling') ;
    }
    else console.log('No siblings') ;

}

main();

