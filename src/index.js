require('dotenv').config(); // loads environment variables from a .env file into process.env.
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const BookRepository = require('./repositories/BookRepository');
const BookService = require('./services/BookService');
const BookController = require('./controllers/BookController');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

const app = express();
const port = process.env.PORT || 3000;
const apiPrefix = process.env.API_PREFIX || '/bookstack-api';

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Logging middleware
app.use(morgan(process.env.LOG_FORMAT || 'dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use(`${apiPrefix}/books`, (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

app.get(`${apiPrefix}/books`, bookController.getAllBooks);
app.get(`${apiPrefix}/books/:id`, bookController.getBookById);
app.post(`${apiPrefix}/books`, bookController.createBook);
app.put(`${apiPrefix}/books/:id`, bookController.updateBook);
app.delete(`${apiPrefix}/books/:id`, bookController.deleteBook);

// Error handling
app.use(errorHandler);

// Start server
app.listen(port, () => {
  logger.info(`Server is running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
}); 