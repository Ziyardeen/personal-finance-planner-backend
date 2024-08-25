const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = process.env.MONGOOSE_CONNECTION_STRING;

// Connect to MongoDB
mongoose
  .connect(connectionString)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define a Schema
const expenseSchema = new mongoose.Schema({
  _id: String,
  amount: Number,
  date: String,
  title: String,
  category: String,
  description: String,
  interest: Number,
  duration: Number,
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
