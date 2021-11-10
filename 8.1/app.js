const book ={
    name: "Prisoner of Azkaban",
    author: "J. K. Rowling",
    language :"english",
    pages :317,
    published: 1990
};

function print(objBook){
    console.log(`The book ${objBook.name} was written by ${objBook.author} in
    the year ${objBook.published}`);
}

print(book);