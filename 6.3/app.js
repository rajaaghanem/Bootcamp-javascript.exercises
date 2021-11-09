function len(arr){
    let wordLen=[];
    for (let i=0; i<arr.length; i++){
        wordLen.push(arr[i].length);
    }
    return wordLen;
}

let words=len(["Rajaa", "java"]);
console.log(words.toString());