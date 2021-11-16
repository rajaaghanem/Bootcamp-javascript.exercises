// 1

function extractOnlyValue (arr, key){

   let newArr= arr.reduce((prev,curr)=> {
        prev.push(curr[key]);
        return prev;
   },[]);
   return newArr;
}


let array= [{rajaa: "hello", adhm: "yes"}, {rajaa: "yes", adhm: "hello"}];
console.log(extractOnlyValue(array, "rajaa"));

// 2

function countOnlyVowels (str){

    let newstr=str.split("");
    let newObj=newstr.reduce((prev,curr)=>{
        if (curr==="o" || curr === "e" || curr === "u" || curr === "i"|| curr === "a"){
         if (prev[curr]) prev[curr]++;
         else prev[curr]=1;
        }
       return prev;
    },{})

    return newObj;
}

let str = "hello my friend, how are you?";
console.log(countOnlyVowels(str));


// 3

function addKeyAndValue(arr,k,v){

    let newArr= arr.reduce((prev,curr)=>{
        curr[k]=v;
        prev.push(curr);
        return prev;
    },[])
    return newArr;
}

let arr = [{rajaa: "no"},{adhm:"yes"}];
console.log(addKeyAndValue(arr, "asakly", "nana"));

