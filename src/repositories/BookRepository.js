const { v4: uuidv4 } = require('uuid');

class BookRepository {
    constructor() {
        this.books = new Map();
    }

    findAll() {
        return Array.from(this.books.values());
    }

    findById(id) {
        return this.books.get(id);
    }

    create(bookData) {
        const id = uuidv4();
        const book = { id, ...bookData };
        this.books.set(id, book);
        return book;
    }

    update(id, bookData) {
        if (!this.books.has(id)) {
            return null;
        }
        const updatedBook = { id, ...bookData };
        this.books.set(id, updatedBook);
        return updatedBook;
    }

    delete(id) {
        return this.books.delete(id);
    }
}

module.exports = BookRepository; 