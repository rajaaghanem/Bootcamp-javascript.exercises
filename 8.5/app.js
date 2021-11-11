function swap(obj){
    const obj1 = {};
    for (const property in obj){
        obj1[obj[property]] = property;
    }
    return obj1;
}


//! test
const obj ={red : 1, blue : 2, green : 3}
console.log(swap(obj));