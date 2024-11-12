import mongoose from 'mongoose';  // Import mongoose vào đây
import dotenv from 'dotenv';

//dotenv.config({ path: './config.env' });  // Đảm bảo đường dẫn đúng đến tệp .env
dotenv.config()

const uri = process.env.MONGODB_API;

export function connectMongoDB() {
  if (!uri) {
    console.error("Missing MongoDB URI. Please check your config.env file.");
    process.exit(1); // Dừng chương trình nếu không có URI
  }

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB database"))
    .catch(error => {
      console.log("Cannot connect to the database", error);
      process.exit(1); // Dừng chương trình nếu kết nối thất bại
    });
}
