const express = require("express");

const cors = require("cors");
const {
  postExpense,
  getExpenses,
  getExpenseByTitle,
  updateExpenseByTitle,
  deleteExpsenseByTitle,
} = require("./controllers/app.controller");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post("/api/expenses", postExpense);
app.get("/api/expenses", getExpenses);
app.get("/api/expenses/:title", getExpenseByTitle);
app.patch("/api/expenses/:title", updateExpenseByTitle);
app.delete("/api/expenses/:title", deleteExpsenseByTitle);

module.exports = app;
