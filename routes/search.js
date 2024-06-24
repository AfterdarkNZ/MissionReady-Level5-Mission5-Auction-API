import express from "express";
//import connectDB from "../config/db.js";
import AuctionItem from "../models/AuctionItem.js";

const searchRouter = express.Router();

searchRouter.get("/:keyword", async (req, res) => {
  try {
    const keyword = req.params.keyword;
    await connectDB();

    const regex = new RegExp(keyword, "i"); // 'i' for case-insensitive
    const items = await AuctionItem.find({
      $or: [{ title: { $regex: regex } }, { description: { $regex: regex } }],
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default searchRouter;
