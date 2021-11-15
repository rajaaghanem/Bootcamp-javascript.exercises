const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }

   function getCandy(candyStore, id){
    const obj=candyStore.candies.find(candy=> candy.id===id);
    return obj;
    } 


    function getPrice(candyStore, id){
    return getCandy(candyStore, id).price;
    } 
    
    function addCandy(candyStore, id, name, price){
        let obj={
            id : id,
            name : name,
            price :price,
            amount: 1
        }
        candyStore.candies.push(obj);
    }

    function buy(candyStore, id){
        candyStore.cashRegister = candyStore.cashRegister + getPrice(candyStore, id);
        getCandy(candyStore, id).amount --;

    }


    console.log(getCandy(candyStore,"5hd7y"));
    console.log(getPrice(candyStore,"5hd7y"));
    addCandy(candyStore, "444", "wow", 2)
    buy(candyStore, "444");
    console.log(candyStore);


