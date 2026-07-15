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

  getTotalBooks() {
    return this.books.length;
  },

  getReadBooks() {
    let count = 0;
    for (const book of this.books) {
      if (book.hasRead) {
        count++;
      }
    }
    return count;
  },

  getUnreadBooks() {
    return this.getTotalBooks() - this.getReadBooks();
  },

  findBooksByTitle(title) {
    for (const book of this.books) {
      if (book.title.toLowerCase() === title.toLowerCase()) {
        return book;
      }
    }
    return null;
  },
};
library.addBook("twilight", "Stephenie Meyer", 498, true);
console.log(library.books);
console.log("Total Number of Books:", library.getTotalBooks());
console.log("Number of Read Books:", library.getReadBooks());
console.log("Number of Unread Books:", library.getUnreadBooks());
const booksFound = library.findBooksByTitle("TwilIght");
console.log("Book Found", booksFound);
