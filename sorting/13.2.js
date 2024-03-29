// 1

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
// console.log(foods);

foods.reverse();
// console.log(foods);


// 2

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
   ];

   // ascending
   foodsWithUpperCase.sort((a,b)=> {
       a=a.toLowerCase();
       b=b.toLowerCase();
       if (a<b) return -1;
       if (a>b) return 1;
       if (a===b) return 0;
    });

    // desending
    foodsWithUpperCase.sort((a,b)=> {
        a=a.toLowerCase();
        b=b.toLowerCase();
        if (a>b) return -1;
        if (a<b) return 1;
        if (a===b) return 0;
     });
 
//    console.log(foodsWithUpperCase);

   // 3

   const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

   words.sort((a,b)=> 
       b.length - a.length)
//    console.log(words);

   // 4

   const foodsWithUpperCase2 = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

   foodsWithUpperCase2.sort((a,b)=>{
    if( a[0] < b[0]) return -1;
    if( a[0] > b[0]) return 1;
    if (a[0] === b[0]) return 0;
   });
   

   console.log(foodsWithUpperCase2);