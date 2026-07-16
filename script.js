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

  markAsRead(title) {
    const book = this.findBooksByTitle(title);
    if (book) {
      book.hasRead = true;
      return true;
    }
    return false;
  },

  displayAllBooks() {
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author}`);
      console.log(
        `Pages: ${book.pages} | Read: ${book.hasRead ? "Yes" : "No"}`,
      );
    });
  },
};
library.addBook("twilight", "Stephenie Meyer", 498, true);
library.addBook("1984", "George Orwell", 328, false);
library.addBook("The Hobbit", "J.R.R. Tolkien", 310, false);
library.addBook("Harry Potter", "J.K. Rowling", 309, true);
console.log(library.books);
console.log("Total Number of Books:", library.getTotalBooks());
console.log("Number of Read Books:", library.getReadBooks());
console.log("Number of Unread Books:", library.getUnreadBooks());
const booksFound = library.findBooksByTitle("TwilIght");
console.log("Book Found", booksFound);
library.markAsRead("1984");
console.log("After marking 1984 as marked: ");
console.log("Read Books: ", library.getReadBooks());
console.log("Unread Books: ", library.getUnreadBooks());
library.displayAllBooks();
