
import { Reader } from "../model/models.js"; // Change User to Reader

class ReaderController {
  static async getAllReaders(req, res) {
    try {
      const readers = await Reader.find(); // Use Reader model
      res.status(200).json(readers);
    } catch (error) {
      res.status(500).json({ message: "Error while fetching readers", error });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const reader = await Reader.findOne({ username }); // Use Reader model
      if (reader && reader.password === password) {
        res.status(200).json({ message: "Login successful", reader });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error while logging in", error });
    }
  }

  static async register(req, res) {
    try {
      const { username, password } = req.body;
      const newReader = new Reader({ // Use Reader model
        username,
        password,
      });
      await newReader.save();
      res.status(201).json({ message: "Reader registered successfully", reader: newReader });
    } catch (error) {
      res.status(500).json({ message: "Error while registering new reader", error });
    }
  }

  static async findReaderById(req, res) {
    const id = req.params.id;
    try {
      const reader = await Reader.findById(id); // Use Reader model
      if (reader) {
        res.status(200).json(reader);
      } else {
        res.status(404).json({ message: "Reader not found" });
      }
    } catch (error) {
      console.log("Error finding reader: ", error);
      res.status(500).json({ message: "Error finding reader", error });
    }
  }
}

export default ReaderController; // Change UserController to ReaderController