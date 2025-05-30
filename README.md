# BookStack API

A RESTful API for managing a collection of books, built with Node.js and Express.

## Features

- RESTful endpoints for managing books
- Input validation and error handling
- JWT authentication (coming soon)
- Rate limiting for API protection
- Request logging and monitoring
- Docker containerization

## API Endpoints

### Books

- `GET /bookstack-api/books` - Get all books
- `GET /bookstack-api/books/:id` - Get a specific book
- `POST /bookstack-api/books` - Create a new book
- `PUT /bookstack-api/books/:id` - Update a book
- `DELETE /bookstack-api/books/:id` - Delete a book

### Book Schema

```json
{
  "id": "string",
  "title": "string",
  "author": "string",
  "publishedDate": "string (ISO date)",
  "genre": "string"
}
```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# API Configuration
API_PREFIX=/bookstack-api

# Security
CORS_ORIGIN=http://localhost:3000

# Logging
LOG_LEVEL=debug
LOG_FORMAT=dev

# Repository
REPOSITORY_TYPE=memory
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development:
```bash
npm run dev
```

## Docker

Build and run with Docker:
```bash
docker build -t bookstack-api .
docker run -d -p 3000:3000 bookstack-api
```

Or use Docker Compose:
```bash
docker-compose up
``` 