import mongoose, { Schema } from "mongoose";

// Schema for Reader
const reader = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: String,
  bio: String,
  createdAt: { type: Date, default: Date.now }
});

// Schema for Book
const book = new Schema({
  readerId: { type: Schema.Types.ObjectId, ref: 'Reader' }, // Reference to Reader
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  genre: [String],
  pages: Number,
  publicationDate: Date,
  isbn: String,
  coverImage: String,
  createdAt: { type: Date, default: Date.now }
});

// Export the models
export const Reader = mongoose.model('Reader', reader);
export const Book = mongoose.model('Book', book);