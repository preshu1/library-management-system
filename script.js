const library = {
  name: "Our Library",
  books: [],
  addBook(title, author, pages, hasRead) {
    const book = {
      title,
      author,
      pages,
      hasRead,
    };
    this.books.push(book);
  },
};
library.addBook("twilight", "Stephenie Meyer", 498, true);
console.log(library.books);
