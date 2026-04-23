# Notes Management REST API

A backend assignment project built with Node.js, Express, and MongoDB. This API manages notes with full CRUD support, route parameters, query parameters, pagination, and sorting using a clean MVC structure.

## Live Links

- Render Deployment: https://advanced-routing-queries-assignment-8z9j.onrender.com
- Postman Documentation: https://documenter.getpostman.com/view/50839274/2sBXqGpMCY

## Project Overview

This project was built from scratch as a Notes Management REST API. It follows the assignment requirements exactly and exposes endpoints for:

- creating single and multiple notes
- reading notes in different ways
- replacing and updating notes
- deleting single and multiple notes
- filtering with route params and query params
- paginating result sets
- sorting notes by allowed fields

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
│   ├── controllers/
│   │   └── note.controller.js
│   ├── middlewares/
│   │   └── .gitkeep
│   ├── models/
│   │   └── note.model.js
│   ├── routes/
│   │   └── note.routes.js
│   ├── app.js
│   └── index.js
├── .env
├── .env.example
├── package.json
├── package-lock.json
└── README.md
```

## API Endpoints

### CRUD

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/notes` | Create a note |
| POST | `/api/notes/bulk` | Create multiple notes |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by id |
| PUT | `/api/notes/:id` | Replace note |
| PATCH | `/api/notes/:id` | Update note partially |
| DELETE | `/api/notes/:id` | Delete single note |
| DELETE | `/api/notes/bulk` | Delete multiple notes |

### Route Parameters

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/notes/category/:category` | Get notes by category |
| GET | `/api/notes/status/:isPinned` | Get notes by pinned status |
| GET | `/api/notes/:id/summary` | Get note summary |

### Query Parameters

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/notes/filter` | General filtering |
| GET | `/api/notes/filter/pinned` | Get pinned notes |
| GET | `/api/notes/filter/category` | Filter by category query |
| GET | `/api/notes/filter/date-range` | Filter by created date range |

### Pagination

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/notes/paginate` | Paginate all notes |
| GET | `/api/notes/paginate/category/:category` | Paginate notes by category |

### Sorting

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/notes/sort` | Sort all notes |
| GET | `/api/notes/sort/pinned` | Sort pinned notes |

## How To Run Locally

1. Clone the repository:

```bash
git clone https://github.com/Priyankkhatri/advanced-routing-queries-assignment.git
```

2. Move into the project directory:

```bash
cd advanced-routing-queries-assignment
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your environment variables.

5. Start the development server:

```bash
npm run dev
```

6. Start the production server:

```bash
npm start
```

## Environment Variables

Use the following values in your `.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notes-db
PORT=5000
```

## Response Format

All endpoints follow this format:

```json
{
  "success": true,
  "message": "Message here",
  "data": {}
}
```

List endpoints include `count`, and paginated endpoints include a `pagination` object.

## Author

Priyank Khatri
