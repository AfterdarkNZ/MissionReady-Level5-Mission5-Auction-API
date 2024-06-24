// Import required modules
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/auctionDB");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error("Unable to connect to database");
  }
};

export default connectDB;

//mongodb://localhost:27017/auctionDB
