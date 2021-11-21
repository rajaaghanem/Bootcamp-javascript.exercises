
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

