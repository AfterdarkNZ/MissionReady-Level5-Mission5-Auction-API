import express from "express";
import { program } from "commander";
import connectDB from "./config/db.js";
import seedDatabase from "./commands/seed.js"; // Import seed command
import deleteDatabase from "./commands/delete.js";
//import deleteOne from "./commands/deleteOne.js";
import searchRouter from "./routes/search.js"; // Adjusted path for search function

const app = express();
const PORT = process.env.PORT || 5000;
console.log("Attempting to connect to MongoDB...");

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    // Middleware to parse JSON bodies
    app.use(express.json());

    // API Routes
    app.use("/search", searchRouter);

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`API Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

// CLI commands setup
program.version("1.0.0").description("CLI for auction management");

// Command: seed
program
  .command("seed")
  .description("Seed auction items into the database")
  .action(seedDatabase);

// Command: delete
program
  .command("delete")
  .description("Delete all auction items from the database")
  .action(deleteDatabase);

// Parsing CLI arguments
program.parse(process.argv);
