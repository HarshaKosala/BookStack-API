const Book = require('../models/Book');
const BookRepository = require('../repositories/BookRepository');
const BookService = require('../services/BookService');

describe('Book Model', () => {
    test('should validate correct book data', () => {
        const bookData = {
            title: 'Test Book',
            author: 'Test Author',
            publishedDate: '2023-01-01',
            genre: 'Fiction'
        };
        
        const validatedData = Book.validate(bookData);
        expect(validatedData).toEqual(bookData);
    });

    test('should throw error for invalid book data', () => {
        const invalidBookData = {
            title: '',
            author: '',
            publishedDate: 'invalid-date',
            genre: ''
        };

        expect(() => Book.validate(invalidBookData)).toThrow();
    });
});

describe('BookService', () => {
    let bookService;
    let bookRepository;

    beforeEach(() => {
        bookRepository = new BookRepository();
        bookService = new BookService(bookRepository);
    });

    test('should create a new book', () => {
        const bookData = {
            title: 'Test Book',
            author: 'Test Author',
            publishedDate: '2023-01-01',
            genre: 'Fiction'
        };

        const book = bookService.createBook(bookData);
        expect(book).toHaveProperty('id');
        expect(book.title).toBe(bookData.title);
    });

    test('should get all books', () => {
        const bookData = {
            title: 'Test Book',
            author: 'Test Author',
            publishedDate: '2023-01-01',
            genre: 'Fiction'
        };

        bookService.createBook(bookData);
        const books = bookService.getAllBooks();
        expect(books).toHaveLength(1);
    });

    test('should throw error when book not found', () => {
        expect(() => bookService.getBookById('non-existent-id')).toThrow('Book not found');
    });
}); 