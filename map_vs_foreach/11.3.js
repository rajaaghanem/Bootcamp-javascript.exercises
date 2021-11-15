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


   //3 

//    function food(arr){
//        let foodObj = {};
//        arr.forEach(function(obj){
//         foodObj.hasOwnProperty(obj.)
//        })
//    }

   function meatAndFish(arr){
       let newArr = [];
        arr.forEach(function(obj){
            let ar = obj[meats];
            console.log(ar);
            // obj['meats'].forEach(function(m){
            //     newArr.push(m);
            // })
            // obj['fish'].forEach(function(f){
            //     newArr.push(f);
            // })
       })
       return newArr;
   }

   console.log(meatAndFish(data));