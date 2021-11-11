const book ={
    name: "Nineteen Eighty-Four",
    author: " George Orwell",
    year:"1949"
}

const book1 ={
    name: "Bullshit Jobs",
    author: "David Graeber",
    year:"2018"
}

const bookUtils={
    getFirstPublished(a,b){
        if (a.year < b.year)
        return a;
        else return b;
    },

    setNewEdition(book, edition){
        book.latestEdition=edition;
        return book;
    },

    setLanguage (book, language1){
       book.language=language1;
       return book;

    },

    
    setTranslation(book, language1, translator1){
         book.translation = {
             translator : translator1,
             language:language1
            };
            return book;
    },

    setPublisher(book, name1, location1){
        book.publisher = {
            name : name1,
            location: location1
        }
        return book;
    },

    isSamePublisher (book1,book2){
      const bool=  (book1.publisher.name === book2.publisher.name && book1.publisher.location===book2.publisher.location)? true:false;
      return bool;
    }
    
};




//! test

console.log(bookUtils.getFirstPublished(book,book1));
console.log(book1);
let fir="first";
console.log(bookUtils.setNewEdition(book1, fir));
console.log(book1);
console.log(bookUtils.setPublisher(book1, "jack", "tlv"));
console.log(book1);

console.log(bookUtils.setPublisher(book, "jack", "tlv"));
console.log(bookUtils.isSamePublisher(book, book1));

