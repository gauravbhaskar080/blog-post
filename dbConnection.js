const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url =
  process.env.MONGO_URL ||
  "mongodb+srv://username:password@localhost:27017/blog";

mongoose.set("strictQuery", false);

const connectToMongo = () => {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = connectToMongo;
