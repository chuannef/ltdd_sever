import { Book } from "../model/models.js"; // Change Recipe to Book

class BookController {
  static async saveBook(req, res) {
    const { readerId, title, author, description, genre, pages, publicationDate, isbn, coverImage } = req.body; // Update fields to match Book schema
    const newBook = new Book({
      readerId: readerId, // Change userId to readerId
      title: title,
      author: author, // Added author field
      description: description,
      genre: genre, // Assuming genre is an array, ensure it matches your schema
      pages: pages,
      publicationDate: publicationDate,
      isbn: isbn,
      coverImage: coverImage,
    });
    try {
      const savedBook = await newBook.save(); // Save the new book and await its completion
      res.status(201).json(savedBook); // Respond with the saved book
    } catch (error) {
      res.status(500).json({ message: "Error while trying to post a new book", error });
    }
  }

  static async getAllBooks(req, res) {
    try {
      const books = await Book.find(); // Fetch all books
      res.status(200).json(books); // Respond with the list of books
    } catch (error) {
      res.status(500).json({ message: "Error while fetching books", error });
    }
  }

  static async getBookById(req, res) {
    const id = req.params.id; // Get the book ID from the request parameters
    try {
      const book = await Book.findById(id); // Fetch the book by ID
      if (book) {
        res.status(200).json(book); // Respond with the found book
      } else {
        res.status(404).json({ message: "Book not found" }); // Handle case where book is not found
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}

export default BookController; // Change RecipeController to BookController