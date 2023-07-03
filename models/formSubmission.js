const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("FormSubmission", FormSubmissionSchema);
