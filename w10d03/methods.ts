interface IAuthor {
  penName: string;
  books: string[];
  writeBook: (title: string, numPages: number) => boolean;
}

const myAuthor: IAuthor = {
  penName: 'Dan Brown',
  books: [],
  writeBook: function (title: string, numPages: number) {
    this.books.push(title);
    return true;
  }
};
