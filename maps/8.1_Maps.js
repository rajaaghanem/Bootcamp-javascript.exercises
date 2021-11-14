let obj1 = {name : " Rajaa"};
let obj2 = {name : " Adham"};
let obj3 = {name : " Asakly"};

let map1 = new Map();
map1.set(obj1, 12345);
map1.set(obj2,45678);
map1.set(obj3,67898);


for (const [key, value] of map1){
    console.log(key.name + "= " + value);
}

for( const key of map1.keys()){
    console.log(key.name + "= " + map1.get(key));
}