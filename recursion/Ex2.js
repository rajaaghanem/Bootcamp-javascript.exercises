
// with loop
function reverse(str){
let j=str.length-1;
    for(let i=0; i<str.length; i++){
        if (j>i){
            let tmp=str[i];
            str[i]=str[j];
            str[j]=tmp;
        }
        j--;
    }
    return str;
}

console.log(reverse(["h", "e", "n", "i"]));

//with recusion

function reverse2(str){
  reverseAdd(str, 0, str.length-1);
}

function reverseAdd(str, i, j){

    if (j<=i){
        console.log(str);
        return;
    }
    else{
        
    let tmp=str[i];
    str[i]=str[j];
    str[j]=tmp;
    reverseAdd(str,i+1, j-1);
    }
}

reverse2(["h", "e", "n", "i"]);

