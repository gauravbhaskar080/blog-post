const mongoose = require('mongoose');

const url = "mongodb+srv://gara:zoro@cluster0.uvqy3bq.mongodb.net/blog?retryWrites=true&w=majority";

// Disable the 'strictQuery' option to suppress deprecated warning messages
mongoose.set('strictQuery', false);

const connectToMongo = () => {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectToMongo;
