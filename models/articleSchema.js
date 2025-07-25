const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    number: String,
    age: String,
    country: String,
    gender: String,
  },
  { timestamps: true }
);

const User = mongoose.model("Customer", articleSchema);

module.exports = User;
