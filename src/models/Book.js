const Joi = require('joi');

class Book {
    constructor(id, title, author, publishedDate, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.genre = genre;
    }

    static get validationSchema() {
        return Joi.object({
            title: Joi.string().required().min(1).max(255),
            author: Joi.string().required().min(1).max(255),
            publishedDate: Joi.date().iso().required(),
            genre: Joi.string().required().min(1).max(100)
        });
    }

    static validate(bookData) {
        const { error, value } = this.validationSchema.validate(bookData, { abortEarly: false });
        if (error) {
            throw new Error(error.details.map(detail => detail.message).join(', '));
        }
        return value;
    }
}

module.exports = Book; 