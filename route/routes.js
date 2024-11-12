import express from "express"; // Import express
import ReaderController from "../controller/readerController.js"; // Import ReaderController
import BookController from "../controller/bookController.js"; // Import BookController

export const router = express.Router(); // Create a new router instance

/*      ------ Authentication and reader query ------       */
router.post("/api/auth/login", ReaderController.login); // Login route
router.post("/api/auth/register", ReaderController.register); // Register route
router.get("/api/readers/:id", ReaderController.findReaderById); // Get reader by ID
router.get("/api/readers/", ReaderController.getAllReaders); // Get all readers

/*      ------ BOOK ------       */
router.post("/api/books/", BookController.saveBook); // Save a new book
router.get("/api/books", BookController.getAllBooks); // Get all books
router.get("/api/books/:id", BookController.getBookById); // Get book by ID