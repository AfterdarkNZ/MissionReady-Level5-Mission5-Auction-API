// Import necessary Modules
import connectDB from "../config/db.js";
import AuctionItem from "../models/AuctionItem.js";
import seedData from "../../auction-cli/data/seedData.js";

const seedDatabase = async () => {
  await connectDB();
  try {
    await AuctionItem.insertMany(seedData);
    console.log("Data seeded successfully");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

export default seedDatabase();
