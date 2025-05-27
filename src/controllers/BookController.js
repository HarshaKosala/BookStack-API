class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }

    getAllBooks = async (req, res) => {
        try {
            const books = this.bookService.getAllBooks();
            res.json(books);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getBookById = async (req, res) => {
        try {
            const book = this.bookService.getBookById(req.params.id);
            res.json(book);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    createBook = async (req, res) => {
        try {
            const book = this.bookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    updateBook = async (req, res) => {
        try {
            const book = this.bookService.updateBook(req.params.id, req.body);
            res.json(book);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    deleteBook = async (req, res) => {
        try {
            this.bookService.deleteBook(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = BookController; 