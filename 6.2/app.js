const people = ["Greg", "Mary", "Devon", "James"];
//*print 

function print(arr){
    for (let i=0; i< arr.length; i++)
    console.log(arr[i]);
}

function exit(arr){
    for (let i=0; i< arr.length; i++){
       if (arr[i]==="Mary")
        break
        else console.log(arr[i]);
    }
}

// exit (people);

//removing Gerg and James
people.shift();
people.pop();

//* adding Matt and Rajaa
people.unshift("Matt");
people.push ("Rajaa");
print (people);
console.log("*******");

//* NOT include "Mary" or "Matt".
let copy = people.slice(2);
print(copy);

//* Mary index
let index= people.indexOf("Mary");
console.log(index);

//* Foo index 
let index1= people.indexOf("Foo");
console.log(index1);
console.log("*******");


//* redefine
people[0] = "Greg";
people[3] = "James";
print(people);
console.log("*******");

//* removing "Devon" and adding "Elizabeth", "Artie"
people.splice(2,1, "Elizabeth", "Artie");
print(people);
console.log("*******");

//* with Bob 
let withBob= people + "Bob";
print(withBob);




