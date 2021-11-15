//1

const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];

   function names(arr){

    let nameArr = arr.map(function (obj){
        return obj.name;
    });

    return nameArr;
   }

   console.log(names(data));

   //2 

   function before1990(arr){
       let beforeArr= [];
       arr.forEach(function (obj){
        let year = Number(obj.birthday.slice(5,9));
        if (year < 1990) beforeArr.push(obj);
       });
       return beforeArr;
   }

   console.log(before1990(data));


   // 3 

   function food(arr){
       let foodArr = meatAndFish(arr);
       let foodObj = {};
       foodArr.forEach(function(i){
        if(foodObj.hasOwnProperty(i)) foodObj[i]++;
        else foodObj[i]=1;
       })
       return foodObj;
   }

   function meatAndFish(arr){
       let ar = [];
         arr.forEach(function(obj){
             obj.favoriteFoods.meats.forEach(function(m){
                 ar.push(m);
             })
             obj.favoriteFoods.fish.forEach(function(f){
                 ar.push(f);
             })
         })
       return ar;
   }

   console.log(food(data));