// Import necessary modules
import connectDB from "../config/db.js";
import AuctionItem from "../models/AuctionItem.js";

const deleteOne = async (index) => {
  await connectDB();
  try {
    const items = await AuctionItem.find().sort({ _id: 1 }).exec();
    if (index < 0 || index >= items.length) {
      console.log(
        `Index out of range. Please provide a valid index between 0 and ${
          items.length - 1
        }.`
      );
      process.exit(1);
    }

    const itemToDelete = items[index];
    await AuctionItem.deleteOne({ _id: itemToDelete._id });
    console.log(
      `Item with index ${index} (title: "${itemToDelete.title}") deleted successfully`
    );
  } catch (err) {
    console.error("An error occurred when deleting the item:", err);
    process.exit(1);
  } finally {
    process.exit(0);
  }
};

export default deleteOne; // Export the deleteOne function without invoking it
