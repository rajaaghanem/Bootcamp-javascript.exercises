const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

console.log(array.toString());

function count(arr){
    let str = array.toString();
    let count =0;
    const obj={};

    for (let i=0; i<str.length; i++){
        count =0;
        for (let j=0; j<str.length; j++){
            if (str[j].toLowerCase()===str[i].toLowerCase())
            count ++;
        }
        if(str[i]!== ',' && str[i]!== " ")
        obj[str[i].toLowerCase()] = count;
    }
    return obj;
}

console.log(count(array));
