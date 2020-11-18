"use strict";
const myAuthor = {
    penName: 'Dan Brown',
    books: [],
    writeBook: function (title, numPages) {
        this.books.push(title);
        return true;
    }
};
