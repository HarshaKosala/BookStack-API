const BookRepository = require('./BookRepository');

class BookRepositoryFactory {
    static createRepository(type = 'memory') {
        switch (type.toLowerCase()) {
            case 'memory':
                return new BookRepository();
            // Add more repository types here in the future
            // case 'database':
            //     return new DatabaseBookRepository();
            // case 'cache':
            //     return new CacheBookRepository();
            default:
                throw new Error(`Unsupported repository type: ${type}`);
        }
    }
}

module.exports = BookRepositoryFactory; 