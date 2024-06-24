import axios from "axios";

const keyword = process.argv[2];

if (!keyword) {
  console.error("Please provide a keyword to search for.");
  process.exit(1);
}

const searchItems = async (keyword) => {
  try {
    const response = await axios.get(`http://localhost:5000/search/${keyword}`);
    console.log(response.data);
  } catch (err) {
    console.error("Error searching for items:", err.message);
  }
};

searchItems(keyword);
