function password(strpass){
    return (strpass.length >7)? "Strong":"Weak";
}

function password2(strpass){
    return (strpass.length >7)? "Strong": "Weak";
}

function isCapital(strpass){

    for (i=0; i<strpass.length; i++){
        let letter = strpass.charAt(i);
        if ((letter.toLowerCase() != letter.toUpperCase()) && (letter == letter.toUpperCase()))
          return true;
    }
    return false;
}

function advanced(strpass){
    let len = strpass.length;
    if (len < 7) return "Weak";
    return ((len > 7) && (isCapital(strpass)===true))? "Very Strong":"Strong";
}

let res = advanced("3A33444377");
console.log(res);