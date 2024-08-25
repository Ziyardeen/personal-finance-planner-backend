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
app.get("/api/expense/:title", getExpenseByTitle);
app.patch("/api/expense/:title", updateExpenseByTitle);
app.delete("/api/expense/:title", deleteExpsenseByTitle);

module.exports = app;
