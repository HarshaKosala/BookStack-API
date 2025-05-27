const Book = require('../models/Book');
const AppError = require('../utils/AppError');

class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    getAllBooks() {
        return this.bookRepository.findAll();
    }

    getBookById(id) {
        const book = this.bookRepository.findById(id);
        if (!book) {
            throw new AppError('Book not found', 404);
        }
        return book;
    }

    createBook(bookData) {
        try {
            const validatedData = Book.validate(bookData);
            return this.bookRepository.create(validatedData);
        } catch (error) {
            throw new AppError(error.message, 400);
        }
    }

    updateBook(id, bookData) {
        try {
            const validatedData = Book.validate(bookData);
            const updatedBook = this.bookRepository.update(id, validatedData);
            if (!updatedBook) {
                throw new AppError('Book not found', 404);
            }
            return updatedBook;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(error.message, 400);
        }
    }

    deleteBook(id) {
        const deleted = this.bookRepository.delete(id);
        if (!deleted) {
            throw new AppError('Book not found', 404);
        }
        return true;
    }
}

module.exports = BookService; 