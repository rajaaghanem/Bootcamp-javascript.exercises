
//$ 1
function doubleValues(arr){
    let newArr=[];
    arr.forEach(function(n){
        return newArr.push(n);
    })
    return newArr;
}

console.log(doubleValues([1,2,3,4]));


//$ 2

function onlyEvenValues (arr){
    let newArr=[];
    arr.forEach(function(n){
        if (n%2===0) return newArr.push(n);
        else return;
    })
    return newArr;
}

console.log(onlyEvenValues([1,2,3,4]));


//$ 3

function showFirstAndLast(arr){
    let newArr=[];
    arr.forEach(function(n,indx){
        if (indx ===0 || indx === arr.length-1){
            if (typeof n === 'string') newArr.push(n);
        } 
        else return;
    })
    return newArr;
}

console.log(showFirstAndLast([1,2,3,4]));


//$ 4

function vowelCount (str){
    let obj={};
    let newArr = str.toLowerCase().split("");
    newArr.forEach(function(ch){
        if (ch !== " "){
            if (obj.hasOwnProperty(ch)) obj[ch]++;
            else obj[ch]=1;
        }   
    })
    return obj;
}

console.log(vowelCount("hEllllllllllllo there"));


//$ 5

function capitalize(str){
    let newArr = str.split("");
    let newStr ="";
    newArr.forEach(function(ch){
        newStr=newStr + ch.toUpperCase();
    })
    return newStr;
}

console.log(capitalize("hEllllllllllllo there"));


//$ 6

function shiftLetters(str){
    let newArr= str.split("");
    
    let arr = newArr.map(function(ch){
        if (ch.toUpperCase()!== ch.toLowerCase()){ //only for letters
            ch= ch.charCodeAt()+1;
            ch=String.fromCharCode(ch);
        }
        return ch;
    })
    return arr.join(" ");
}

console.log(shiftLetters("abcdeZ nana"));


//$ 7
function swapCase (str){
    let newArr = str.split(" ");
    let arr = [];
    newArr.forEach(function(word, index){
        if (index%2===1)
        arr.push(capitalize(word)); //used of 5 --> keep it dry
        else arr.push (word);
    })
    return arr.join(" ");
}

console.log(swapCase("abcdeZ nana bnana lana"));

