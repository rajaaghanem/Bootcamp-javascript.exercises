//$ 1

function isString(str, func){
    if(typeof str === 'string'){
        return func(str);
    }
    return "Not a string";
}

function print(str){
    console.log(str);
}

//! test
isString("hello", print);
console.log(isString(555, print));


//$2 

function firstWordUpperCase(str, dash){
    str = str.replace(str[0], str[0].toUpperCase());
    console.log(str);
}

firstWordUpperCase("rjaaa jgjgjjg")
