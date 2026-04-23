# Notes Management REST API

## Project Overview

This project is a Notes Management REST API built with Node.js, Express, and MongoDB using Mongoose. It includes CRUD operations, route parameters, query parameters, pagination, and sorting.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

## Folder Structure

```text
advanced-routing-queries-assignment/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── note.model.js
│   ├── controllers/
│   │   └── note.controller.js
│   ├── routes/
│   │   └── note.routes.js
│   ├── middlewares/
│   ├── app.js
│   └── index.js
├── .env
├── .env.example
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint |
|--------|----------|
| POST | `/api/notes` |
| POST | `/api/notes/bulk` |
| GET | `/api/notes` |
| GET | `/api/notes/:id` |
| PUT | `/api/notes/:id` |
| PATCH | `/api/notes/:id` |
| DELETE | `/api/notes/:id` |
| DELETE | `/api/notes/bulk` |
| GET | `/api/notes/category/:category` |
| GET | `/api/notes/status/:isPinned` |
| GET | `/api/notes/:id/summary` |
| GET | `/api/notes/filter` |
| GET | `/api/notes/filter/pinned` |
| GET | `/api/notes/filter/category` |
| GET | `/api/notes/filter/date-range` |
| GET | `/api/notes/paginate` |
| GET | `/api/notes/paginate/category/:category` |
| GET | `/api/notes/sort` |
| GET | `/api/notes/sort/pinned` |

## How To Run Locally

1. Install dependencies:

```bash
npm install
```

2. Update the `.env` file with your MongoDB connection string.

3. Start the development server:

```bash
npm run dev
```

4. Start the production server:

```bash
npm start
```

## Environment Variables

Create a `.env` file with:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notes-db
PORT=5000
```
