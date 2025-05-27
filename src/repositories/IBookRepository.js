/**
 * Interface for Book Repository implementations
 * @interface
 */
class IBookRepository {
    /**
     * Find all books
     * @returns {Promise<Array>} Array of books
     */
    findAll() {
        throw new Error('Method not implemented');
    }

    /**
     * Find a book by ID
     * @param {string} id - Book ID
     * @returns {Promise<Object|null>} Book object or null if not found
     */
    findById(id) {
        throw new Error('Method not implemented');
    }

    /**
     * Create a new book
     * @param {Object} bookData - Book data
     * @returns {Promise<Object>} Created book
     */
    create(bookData) {
        throw new Error('Method not implemented');
    }

    /**
     * Update a book
     * @param {string} id - Book ID
     * @param {Object} bookData - Updated book data
     * @returns {Promise<Object|null>} Updated book or null if not found
     */
    update(id, bookData) {
        throw new Error('Method not implemented');
    }

    /**
     * Delete a book
     * @param {string} id - Book ID
     * @returns {Promise<boolean>} True if deleted, false if not found
     */
    delete(id) {
        throw new Error('Method not implemented');
    }
}

module.exports = IBookRepository; 