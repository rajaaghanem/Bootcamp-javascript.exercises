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

function firstWordUpperCase(str, func){
    str = str.replace(str[0], str[0].toUpperCase());
    return func(str);
}

function dash(str){
    str = str.replace(/\s/g, "-");
    console.log(str);
}

//! test

firstWordUpperCase("hello world wahooo", dash);

//$3

function myFunc(str){
    str = str.replace("a","$");
    console.log(str);
}

firstWordUpperCase("hello world wahooo", myFunc);

//$4 replace the first "a" with "$"

function replacment(str, func){

    return func(str);
}

replacment("halllo ma friend", myFunc);